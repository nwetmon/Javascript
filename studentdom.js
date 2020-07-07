var studata="";
var stuAddr=[];
var i;
var radiores;
var checkboxres="";
var checkArr=[];
function collectStudata(){
    var n=document.getElementById("name").value;
    var ph=document.getElementById("phone").value;
    var e=document.getElementById("email").value;
    var add=document.getElementById("address").value;
    
    

    var gen=document.getElementsByName("gender");
    for(i=0;i<gen.length;i++){
        if(gen[i].checked)
        radiores=gen[i].value;
    }
    
    
    // var year=document.querySelectorAll('input[name="year"]:checked');
    // year.forEach((checkbox)=>{
    //     //checkArr.push(checkbox.value);
    //     var chkyear=checkbox.value;
    // });
    var chkyear=document.getElementsByName("year");
    for(i=0;i<chkyear.length;i++){
        if(chkyear[i].checked)
        checkboxres+=chkyear[i].value;

    }
    


    var stuyear="Fifth year";
    var stuList={name:n,phone:ph,email:e,address:add,gender:radiores,year:stuyear,major:checkboxres};
    stuAddr.push(stuList);
    console.log(stuAddr);
    
    stuAddr.forEach(function(value,key){
        studata+="<tr><td>"+stuAddr[key].name+"</td><td>"+stuAddr[key].phone+"</td><td>"+stuAddr[key].email+"</td><td>"+stuAddr[key].address+"</td><td>"+stuAddr[key].gender+"</td><td>"+
                stuAddr[key].year+"</td><td>"+stuAddr[key].major+"</td><td></tr>";
    });
    document.getElementById("table").innerHTML=studata;
    studata="";
    document.getElementById("name").value="";
    document.getElementById("phone").value="";
    document.getElementById("email").value="";
    document.getElementById("address").value="";
    radiores="";
    checkboxres="";

    
    
    
}