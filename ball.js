class Ball{
    constructor(x, y){
        var options = {
            density: 0.004
        }
    
        this.body = Bodies.rectangle(200, 200, 5, 5, options);
        this.width = 15;
        this.height = 15;
    }

    display(){
        fill("black");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.body.width, this.body.height);
    }
}