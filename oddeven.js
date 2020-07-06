var i,k;
var resnum="";
var num1,num2;
function caloddeven(){
    num1=document.getElementById("no1").value;
    num2=document.getElementById("no2").value;
    for(i=num1;i<=num2;i++){
        if((i%2)==0){
            //document.getElementById("result").innerHTML=i+"is Even";
            resnum=i+" is Even<br>";
        }
        else{
            //document.getElementById("result").innerHTML=i+"is Odd";
            resnum=i+" is Odd<br>";
        }
        document.getElementById("result").innerHTML+=resnum+"<br>";
    }
    // for(k=num2;k>=num1;k++){
    //     if((k%2)==0){
    //         //document.getElementById("result").innerHTML=i+"is Even";
    //         resnum=k+" is Even<br>";
    //     }
    //     else{
    //         //document.getElementById("result").innerHTML=i+"is Odd";
    //         resnum=k+" is Odd<br>";
    //     }
    //     document.getElementById("result1").innerHTML+=resnum+"<br>";
    // }
    
}
var j;
var resnumtow="";
function caloddeventwoandfive(){
    num1=document.getElementById("no1").value;
    num2=document.getElementById("no2").value;

    for(j=num1;j<=num2;j++){
        if((j%2)==0 && (j%5)==0){
            resnumtow=j+" is True<br>";
        }
        else{
            resnumtow=j+" is False<br>";
        }
        document.getElementById("result").innerHTML+=resnumtow+"<br>";
    }

}