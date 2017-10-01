
/**
 * @deprecated
 */
class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(vec3) {
        this.x += vec3.x;
        this.y += vec3.y;
        this.z += vec3.z;

        return this;
    }

    mul(scalar) {
        //this.x *= scalar;
        //this.y *= scalar;
        //this.z *= scalar;

        return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
    }
}

function distanceVector( v1, v2 )
{
    var dx = v1.x - v2.x;
    var dy = v1.y - v2.y;
    var dz = v1.z - v2.z;

    return Math.sqrt( dx * dx + dy * dy + dz * dz );
}