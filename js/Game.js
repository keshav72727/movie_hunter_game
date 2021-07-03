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

    
        
    }
    
    
    

    play(){
        form.hide();

        Player.getPlayerInfo();
        
        player.getPlayerAtEnd();

        Player.fetchData();

        background(movie1);

        text(this.score,600,300);
        
        answers.hintButton.mousePressed(()=>
        {
            answers.ans.hide();
            answers.submit.hide();
            
            background(hint1);
        })

        
        if(allMovieNames !== undefined && allPlayers !== undefined){ 
            //var index1 = 0 
            //var index2 = 0
            for(var AllmovieAns in allMovieNames)
            {
                //index1 = index1 + 1;
                for (var plr in allPlayers)
                {
                    //index2 = index2 + 1;
                    if(player.answer === AllmovieAns){
                        score = score+50;
                    }
                }
            }
        }
        
        drawSprites();
        
    }

    end(){
    
    }   
    
}