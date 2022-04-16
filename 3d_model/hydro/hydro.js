const scene = new THREE.Scene();

// Panel

const walls = new THREE.Group();
const waals =  new THREE.Group();

// Walls

let texture = new THREE.TextureLoader().load("../textures/stone-texture.webp");
let geometry = new THREE.BoxGeometry(20, 110, 100);
let material = new THREE.MeshBasicMaterial({ map: texture });
const wall = new THREE.Mesh(geometry, material);
const wall2 = new THREE.Mesh(geometry, material);
const wall3 = new THREE.Mesh(geometry, material);
const wall4 = new THREE.Mesh(geometry, material);

// Side Walls
geometry = new THREE.BoxGeometry(20, 600, 300);
material = new THREE.MeshBasicMaterial({ map: texture });

const wall5 = new THREE.Mesh(geometry, material);
const wall6 = new THREE.Mesh(geometry, material);


//Water
// texture = new THREE.TextureLoader().load("../textures/water-texture.webp");
// geometry = new THREE.CylinderGeometry(200, 200, 480, 64);
// material = new THREE.MeshBasicMaterial({ map: texture });
// const wotah = new THREE.Mesh(geometry, material);


const params = {
    color: "#00b4d8",
    scale: 10,
    flowX: -100,
    flowY: 1,
  };
  
  let waterGeometry = new THREE.CylinderGeometry(250, 250, 480,64);

  water = new Water(waterGeometry, {
    color: params.color,
    scale: params.scale,
    flowDirection: new THREE.Vector2(params.flowX, params.flowY),
    textureWidth: 1024,
    textureHeight: 1024,
  });
  water.rotation.z = Math.PI / 2;
water.position.set(50,-250,40)

waals.add(water);
waterGeometry = new THREE.PlaneGeometry(1000,1000)
water = new Water(waterGeometry, {
    color: params.color,
    scale: params.scale,
    flowDirection: new THREE.Vector2(params.flowX, params.flowY),
    textureWidth: 1024,
    textureHeight: 1024,
  });
  scene.add(water)

  water.rotation.x = Math.PI * 1.5

  water.position.set(50,-190,0);
  



  

//Cylinder walls

geometry = new THREE.CylinderGeometry(250, 250, 20, 64);
material = new THREE.MeshBasicMaterial({ map: texture });
const waal = new THREE.Mesh(geometry, material);
const waal2 = new THREE.Mesh(geometry, material);
const waal3 = new THREE.Mesh(geometry, material);
const waal4 = new THREE.Mesh(geometry, material);
const waal5 = new THREE.Mesh(geometry, material);
const waal6 = new THREE.Mesh(geometry, material);

waal.rotation.z = Math.PI / 2;
waal2.rotation.z = Math.PI / 2;
waal3.rotation.z = Math.PI / 2;
waal4.rotation.z = Math.PI / 2;
waal5.rotation.z = Math.PI / 2;
waal6.rotation.z = Math.PI / 2;


waals.add(waal);
waals.add(waal2);
waals.add(waal3);
waals.add(waal4);
waals.add(waal5);
waals.add(waal6);
walls.add(wall);
walls.add(wall2);
walls.add(wall3);
walls.add(wall4);
walls.add(wall5);
walls.add(wall6);

wall.position.set(0,45,0);
wall2.position.set(100,45,0);
wall3.position.set(200,45,0);
wall4.position.set(-100,45,0);
wall5.position.set(-200,-200,-100);
wall6.position.set(300,-200,-100);
waal.position.set(-200,-240,50);
waal2.position.set(300,-240,50)
waal3.position.set(100,-240,50);
waal4.position.set(200,-240,50);
waal5.position.set(-100,-240,50);
waal6.position.set(0,-240,50);



scene.add(walls);
scene.add(waals);
waals.position.y = -10

//Top

geometry = new THREE.BoxGeometry(20, 520, 300);
material = new THREE.MeshBasicMaterial({ map: texture });
const toop = new THREE.Mesh(geometry, material);


toop.rotation.z = Math.PI / 2;

toop.position.set(50,110,-100);

geometry = new THREE.BoxGeometry(20, 500, 20);
material = new THREE.MeshBasicMaterial({ map: texture });
const toop2 = new THREE.Mesh(geometry, material);

toop2.rotation.z = Math.PI / 2;

toop2.position.set(50,-50,-100);

scene.add(toop);
scene.add(toop2);

//Bottom

geometry = new THREE.BoxGeometry(260, 300, 350);
material = new THREE.MeshBasicMaterial({ map: texture });
const Bottam = new THREE.Mesh(geometry, material);
const Bottam2 = new THREE.Mesh(geometry, material);

