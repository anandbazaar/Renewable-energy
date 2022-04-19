// const land  = new THREE.Mesh(
//     new THREE.CylinderGeometry(100,100,20,64),
//     new THREE.MeshLambertMaterial({color:"white"})
// )

const materials = [
    new THREE.MeshLambertMaterial({color:0xffffff}),
    new THREE.MeshLambertMaterial({color:0x4d9872}),
    new THREE.MeshLambertMaterial({color:0xffffff}),
  ]
  const geometry = new THREE.CylinderGeometry(100,100,20,64)
  const land= new THREE.Mesh(geometry, materials)