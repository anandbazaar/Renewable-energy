//canvas
const body = document.querySelector(".body")
const canvas = document.querySelector(".webgl");
const all = new THREE.Group();
//scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x152744);
//camera
let camera = 0
if(window.innerWidth<=416){
  camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight/1.5);
  camera.position.set(0, 250, 650);
}
else{
camera = new THREE.PerspectiveCamera(90, (window.innerWidth*0.5) / window.innerHeight);
camera.position.set(0, 250, 450);}
scene.add(camera);
//lighting
const pointLight = [];
const sphereSize = 1;
const pointLightHelper = [];
for (let i = 0; i < 6; i++) {
  pointLight.push(new THREE.PointLight("#ffffff", 0));
  all.add(pointLight[i]);

}
pointLight[0].position.set(335, 50, 0);
pointLight[0].intensity = 1.5;
pointLight[1].position.set(-335, 50, 0);
pointLight[1].intensity = 1.5;
pointLight[2].position.set(0, 30, -335);
pointLight[2].intensity = 1.5;
pointLight[3].position.set(0, 35, 335);
pointLight[3].intensity = 1.5;
pointLight[4].position.set(0, -120, 0);
pointLight[4].intensity = 1.5;
pointLight[5].position.set(0, 150, -70);
pointLight[5].intensity = 0.3;
// pointLight[5].position.set(10, 150, 0);
// pointLight[5].intensity = 0.1
//objects


land.position.set(0,0,0)



all.add(transgender)
all.add(machine)
all.add(factory);

all.add(tower2)
all.position.set(0,0,0)
all.add(land)


transgender.scale.y = 1.5
tower2.scale.y = 1.5


//smoke

//render
renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
if(window.innerWidth<=416){
  renderer.setSize(window.innerWidth, window.innerHeight/1.5);
}
else{
renderer.setSize(window.innerWidth*0.5, window.innerHeight);}
renderer.render(scene, camera);
//controls
const controls = new OrbitControls(camera, renderer.domElement);
let ran = Math.random()

scene.add(all)
function animate() {
  all.rotation.y += 0.005
  // if(smoke.position.y>140) {
  //   smoke.scale.y -= 0.003
  // smoke.scale.z -= 0.003
  // smoke.scale.x -= 0.003
  // smoke2.scale.y -= 0.003
  // smoke2.scale.z -= 0.003
  // smoke2.scale.x -= 0.003
  // smoke3.scale.y -= 0.003
  // smoke3.scale.z -= 0.003
  // smoke3.scale.x -= 0.003
  // }
  // if(smoke.position.y>165){
  //   smoke.position.y = 100
  //   smoke2.position.y = 100
  //   smoke3.position.y = 50
  // }
  // else{
  // smoke.scale.y += 0.001
  // smoke.scale.z += 0.001
  // smoke.scale.x += 0.001
  // smoke2.scale.y += 0.001
  // smoke2.scale.z += 0.001
  // smoke2.scale.x += 0.001
  // smoke3.scale.y += 0.001
  // smoke3.scale.z += 0.001
  // smoke3.scale.x += 0.001
  // }
  // smoke2.position.y += 0.2
  // smoke3.position.y += 0.2
  // smoke.position.y += 0.2
  // if(smoke.scale.y > 10 && smoke.scale.x > 10 && smoke.scale.z > 10) {
  //   smoke.scale.y = 0.001
  //   smoke.scale.z = 0.001
  //   smoke.scale.x = 0.001
  //   smoke2.scale.y = 0.001
  //   smoke2.scale.z = 0.001
  //   smoke2.scale.x = 0.001
  //   smoke3.scale.y = 0.001
  //   smoke3.scale.z = 0.001
  //   smoke3.scale.x = 0.001
  // } 
  // else {
  //   smoke.scale.y += 0.001
  //   smoke.scale.z += 0.001
  //   smoke.scale.x += 0.001
  //   smoke2.scale.y += 0.001
  //   smoke2.scale.z += 0.001
  //   smoke2.scale.x += 0.001
  //   smoke3.scale.y += 0.001
  //   smoke3.scale.z += 0.001
  //   smoke3.scale.x += 0.001
  // }
  if(window.innerWidth<=416){
    all.scale.z = 0.7
  }
  requestAnimationFrame(animate);
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.update();
  for(let i=0;i<count;i++){
    const x = geometry1.attributes.position.getX(i)
    const xsin = Math.sin(x)-3
    geometry1.attributes.position.setY(i, xsin)

  }
  geometry1.attributes.position.needsUpdate = true
  renderer.render(scene, camera);
  renderer.render(scene, camera);
  drill.rotation.y += 0.1
  drill2.rotation.y -= 0.1
  drillStand.rotation.y -= 0.1

  // if (
  //   (camera.position.x < 0 && camera.position.z < 0) ||
  //   (camera.position.x > 0 && camera.position.z < 0)
  // ) {
  //   if (direction === "left") {
  //     direction = "right";
  //     move();
  //   }
  // } else {
  //   if (direction === "right") {
  //     direction = "left";
  //     move();
  //   }
  // }
  if (sessionStorage.getItem("dark") == "true") {
    scene.background = new THREE.Color(0x152744);
    body.style.backgroundColor = "rgb(21,39,68)";
    infoCont.style.backgroundColor = "rgb(21,39,68)";
    infoBox.style.backgroundColor = "rgb(21,39,68)";
  }
  if (sessionStorage.getItem("dark") == "false") {
    scene.background = new THREE.Color(0x2d71b5);
    body.style.backgroundColor = "rgb(45,113,181)";
    infoCont.style.backgroundColor = "rgb(45,113,181)";
    infoBox.style.backgroundColor = "rgb(45,113,181)";
  }
}
animate();
//windowsize
const updateWindow = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
};
window.onresize = updateWindow;


