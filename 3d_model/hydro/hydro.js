const scene = new THREE.Scene();
scene.background = new THREE.Color(0x152744);

// Panel
const hydro = new THREE.Group();
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
geometry = new THREE.BoxGeometry(20, 300, 300);
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
  
  let waterGeometry = new THREE.CylinderGeometry(250, 250, 480,64,1,false,0,Math.PI);

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
    flowDirection: new THREE.Vector2(0, 100),
    textureWidth: 1024,
    textureHeight: 1024,
  });
  scene.add(water)

  water.rotation.x = Math.PI * 1.5

  water.position.set(50,-228,0);
  



  

//Cylinder walls

geometry = new THREE.CylinderGeometry(250, 250, 20, 64,1,false,0,Math.PI);
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
wall5.position.set(-200,-50,-100);
wall6.position.set(300,-50,-100);
waal.position.set(-200,-240,50);
waal2.position.set(300,-240,50)
waal3.position.set(100,-240,50);
waal4.position.set(200,-240,50);
waal5.position.set(-100,-240,50);
waal6.position.set(0,-240,50);



hydro.add(walls);
hydro.add(waals);
waals.position.y = -10

//Top

geometry = new THREE.BoxGeometry(20, 520, 300);
material = new THREE.MeshBasicMaterial({ map: texture });
const toop = new THREE.Mesh(geometry, material);


toop.rotation.z = Math.PI / 2;

toop.position.set(50,110,-100);


hydro.add(toop);


//Between
texture = new THREE.TextureLoader().load("../textures/water-texture.webp");
geometry = new THREE.BoxGeometry(20, 230, 510);
material = new THREE.MeshBasicMaterial({ map: texture });
const Between = new THREE.Mesh(geometry, material);  

Between.rotation.y = Math.PI / 2;

Between.position.set(50,-130,0)


//-------------------

texture = new THREE.TextureLoader().load("../textures/stone-texture.webp");
geometry = new THREE.BoxGeometry(20, 300, 510);
material = new THREE.MeshBasicMaterial({ map: texture });

const Between2 = new THREE.Mesh(geometry, material);

Between2.rotation.y = Math.PI / 2;

Between2.position.set(50,-50,-250)

hydro.add(Between2);
hydro.add(Between);



//Vent                                                                  sus (i'm sorry)

geometry = new THREE.BoxGeometry(510, 150, 20);
material = new THREE.MeshBasicMaterial({ color: 0x908B8B });
const vent =  new THREE.Mesh(geometry, material);

vent.position.set(50,40,0);
 
hydro.add(vent);

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

hydro.add(hole);
hydro.add(hole2);
hydro.add(hole3);
hydro.add(hole4);
hydro.add(hole5);
hydro.add(hole6);
hydro.add(hole7);
hydro.add(hole8);
hydro.add(hole9);
hydro.add(hole10);
hydro.add(hole11);
hydro.add(hole12);
hydro.add(hole13);
hydro.add(hole14);
hydro.add(hole15);

scene.add(hydro)
//cloud
const cloud1 = new THREE.Mesh(
  new THREE.CylinderGeometry(10, 10, 10, 128),
  new THREE.MeshLambertMaterial({ color: "white" })
);
const squareMesh = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
const clouds = [];
squareMesh.rotation.z = 0;
squareMesh.scale.set(2, 1, 1.1);
squareMesh.position.set(20, -6, -45);
squareMesh.updateMatrixWorld();
cloud1.position.set(20, 0, -45);
cloud1.rotation.x = Math.PI * 0.5;
cloud1.updateMatrixWorld();
const squareCSG = CSG.fromMesh(squareMesh);
const cloud = CSG.fromMesh(cloud1);
const cloudCSG = cloud.subtract(squareCSG);
for (let i = 0; i < 4; i++) {
  clouds[i] = CSG.toMesh(cloudCSG, new THREE.Matrix4());
  clouds[i].material = new THREE.MeshBasicMaterial({ color: "white" });
}
scene.add(clouds[0]);
clouds[0].position.set(600, 298, -300);
clouds[0].scale.set(8, 8, 10);
scene.add(clouds[1]);
clouds[1].position.set(600,300,-300)
clouds[1].scale.set(10, 10, 10);
scene.add(clouds[2]);
clouds[2].scale.set(8, 8, 10);
clouds[2].position.set(-500, 298, -250);
clouds[2].rotation.y = Math.PI * 0.5;

scene.add(clouds[3]);
clouds[3].rotation.y = Math.PI * 0.5;
clouds[3].position.set(-500, 300, -300);
clouds[3].scale.set(10,10,10)
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
for(let i=0;i<2;i++){
  bushes[i] = new THREE.Mesh(
    geometry = new THREE.DodecahedronGeometry(100, 1),
    material = new THREE.MeshBasicMaterial({ map: texture }),
  )
  scene.add(bushes[i])
}
bushes[0].position.set(800,-180,400)
bushes[1].position.set(-700,-180,300)



//Cloud

//Planes

texture = new THREE.TextureLoader().load("../textures/soil-texture.jpeg");
geometry = new THREE.PlaneGeometry(1000, 1000, 1000);
material = new THREE.MeshBasicMaterial({ map: texture });
const planes = new THREE.Mesh(geometry,material);

planes.rotation.x = Math.PI * 1.5

planes.position.set(50,-229,0);

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
      new THREE.BoxGeometry(2000,1400,43),
      materials
  
  )
  land1.rotation.x = Math.PI * 0.5;

  land1.position.set(20,-258,0);
  scene.add(land1);


//frame size

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};


hydro.position.y = -19
const MinusCube = new THREE.Mesh(
  new THREE.BoxGeometry(100,100,100),
  new THREE.MeshBasicMaterial({color:"red"})
)


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,1,10000);
camera.position.set(1000, 2000 ,3000);
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

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);


// animate();
let wind = "left"
function controlAnimation() {
  // if (wind === "left") {
  //   clouds[0].position.x -= 0.3;
  //   clouds[1].position.x -= 0.3;
  //   clouds[2].position.z -= 0.3;
  //   clouds[3].position.z -= 0.3;
  //   if (clouds[0].position.x < -50) wind = "right";
  // }

  // if (wind == "right") {
  //   clouds[0].position.x += 0.3;
  //   clouds[1].position.x += 0.3;
  //   clouds[2].position.z += 0.3;
  //   clouds[3].position.z += 0.3;
  //   if (clouds[0].position.x > 15) wind = "left";
  // }
  requestAnimationFrame(controlAnimation);
  pointLight.position.x = camera.position.x
  pointLight.position.y = camera.position.y
  pointLight.position.z = camera.position.z
  // controls.enableZoom = false;
  // controls.enablePan = false;

  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();

  renderer.render(scene, camera);
}

controlAnimation();
const updateWindow = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
}
window.onresize = updateWindow