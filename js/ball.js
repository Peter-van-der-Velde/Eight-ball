var balls = new Array();

//Constructor of a billiardBall
class ball {

    constructor(x, y, z, constructorColor){

        this.mesh;
        this.position = new THREE.Vector3(x, y, z);
        this.velocity = new THREE.Vector3(0, 0, 0);
        this.acceleration = new THREE.Vector3(0, 0, 0);
        this.friction = 0.995;
        this.restitution = 1; // bounciness of said ball
        this.size = 0.03;
        this.weight = 1;

        var billiardBallMaterial = new THREE.MeshPhongMaterial({
            fog : true,
            color : constructorColor
        });

        var billiardBallSize = new THREE.SphereGeometry(this.size);
        this.mesh = new THREE.Mesh(billiardBallSize, billiardBallMaterial);

        this.mesh.position.set(this.position.x, this.position.y, this.position.z)

    }

    updatePosition(newPosition) {
        this.mesh.position.x = newPosition.x;
        this.mesh.position.y = newPosition.y;
        this.mesh.position.z = newPosition.z;        
    }

    getTotalVelocity() {
        return Math.sqrt(Math.pow(this.velocity.x, 2) + Math.pow(this.velocity.z, 2));
    }

    calcCollision(ball_2, delta) {
        var distanceBalls = this.position.distanceTo(ball_2.position);

        var count = 0;
        // while(distanceBalls <= (this.size + ball_2.size) && count <= 100)
        // {
        //     distanceBalls = this.position.distanceTo(ball_2.position);

        //     this.position.x += this.velocity.x * -(delta);
        //     this.position.z += this.velocity.z * -(delta);

        //     count++;
        // }
        var dx = this.position.x - ball_2.position.x;
        var dz = this.position.z - ball_2.position.z;

        var contactAngle = Math.atan2(dz, dx);

        var totalVelocityA = this.getTotalVelocity();
        var totalVelocityB = ball_2.getTotalVelocity();
        var angleA = Math.atan2(this.velocity.z, this.velocity.x);
        var angleB = Math.atan2(ball_2.velocity.z, ball_2.velocity.x);

        this.velocity.x = totalVelocityB * Math.cos(angleB - contactAngle) * Math.cos(contactAngle) + totalVelocityA * Math.sin(angleA - contactAngle) * Math.cos(contactAngle + (Math.PI / 2));
        this.velocity.z = totalVelocityB * Math.cos(angleB - contactAngle) * Math.sin(contactAngle) + totalVelocityA * Math.sin(angleA - contactAngle) * Math.sin(contactAngle + (Math.PI / 2));

        ball_2.velocity.x = totalVelocityA * Math.cos(angleA - contactAngle) * Math.cos(contactAngle) + totalVelocityB * Math.sin(angleB - contactAngle) * Math.cos(contactAngle + (Math.PI / 2));
        ball_2.velocity.z = totalVelocityA * Math.cos(angleA - contactAngle) * Math.sin(contactAngle) + totalVelocityB * Math.sin(angleB - contactAngle) * Math.sin(contactAngle + (Math.PI / 2));
        

        //     console.log(this)
        //     var Pix = ball_1.velocity.x * ball_1.weight;
        //     var Piz = ball_1.velocity.z * ball_1.weight;

        //     var p1x = ball_1.position.x;
        //     var p1z = ball_1.position.z;

        //     var p2x = ball_2.position.x;
        //     var p2z = ball_2.position.z;

        //     var gradient =  (p1z - p2z) / (p1x -p2x);
        //     var rightAngled =
        //n = new THREE.Vector3((ball_1.position.x - ball_2.position.x), (ball_1.position.y - ball_2.position.y), (ball_1.position.z - ball_2.position.z));   
        //n.normalize();
    
    }

    update(dt, bounds) {    // dt is the difference in time 
        
        this.velocity.x = (this.velocity.x + this.acceleration.x) * this.friction;
        this.velocity.y = (this.velocity.y + this.acceleration.y) * this.friction;
        this.velocity.z = (this.velocity.z + this.acceleration.z) * this.friction;
        
        var posx = this.position.x + (this.velocity.x * dt);
        var posy = this.position.y + (this.velocity.y * dt);
        var posz = this.position.z + (this.velocity.z * dt);

        this.position = new THREE.Vector3(posx, posy, posz);
 
        if (this.position.x < bounds.x) {
            this.position.x = bounds.x;
            this.velocity.x *= -this.restitution;
        } else if (this.position.x > bounds.cx) {
            this.position.x = bounds.cx - this.size;
            this.velocity.x *= -this.restitution;            
        }

        if (this.position.z < bounds.z) {
            this.position.z = bounds.z;
            this.velocity.z *= -this.restitution;
        } else if (this.position.z > bounds.cz) {
            this.position.z = bounds.cz - this.size;
            this.velocity.z *= -this.restitution;     
        }

        for (let i = 0; i < balls.length; i++) {
            if (balls[i] != this) {
                if (this.position.distanceTo(balls[i].position) < this.size*2) {
                    //this.position.x = balls[i].position.x += 0.1;
                    //this.velocity.multiplyScalar(-1);
                    //balls[i].velocity.multiplyScalar(-1);
                    //console.log("bam!" + this.position.distanceTo(balls[i].position));
                    this.calcCollision(balls[i]);
                }
            }
        }
        this.updatePosition(this.position)
        // console.log("p2: ");
        //console.log(this.mesh.position)
        // console.log("p: ");
        // console.log(this.position)
        // console.log("v: ");
        // console.log(this.velocity)
        // console.log("dt: ")
        // console.log(dt)
        // console.log("bd: ")
        // console.log(bounds)
    }
}