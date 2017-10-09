import {box} from './box.js';
import {cylinder} from './cylinder.js';
import {Input} from './input.js';


var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // to antialias the shadow
var renderCanv = document.getElementById("renderCanvasDiv").appendChild( renderer.domElement );
renderCanv.id = "renderCanvas";
console.log(renderer);
var clock = new THREE.Clock();
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);

//TextureLoader
var loader = new THREE.TextureLoader();
var floorTexture = loader.load("img/floor.png");
var tableTexture = loader.load("img/green_mat.png");
var wallTexture = loader.load("img/wallBackground.png");
var tableEdgeTexture = loader.load("img/edge.png");
var whiteBallTexture = loader.load("img/ballTextures/0.png");
var ball_1Texture = loader.load("img/ballTextures/1.png");
var ball_2Texture = loader.load("img/ballTextures/2.png");
var ball_3Texture = loader.load("img/ballTextures/3.png");
var ball_4Texture = loader.load("img/ballTextures/4.png");
var ball_5Texture = loader.load("img/ballTextures/5.png");
var ball_6Texture = loader.load("img/ballTextures/6.png");
var ball_7Texture = loader.load("img/ballTextures/7.png");
var ball_8Texture = loader.load("img/ballTextures/8.png");
var ball_9Texture = loader.load("img/ballTextures/9.png");
var ball_10Texture = loader.load("img/ballTextures/10.png");
var ball_11Texture = loader.load("img/ballTextures/11.png");
var ball_12Texture = loader.load("img/ballTextures/12.png");
var ball_13Texture = loader.load("img/ballTextures/13.png");
var ball_14Texture = loader.load("img/ballTextures/14.png");
var ball_15Texture = loader.load("img/ballTextures/15.png");
//Room Textures
roomBuilder(20, 20, 20, floorTexture, wallTexture);
scene.add(roomItems);


//Creating the balls (lol)
var white_ball = new WhiteBall(-1.0, 1.08, 0, whiteBallTexture, "white");
var ball_1 = new Ball(0.5, 1.08, 0, ball_1Texture, "dashed");
var ball_2 = new Ball(0.56, 1.08, 0.03, ball_2Texture, "dashed");
var ball_3 = new Ball(0.56, 1.08, -0.03, ball_3Texture, "dashed");
var ball_4 = new Ball(0.62, 1.08, 0, ball_4Texture, "dashed");
var ball_5 = new Ball(0.62, 1.08, 0.06, ball_5Texture, "dashed");
var ball_6 = new Ball(0.62, 1.08, -0.06, ball_6Texture, "dashed");
var ball_7 = new Ball(0.68, 1.08, 0.03, ball_7Texture, "dashed");
var ball_8 = new Ball(0.68, 1.08, -0.03, ball_8Texture, "black");
var ball_9 = new Ball(0.68, 1.08, 0.09, ball_9Texture, "solid");
var ball_10 = new Ball(0.68, 1.08, -0.09, ball_10Texture, "solid");
var ball_11 = new Ball(0.74, 1.08, 0, ball_11Texture, "solid");
var ball_12 = new Ball(0.74, 1.08, 0.06, ball_12Texture, "solid");
var ball_13 = new Ball(0.74, 1.08, -0.06, ball_13Texture, "solid");
var ball_14 = new Ball(0.74, 1.08, 0.12, ball_14Texture, "solid");
var ball_15 = new Ball(0.74, 1.08, -0.12, ball_15Texture, "solid");

balls.push(ball_1);
balls.push(ball_2);
balls.push(ball_3);
balls.push(ball_4);
balls.push(ball_5);
balls.push(ball_6);
balls.push(ball_7);
balls.push(ball_8);
balls.push(ball_9);
balls.push(ball_10);
balls.push(ball_11);
balls.push(ball_12);
balls.push(ball_13);
balls.push(ball_14);
balls.push(ball_15);
balls.push(white_ball);

balls.forEach(function(ball) {
	scene.add(ball.mesh)
}, this);



