class Mango {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1,
        }

        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
        this.image = loadImage('images/mango.png')
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)

    }
}