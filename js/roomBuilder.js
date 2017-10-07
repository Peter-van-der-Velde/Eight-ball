let roomItems = new THREE.Group();		//all tiles combined

/**
 * builds the room around the pooltable room
 * @param {number} length the length of the room
 * @param {number} width the width of the room
 * @param {number} height the height of the room
 * @param {Texture} floorTexture 
 * @param {Texture} wallTexture 
 */
let roomBuilder = function (length, width, height, floorTexture, wallTexture) {
	let startX = (length / 2) * -1;
	let startZ = (width / 2) * -1;
	let floor; 								//a single floor tile
	
	for(let localZ = 0; localZ <= width; localZ++ ){
		for(let localX = 0; localX <= length; localX++){
			floor = new textureBox(startX, 0, startZ, floorTexture, 1, 0.1, 1);
			roomItems.add(floor);
			startZ++;
			console.log("Z - " + localZ + " | X - " + localX);
            if (localX == 0){
                wall = new textureBox(startX, 0, startZ, wallTexture, 2, 0.2, 2);
                roomItems.add(floor);
                console.log("Wall Drawn");
            }
		}
		localX = 0;
		startX++;
		startZ = (width / 2) * -1;
	}
	return roomItems;
}