//Table
// x, y, z, color, width, height, depth
var green_mat = new textureBox(0, 1, 0, tableTexture,2.8 , 0.1, 1.6);
var wall_1 = new textureBox(1.4, 1, 0, tableEdgeTexture, 0.1, 0.2, 1.3); //1.7
var wall_2 = new textureBox(-1.4, 1, 0, tableEdgeTexture, 0.1, 0.2, 1.3); //1.7
var wall_3 = new textureBox(0.67, 1, 0.8, tableEdgeTexture, 1.1, 0.2, 0.1); //2.7
var wall_4 = new textureBox(-0.67, 1, 0.8, tableEdgeTexture, 1.1, 0.2, 0.1); //2.7
var wall_5 = new textureBox(0.67, 1, -0.8, tableEdgeTexture, 1.1, 0.2, 0.1); //2.7
var wall_6 = new textureBox(-0.67, 1, -0.8, tableEdgeTexture, 1.1, 0.2, 0.1); //2.7
var roomWalls = new textureBox(0, 10, 0, wallTexture, 20, 20, 20);
var cylinder_1 = new cylinder(0, 1, 0.85, '#000000', 0.2, 0.12, 0.12);
var cylinder_2 = new cylinder(0, 1, -0.85, '#000000', 0.2, 0.12, 0.12);
var cylinder_3 = new cylinder(1.35, 1, 0.8, '#000000', 0.2, 0.12, 0.12);
var cylinder_4 = new cylinder(1.35, 1, -0.8, '#000000', 0.2, 0.12, 0.12);
var cylinder_5 = new cylinder(-1.35, 1, 0.8, '#000000', 0.2, 0.12, 0.12);
var cylinder_6 = new cylinder(-1.35, 1, -0.8, '#000000', 0.2, 0.12, 0.12);
var poolCue = new cylinder(0, 1, 0, tableEdgeTexture, 1.4, 0.010, 0.020);
var leg_1 = new box(1.4, 0.5, -0.8, '#835C3B', 0.1, 1, 0.1);
var leg_2 = new box(1.4, 0.5, 0.8, '#835C3B', 0.1, 1, 0.1);
var leg_3 = new box(-1.4, 0.5, 0.8, '#835C3B', 0.1, 1, 0.1);
var leg_4 = new box(-1.4, 0.5, -0.8, '#835C3B', 0.1, 1, 0.1);
var eight_ball_table = new THREE.Group();
var colBounds = new bounds (-1.33, -0.73, 1.33, 0.73); // bounds of table

eight_ball_table.add(green_mat);
eight_ball_table.add(wall_1);
eight_ball_table.add(wall_2);
eight_ball_table.add(wall_3);
eight_ball_table.add(wall_4);
eight_ball_table.add(wall_5);
eight_ball_table.add(wall_6);
eight_ball_table.add(roomWalls);
eight_ball_table.add(cylinder_1.mesh);
eight_ball_table.add(cylinder_2.mesh);
eight_ball_table.add(cylinder_3.mesh);
eight_ball_table.add(cylinder_4.mesh);
eight_ball_table.add(cylinder_5.mesh);
eight_ball_table.add(cylinder_6.mesh);
eight_ball_table.add(poolCue.mesh);
eight_ball_table.add(leg_1);
eight_ball_table.add(leg_2);
eight_ball_table.add(leg_3);
eight_ball_table.add(leg_4);
eight_ball_table.castShadow = true;
scene.add(eight_ball_table);

// array of cylinders
var poolHoles = [cylinder_1, cylinder_2, cylinder_3, cylinder_4, cylinder_5, cylinder_6] 

poolCue.mesh.rotateZ(-0.55 * Math.PI);

//Set the camera position
camera.position.set(-2.5, 2.5, 0);
camera.lookAt(green_mat.position);

// add lights to scene
pointLight.lookAt( green_mat );
scene.add(pointLight);
scene.add(LightA);

// add grid and axis
var grid = new THREE.GridHelper(100, 100);
scene.add(grid);
var axisHelper = new THREE.AxisHelper( 20 );
scene.add( axisHelper );

// add players to game
var player1 = new Player("Marco"); 
var player2 = new Player("Peter");
var players = [];
players.push(player1);
players.push(player2);

//Set player names
function askPlayerNames(){
	var player1Name = prompt("Player one, what is your name?");
	var player2Name = prompt("Player two, what is your name?");
	
	document.getElementById("player1").innerText += " " + player1Name;
	document.getElementById("player2").innerText += " " + player2Name;

	player1.name = player1Name;
	player2.name = player2Name;
}

// cue code 
parent = new THREE.Object3D();
scene.add( parent );
var pivot1 = new THREE.Object3D();
parent.add(pivot1);
pivot1.add(poolCue.mesh);
poolCue.mesh.position.x = -1;
poolCue.mesh.position.y = 0.1;

function updatePoolCue(){
	parent.position.set(white_ball.mesh.position.x, white_ball.mesh.position.y , white_ball.mesh.position.z);
}

function cueTurn() {
	var ready = ballsHaveStopped();
	updateValues();
	var powerH = document.getElementById("power");

  	if (input.left && ready) {
		parent.rotation.y -= 0.025;
  	}
  		// Right
  	if (input.right && ready) {
		parent.rotation.y += 0.025;
	}
  	//parent.arrowHelper.setDirection(new THREE.Vector3(parent.direction.x, 0, parent.direction.y));

  	// Up
  	if (input.up && ready) {
		// more power
		powerH.value += 0.05;
	}
  	// Down
  	if (input.down && ready) {
		// less power
		powerH.value -= 0.2;
	}

  	// Space
  	if (input.space && ready) {
		if (white_ball.position.y == 1.5) {
			white_ball.respawn();
			updatePoolCue();
			players[playerTurn].addPoints(-50);
		} else { 
			updatePoolCue();
			white_ball.fire(new THREE.Vector3(Math.cos(parent.rotation.y), 0, -Math.sin(parent.rotation.y)).multiplyScalar(power));
			nextTurn();
		}
	}
}
//

//var turn = 0;
var playerTurn = 0;
var power;
var amountOfBalls;
var amountOfBallsThisRound = balls.length;

/**
 * Prepares variables for the next round
 */
