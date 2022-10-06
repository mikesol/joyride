export const runThree = (opts) => () => {
    const scene = new opts.threeDI.scene();

    // Object
    const geometry = new opts.threeDI.plane();
    const material = new opts.threeDI.meshBasicMaterial({ map: opts.textures.mansion })
    const mesh = new opts.threeDI.Mesh(geometry, material)
    scene.add(mesh)

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

    const camera = new opts.threeDI.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)

    // ( let
    //     posAx = posAx' opts.myPlayer
    //     px = posAx AxisX
    //     py = posAx AxisY
    //     pz = posAx AxisZ
    //   in
    //     oneOf
    //       [ positionX <$> tameXAxis false px
    //       , sampleBy Tuple opts.renderingInfo py <#> \(Tuple ri py') -> positionY (ri.cameraOffsetY + py')
    //       , sampleBy Tuple opts.renderingInfo pz <#> \(Tuple ri pz') -> positionZ (ri.cameraOffsetZ + pz')
    //       , sampleBy Tuple opts.renderingInfo pz <#> \(Tuple ri _) -> P.rotationFromEuler (euler opts.threeDI.euler { x: ri.cameraRotationAroundX, y: 0.0, z: 0.0 })
    //       , opts.resizeE <#> \i -> P.aspect (i.iw / i.ih)
    //       ]
    // )
    scene.add(camera)


    // Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: opts.canvas
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    animatedStuff(false, ({ rateInfo, playerPositions }) => {
        renderer.render();
    });

}