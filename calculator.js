
var res=0;


function calculate(value){
var x=document.getElementById("no1").value;
var y=document.getElementById("no2").value;
var a=document.getElementById("btnadd").value;
var b=document.getElementById("btnsub").value;
var c=document.getElementById("btnmul").value;
var d=document.getElementById("btndiv").value;
    switch(value){
        case "+":
            res=parseInt(x)+parseInt(y);
            document.getElementById("result").innerHTML=res;
            break;
        case "-":
            res=x-y;
            document.getElementById("result").innerHTML=res;
            break;
        case "*":
            res=x*y;
            document.getElementById("result").innerHTML=res;
            break;
        case "/":
            res=x/y;
            document.getElementById("result").innerHTML=res;
            break;
        default:
            document.getElementById("result").innerHTML="sorry";
        
    }
    //document.getElementById("result").innerHTML=res;
    //console.log(res);

}

var caldate=0;
function chectDate(){
    // var now=new Date();
    // var today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
    // var yearNow=now.getFullYear();
    // var monthNow=now.getMonth();
    // var dateNow=now.getDate();

    var d=document.getElementById("date").value;
    var curdate=new Date().getFullYear();
    caldate=curdate-d;
    console.log(caldate);
    if(caldate<18){
        document.getElementById("res").innerHTML="Your age is less than 18 years";
        
    }
    else{
        document.getElementById("res").innerHTML="Your age is greather than 18 years";
    }
    
}



