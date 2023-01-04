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
var scale = 15;

const size = 10;
const divisions = 10;

const gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );

const geometry = new THREE.SphereGeometry( 0.5, 32, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const sphere = new THREE.Mesh( geometry, material );
// sphere.position.set(0,0,10)
// sphere.position.copy();
scene.add( sphere );

var animate = function () {
	requestAnimationFrame( animate );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.render( scene, camera );
};

animate();