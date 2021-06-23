/*class Movie{
    constructor(){
        this.index = null;
        this.moviename = null;
        this.score = 0;
        this.answer = null;        
    }

    getAnswer(){
        var MovieNAmeRef = database.ref('movieAnswer');
        MovieNAmeRef.on("value",function(data){
            movieAnswer = data.val();
        })
    }

    updateAnswer(answer){
        database.ref('/').update({
            movieAnswer:answer
        })
    }

    static getAnswerInfo(){
        var AnswerInfoRef = database.ref('Answer');
        AnswerInfoRef.on("value",(data)=>{
            allAnswer = data.val();
        })
    }
}*/