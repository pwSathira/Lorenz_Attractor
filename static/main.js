var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 5;

var rho = 28.0;
var sigma = 10.0;
var beta = 8.0/3.0;
var x = 0.01;
var y = 0;
var z = 0;
var dt = 0.01;

const size = 10;
const divisions = 10;

const geometry = new THREE.SphereGeometry();

for (let i = 0; i < 1000; i++){
  const dxdt = sigma * (y - x) * dt;
  const dydt = (x * (rho - z) - y) * dt;
  const dzdt = (x * y - beta * z) * dt;
	x += dxdt;
	y += dydt;
	z += dzdt;
	// const geometry = new THREE.SphereGeometry( 0.1, 32, 16 );
	// geometry.vertices.push(new THREE.Vector3(x,y,z));
	// const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
	// const sphere = new THREE.Mesh( geometry, material );
	geometry.vertices.push(new THREE.Vector3(x, y, z));
	// scene.add( sphere );
}

const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
const line = new THREE.Line(geometry, material);
scene.add(line);

// const geometry = new THREE.SphereGeometry( 0.1, 32, 16 );
// const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
// const sphere = new THREE.Mesh( geometry, material );
// sphere.position.set(0,0,10) s
// sphere.position.copy(); s
// function createSphere() {
// 	dxdt = sigma*(y-x);
// 	dydt = (rho * x) - y - (x*z);
// 	dzdt = x * y - beta * z;
// 	x = dxdt;
// 	y = dydt;
// 	z = dzdt;
// 	const geometry = new THREE.SphereGeometry( 0.1, 32, 16 );
// 	geometry.vertices.push(new THREE.Vector3(x,y,z));
// 	const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
// 	const sphere = new THREE.Mesh( geometry, material );
// 	return sphere
// }

// scene.add( sphere );
var animate = function () {
	requestAnimationFrame( animate );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.render( scene, camera );
	renderer.setClearColor( 0xffffff );
};

animate();