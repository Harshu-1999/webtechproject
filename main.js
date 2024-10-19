
let cartItem=[];
 let data=JSON.parse(localStorage.getItem("data"));
 let oneuser=JSON.parse(localStorage.getItem("oneuser"));
 let count=document.querySelector("#count");

 console.log(data, oneuser);
 
 if (oneuser) {
    if (oneuser.cartItem) {
        count.innerHTML=oneuser.cartItem.length;
        cartItem = oneuser.cartItem;
    }
    
 }

function loginLogout() {
    let login=document.querySelector("#right");
    //getting oneuser from local storage
let oneUserData= JSON.parse(localStorage.getItem("oneuser"));
console.log(oneUserData);

//user information
if (oneUserData) {
    //providing information inside right division
    login.innerHTML=`<span>${oneUserData.first}</span> <a href="./main.html"><button id="logout">Logout</button>`
    
    //logo event
    let logo=document.querySelector("#logout");

    logout.addEventListener("click",() =>{
        //removing one user from local storage
        localStorage.removeItem("oneuser");
        
    });
}
}
loginLogout()

//fecting data from server
async function allProductsData(){
    //dataobject is from server
    let dataFromServer=await fetch("https://www.shoppersstack.com/shopping/products/alpha");
    //dataobject is in format
    let converteddata=await dataFromServer.json();
    //only data property
    let allData=converteddata.data;
    console.log(allData);  

    //filter data from men
    let menData=allData.filter((e) => {
        if (e.category=="men") {
            return e;
        }
     });
     console.log(menData);
     

      //filter data from Women
    let WomenData=allData.filter((e) => {
        if (e.category=="women") {
            return e;
        }
     });
     console.log(WomenData);

          //filter data from kid
    let kidData=allData.filter((e) => {
        if (e.category=="kids") {
            return e;
        }
     });
     console.log(kidData);

       //filter data from electronis
    let electronicsData=allData.filter((e) => {
        if (e.category=="electronics") {
            return e;
        }
     });
     console.log(electronicsData);
     

     let MaleOutput=document.querySelector("#maleCount");
     //male data output
     menData.map((e)=>{
        MaleOutput.innerHTML+=`<div id="${e.productId}">
        <img src="${e.productImageURLs[0]}" alt="">
        <h3>${e.name}</h3>
        <h2>${e.price}</h2>
        <h2>${e.rating}</h2>
        <button>Add to Cart</button>
    </div>`
     })

     let FemaleOutput=document.querySelector("#femaleCount");
     ///female data output
     WomenData.map((e)=>{  
        FemaleOutput.innerHTML+=`<div id="${e.productId}>
        <img src="${e.productImageURLs[0]}" alt="">
        <h3>${e.name}</h3>
        <h2>${e.price}</h2>
        <h2>${e.rating}</h2>
        <button>Add to Cart</button>
    </div>`
     })

     let KidsOutput=document.querySelector("#kidsCount");
     ///kids data output
     kidData.map((e)=>{  
        KidsOutput.innerHTML+=`<div id="${e.productId}>
        <img src="${e.productImageURLs[0]}" alt="">
        <h3>${e.name}</h3>
        <h2>${e.price}</h2>
        <h2>${e.rating}</h2>
        <button>Add to Cart</button>
    </div>`
     })
    let ElectronicsOutput=document.querySelector("#Electrinics");
     ///kids data output
     electronicsData.map((e)=>{  
        ElectronicsOutput.innerHTML+=`<div id="${e.productId}>
        <img src="${e.productImageURLs[0]}" alt="">
        <h3>${e.name}</h3>
        <h2>${e.price}</h2>
        <h2>${e.rating}</h2>
        <button>Add to Cart</button>
    </div>`
     });


     //searxg result
     let input=document.querySelector("input"); //to get value
     let searchBtn=document.querySelector("#searchBtn");//when to display
     let searcgResult=document.querySelector("#searchResult"); //where to display

     searchBtn.addEventListener("click", (e) =>{
        searcgResult.innerHTML="";
        allData.map((e)=> {

            if (e.name.toLowerCase().includes(input.value.trim().toLowerCase())) {
                searcgResult.innerHTML+=`<div id="${e.productId}>
        <img src="${e.productImageURLs[0]}" alt="Product Image">
        <h3>${e.name}</h3>
        <h2>${e.price}</h2>
        <h2>${e.rating}</h2>
        <button>Add to Cart</button>
    </div>`
            }
        })
     })

     //accessing all cart button
     let main=document.querySelector("main");
     let allBtn=main.querySelectorAll("button");
     console.log(allBtn);

     allBtn.forEach((btn)=>{
        //adding event listner to each button
        btn.addEventListener("click",()=> {
            if (oneuser) {
                console.log(btn.parentElement);
                //to remove duplicate
                cartItem=cartItem.filter((e)=>{ //here reassign cartitem
                    if (e.productId != btn.parentElement.id) {
                        return e;
                    }
                })
                //to find click product
                let product=allData.find((e) => {
                    if (e.productId==btn.parentElement.id) {
                        return e;
                    }
                });
                //click add to cart
                cartItem.push(product);
                oneuser.cartItem=cartItem;
    
                console.log(oneuser);
                localStorage.setItem("oneuser", JSON.stringify(oneuser));
    
                //receiving curent user details
                data=data.filter((e)=>{
                    if (e.phone != oneuser.phone) {
                        return e;
                    }
                });
                //adding current user updated details to data
                data.push(oneuser);
    
                console.log(data);
                //store updated data in local storag
                localStorage.setItem("data", JSON.stringify(data));
                count.innerHTML=oneuser.cartItem.length;
            }
            else {
            alert("login first");
            window.location.href="./login.html";
            }
        });
     });
     
 }

 allProductsData();

 