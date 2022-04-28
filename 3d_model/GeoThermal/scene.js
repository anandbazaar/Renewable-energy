//canvas
const canvas = document.querySelector(".webgl");
const all = new THREE.Group()
//scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x152744);
//camera
const camera = new THREE.PerspectiveCamera(90, 1700 / 900);
scene.add(camera);
camera.position.set(0, 100, 200);
//lighting
const pointLight = []
const sphereSize = 1
const pointLightHelper = []
for(let i =0;i<6;i++){
    pointLight.push(new THREE.PointLight("#ffffff", 0))
    all.add(pointLight[i])
    pointLightHelper[i] = new THREE.PointLightHelper( pointLight[i], sphereSize );
    scene.add( pointLightHelper[i] );
}
pointLight[0].position.set(335, 50, 0);
pointLight[0].intensity = 1.5
pointLight[1].position.set(-335, 50, 0);
pointLight[1].intensity = 1.5
pointLight[2].position.set(0, 30, -335);
pointLight[2].intensity = 1.5   
pointLight[3].position.set(0, 35, 335);
pointLight[3].intensity = 1.5
pointLight[4].position.set(0, -120, 0);
pointLight[4].intensity = 1.5
// pointLight[5].position.set(10, 150, 0);
// pointLight[5].intensity = 0.1
//objects


all.position.set(50,0,0)
scene.add(all)
all.add(land)

//render
renderer = new THREE.WebGLRenderer({
    canvas : canvas,
    antialias : true,
})
renderer.setSize(window.innerWidth,window.innerHeight)
renderer.render(scene,camera)
//controls
const controls = new OrbitControls(camera, renderer.domElement);
function animate() {
  requestAnimationFrame(animate);
  // controls.enableZoom = false;
  // controls.enablePan = false;
  controls.update();
  renderer.render(scene, camera);
  renderer.render(scene, camera);

  if (
    (camera.position.x < 0 && camera.position.z < 0) ||
    (camera.position.x > 0 && camera.position.z < 0)
  ) {
    if (direction === "left") {
      direction = "right";
      move();
    }
  } else {
    if (direction === "right") {
      direction = "left";
      move();
    }
  }
}
animate()

//windowsize
const updateWindow = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }
  window.onresize = updateWindow