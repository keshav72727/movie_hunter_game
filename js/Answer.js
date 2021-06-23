class Answer {
    constructor(){
        this.ans = createInput("");
        this.submit = createButton("SUBMIT");
    }
    hide(){
        this.ans.hide();
        this.submit.hide();
    }
    display(){
        this.ans.position(600,350);
        this.ans.style('background','green');
    
        this.submit.position(750,450);
        this.submit.style('background','lightblue');

        this.submit.mousePressed(() => 
        {
            this.ans.hide();
            this.submit.hide();

            if(playerCount === player.index){
                player.answer = this.ans.value(); 
                player.update(player.answer);  
            }
        })
    }
}