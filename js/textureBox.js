//Constructor of a texture'ized box
class textureBox {
    constructor(x, y, z, texture, height, width, depth){
        var material = new THREE.MeshBasicMaterial( { map: texture } );	

		var boxSize = new THREE.BoxGeometry(height,width,depth);
		var box = new THREE.Mesh(boxSize, material);

		box.position.set(x, y, z);
		return box;
    }
}