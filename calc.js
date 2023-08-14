function fun(a){
    document.getElementById("display").value+=a;
}
function c(){
    document.getElementById("display").value="";
}
function res(){
    var a=document.getElementById("display").value;

    document.getElementById("display").value=a+"="+eval(a);
}
function D(){
    var y=document.getElementById("display").value;
    document.getElementById("display").value=y.slice(1);
}
