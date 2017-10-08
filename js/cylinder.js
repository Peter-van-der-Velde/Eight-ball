//Constructor of a cylinder
export class cylinder {
    constructor(x, y, z, constructorColor, height, radius){
        var cylinderMaterial = new THREE.MeshPhongMaterial({
			color : constructorColor
		});			

		var cylinderSize = new THREE.CylinderGeometry(); //CylinderGeometry(radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded, thetaStart, thetaLength)
		cylinderSize.height = height;
		cylinderSize.radiusTop = radius;
		cylinderSize.radiusBottom = cylinderSize.radiusTop;
		
		var cylinder = new THREE.Mesh(cylinderSize, cylinderMaterial);
		cylinder.castShadow = true;
		cylinder.receiveShadow = true;
		cylinder.position.set(x, y, z);
		return cylinder;
    }
}