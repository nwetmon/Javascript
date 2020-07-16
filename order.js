var price,name,image;
var foodresultshow="";
var resultitem="";
var itemArr=[];
function addItems(){
    price=document.getElementById("price").value;
    name=document.getElementById("fname").value;
    var selectElement = document.querySelector('#categories'); 
     var selectedfood=selectElement.value; 

     var selectImage = document.querySelector('#image'); 
     var selectedfoodimg=selectImage.value;

   var itemList={foodname:name,foodprice:price,foodcategories:selectedfood,foodImg:selectedfoodimg};
   if(localStorage.getItem("nmafoodItems")!=undefined){
    itemArr=JSON.parse(localStorage.getItem("nmafoodItems"));
    
    }
   // alert(typeof(itemArr));
    itemArr.push(itemList);
   // console.log(itemArr);
    localStorage.setItem("nmafoodItems",JSON.stringify(itemArr));
    console.log(itemArr+"after"+localStorage.getItem('nmafoodItems'));
    alert("succesful");
    
}

var showArr=[];
function show(){
    
    showArr=JSON.parse(localStorage.getItem("nmafoodItems"));
    
    console.log(showArr);
    $("#result").empty();
    showArr.forEach(function(value,key){
        //alert(value.foodname);
        
        $("#result").append("<tr style='margin-left:20px;border: 1px solid orange;border-collapse: collapse;'><td style='padding: 5px;text-align: center;border: 1px solid orange;height:100px;background-color:black;color:white;'>"
                        +value.foodname+"</td><td style='padding: 5px;text-align: center;border: 1px solid orange;height:100px;background-color:black;color:white;'>"
                        +value.foodprice+"</td><td style='padding: 5px;text-align: center;border: 1px solid orange;height:100px;background-color:black;color:white;'>"
                        +value.foodcategories+
                        "</td><td style='padding: 5px;text-align: center;border: 1px solid orange;height:100px;background-color:black;color:white;'><img src='"
                        +value.foodImg+"' style='width:100px;height:100px;'></td><td style='padding: 5px;text-align: center;border: 1px solid orange;height:100px;background-color:black;color:white;'><button onclick='deletelocalstorage("+key+",this)'><i class='fas fa-trash-alt' style='font-size:20px;color:red'></i></button>&nbsp;<button onclick='updateItems("+key+",this)'><i class='far fa-edit' style='font-size:20px;color:blue'></i></button></td></tr>");
    });
    

}



var showpizzaArr=[];
var orderres="";
var price;
var name;
var categories;

function showPizza(){
    $("#showritem").empty();
    if(localStorage.getItem("nmafoodItems")!=undefined){
        showpizzaArr=JSON.parse(localStorage.getItem("nmafoodItems"));
    }
    console.log(showpizzaArr);
    
        showpizzaArr.forEach(function(value,key){
        if(showpizzaArr[key].foodcategories=="Pizza"){
            orderres+="<div style='display:inline-block;border:1px solid black;border-radius:5px;width:700px;margin-top:20px;'><img src='"+showpizzaArr[key].foodImg+"' style='width:100px;height:100px;float:left;'><h3 style='float:left;margin-left:30px'>"
                        +showpizzaArr[key].foodname+"</h3><br><p style='float:right;margin-top:-15px;margin-right:20px;background-color:wheat;width:55px;color:red;font-size:20px;text-align:center;'>$"
                        +showpizzaArr[key].foodprice+"</p><br><button style='float:right;margin-top:25px;margin-right:-50px;background-color:red;width:100px;color:white;font-size:20px;text-align:center;border:none;' onclick='orderPizza("+key+")'>+ ORDER</button></div><br>"
        
        $("#showritem").append(orderres);
        
        orderres="";
        
        }
        
    });
    
   
}
var showjuiceArr=[];
var orderres="";
var price;
var name;

