class Obj{
    frame = 1
    tempo = 0

    constructor(x,y,width,height,imagem){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.imagem = imagem
    }    

    desenha_obj(){
        // des.fillStyle = this.color
        // des.fillRect(this.x, this.y, this.width, this.height)
        let img = new Image()
        img.src = this.imagem
        des.drawImage(img, this.x, this.y, this.width, this.height)
    }
    
}