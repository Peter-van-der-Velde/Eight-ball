let roomItems = new THREE.Group();		//all tiles combined

/**
 * builds the room around the pooltable room
 * @param {number} length the length of the room
 * @param {number} width the width of the room
 * @param {number} height the height of the room
 * @param {Texture} floorTexture texture of the floor
 * @param {Texture} wallTexture texture of the wall
 */
let roomBuilder = function (length, width, height, floorTexture, wallTexture) {
	let startX = (length / 2) * -1;
	let startZ = (width / 2) * -1;
	
	for(let localZ = 0; localZ <= width; localZ++ ){
		for(let localX = 0; localX <= length; localX++){
			floor = new textureBox(startX, 0, startZ, floorTexture, 1, 0.1, 1);
			roomItems.add(floor);
			startZ++;
			console.log("Z - " + localZ + " | X - " + localX);
		}
		startX++;
		startZ = (width / 2) * -1;
	}
	return roomItems;
}