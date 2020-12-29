class Divisions{
    constructor(x,y,width,height){
        var options = {
            isStactic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(myWorld, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        //rect(this.body.position.x,this.body.position.y,this.width,this.height);
        fill("white");
        rect(pos.x , pos.y , this.width , this.height);

        
    }
};