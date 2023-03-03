function guess()
{
    var poopypants=Math.random()*100;
    poopypants=Math.floor(poopypants)
    while(true){
    
    var geo=prompt("vad er tallet")
    if(geo==poopypants){
        alert("rigtigt")
        break
    }else if(geo < poopypants){
        alert("mere")
    }else{
        alert("mindre")
    }
    }
}
guess();