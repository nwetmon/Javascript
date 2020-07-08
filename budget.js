var budgetamt=0;
var exesub=0;
function myBudget(){
    // var budget=document.getElementById("budgettext").value;
    var budget=$("#budgettext").val();
    budgetamt+=parseInt(budget);
    //document.getElementById("budgetprice").innerHTML=budgetamt;
    $("#budgetprice").text(budgetamt);
    culculateBal()

   

}



var expamt=0;
var totpay=0;
var title=new Array();
var nowexp=new Array();
var i;
var addpric="";
var addicon="";
var expdatares="";
var tit="";
var exp="";
function myExpense(){
    
    //var budget=document.getElementById("budgettext").value;
    var budget=$("#budgettext").val();
    //nowexp.push(document.getElementById("expense").value);
    exp=$("#expense").val();
    nowexp.push(exp);
    var nowexppric="";
    for(i=0;i<nowexp.length;i++){
        nowexppric=nowexp[i];
       
    }

    //document.getElementById("expenseprice1").innerHTML+=nowexppric;
    addpric+=nowexppric;
    $("#expenseprice1").text(addpric);
    totpay+=parseInt(nowexppric);
    //var nowpay=document.getElementById("expensseprice").innerHTML=totpay;
    var nowpay=$("#expensseprice").text(totpay);
    
    $("#editdelete").text(addicon);
    tit=$("#expensetitlename").val();
    var expensecollectdata={title:tit,price:exp};
    title.push(expensecollectdata);
    console.log(title);
    title.forEach(function(value,key){
        expdatares="<tr><td style='text-align: center;width: 120px;font-size: 30px;font-weight: bold;color: red;'>"+title[key].title+"</td><td style='text-align: center;width: 120px;font-size: 30px;font-weight: bold;color: red;'>"+title[key].price+"</td><td style='text-align: center;width: 120px;font-size: 30px;font-weight: bold;color: red;'><i class='fa fa-edit' style='font-size: 10px; color: blue;'></i><i class='fa fa-trash' style='font-size: 15px; color: red;'></i></td></tr>";

    });
    $("#res").append(expdatares);
    $("#res").append("");
    expdatares="";
    $("#expensetitlename").val("");
    $("#expense").val("");
   
    culculateBal()
    
    

}


function culculateBal(){
    
    $("#totalbalance").text(budgetamt-totpay);
  
}







