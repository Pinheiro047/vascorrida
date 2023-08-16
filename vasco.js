let des = document.getElementById('des').getContext('2d')

let campo = new Bg(0,0,500,700, 'assets/')
let campo_2 = new Bg(0,-700,500,700, 'assets/')
let vasco = new Vasco(0,0,50,50, 'assets/')
let serie_b= new SerieB(200,500,100,100,'assets/')
let serie_c = new Serie_C(100,100,100,100,'assets/')


let texto_pontos = new Texto()
let texto_vidas = new Texto()   
let val_pts = new Texto()
let val_vidas = new Texto()
let texto_game_over = new Texto()
let jogar = true


function atualiza(){
    campo.move(3,700,0)
    campo_2.move(3,0,-700)
    if(jogar){
        vasco.move()
        serie_b.move()
        serie_c.move()
        colisao()
        game_over()
        vencer()
     //   nova_fase() //

    }

}