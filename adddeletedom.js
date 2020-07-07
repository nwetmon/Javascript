
var text;
var textArr=[];
function add(){
    text=document.getElementById("val").value;
    var res="";
    var textList={name:text};
    textArr.push(textList);
    console.log(textArr);
    textArr.forEach(function(value,key){
        res+="<div id='clear' style='border:1px solid black;margin-left: 20px;margin-top: 30px;width:340px;height:40px;'>"+value.name+
        "<input type='button' value='x'  id='btndel' style='border-radius: 45px;color:white;background-color:red;float:right;border:none;height:40px;width:40px;' onclick='deleteData("+key+")'></div>";
        
    });
    
    document.getElementById("result").innerHTML=res;
    document.getElementById("val").value="";


}
// var delArr=[];
// var clearres="";
// var finalres="";
function deleteData(i){
    console.log(textArr.length);
    textArr.splice(textArr[i],1);
    
    document.getElementById("clear").remove();
    
}


   
    



