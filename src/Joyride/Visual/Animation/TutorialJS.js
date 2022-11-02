export const runThree = (opts) => () => {
  // the iteration after which we stop applying the smoothing factor
  const unsubscribes = [];
  const TIPPING = 120;
  const lpfWeight = 0.65;
  let CURRENT_ITERATION = 0;
  let TIPPING_ITERATION = 0;
  let hasStarted = false;
  const prevX = { player1: 0.0, player2: 0.0, player3: 0.0, player4: 0.0 }
  const scene = new opts.threeDI.scene();

  const myIdx = opts.playerPatternMatch({ player1: 0, player2: 1, player3: 2, player4: 3 })(opts.myPlayer);

  // Mansion
  const mansionGeometry = new opts.threeDI.plane();
  const mansionMaterial = new opts.threeDI.meshBasicMaterial({ map: opts.textures.mansion })
  const mansionMesh = new opts.threeDI.mesh(mansionGeometry, mansionMaterial)
  mansionMesh.scale.x = 16.0
  mansionMesh.scale.y = 16.0
  mansionMesh.rotateX(Math.PI * -0.1);
  scene.add(mansionMesh)

  // Bars
  const bars = [0, 1, 2, 3].map((i) => {
    const barGeometry = new opts.threeDI.boxGeometry();
    const barMaterial = new opts.threeDI.meshBasicMaterial({
      color: i === 0 ? new opts.threeDI.color(0.2196078431372549, 0.8431372549019608, 0.9058823529411765) :
        i === 1 ? new opts.threeDI.color(0.9764705882352941, 0.8784313725490196, 0.4627450980392157) :
          i === 2 ? new opts.threeDI.color(0.9333333333333333, 0.19215686274509805, 0.4196078431372549) :
            new opts.threeDI.color(0.5176470588235295, 0.17647058823529413, 0.4470588235294118)
    });
    const bar = new opts.threeDI.mesh(barGeometry, barMaterial);
    bar.scale.x = 10.0;
    bar.scale.y = 0.01;
    bar.scale.z = 0.01;
    scene.add(bar);
    return bar;
  });

  // Point lights
  const pointLights = opts.allPlayers.map((player) => {
    const light = new opts.threeDI.pointLight(new opts.threeDI.color(1.0, 1.0, 1.0), 1.0, 4.0, 2.0);
    scene.add(light);
    return { player, light };
  });
  /**
   * ( (toArray allPlayers) <#> \player -> do
                            let posAx = posAx' player
                            let normalDistance = 4.0
                            let normalDecay = 2.0
                            let normalIntensity = 1.0
                            toGroup $ pointLight
                              { pointLight: opts.threeDI.pointLight
                              , distance: normalDistance
                              , decay: normalDecay
                              , intensity: normalIntensity
                              , color: c3 $ RGB 1.0 1.0 1.0
                              }
                              ( oneOf
                                  [ positionX <$> tameXAxis (isNotMe player opts.myPlayer) (posAx AxisX)
                                  , positionY <$> (sampleBy (\{ lightOffsetY } py -> (lightOffsetY + py)) opts.renderingInfo (posAx AxisY))
                                  , positionZ <$> posAx AxisZ
                                  , pure $ P.decay normalDecay
                                  , pure $ P.intensity normalIntensity
                                  , pure $ P.distance normalDistance
                                  ]
                              )

                        )
   */

  // Sizes
  // this is also an event passed in from opts, but as I'm too lazy to un-copy-and-paste this
  // we leave it in
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  // Resize listener
  window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  const camera = new opts.threeDI.perspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)

  scene.add(camera)


  // Renderer
  const renderer = new opts.threeDI.webGLRenderer({
    canvas: opts.canvas
  })
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  unsubscribes.push(opts.pressedStart(false, () => { hasStarted = true; }));
  unsubscribes.push(opts.animatedStuff(false, ({ rateInfo: { prevTime
    , time
    , prevBeats
    , beats
    , epochTime }
    , renderingInfo: { halfAmbitus
      , barZSpacing
      , sphereOffsetY
      , lightOffsetY
      , cameraOffsetY
      , cameraRotationAroundX
      , cameraOffsetZ
    }
    , playerPositions: { p1x
      , p1y
      , p1z
      , p1p
      , p2x
      , p2y
      , p2z
      , p2p
      , p3x
      , p3y
      , p3z
      , p3p
      , p4x
      , p4y
      , p4z
      , p4p } }) => {
    const positionPatternMatch = opts.playerPatternMatch({
      player1: { x: p1x, y: p1y, z: p1z, p: p1p },
      player2: { x: p2x, y: p2y, z: p2z, p: p2p },
      player3: { x: p3x, y: p3y, z: p3z, p: p3p },
      player4: { x: p4x, y: p4y, z: p4z, p: p4p },
    });
    const myInfo = positionPatternMatch(opts.myPlayer);

    const tamedSelfX = TIPPING_ITERATION > TIPPING ? myInfo.x : (myInfo.x * TIPPING_ITERATION / TIPPING);
    // Mansion
    mansionMesh.position.z = -3.5 + myInfo.z;


    // Camera
    camera.position.x = tamedSelfX;
    camera.position.y = cameraOffsetY + myInfo.y;
    camera.position.z = cameraOffsetZ + myInfo.z;
    camera.setRotationFromEuler(new opts.threeDI.euler(cameraRotationAroundX, 0.0, 0.0));

    // Bars
    for (var i = 0; i < bars.length; i++) {
      const bar = bars[i];
      bar.position.z = (i === 0 ? -3.0 : i === 1 ? -2.0 : i === 2 ? -1.0 : 0.0) * barZSpacing;
    }

    // Point lights
    for (var i = 0; i < pointLights.length; i++) {
      const { player, light } = pointLights[i];
      // PICK UP HERE
      const newPosition = i === myIdx ? tamedSelfX : ((positionPatternMatch(player).x * lpfWeight) + ((1 - lpfWeight) * prevXPatternMatch(player)));
      light.position.x = newPosition;
      light.position.y = lightOffsetY + positionPatternMatch(player).y;
      light.position.z = positionPatternMatch(player).z;
    }

    CURRENT_ITERATION++;
    if (hasStarted) { TIPPING_ITERATION++; }
    renderer.render(scene, camera);
  }));
  return () => {
    for (const u in unsubscribes) {
      u();
    }
  }
}