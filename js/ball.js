//Constructor of a ball
class ball {
    constructor(x, y, z, constructorColor){
        var ballMaterial = new THREE.MeshPhongMaterial({
            fog : true,
            color : constructorColor
        });
    //this.3dObject = new THREE.Mesh(boxSize);
    var ballSize = new THREE.SphereGeometry(0.03);
    var ball = new THREE.Mesh(ballSize, ballMaterial);
    
    ball.position.set(x, y, z);

    return ball;
    }
}