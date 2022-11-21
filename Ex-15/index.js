var x;

for(var n=1;n<=10;n++){

    x = window.prompt( n + ".indicate number:");
    
    console.log(x);

    if(x < 0){
        alert("NEGATIVE!");
        console.log("NEGATIVE!");
    }else if(x >= 0){
        alert("POSITIVE!");
        console.log("POSITIVE!");
    }

}