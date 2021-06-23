class Game {
    constructor(){

    }
    
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function (data){
            gameState = data.val();
        }) 
    }
    
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if(gameState == 0){
            player = new Player();
            var playerCountref = await database.ref('playerCount').once("value");
            if (playerCountref.exists()){
                playerCount = playerCountref.val();
                player.getCount();   
            }
            background(bg_image);
            player.getCount();
            form = new Form();
            form.display();
        }

        if(gameState === 1){
            answers = new Answer();
            answers.display();
        }

    
        if (gameState === 1) {
           /*if (point.authenticate(Movie1,answers.submit.value())) {
               score ++
           }*/ 
        }
    }
    static getAnswer()
    {
        var playerAnswer = database.ref('movieName');
        playerAnswer.on("value",(data)=>{
            //allMovieNames = data.val();
        })
    
    }
    
    

    play(){
        form.hide();
        //textSize(25);
        //text("Game Start",120,100);
        
        Player.getPlayerInfo();
        
        player.getPlayerAtEnd();

        Game.getAnswer();

        background(movie1);

        text(this.score,600,300);
        
        

        
        /*if(allMovieNames !== undefined){  
            for(var AllmovieAns in allMovieNames){
                if(player.answer === AllmovieAns){
                    score = score+50;
                }

            }
        }*/
        drawSprites();
        
    }

    end(){
    
    }   
    
}