Bottam.position.set(180,-350,150);
Bottam2.position.set(-80,-350,150);

scene.add(Bottam);
scene.add(Bottam2);

//Between
texture = new THREE.TextureLoader().load("../textures/water-texture.webp");
geometry = new THREE.BoxGeometry(20, 460, 510);
material = new THREE.MeshBasicMaterial({ map: texture });
const Between = new THREE.Mesh(geometry, material);  

Between.rotation.y = Math.PI / 2;

Between.position.set(50,-275,0)


//-------------------

texture = new THREE.TextureLoader().load("../textures/mossy-stone-texture.jpeg");
geometry = new THREE.BoxGeometry(20, 600, 510);
material = new THREE.MeshBasicMaterial({ map: texture });

const Between2 = new THREE.Mesh(geometry, material);

Between2.rotation.y = Math.PI / 2;

Between2.position.set(50,-200,-250)

scene.add(Between2);
scene.add(Between);



//Vent                                                                  sus (i'm sorry)

geometry = new THREE.BoxGeometry(510, 150, 20);
material = new THREE.MeshBasicMaterial({ color: 0x908B8B });
const vent =  new THREE.Mesh(geometry, material);

vent.position.set(50,40,0);
 
scene.add(vent);

//Vent holes

geometry = new THREE.BoxGeometry(5, 40, 20);
material = new THREE.MeshBasicMaterial({ color: 0x616264 });
const hole = new THREE.Mesh(geometry, material);
const hole2 = new THREE.Mesh(geometry, material);
const hole3 = new THREE.Mesh(geometry, material);
const hole4 = new THREE.Mesh(geometry, material);
const hole5 = new THREE.Mesh(geometry, material);
const hole6 = new THREE.Mesh(geometry, material);
const hole7 = new THREE.Mesh(geometry, material);
const hole8 = new THREE.Mesh(geometry, material);
const hole9 = new THREE.Mesh(geometry, material);
const hole10 = new THREE.Mesh(geometry, material);
const hole11 = new THREE.Mesh(geometry, material);
const hole12 = new THREE.Mesh(geometry, material);
const hole13 = new THREE.Mesh(geometry, material);
const hole14 = new THREE.Mesh(geometry, material);
const hole15 = new THREE.Mesh(geometry, material);

hole.position.set(50,45,3);
hole2.position.set(70,45,3);
hole3.position.set(30,45,3);
hole4.position.set(150,45,3);
hole5.position.set(170,45,3);
hole6.position.set(130,45,3);
hole7.position.set(250,45,3);
hole8.position.set(270,45,3);
hole9.position.set(230,45,3);
hole10.position.set(-150,45,3);
hole11.position.set(-170,45,3);
hole12.position.set(-130,45,3);
hole13.position.set(-50,45,3);
hole14.position.set(-70,45,3);
hole15.position.set(-30,45,3);

scene.add(hole);
scene.add(hole2);
scene.add(hole3);
scene.add(hole4);
scene.add(hole5);
scene.add(hole6);
scene.add(hole7);
scene.add(hole8);
scene.add(hole9);
scene.add(hole10);
scene.add(hole11);
scene.add(hole12);
scene.add(hole13);
scene.add(hole14);
scene.add(hole15);

// Tree

const tree = new THREE.Group()
const tree2 = new THREE.Group()
const trunk = new THREE.Mesh(
  new THREE.CylinderGeometry(20, 40, 120, 128),
  new THREE.MeshLambertMaterial({ color: 0xFDC6B4})
);
trunk.position.set(-30,-43,-25)
const trunk2 = new THREE.Mesh(
  new THREE.CylinderGeometry(15, 35, 100, 128),
  new THREE.MeshLambertMaterial({ color: 0xFDC6B4})
);
scene.add(trunk)
const branch1 = new THREE.Mesh(
  new THREE.ConeGeometry(100, 170, 128),
  new THREE.MeshLambertMaterial({ color: 0x78C77F})
);
branch1.position.set(-30,100,-25)
scene.add(branch1)
const branch2 = new THREE.Mesh(
  new THREE.ConeGeometry(70, 170, 128),
  new THREE.MeshLambertMaterial({ color: 0x78C77F})
);
const branch3 = new THREE.Mesh(
  new THREE.ConeGeometry(80, 150, 128),
  new THREE.MeshLambertMaterial({ color: 0x78C77F})
);
branch3.position.set(0,80,0);
const branch4 = new THREE.Mesh(
  new THREE.ConeGeometry(50, 150, 128),
  new THREE.MeshLambertMaterial({ color: 0x78C77F})
);
branch4.position.set(0,180,0)

