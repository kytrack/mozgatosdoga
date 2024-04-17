var gomb = document.getElementById("mozgo");
var fent =0;
var bal=0;

function fel(){
    fent-=10;
    mozgo.style.marginTop= fent +"px";
}
function le(){
    fent+=10;
    mozgo.style.marginTop= fent +"px";
}
function jobbra(){
    bal+=10;
    mozgo.style.marginLeft= bal +"px";
}
function balra(){
    bal-=10;
    mozgo.style.marginLeft= bal +"px";
}




function szelesseg(){
    mozgo.style.width=document.getElementById("szeles").value +"px"
}
function magassag(){
    mozgo.style.height=document.getElementById("magas").value +"px"
}