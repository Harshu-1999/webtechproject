let form=document.querySelector("form");
let userName=document.querySelectorAll("input")[0];
let password=document.querySelectorAll("input")[1];
let euser=document.querySelectorAll("span")[0];
let epass=document.querySelectorAll("span")[1];
let eform=document.querySelectorAll("span")[2];
let datafromStorage=JSON.parse(localStorage.getItem("data"));

console.log(datafromStorage);


console.log(form,userName,password,euser,epass,eform);

form.addEventListener("submit",(e)=>
{
    euser.innerHTML="";
    epass.innerHTML="";
    eform.innerHTML="";

//matching  login details
let matchData=datafromStorage.find((e)=>
{
    if((e.mobile_no==userName.value && e.pass==password.value)
    || (e.mail==userName.value && e.pass==password.value))
    {
    return e;

    }
    
})



if(userName.value=="" && password.value=="")
{
euser.innerHTML="enter the email or number"
epass.innerHTML="enter the password"
e.preventDefault();

}
else if(userName.value=="")
{
euser.innerHTML="enter the email or number"
e.preventDefault();
}
else if(password.value=="")
{
epass.innerHTML="enter the password"
e.preventDefault();
}
// else if(userName.value="kavita" && password.value=="123456")
else if(matchData)
{
alert("welcome to the page")
localStorage.setItem("oneuser",JSON.stringify(matchData));
}
else{
    eform.innerHTML="Match not found"
    e.preventDefault();
}
});

let h3=document.querySelector("h3");
h3.addEventListener("click",()=>{
    if(h3.innerHTML=="pass"){
        password.type="text";
        h3.innerHTML="hide";
    }else{
        h3.innerHTML="pass"
        password.type="password";
    }
})