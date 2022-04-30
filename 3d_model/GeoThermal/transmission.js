const legs = [];

for (let i = 0; i < 4; i++) {
  const material = new THREE.MeshBasicMaterial({ color: "grey" });
  const geometry = new THREE.BoxGeometry(7, 80, 7);
  legs.rotation.
  legs.push(new THREE.Mesh(geometry, material));
  //   tower.add(legs[i]);
}

legs.forEach((leg, index) => {
  leg.position.set(index * 20, 40, 0);
  tower.add(leg);
});

legs[0].position.set(40, 40, 0);
legs[1].position.set(40,40,-80);
legs[2].position.set(-40, 40, 0);
legs[3].position.set(-40, 40, -80);