function nextTurn() {
	amountOfBallsThisRound = balls.length;
	turn++;
	playerTurn = turn % players.length;
}


/**
 * Make the ball rotate
 */
function rollTheBalls(){
	for (let i = 0; i < balls.length; i++) {
		if(balls[i].getTotalVelocity() >= 0.01){
			var localSpeed = new THREE.Vector3(balls[i].velocity.x, balls[i].velocity.y, balls[i].velocity.z).normalize();
			localSpeed.multiplyScalar(balls[i].getTotalVelocity()).normalize();
			balls[i].mesh.rotateOnAxis(localSpeed, (balls[i].getTotalVelocity())*-0.5);
		}
		else{
			balls[i].mesh.rotateZ(0.0);
		}
	}
}


/**
 * Check if the balls have stopped moving
 */
function ballsHaveStopped() {
	for (let i = 0; i < balls.length; i++) {
		if (balls[i].getTotalVelocity() >= 0.02)
			return false;
	}
	updatePoolCue();
	return true;
}

/**
 * Calculate Score of Player
 */
function calcScore() {
	if (amountOfBalls != balls.length) {
		let score = (amountOfBallsThisRound - balls.length) * 100;
		playerTurn = turn % players.length;
		
		if (killedBall.body == 'black') {
			if (playerTurn % 2 == 1) {
				players[0].addPoints(-10000);
				endGame();
			} else {
				players[1].addPoints(-10000);
				endGame();
			} 
		}

		if (killedBall != undefined) {
			if (playerTurn % 2 == 1)  {// pure magic
				if (killedBall.body ===  players[0].body)
					players[0].addPoints(score);
				else
					players[0].addPoints(score * -0.5);
			} else {
				if (killedBall.body ===  players[1].body)
					players[1].addPoints(score);
				else
					players[1].addPoints(score * -0.5);
			}
		}
		killedBall = new Ball(0, 0, 0, whiteBallTexture, 'neither');
		amountOfBalls = balls.length;
	}
}


//Auto resizer when window size changes
window.addEventListener( 'resize', onWindowResize, false );

/**
 * Auto resizer when window size changes
 */
function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}


/**
 * update the GUI elements
 */
function updateUI() {
	var turnH = document.getElementById("turn");
	turnH.innerHTML = "Whose turn is it? it is:" + players[playerTurn].name

	var player1Score = document.getElementById("p1Score");
	var player2Score = document.getElementById("p2Score");
	player1Score.innerHTML = player1.totalPoints;
	player2Score.innerHTML = player2.totalPoints;
}

/** 
 * update all the values it can get from the html DOM 
 */
function updateValues() {
	power = document.getElementById("power").value;
	if (p1Sol != null) {
		if (p1Sol) {
			players[0].body = 'solid';
			players[1].body = 'dashed';
		} else {
			players[1].body = 'solid';
			players[0].body = 'dashed';
		} 
	}
}

/**
 * start game
 */
function start() {
	document.getElementById("submit").onclick = function () {
		updateValues();
		if (white_ball.position.y == -500) {
			white_ball.respawn();
			updatePoolCue();
			players[playerTurn].addPoints(-50);
		} else { 
			if (ballsHaveStopped()) {
				updatePoolCue();
				white_ball.fire(new THREE.Vector3(Math.cos(parent.rotation.y), 0, -Math.sin(parent.rotation.y)).multiplyScalar(power));
				nextTurn();
			}
		}
	}
}

/**
 * end the game
 */
 
 
function endGame() {
	// find out who won
	var winner = player1.name;
	if (player2.totalPoints > player1.totalPoints)
		winner = player2.name;
	
	var winnerH1 = document.getElementById("Wtext");
	winnerH1.innerHTML = winner + " won!";

	var s1 = document.getElementById("s1");
	var s2 = document.getElementById("s2");

	if (player2.totalPoints <= player1.totalPoints) {
		s1.innerHTML = "1.	" + player1.name + "	" + player1.totalPoints;
		s2.innerHTML = "2.	" + player2.name + "	" + player2.totalPoints;
	} else {
		s1.innerHTML = "1.	" + player2.name + "	" + player2.totalPoints;
		s2.innerHTML = "2.	" + player1.name + "	" + player1.totalPoints;
	}

	var endDIV = document.getElementById('endGame');
	endDIV.position = "absolute";
	endDIV.display = "absolute";
	console.log("well.. Hello there.");
}

var input = new Input();

/**
 * our render function it renders our scene
 */
var render = function () {
	var delta = clock.getDelta();
	balls.forEach(function(Ball) {
		Ball.update(delta, colBounds, poolHoles)
	}, this);
	
	cueTurn();
	updateValues();
	rollTheBalls();
	input.update();
	ballsHaveStopped();
	calcScore();
	updateUI();
	renderer.render( scene, camera );
	requestAnimationFrame( render );
	
};

parent.position.set(white_ball.position.x, white_ball.position.y, white_ball.position.z);
killedBall =  new Ball(0, 0, 0, whiteBallTexture, 'neither');

updatePoolCue();
render();
start();
askPlayerNames();