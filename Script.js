

    function largest(){
        var num1,num2,num3;
        num1=Number(document.getElementById("first").value);
        num2=Number(document.getElementById("second").value);
        num3=Number(document.getElementById("third").value);
       
        if(num1 >= num2 && num1 >= num3) {
            document.getElementById("number").innerHTML=num1;
        }
        else if (num2 >= num1 && num2 >= num3) {
            document.getElementById("number").innerHTML=num2;
        }
        else {
            document.getElementById("number").innerHTML=num3;
        }
        }