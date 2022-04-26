// const hoos = new THREE.Group()
// const main = new THREE.Mesh(
//     new THREE.BoxGeometry(90,120,110),
//     new THREE.MeshLambertMaterial({color:"white"})
// )
// main.position.set(0,70,0)
// main.updateMatrixWorld();
// const roof= new THREE.Mesh(
//     new THREE.BoxGeometry(95,40,120),
//     new THREE.MeshLambertMaterial({color:"#4b678b"})
// )
// const roof2 = new THREE.Mesh(
//     new THREE.BoxGeometry(95,40,120),
//     new THREE.MeshLambertMaterial({color:"#4b678b"})
// )
// roof2.position.set(-45,110,0)
// roof2.rotation.z = Math.PI * 0.25
// roof.position.set(45,110,0)
// roof.rotation.z = Math.PI * -0.25
// roof2.updateMatrixWorld()
// roof.updateMatrixWorld()
// let minusBoxCSG = CSG.fromMesh(roof2)
// let houseCSG = CSG.fromMesh(main)
// let houseSubCSG = houseCSG.subtract(minusBoxCSG)
// minusBoxCSG = CSG.fromMesh(roof)
// houseSubCSG = houseSubCSG.subtract(minusBoxCSG)
// let house = CSG.toMesh(houseSubCSG, new THREE.Matrix4())
// house.material = new THREE.MeshLambertMaterial({color:0xfefbe3})
// roof.scale.set(0.73,0.05,1)
// roof.position.set(24,102,0)
// roof2.scale.set(0.73,0.05,1)
// roof2.position.set(-24,102,0)
// hoos.add(house)
// hoos.add(roof)
// hoos.add(roof2)
// //door/windows
// const hole = new THREE.Mesh(
//     new THREE.BoxGeometry(5,5,5),
//     new THREE.MeshBasicMaterial({color:"red"})
// )
// hole.position.set(20,12.5,53)
// hole.updateMatrixWorld()


