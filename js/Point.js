class Point{
    constructor(){}

    authenticate(actualcode,enteredcode){

        if(actualcode === enteredcode.toUppercase())
        {
            return true
        }
        else{
            return false
        }
    }
}