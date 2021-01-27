export class x {
    constructor(){
        this.size = 200
        this.color = "blue"
        this.lw = 10
    }

    draw(ctx, x, y){
        ctx.beginPath();
        ctx.moveTo(x - this.size / 2, y - this.size / 2);
        ctx.lineTo(x + this.size / 2, y + this.size / 2);
        ctx.lineWidth = this.lw
        ctx.globalAlpha = 1
        ctx.strokeStyle = this.color
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + this.size / 2, y - this.size / 2);
        ctx.lineTo(x - this.size / 2, y + this.size / 2);
        ctx.lineWidth = this.lw
        ctx.globalAlpha = 1
        ctx.strokeStyle = this.color
        ctx.stroke();
    }
}

export class o {
    constructor(){
        this.size = 100
        this.color = "red"
        this.lw = 10
        this.light = false
    }

    draw(ctx, x, y){
        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, 2 * Math.PI);
        ctx.lineWidth = this.lw
        ctx.globalAlpha = 1
        ctx.strokeStyle = this.color
        ctx.stroke();
    }

    drawLight(ctx, x, y){
        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, 2 * Math.PI);
        ctx.lineWidth = this.lw
        ctx.globalAlpha = 0.2
        ctx.strokeStyle = this.color
        ctx.stroke();
    }
}