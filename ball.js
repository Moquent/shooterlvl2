class Ball{
    constructor(x, y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
    
        this.body = Bodies.rectangle(200, 200, 5, 5, options);
        this.width = 5;
        this.height = 5;

        World.add(world, this.body);
    }

    display(){
        fill("black");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.body.width, this.body.height);
    }
}