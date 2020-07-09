var budgetamt=0;
var exesub=0;
var budget;
function myBudget(){
   
    budget=$("#budgettext").val();
    budgetamt+=parseInt(budget);
    //document.getElementById("budgetprice").innerHTML=budgetamt;
    $("#budgetprice").text(budgetamt);
    $("#budgettext").val("");
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
    
    
    var budget=$("#budgettext").val();
    
    exp=$("#expense").val();
    nowexp.push(exp);
    var nowexppric="";
    for(i=0;i<nowexp.length;i++){
        nowexppric=nowexp[i];
       
    }

    

    
    addpric+=nowexppric;

    $("#expenseprice1").text(addpric);
    totpay+=parseInt(nowexppric);
    
    
    
    var nowpay=$("#expensseprice").text(totpay);
    
    $("#editdelete").text(addicon);
    tit=$("#expensetitlename").val();
    var expensecollectdata={title:tit,price:exp};
    title.push(expensecollectdata);
    console.log(title);

    

    title.forEach(function(value,key){
        expdatares="<tr><td style='text-align: center;width: 120px;font-size: 30px;font-weight: bold;color: red;'>"+title[key].title+"</td><td style='text-align: center;width: 120px;font-size: 30px;font-weight: bold;color: red;'>"+title[key].price+"</td><td style='text-align: center;width: 120px;font-size: 30px;font-weight: bold;color: red;'><Button onclick='editdata("+key+",this)'><i class='fa fa-edit' style='font-size: 15px; color: blue;'></i></Button><Button onclick='deletedata("+key+",this)'><i class='fa fa-trash' style='font-size: 15px; color: red;'></i></button></td></tr>";

    });
    $("#res").append(expdatares);
    //expenseprice
    //$("#expensseprice").text(title[key].price);
    $("#res").append("");
    expdatares="";
    $("#expensetitlename").val("");
    $("#expense").val("");

    //add expenseprice
    
   
    culculateBal()
    
    

}


function culculateBal(){
    
    $("#totalbalance").text(budgetamt-totpay);
    //$("#totalbalance").text(budgetamt-exp);
  
}
var remainprice="";
function deletedata(k,t){
    $(t).parent().parent().remove();
    title.splice(title[k].price,1);
    //$("#res").append(expdatares);
    //remainprice=totpay-(title[key].price);
    totpay-=title[k].price;
    remainprice=totpay;
    $("#expensseprice").text(remainprice);
    culculateBal();
}
var editremain="";
function editdata(k,t){
    // editremain=$(t).closest("tr");
    editremain=$(t).parent().parent().val();
    console.log(editremain);

}