branch2.position.set(-30,210,-25)
tree.add(trunk,branch1,branch2)
tree2.add(trunk2,branch3,branch4)

tree.position.set(800,-130,100);
tree2.position.set(-600,-180,500);

scene.add(tree);
scene.add(tree2);

//Bush
const bushes = []
texture = new THREE.TextureLoader().load("../textures/bush-texture.jpeg");
geometry = new THREE.DodecahedronGeometry(100, 1);
material = new THREE.MeshBasicMaterial({ map: texture });
for(let i=0;i<15;i++){
  bushes[i] = new THREE.Mesh(
    geometry = new THREE.DodecahedronGeometry(100, 1),
    material = new THREE.MeshBasicMaterial({ map: texture }),
  )
  scene.add(bushes[i])
}

geometry = new THREE.CylinderGeometry(250, 250, 100, 64);
material = new THREE.MeshBasicMaterial({ map: texture });
const boshes = new THREE.Mesh(geometry,material);
const boshes2 = new THREE.Mesh(geometry,material);

bushes[0].position.set(300,-180,-200)
bushes[1].position.set(300,-160,-100)
bushes[2].position.set(300,-100,-150)
bushes[3].position.set(250,-180,-250)
bushes[3].scale.set(1.5,1,1)
bushes[4].position.set(200,-180,-250)
bushes[5].position.set(300,-50,-150);
bushes[6].position.set(300,0,-200);
bushes[6].scale.set(0.5,3,0.5)
bushes[7].position.set(200,0,-250);
bushes[7].scale.set(2,1,0.7);
bushes[8].position.set(160,30,-250);
bushes[8].scale.set(0.5,3,0.5);
bushes[9].position.set(-150,40,-250);
bushes[9].scale.set(0.2,2,0.5);
bushes[10].position.set(-30,60,-250);
bushes[10].scale.set(0.5,2,0.5);
bushes[11].position.set(50,60,-250);
bushes[11].scale.set(0.2,2,0.5);
bushes[12].position.set(-250,50,-250);
bushes[13].position.set(-10,-100,-250);
bushes[13].scale.set(2,2,2);
bushes[14].position.set(-300,50,50);
bushes[14].scale.set(0.2,2,0.5);
boshes.position.set(-250,-150,-150);
boshes2.position.set(-250,-300,50);

scene.add(boshes);
scene.add(boshes2);

boshes.rotation.z = Math.PI / 2;
boshes2.rotation.z = Math.PI / 2;
//Cloud

//Planes

texture = new THREE.TextureLoader().load("../textures/soil-texture.jpeg");
geometry = new THREE.PlaneGeometry(1000, 1000, 1000);
material = new THREE.MeshBasicMaterial({ map: texture });
const planes = new THREE.Mesh(geometry,material);

planes.rotation.x = Math.PI * 1.5

planes.position.set(50,-200,0);

scene.add(planes);

var materials = [
    new THREE.MeshBasicMaterial({
        color:"white"
    }),
    new THREE.MeshBasicMaterial({
      color:"white"
  }),
  new THREE.MeshBasicMaterial({
    color:"white"
  }),
  new THREE.MeshBasicMaterial({
    color:"white"
  }),
  new THREE.MeshBasicMaterial({
    color:"white"
  }),
  new THREE.MeshBasicMaterial({
    color:0x4d9872
  }),
   
  ];
  
  
  const land1 = new THREE.Mesh(
      new THREE.BoxGeometry(2000,1400,40),
      materials
  
  )
  const land2 = new THREE.Mesh(
    new THREE.BoxGeometry(1000,1600,40),
    materials

)
  land1.rotation.x = Math.PI * 0.5;
  land2.rotation.x = Math.PI * 0.5;

  land1.position.set(20,-250,0);
  land2.position.set(-480,-250,100);
  scene.add(land1);
  scene.add(land2);


//frame size

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};



const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,1,10000);
camera.position.set(200, 200, 200);
camera.lookAt(wall.position);
const pointLight = new THREE.PointLight("#fff", 1.5);
scene.add(pointLight)
pointLight.position.set(0,500,0)


//controller

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  canvas: canvas,
  antialias: true,
});

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableZoom = true;
controls.enablePan = true;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
scene.background = new THREE.Color(0x272928);
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);


// animate();

function controlAnimation() {
  requestAnimationFrame(controlAnimation);
  pointLight.position.x = camera.position.x
  pointLight.position.y = camera.position.y
  pointLight.position.z = camera.position.z

  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();

  renderer.render(scene, camera);
}

controlAnimation();