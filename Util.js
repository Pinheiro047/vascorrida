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

    class Campo extends obj{
        move(vel,limit,pos){
            this.y +=vel
            if(this.y>limit){
                this.y = pos
            }
        }
    }