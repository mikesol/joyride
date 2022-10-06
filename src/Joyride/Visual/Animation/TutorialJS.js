export const runThree = (opts) => () => {
  // the iteration after which we stop applying the smoothing factor
  const unsubscribes = [];
  const TIPPING = 120;
  let CURRENT_ITERATION = 0;
  let TIPPING_ITERATION = 0;
  let hasStarted = false;
  const scene = new opts.threeDI.scene();

  // Object
  const mansionGeometry = new opts.threeDI.plane();
  const mansionMaterial = new opts.threeDI.meshBasicMaterial({ map: opts.textures.mansion })
  const mansionMesh = new opts.threeDI.mesh(mansionGeometry, mansionMaterial)
  mansionMesh.scale.x = 16.0
  mansionMesh.scale.y = 16.0
  mansionMesh.rotateX(Math.PI * -0.1);
  scene.add(mansionMesh)


  // Sizes
  // this is also an event passed in from opts, but as I'm too lazy to un-copy-and-paste this
  // we leave it in
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }

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
    mansionMesh.position.z = -3.5 + myInfo.z;
    camera.position.x = TIPPING_ITERATION > TIPPING ? myInfo.x : (myInfo.x * TIPPING_ITERATION / TIPPING);
    camera.position.y = cameraOffsetY + myInfo.y;
    camera.position.z = cameraOffsetZ + myInfo.z;
    camera.setRotationFromEuler(new opts.threeDI.euler(cameraRotationAroundX, 0.0, 0.0));
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