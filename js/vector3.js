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