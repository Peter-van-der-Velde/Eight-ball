import {BilliardBall as ball} from './ball.js';
import {box} from './box.js';


var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var clock = new THREE.Clock();
var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

console.log(renderer);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0,0,0)
camera.position.set(-1, 0.75, 0.75);

var grid = new THREE.GridHelper(100, 100);
scene.add(grid);
var axisHelper = new THREE.AxisHelper( 20 );
scene.add( axisHelper );

var colBounds = new bounds (-10, -10, 10, 10)
var ball_1 = new ball(0, 0, 0, '#FF0000');
ball_1.friction = 1; // no friction
ball_1.restitution = 1 // loses no speed when hitting a boundary
ball_1.velocity = new Vector3(0.5, 0, 0.5)

scene.add(ball_1.mesh);

// add lights to scene
pointLight.lookAt( ball_1 );
scene.add(pointLight);
Light.lookAt ( ball_1 );
scene.add(Light);
scene.add(LightA)

var render = function () {
	renderer.render( scene, camera );
	requestAnimationFrame( render );
	//var time = clock.getElapsedTime();
	var delta = clock.getDelta();
	ball_1.update(delta, colBounds)
};

var animate = function () {

	// CODE HERE
};

render();
animate();