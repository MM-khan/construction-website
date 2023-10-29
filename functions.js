const menu = document.querySelector(".navbar-btn");
let menuOpen = false;

menu.addEventListener("click" , () => { 

    if(!menuOpen)
    {
        menu.classList.add("open")
        menuOpen = true;
    }else
    {
        menu.classList.remove("open")
        menuOpen = false;
    }
})

    // log in function

    function logPass_show()
    {
        var logeye = document.querySelector(".eyeicon");
        var loghide = document.querySelector(".eyeslash");
        
        var logpass = document.querySelector(".form-pass");
        if(logpass.type ==  "password")
        {
            logpass.type = "text";
             logeye.style.display = "block";
             logeye.style.marginLeft = "95%";
             logeye.style.marginTop = "-4%";
             loghide.style.display = "none";
        }else
        {
            logpass.type = "password";
            logeye.style.display = "none";
            loghide.style.display = "block";

        }
    }
    function logpass_hide()
    {
        var logpass = document.querySelector(".form-pass");
        var loghide = document.querySelector(".eyeslash");
        var logeye = document.querySelector(".eyeicon");

        if(logpass.type ==  "text")
        {
            logpass.type = "password";
            logeye.style.display = "none";
             loghide.style.display = "block";
             loghide.style.marginLeft = "95%";
             loghide.style.marginTop = "-4%";
             //showeye.style.marginLeft = "-2%";
             logeye.style.marginTop = "-4%";

           
        }else
        {
            logpass.type = "text";
            logeye.style.display = "block";
            loghide.style.display = "none";
            logeye.style.marginLeft = "95%";
             logeye.style.marginBottom = "-50px";

        }

    }






    function logvalidate()
    {
        
        var logform = document.logform;
        var N_error = document.querySelector(".name-error");
        var M_error = document.querySelector(".email-error");
        var P_error = document.querySelector(".pass-error");

        var nameinput = document.querySelector(".name-container");
        var mailinput = document.querySelector(".mail-container");
        var passinput = document.querySelector(".pass-container");
       
        if(logform.logname.value.trim().length < 5)
        {
            N_error.innerHTML = "Please enter the valid name! ";
            N_error.style.marginTop ="-35px";
            logform.logname.style.border ="none";
            nameinput.style.border = "2px solid red";
            
        }else
        {
            N_error.innerHTML = '';
            N_error.style.marginTop ="35px";
            nameinput.style.border = "2px solid gray";
        }
        if(logform.logmail.value.indexOf('@') < 7)
        {
            M_error.innerHTML= 'Invalid Email';
           M_error.style.marginTop ="-35px";
            logform.logmail.style.border = 'none';
            mailinput.style.border = "2px solid red";
              
        }else
        {
            M_error.innerHTML = '';
            M_error.style.marginTop ="35px";
            mailinput.style.border = "2px solid gray";
        }
        if(logform.logpass.value.length < 8)
        {
            P_error.innerHTML = 'Password must be greater than 8 characters!';
            P_error.style.marginTop ="-35px";
            logform.logpass.style.border = "none";
            passinput.style.border = "2px solid red";
            
        }else
        {
            P_error.innerHTML = '';
            P_error.style.marginTop ="35px";
            passinput.style.border = "2px solid gray";
        }
        return false;
        
    }

    
     //   sign up form functionality


     function Pass_show()
    {
        var showeye = document.querySelector(".showeye");
        var hideeye = document.querySelector(".hideeye");
        
        var signpass = document.querySelector(".sign-pass");
        if(signpass.type ==  "password")
        {
            signpass.type = "text";
             showeye.style.display = "block";
             hideeye.style.display = "none";
        }else
        {
            signpass.type = "password";
            showeye.style.display = "none";
            hideeye.style.display = "block";

        }
    }
    function pass_hide()
    {
        var signpass = document.querySelector(".sign-pass");
        var hideeye = document.querySelector(".hideeye");
        var showeye = document.querySelector(".showeye");

        if(signpass.type ==  "text")
        {
            signpass.type = "password";
             showeye.style.display = "none";
             hideeye.style.display = "block";
             hideeye.style.marginLeft = "95%";
             hideeye.style.marginTop = "-4%";
             //showeye.style.marginLeft = "-2%";
             showeye.style.marginTop = "-4%";

           
        }else
        {
            signpass.type = "text";
            showeye.style.display = "block";
            hideeye.style.display = "none";
            showeye.style.marginLeft = "95%";
             showeye.style.marginBottom = "-50px";

        }

    }

    function validate()
    {
        
        var forms = document.form;
        var namemsg = document.querySelector("#fullname");
        var mailmsg = document.querySelector("#email");
        var passwordmsg = document.querySelector("#password");

        signN = document.querySelector(".signN-container");
        signM = document.querySelector(".signM-container");
        signP = document.querySelector(".signP-container");
        
        if(forms.fname.value.trim().length < 5)
        {
            namemsg.innerHTML = 'Please enter a valid name';
            namemsg.style.marginTop ="-35px";
            forms.fname.style.border ="none";
            signN.style.border = "2px solid red";
            
        }else
        {
            namemsg.innerHTML = '';
            namemsg.style.marginTop ="35px";
            signN.style.border = "2px solid gray";
        }
        if(forms.email.value.indexOf('@') < 5)
        {					
            mailmsg.innerHTML= 'Invalid Email';
            mailmsg.style.marginTop ="-35px";
            forms.email.style.border = 'none';
            signM.style.border = "2px solid red";
            
        }else
        {
            mailmsg.innerHTML= '';
            mailmsg.style.marginTop ="35px";
            signM.style.border = "2px solid gray";
        }
        
        if(forms.password.value.length < 8)
        {
            passwordmsg.innerHTML = 'Password must be greater than 8 characters!';
            passwordmsg.style.marginTop ="-35px";
            forms.password.style.border = "none";
            signP.style.border = "2px solid red";
        }else
        {
            passwordmsg.innerHTML = "";
            passwordmsg.style.marginTop ="35px";
            signP.style.border = "2px solid gray";
        }
           
        return false;
    }
   
    




