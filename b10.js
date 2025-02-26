let firstNumber = +prompt("Nhập vào khoảng random số thứ nhất");
let secondNumber = +prompt("Nhập vào khoảng random số thứ hai");
if(firstNumber>secondNumber){
    document.write(secondNumber+Math.floor((firstNumber-secondNumber)*Math.random()));
}else{
    document.write(firstNumber+Math.floor((secondNumber-firstNumber)*Math.random()));
}
