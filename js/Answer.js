class Answer {
    constructor(){
        this.ans = createInput("Enter Answer");
        this.submit = createButton("SUBMIT");
        this.hintButton = createButton('HINT');
    }
    hide(){
        this.ans.hide();
        this.submit.hide();
    }
    display(){
        form.hide();
        this.ans.position(600,350);
        this.ans.style('background','green');
    
        this.submit.position(750,450);
        this.submit.style('background','lightblue');

        this.hintButton.position(1000,20);
        this.hintButton.style('background','red');


        this.submit.mousePressed(() => 
        {
            this.ans.hide();
            this.submit.hide();

            
                player.answer = this.ans.value(); 
                player.update();      
            
        })
       
    }

}