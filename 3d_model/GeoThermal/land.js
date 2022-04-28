let land = new THREE.Group();
//grass

  let material = new THREE.MeshStandardMaterial({color: 0xB4CD48} ) ;
  let geometry = new THREE.BoxGeometry(250,10,250)
  let grass = new THREE.Mesh(geometry, material)

  land.add(grass);

//dirt
  let texture = new THREE.TextureLoader().load("../textures/soil-texture.jpeg");
  material = new THREE.MeshStandardMaterial({ map: texture } ) ;
  geometry = new THREE.BoxGeometry(250,10,250)
  let dirt = new THREE.Mesh(geometry, material)

  dirt.position.set(0,-10,0);

  land.add(dirt);

