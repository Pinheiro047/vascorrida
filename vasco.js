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

function colisao(){
    if(vasco.colid(serie_c)){
        serie_c.recomeca()
        vasco.vidas -=1
    }
    if(vasco.colid(serie_b)){
        serie_b.recomeca()
        vasco.pts -=1
    }
}

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

