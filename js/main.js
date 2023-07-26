var coloName=document.getElementById("inupt-colorchange");
console.log(coloName);
function colorChange() {
    var color=coloName.value;
    console.log(color);
    coloName.style.backgroundColor=color;
}


var para=document.getElementsByClassName("cols");
console.log("cols");

var a=["red","black","yellow","orange","blue","green"]

var number=(Math.floor(Math.random()*a.length));
console.log(number);
para[1].style.backgroundColor=a[number];


var para=document.getElementsByClassName("cols");
console.log("cols");

var a=["red","black","yellow","orange","blue","green"]

var number=(Math.floor(Math.random()*a.length));
console.log(number);
para[0].style.backgroundColor=a[number];


var btn=document.getElementById("butid")
console.log("butid")
function buton(){
    var b=["red","black","yellow","orange","blue","green"]

var numbers=(Math.floor(Math.random()*b.length));
console.log(numbers);
    
    document.body.style.backgroundColor=b[numbers];
}

/*var colColor=document.getElementsByClassName("cols")
console.log(colColor);
function colorChanges(){
    var a=["red","black","yellow","orange","blue","green"]

var number=(Math.floor(Math.random()*a.length));
console.log(number);
    var colors=a[number];
    console.log(colors);
    colColor.style.backgroundColor=a[number]*/
