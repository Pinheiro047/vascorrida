//classe base
class obj{
    constructor(x,y,w,h,attrib){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.attrib = attrib
    }

    dir = 0

    des_obj(){
        let img = new Image()
        img.src = this.attrib
        des.drawImage(img,this.x,this.y,this.w,this.h)
}
    }

    class Vasco extends Obj{
        dir = 0
        pts = 0
        vidas = 3
    
        move(){
            this.x += this.dir
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

    class Bg extends Obj{
        move(vel,limit,pos){
            this.y +=vel
            if(this.y>limit){
                this.y = pos
            }
        }
    }