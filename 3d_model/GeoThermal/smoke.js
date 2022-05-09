const mat = new THREE.MeshBasicMaterial({color:0xffffff})
const smoke = new THREE.Mesh(
   new THREE.SphereGeometry(30,30,128),
   mat
)
smoke.position.set(0,100,-50)
smoke.scale.set(0.1,0.1,0.1)