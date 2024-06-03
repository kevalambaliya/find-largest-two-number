function largtwo(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let msg;

    if(num1 > num2){
        msg = num1 +" IS A LARGEST NUMBER";
    }
    else if(num1 == num2){
        msg = num1 +"SAME NUMBER";
    }
    else{
        msg = num2 +" IS A LARGEST NUMBER";
    }

    document.getElementById("res").innerHTML = msg;
}