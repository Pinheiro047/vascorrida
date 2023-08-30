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

class Vasco extends Obj{
    dir = 0
    pts = 0
    vidas = 5

    move(){
        this.x += this.dir
        if(this.x <= 12){
            this.x = 10
        }else if(this.x >= 490){
            this.x = 490
        }
    }

    colid(objeto){
        if((this.x < objeto.x + objeto.width)&&
            (this.x + this.width > objeto.x)&&
            (this.y < objeto.y + objeto.height)&&
            (this.y + this.height > objeto.y)){
            return true       
        }else{
            return false
        }

    }
}

class Serie_d extends Obj{

    move(vel){
        this.y += vel

        if(this.y >= 750){
            this.y = -50
            this.x = Math.random() * (400 - 0)
        }
    }

    

    recomeca(){
        this.y = -200
        this.x = Math.random() * (400 - 0) 
    }
}

class Serie_c extends Obj{

    move(vel){
        this.y += vel

        if(this.y >= 750){
            this.y = -50
            this.x = Math.random() * (400 - 0) 
        }
    }

    

    recomeca(){
        this.y = -200
        this.x = Math.random() * (400 - 0) 
    }
}

class Serie_d2 extends Obj{

    move(vel){
        this.y += vel

        if(this.y >= 750){
            this.y = -50
            this.x = Math.random() * (400 - 0) 
        }
    }

    

    recomeca(){
        this.y = -200
        this.x = Math.random() * (400 - 0) 
    }
}

class Serie_b extends Obj{

    move(vel){
        this.y += vel

        if(this.y >= 750){
            this.y = -50
            this.x = Math.random() * (400 - 0) 
        }
    }

    

    recomeca(){
        this.y = -200
        this.x = Math.random() * (400 - 0) 
    }
}

class Serie_b2 extends Obj{

    move(vel){
        this.y += vel

        if(this.y >= 750){
            this.y = -50
            this.x = Math.random() * (400 - 0) 
        }
    }

    

    recomeca(){
        this.y = -200
        this.x = Math.random() * (400 - 0) 
    }
}



class Serie_c2 extends Obj{

    move(vel){
        this.y += vel

        if(this.y >= 750){
            this.y = -50
            this.x = Math.random() * (400 - 0) 
        }
    }
    
    recomeca(){
        this.y = -200
        this.x = Math.random() * (400 - 0) 
    }
}
class Bg extends Obj{
    move(vel,limit,pos){
        this.y +=vel
        if(this.y>limit){
            this.y = pos
        }
    }
}
class Bg2 extends Obj{
    move(vel,limit,pos){
        this.y +=vel
        if(this.y>limit){
            this.y = pos
        }
    }
}

class Tres extends Serie_c{
    move(vel){
        this.y += vel

        if(this.y >= 750){
            this.y = -50
            this.x = Math.random() * (400 - 0) 
        }
    }

    recomeca(){
        this.y = -100
        this.x = Math.random() * (400 - 0) 
    }
}
class Tres2 extends Serie_c{
    move(vel){
        this.y += vel

        if(this.y >= 750){
            this.y = -50
            this.x = Math.random() * (400 - 0) 
        }
    }

    recomeca(){
        this.y = -100
        this.x = Math.random() * (400 - 0) 
    }
}
class Texto{
    des_texto(text,x,y,cor,font){
        des.font = font
        des.fillStyle = cor
        des.fillText(text,x,y)
    }
}