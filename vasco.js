let des = document.getElementById('des').getContext('2d')

let campo = new Campo(0,0,500,700, 'assets/gramado.jpg')
let campo_2 = new Campo_2(0,-700,500,700, 'assets/gramado2.jpg')
let vasco = new Vasco(0,0,50,50, 'assets/gigante_vasco.png')
let serie_b= new Serie_b(200,500,100,100,'assets/serieb.png')
let serie_c = new Serie_c(100,100,100,100,'assets/seric.png')


let texto_pontos = new Texto()
let texto_vidas = new Texto()   
let topo_serie = new Texto()   
let val_pts = new Texto()
let val_vidas = new Texto()
let texto_game_over = new Texto()
let jogar = true


document.addEventListener('keydown', (event)=>{
    if(event.key === 'a'){
        // console.log('pressionado a tecla "a" ')
        vasco.dir = - 5
    }else if(event.key === 'd'){
        // console.log('pressionado a tecla "d" ')
        vasco.dir = 5
    }else if(event.key === 's'){
        console.log('pressionado a tecla "s" ')
    }else if(event.key === 'w'){
        console.log('pressionado a tecla "w" ')
    }
})
document.addEventListener('keyup', (event)=>{
    if(event.key === 'a'){
        // console.log('soltou a tecla "a" ')
        vasco.dir = 0
    }else if(event.key === 'd'){
        // console.log('soltou a tecla "d" ')
        vasco.dir = 0
    }else if(event.key === 's'){
        console.log('soltou a tecla "s" ')
    }else if(event.key === 'w'){
        console.log('soltou a tecla "w" ')
    }
})


function desenha(){
    campo_1.desenha_obj()
    campo_2.desenha_obj()
    if(jogar){        
        vasco.desenha_obj()
        serie_c.desenha_obj()
        trespontos.desenha_obj()
        texto_pontos.des_texto('Pontos: ',326,40, 'orange','30px Times')
        texto_vidas.des_texto('Vidas: ',40,40, 'green','30px Times')
        topo_serie.des_texto('Série: ',150,40, 'green','30px Times')
        val_pts.des_texto(vasco.pts,420,40, 'white','30px Times')
        val_vidas.des_texto(vasco.vidas,120,40, 'white','30px Times')
    }else{
        texto_game_over.des_texto('Você foi rebaixado para a série C - Game Over',128,350, 'green','50px Times')
    }
}


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