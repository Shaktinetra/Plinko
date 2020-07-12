class Ground {
    constructor(x,y,width,height) {
      var options = {
          restitution: 0.8,
          density: 1,
          friction: 1,
          isStatic: true
      }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    display(){
      push();
      var pos = this.body.position;
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }

  };