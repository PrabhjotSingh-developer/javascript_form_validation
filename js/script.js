function validateForm() {
    var firstName = document.getElementById("noName").value;
    var surName = document.getElementById("sirname").value;
    var Email_f = document.getElementById("mobile").value;
    var passWord = document.getElementById("pswrd").value;
    var dOb = document.getElementById("dob").value;
    flag = 1;

    // for name 
    if (firstName == null || firstName == "") {
       document.getElementById("errort").innerHTML = "Please enter the first name";
       //    alert("Please enter a valid name");
       flag = 0;
    } else if (surName == null || surName == "") {
       document.getElementById("errort").innerHTML = "Please enter the sur name";
       flag = 0;
    }
    //    return true;
    else {
       document.getElementById("errort").innerHTML = "";
       flag = 1;
    }


    //  Mobile number 

    if (Email_f == null || Email_f.length < 10 || Email_f == "") {
       document.getElementById("errorps").innerHTML = "Please enter the valid email";
       flag = 0;
    }
    else {
       document.getElementById("errorps").innerHTML = "";
       flag = 1;
    }

    //  password 
    if (passWord == null || passWord == "") {
       document.getElementById("password-error").innerHTML = "Please enter the password";
       flag = 0;
    }
    else if (passWord.length < 5) {
       document.getElementById("password-error").innerHTML = "Please enter the strong password";
       flag = 0;
    }
    else {
       document.getElementById("password-error").innerHTML = "";
       flag = 1;
    }
    // date of birth 
    if (dOb == null || dOb == "" || !pattern.test(dOb)) {
       document.getElementById("dob-error").innerHTML = "Please enter the date of birth";
       flag = 0;
    } else (
       flag = 1
    )

    if (flag) {
       return true;
    } else {
       return false;
    }
 }