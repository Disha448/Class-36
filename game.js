class Game{
    constructor(){

    }

    play(){
        form.hide()
        textSize(30)
        text("Game Start",120,100)
        player.getplayerinfo()
            if(allPlayers!=undefined){
                var display_position = 130
                for(var plr in allPlayers){
                    if(plr == "player"+player.index){
                        fill("red")   
                    }
                    else(){
                        fill("black")
                    }
                    display_position = display_position+20
                    text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,distance_position)
                }
            }  
            if(keyIsDown(UP_ARROW) && player.index!=null){
                player.distance = player.distance + 50
                player.update()
            } 
        }
    
    }

    getState(){
        var gameStateref = database.ref('gameState')
      gameStateref.on("value",function(data){
          gameState = data.val()
      })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    start(){
        if(gameState == 0){
            player = new Player()
            player.getCount()

            form = new Form()
            form.display()
        }
    }
}