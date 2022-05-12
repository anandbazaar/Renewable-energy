const mat = new THREE.MeshBasicMaterial({color:0xffffff})
const smoke = new THREE.Mesh(
   new THREE.SphereGeometry(30,30,128),
   mat
)
smoke.position.set(20,100,-50)
const smoke2 = smoke.clone()
smoke2.position.set(20,100,-110)
const smoke3 = smoke.clone()
smoke3.position.set(-10,50,210)
smoke.scale.set(0.1,0.1,0.1)
smoke2.scale.set(0.1,0.1,0.1)
smoke3.scale.set(0.1,0.1,0.1)