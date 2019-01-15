for(def i = 0; i <= 300; i ++){
    println(i)
    if(i == 0){
        println("This is 0, no jingle or jangle, yo.")
    }else if(i % 7 == 0 && i % 4 == 0){
        println(" Jingle Jangle, yo.")
    }else if(i % 4 == 0){
    println(" Jingle, yo.")
    }else if(i % 7 == 0){
        println(" Jangle, yo.")
    }
}

println("Please Enter Your New Password")
def password = System.in.newReader().readLine()
if(password.length() >= 8){

    for(int i = 0; i<password.length(); i++){
    
        if((password.indexOf(i)).isInteger()){
            print("You've entered ${password}, That does meet the reuirements.")
            boolean verified = true;
        }else{
            boolean verified = false;
        }
    }
}


