let des = document.getElementById('des').getContext('2d')

let campo = new Bg(0,0,500,700, 'assets/gramado.jpg')
let campo_2 = new Bg(0,-700,500,700, 'assets/gramado2.jpg')
let vasco = new Vasco(0,0,50,50, 'assets/gigante_vasco.png')
let serie_b= new SerieB(200,500,100,100,'assets/serieb.png')
let serie_c = new Serie_C(100,100,100,100,'assets/seric.png')


let texto_pontos = new Texto()
let texto_vidas = new Texto()   
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