var categories;
function showJuice(){
    $("#showritem").empty();
    if(localStorage.getItem("nmafoodItems")!=undefined){
        showjuiceArr=JSON.parse(localStorage.getItem("nmafoodItems"));
    }
    console.log(showjuiceArr);
    
    showjuiceArr.forEach(function(value,key){
        if(showjuiceArr[key].foodcategories=="Juice"){
            orderres+="<div style='display:inline-block;border:1px solid black;border-radius:5px;width:700px;margin-top:20px;background-color:white;'><img src='"+showjuiceArr[key].foodImg+"' style='width:100px;height:100px;float:left;'><h3 style='float:left;margin-left:30px'>"
                        +showjuiceArr[key].foodname+"</h3><br><p style='float:right;margin-top:-15px;margin-right:20px;background-color:wheat;width:55px;color:red;font-size:20px;text-align:center;'>$"
                        +showjuiceArr[key].foodprice+"</p><br><button style='float:right;margin-top:25px;margin-right:-50px;background-color:red;width:100px;color:white;font-size:20px;text-align:center;border:none;' onclick='orderJuice("+key+")'>+ ORDER</button></div><br>"
        
        $("#showritem").append(orderres);
        
        orderres="";
       
        }
        
    });

}
var showsnackArr=[];
var orderres="";
var price;
var name;
var categories;
function showSnacks(){
    $("#showritem").empty();
    if(localStorage.getItem("nmafoodItems")!=undefined){
        showsnackArr=JSON.parse(localStorage.getItem("nmafoodItems"));
    }
    console.log(showsnackArr);
    
        showsnackArr.forEach(function(value,key){
        if(showsnackArr[key].foodcategories=="Snacks"){
            orderres+="<div style='display:inline-block;border:1px solid black;border-radius:5px;width:700px;margin-top:20px;'><img src='"+showsnackArr[key].foodImg+"' style='width:100px;height:100px;float:left;'><h3 style='float:left;margin-left:30px'>"
            +showsnackArr[key].foodname+"</h3><br><p style='float:right;margin-top:-15px;margin-right:20px;background-color:wheat;width:55px;color:red;font-size:20px;text-align:center;'>$"
            +showsnackArr[key].foodprice+"</p><br><button style='float:right;margin-top:25px;margin-right:-50px;background-color:red;width:100px;color:white;font-size:20px;text-align:center;border:none;' onclick='orderSnack("+key+")'>+ ORDER</button></div><br>"

            $("#showritem").append(orderres);
            orderres="";
        }
        
    });

}



var orderpizzaArr=[];

var orderpizzaresult="";
var resord="";

function orderPizza(key){
    //$("#showorderpizza").empty();
    console.log(showpizzaArr);
    var p=parseInt(showpizzaArr[key].foodprice);
    
    var n=showpizzaArr[key].foodname;
    var qty=1;
    var total=p*qty;
    var pizzatot=0;
    var orderpizzaList={foodname:n,foodprice:p,quantity:qty,totalprice:total};
    
    orderpizzaArr.push(orderpizzaList);
    console.log(orderpizzaArr);
    orderpizzaArr.forEach(function(value,key){
        orderpizzaresult+="<tr style='margin-left:20px;border: 1px solid orange;border-collapse: collapse;'><td style='padding: 5px;text-align: center;border: 1px solid orange;height:100px;background-color:black;color:white;'>"
                            +orderpizzaArr[key].foodname +"</td><td style='padding: 5px;text-align: center;border: 1px solid orange;height:100px;background-color:black;color:white;'>"+orderpizzaArr[key].foodprice
                            +"</td><td style='padding: 5px;text-align: center;border: 1px solid orange;height:100px;background-color:black;color:white;'>"+orderpizzaArr[key].quantity+"</td><td style='padding: 5px;text-align: center;border: 1px solid orange;height:100px;background-color:black;color:white;'>"
                            +orderpizzaArr[key].totalprice+"</td></tr>";
        
        pizzatot+=parseInt(orderpizzaArr[key].foodprice);
        

    });
    
    $("#showorderpizza").empty();
    $("#showorderpizza").append(orderpizzaresult);
    orderpizzaresult="";
    $("#showtotalprice").empty();
    $("#showtotalprice").append(parseInt(pizzatot));
    pizzatot="";
   
}

var orderjuiceArr=[];

function orderJuice(key){
    //$("#showorderpizza").empty();
    console.log(showjuiceArr);
    var p=parseInt(showjuiceArr[key].foodprice);
    
    var n=showjuiceArr[key].foodname;
    var qty=1;
    var total=p*qty;
    var juicetot=0;
    var orderpizzaList={foodname:n,foodprice:p,quantity:qty,totalprice:total};
    
    orderjuiceArr.push(orderpizzaList);
    console.log(orderjuiceArr);
    orderjuiceArr.forEach(function(value,key){
        orderpizzaresult+="<tr style='margin-left:20px;border: 1px solid orange;border-collapse: collapse;'><td style='padding: 5px;text-align: center;border: 1px solid orange;height:100px;background-color:black;color:white;'>"
                            +orderjuiceArr[key].foodname +"</td><td style='padding: 5px;text-align: center;border: 1px solid orange;height:100px;background-color:black;color:white;'>"+orderjuiceArr[key].foodprice
                            +"</td><td style='padding: 5px;text-align: center;border: 1px solid orange;height:100px;background-color:black;color:white;'>"+orderjuiceArr[key].quantity+"</td><td style='padding: 5px;text-align: center;border: 1px solid orange;height:100px;background-color:black;color:white;'>"
                            +orderjuiceArr[key].totalprice+"</td></tr>";
        
        juicetot+=parseInt(orderjuiceArr[key].foodprice);
        

    });
    
    $("#showorderpizza").empty();
    $("#showorderpizza").append(orderpizzaresult);
    orderpizzaresult="";
    $("#showtotalprice").empty();
    $("#showtotalprice").append(parseInt(juicetot));
    juicetot="";
}


