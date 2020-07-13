class Plinko {
    constructor (x, y, r) {
        var options = {
            restitution: 0.8,
            friction: 1,
            isStatic: true
        }

        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
    }

    display() {
        push();
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(255);
        ellipse(pos.x, pos.y, this.r*2);
        pop();
    }

};
