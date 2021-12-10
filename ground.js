class Ground{

    constructor(x, y, w, h) 
    {
      let options = {
        isStatic: true
      };
      
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = w;
      this.h = h;
      this.red = 0;
      this.green = 250;
      this.blue = 0;
      World.add(world, this.body);
    }
    
    show() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(100,100,100);
        fill(this.red,this.green,this.blue);
        rect(pos.x, pos.y, this.w, this.h);
        pop();
      }
}

