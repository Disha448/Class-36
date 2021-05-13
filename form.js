class Form{
    constructor(){
        this.input = createInput("name")

       this.button = createButton('Play')

        this.greeting = createElement('h3')
    }

    hide(){
        this.input.hide()
        this.button.hide()
    }

    display(){
        var title = createElement('h2')
        title.html("Car Racing Game ")
        title.position (130,0)

       

        this.input.position(130,160)

        this.button.position(250,200)

        this.button.mousePressed(function(){
            this.input.hide()
            this.button.hide() 

            player.name = this.input.value()
            playercount = playercount+1
            player.index = playercount
            player.update()
            player.updateCount(playercount)
            this.greeting.html("hello"+name)
            this.greeting.position(130,160)

            
        })

        
    }

    
}