var ordersnackArr=[];

function orderSnack(key){
    
    console.log(showsnackArr);
    var p=parseInt(showsnackArr[key].foodprice);
    
    var n=showsnackArr[key].foodname;
    var qty=1;
    var total=p*qty;
    var snacktot=0;
    var orderpizzaList={foodname:n,foodprice:p,quantity:qty,totalprice:total};
    
    ordersnackArr.push(orderpizzaList);
    console.log(ordersnackArr);
    ordersnackArr.forEach(function(value,key){
        orderpizzaresult+="<tr style='margin-left:20px;border: 1px solid orange;border-collapse: collapse;'><td style='padding: 5px;text-align: center;border: 1px solid orange;height:100px;background-color:black;color:white;'>"
                            +ordersnackArr[key].foodname +"</td><td style='padding: 5px;text-align: center;border: 1px solid orange;height:100px;background-color:black;color:white;'>"+ordersnackArr[key].foodprice
                            +"</td><td style='padding: 5px;text-align: center;border: 1px solid orange;height:100px;background-color:black;color:white;'>"+ordersnackArr[key].quantity+"</td><td style='padding: 5px;text-align: center;border: 1px solid orange;height:100px;background-color:black;color:white;'>"
                            +ordersnackArr[key].totalprice+"</td></tr>";
        
        snacktot+=parseInt(ordersnackArr[key].foodprice);
        

    });
    
    $("#showorderpizza").empty();
    $("#showorderpizza").append(orderpizzaresult);
    //orderpizzaresult++;
    orderpizzaresult="";
    $("#showtotalprice").empty();
    $("#showtotalprice").append(parseInt(snacktot));
    snacktot="";
}


var arrdelete=[];
function deletelocalstorage(key,t){
    $(t).parent().parent().remove();
     var ditem=JSON.parse(localStorage.getItem("nmafoodItems"));
    
    for(var i=0;i<ditem.length;i++){
         if(ditem[key]!=ditem[i]){
           arrdelete.push(ditem[i]);
         
        }
    }
    localStorage.removeItem("nmafoodItems");
    localStorage.setItem("nmafoodItems",JSON.stringify(arrdelete));
    
}
var arrupdate=[];
function updateItems(key){
    var uitem=JSON.parse(localStorage.getItem("nmafoodItems"));
    arrupdate=uitem;
    //alert(arrupdate.length);
    //alert(uitem.length);
    
    for(var i=0;i<arrupdate.length;i++){
        if(arrupdate[key]==arrupdate[i]){
          // alert(arrupdate[i].foodname+"<br>"+arrupdate[i].foodprice+"<br>"+arrupdate[i].foodcategories+"<br>"+arrupdate[i].foodImg);
        //    document.getElementById("fname").innerHTML=arrupdate[i].foodname;
        //    document.getElementById("price").innerHTML=arrupdate[i].foodprice;
        //    document.getElementById("categories").innerHTML=arrupdate[i].foodcategories;
        //    document.getElementById("image").innerHTML=arrupdate[i].foodImg;

        $("#fname").val(arrupdate[i].foodname);
        $("#price").val(arrupdate[i].foodprice);
        $("#categories").val(arrupdate[i].foodcategories);
        $("#image").val(arrupdate[i].foodImg);
        $("#updshow").val(key);
       
        }
    }
    


}
var showupdateArr=[];
function showUpdate(){
    var n=$("#fname").val();
    var p=$("#price").val();
    var cat=$("#categories").val();
    var img=$("#image").val();
    var updkey=$("#updshow").val();
    var items=JSON.parse(localStorage.getItem("nmafoodItems"));
    for(var i=0;i<items.length;i++){
        if(items[updkey]==items[i]){
            items[i].foodname=n;
            items[i].foodprice=p;
            items[i].foodcategories=cat;
            items[i].foodImg=img;
            localStorage.setItem("nmafoodItems",JSON.stringify(items));
             alert("update succeful!");
        }
    }
    
}



















