let land = new THREE.Group();
//grass
  let texture = new THREE.TextureLoader().load("../textures/grass-texture.jpeg");
  let material = new THREE.MeshStandardMaterial({map : texture} ) ;
  let geometry = new THREE.BoxGeometry(400,10,400)
  let grass = new THREE.Mesh(geometry, material)

  land.add(grass);

//dirt
  texture = new THREE.TextureLoader().load("../textures/soil-texture.jpeg");
  material = new THREE.MeshStandardMaterial({ map: texture } ) ;
  geometry = new THREE.BoxGeometry(400,10,400)
  let dirt = new THREE.Mesh(geometry, material)

  dirt.position.set(0,-10,0);

  land.add(dirt);
// water

  const params = {
    color: "#00b4d8",
    scale: 10,
    flowX: 10,
    flowY: 10,
  };
  const waterGeometry = new THREE.BoxGeometry(400,10,400);
  
  water = new Water(waterGeometry, {
  
    color: params.color,
    scale: params.scale,
    flowDirection: new THREE.Vector2(params.flowX, params.flowY),
    textureWidth: 1024,
    textureHeight: 1024,
  });

  land.add(water);

  water.position.set(0,-20,0)
// red thing
material = new THREE.MeshStandardMaterial({color: "brown" } ) ;
geometry = new THREE.BoxGeometry(400,10,400)
let crust = new THREE.Mesh(geometry, material)

land.add(crust)

crust.position.set(0,-30,0);

// things with no thing inside
material = new THREE.MeshStandardMaterial({color: "silver" } ) ;
geometry = new THREE.BoxGeometry(25,25,25)
let box = new THREE.Mesh(geometry, material);

land.add(box);

box.position.set(0,20,150)

// tube that connects box from box
material = new THREE.MeshStandardMaterial({color: "orange" } ) ;
geometry = new THREE.CylinderGeometry(3,3,60,32)
let tube = new THREE.Mesh(geometry, material)

tube.rotation.x = Math.PI / 2
land.add(tube)
tube.position.set(0,10,110)

//things with things insisdes
material = new THREE.MeshStandardMaterial({color: "silver" } ) ;
geometry = new THREE.BoxGeometry(25,15,25)
let box2 = new THREE.Mesh(geometry, material);
land.add(box2);

box2.position.set(0,15,80)



