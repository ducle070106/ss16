let a=prompt("Nhập giá trị thứ nhất");
let b=prompt("Nhập giá trị thứ hai");
let c=prompt("Nhập giá trị thứ ba");
if(a>b && a>c){
    document.write("<h1>giá trị nhất là ",a,"</h1>");
}else if(b>a && b>c){
    document.write("<h1>giá trị nhất là ",b,"</h1>");
}else{
    document.write("<h1>giá trị nhất là ",c,"</h1>");
}
