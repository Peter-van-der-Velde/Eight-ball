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
controls.target.set(0, 0, 0);
camera.position.set(-1, 0.75, 0.75);
camera.lookAt(0, 0, 0)

var grid = new THREE.GridHelper(100, 100);
scene.add(grid);
var axisHelper = new THREE.AxisHelper( 20 );
scene.add( axisHelper );

var colBounds = new bounds (-1, -1.1, 1, 1.1);
var ball_1 = new ball(1, 0, 1, '#FF0000');
ball_1.velocity = new THREE.Vector3(0.5, 0, 0.5);

var ball_2 = new ball(0.5, 0, 0, '#FFFF00');
ball_2.velocity = new THREE.Vector3(0.5, 0, 0);

var ball_3 = new ball(0, 0, 0, '#FFFFFF');
ball_3.velocity = new THREE.Vector3(0.5, 0, 0);

var ball_4 = new ball(0.1, 0, 0, '#eca1a6');
ball_4.velocity = new THREE.Vector3(0.4, 0, 0.7);

var ball_5 = new ball(0, 0, 0.3, '#618685');
ball_5.velocity = new THREE.Vector3(0.3, 0, 0.4);

var ball_6 = new ball(0, 0, 0, '#50394c');
ball_6.velocity = new THREE.Vector3(1, 0, 0.8);

balls.push(ball_1);
balls.push(ball_2);
balls.push(ball_3);
balls.push(ball_4);
balls.push(ball_5);
balls.push(ball_6);

balls.forEach(function(ball) {
	scene.add(ball.mesh)
}, this);

// add lights to scene
pointLight.lookAt( ball_1 );
scene.add(pointLight);
Light.lookAt ( ball_1 );
scene.add(Light);
scene.add(LightA);

var render = function () {
	var delta = clock.getDelta();
	balls.forEach(function(ball) {
		ball.update(delta, colBounds)
	}, this);
	
	renderer.render( scene, camera );
	requestAnimationFrame( render );
	//var time = clock.getElapsedTime();
};

var animate = function () {

	// CODE HERE
};

render();
animate();