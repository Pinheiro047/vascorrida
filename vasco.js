let des = document.getElementById('des').getContext('2d')

let bg = new Bg(0,0,600,700, 'assets/gramado3.jpg')
let bg2 = new Bg2(0,-700,600,700, 'assets/gramado3.jpg')
let tres = new Tres(0,0,50,50, 'assets/trespTS.png')
let vasco = new Vasco(200,500,100,100,'assets/brasao_vasco.png')
let serie_c = new Serie_c(100,100,100,100,'assets/seriec.png')

let topo_serie = new Texto()
let texto_pontos = new Texto()
let texto_vidas = new Texto()
let val_pts = new Texto()
let val_vidas = new Texto()

let texto_game_over = new Texto()
let jogar = true

//definição d instancia de som
const som1 = new Audio('assets/b_pra_a.mp3')
som1.volume = 1.0


const som2 = new Audio('assets/a_pra_b.mp3')
som2.volume = 1.0

const som3 = new Audio('assets/colisao_seriec.mp3')
som3.volume = 1.0

const som4 = new Audio('assets/ganharjogo.mp3')
som4.volume = 1.0

const som5 = new Audio('assets/perderjogo2.mp3')
som5.volume = 1.0

const som6 = new Audio('assets/colisao3pts.mp3')
som6.volume = 1.0

const som7 = new Audio('assets/colisao3pts.mp3')
som7.volume = 0.0

// let spider2 = new Obj(0,0,100,100,'darkorchid')

document.addEventListener('keydown', (event)=>{
    if(event.key === 'a'){
        // console.log('pressionado a tecla "a" ')
        vasco.dir = - 5
    }else if(event.key === 'd'){
        // console.log('pressionado a tecla "d" ')
        vasco.dir = 5
    }
    som7.play()
})
document.addEventListener('keyup', (event)=>{
    if(event.key === 'a'){
        // console.log('soltou a tecla "a" ')
        vasco.dir = 0
    }else if(event.key === 'd'){
        // console.log('soltou a tecla "d" ')
        vasco.dir = 0
    }
    som7.play()
})

function game_over(){
    if(vasco.vidas <= 0){
        som5.play()
        jogar = false
    }
}

function colisao(){
    if(vasco.colid(serie_c)){
        som3.play()
        serie_c.recomeca()
        vasco.vidas -=1
    }
    if(vasco.colid(tres)){
        som6.play()
        tres.recomeca()
        vasco.pts +=3
    }
}

function desenha(){
    bg.desenha_obj()
    bg2.desenha_obj()
    if(jogar){        
        vasco.desenha_obj()
        serie_c.desenha_obj()
        tres.desenha_obj()
        texto_pontos.des_texto('Pontos: ',326,40, 'orange','30px Times')
        texto_vidas.des_texto('Vidas: ',40,40, 'green','30px Times')
        topo_serie.des_texto('serie: B ',80,40, 'green','30px Times')
        val_pts.des_texto(vasco.pts,420,40, 'white','30px Times')
        val_vidas.des_texto(vasco.vidas,120,40, 'white','30px Times')
    }else{
        texto_game_over.des_texto('Game Over',128,350, 'green','50px Times')
    }
}

function atualiza(){
    bg.move(3,700,0)
    bg2.move(3,0,-700)
    if(jogar){
        vasco.move()
        serie_c.move()
        tres.move()
        colisao()
        game_over()
    }
    
}

function main(){
    des.clearRect(0,0,500,700)
    atualiza()
    desenha()
}

setInterval(main,10)