class Branch{

    constructor(x1 , y1 , x2 , y2 , angle , len , width , color){

        this.x1 = x1
        this.y1 = y1 
        this.x2 = x2 
        this.y2 = y2
        this.angle = angle
        this.len = len
        this.finished = false
        this.width = width
        this.color = color

    }

    draw(){

        c.beginPath()
        c.lineWidth = this.width
        c.strokeStyle = this.color
        c.moveTo(this.x1 , this.y1)
        c.lineTo(this.x2 , this.y2)
        c.stroke()
        c.closePath()
    }

    newbranch(subangle , color){

        var newlen = this.len * .6
        var new_width = this.width * .6
        var newAngle = this.angle + subangle
        var newX = this.x2 + newlen * Math.cos(newAngle)
        var newY = this.y2 + newlen * Math.sin(newAngle)

        var newbranch = new Branch(this.x2 , this.y2 , newX , newY , newAngle , newlen , new_width , color)

        return newbranch

    }

}