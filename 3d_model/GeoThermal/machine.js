let machines = new THREE.Group();
// things with no thing inside
material = new THREE.MeshStandardMaterial({ color: "silver" });
geometry = new THREE.BoxGeometry(25, 25, 25);
let box = new THREE.Mesh(geometry, material);

machines.add(box);

box.position.set(0, 15, 150);

material = new THREE.MeshStandardMaterial({ color: "black" });
geometry = new THREE.BoxGeometry(1, 15, 1);
const line = new THREE.Mesh(geometry, material);

machines.add(line);

line.position.set(0, 35, 150);

// tube that connects box from box
material = new THREE.MeshStandardMaterial({ color: "orange" });
geometry = new THREE.CylinderGeometry(2, 2, 60, 32);
let tube = new THREE.Mesh(geometry, material);

tube.rotation.x = Math.PI / 2;
machines.add(tube);
tube.position.set(0, 10, 110);

//things with things insisdes
material = new THREE.MeshStandardMaterial({ color: "silver" });
geometry = new THREE.BoxGeometry(25, 15, 35);
let box2 = new THREE.Mesh(geometry, material);
machines.add(box2);

box2.position.set(0, 12, 80);

material = new THREE.MeshStandardMaterial({ color: "silver" });
geometry = new THREE.BoxGeometry(25, 15, 25);
let box3 = new THREE.Mesh(geometry, material);
machines.add(box3);

box3.position.set(0, 12, 50);

material = new THREE.MeshBasicMaterial({ color: 0xa3bce6 });
geometry = new THREE.BoxGeometry(27, 17, 1);
let between = new THREE.Mesh(geometry, material);

machines.add(between);

between.position.set(0, 12, 63);

//transmission tower

