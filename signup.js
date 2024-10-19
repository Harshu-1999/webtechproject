let form=document.querySelector("form");
let firstName=document.querySelectorAll("input")[0];
let lastName=document.querySelectorAll("input")[1];
let email=document.querySelectorAll("input")[2];
let mobile=document.querySelectorAll("input")[3];
let createPassword=document.querySelectorAll("input")[4];
let confirmPassword=document.querySelectorAll("input")[5];

let efirst=document.querySelectorAll("span")[0]; //there e stands for error
let elast=document.querySelectorAll("span")[1];
let eemail=document.querySelectorAll("span")[2];
let emobile=document.querySelectorAll("span")[3];
let epass=document.querySelectorAll("span")[4];
let ecpass=document.querySelectorAll("span")[5];
//step 2
let storage=[];

//step 5
let dataFromStorage=JSON.parse(localStorage.getItem("data"));

if (dataFromStorage) {
    storage=dataFromStorage;
}

console.log(dataFromStorage, storage);


//first name validaton
form.addEventListener("submit", (e) =>{ //y we take e

    
let mobileCheck=storage.find((e) =>{
    if (e.phone == mobile.value) {
        return e;
    }  
})


    let flag=true;
   let regx=/^[a-zA-Z]{1,17}$/;
    if (firstName.value == "") {
        efirst.innerHTML=`*Enter the first name`;
        e.preventDefault();
        flag=false;
    }
    else if(regx.test(firstName.value)) {
        efirst.innerHTML="";
    }
    else{
        efirst.innerHTML="invalid first name";
        e.preventDefault();
        flag=false;
    }
//last name validation
    
    if (lastName.value == "") {
        elast.innerHTML=`*Enter the last name`;
        e.preventDefault();
        flag=false;
    }
    else if(regx.test(lastName.value)) {
        elast.innerHTML="";
    }
    else{
        elast.innerHTML="invalid last name";
        e.preventDefault();
        flag=false;
    }

    //email validation
    let emailCheck=storage.find((e) =>{
        if (e.mail == email.value) {
            return e;
        }
})
    if (emailCheck) {
        eemail.innerHTML="Email number is already register";
        e.preventDefault();
        flag=false;
    }

   else if (email.value == "") {
        eemail.innerHTML=`*Enter the email`;
        e.preventDefault();
        flag=false;
    }
    else {
        eemail.innerHTML="";
        // e.preventDefault();
    }

    //mobile validation
    let regx1=/^[6-9][0-9]{9}$/;
    if (mobileCheck) {
        emobile.innerHTML="mobile number is already register";
        e.preventDefault();
        flag=false;
    }
    else if (mobile.value == "") {
        emobile.innerHTML=`*Enter the mob.no`;
        e.preventDefault();
        flag=false;
    }
    else if(regx1.test(mobile.value)) {
        emobile.innerHTML="";
    }
    else{
        emobile.innerHTML="invalid number";
        e.preventDefault();
        flag=false;
    }
   
    //createpassword validation
    let regx2=/^[a-zA-Z0-9!@]{6,15}$/;
    if (createPassword.value == "") {
        epass.innerHTML=`*Enter the password`;
        e.preventDefault();
        flag=false;
    }
    else if(regx2.test(createPassword.value)) {
        epass.innerHTML="";
    }
    else {
        epass.innerHTML="invalid paswword";
         e.preventDefault();
         flag=false;
    }

    //confirm password validation
    if (confirmPassword.value == "") {
        ecpass.innerHTML=`*Enter the confirm password`;
        e.preventDefault();
        flag=false;
        
    }
    else if(confirmPassword.value==createPassword.value) {
        ecpass.innerHTML="";
    }
    else {
        ecpass.innerHTML="Password is not matching";
         e.preventDefault();
         flag=false;
    }

    //1  store data in local storage...
    if (flag) {
        let details={
        first:firstName.value,
        last:lastName.value,
        mail:email.value,
        phone:mobile.value,
        pass:createPassword.value,
        cartItem:null,
    };

    //step3
    storage.push(details);
    
    localStorage.setItem("data",JSON.stringify(storage));
    console.log(details);
    
    }    
});


