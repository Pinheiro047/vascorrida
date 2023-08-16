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

