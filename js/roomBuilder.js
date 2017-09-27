//roomBuilder
var startX, startZ, localX, localZ;		//local variables for position to do math's with
var floor; 										//a single floor tile
var roomItems = new THREE.Group();				//all tiles combined


let roomBuilder = function (length, width, texture) {
	startX = (length / 2) * -1;
	startZ = (width / 2) * -1;
	localX = 0;
	localZ = 0;
	for(localZ; localZ <= width; localZ++ ){
		for(localX; localX <= length; localX++){
			floor = new textureBox(startX, 0, startZ, texture, 1, 0.1, 1);
			roomItems.add(floor);
			startZ++;
			console.log("Z - " + localZ + " | X - " + localX);
		}
		localX = 0;
		startX++;
		startZ = (width / 2) * -1;
	}
	return roomItems;
}