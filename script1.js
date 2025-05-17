function showform(formId) {
document.querySelectorAll(".formbox").forEach(form=> form.classList.remove("active"));
document.getElementById(formId).classList.add("active");
}
document.querySelector("#login").addEventListener('click',function(){

const username=document.querySelector("#username").value;
const password=document.querySelector("#password").value;
if (username && password) {
    window.location.href="2nd page.html";
}
else{
    alert("invalid username & password");
}

})

// let login=document.querySelector("#login")
// let para=document.querySelector(".para");
//lo.addEventListener("click",()=>{
//      if(e==="rohit" && p==="1234")
//      {
//          b.onclick="location.href='index.html'";
//          para.innerText= "login success";
//      }
//     else{
//          para.innerText= "login invalid";
//     }
//  })
//  b.onclick = () => {
//     if(e==="rohit" && p==="1234")
//      {
//          console.log("login succes");
//                para.innerText= "login success";
//      }
//     else{
//          console.log("login failed");
//                  para.innerText= "login invalid";
//     }
//  }
// if(e=="rohit" && p=="1234")
// {
//     function btcl (){
//          console.log("login succes");
//              para.innerText= "login success";
             
//     }
    
// }
// else{
//      console.log("login failed");
//              para.innerText= "login failed";
// }

// let ui="rohit";
// let pa="1234";
// b.addEventListener("click",()=>{
//      if(e===ui && p===pa)
//      {
//          b.onclick="location.href='index.html'";
//          para.innerText= "login success";
//      }
//     else{
//          para.innerText= "login invalid";
//     }
//  })
// b.onclick = () => {
//     if(e===ui && p===pa)
//      {
//          console.log("login succes");
//                para.innerText= "login success";
//                b.setAttribute("cl","location.href='index.html'");
//      }
//     else{
//          console.log("login failed");
//                  para.innerText= "login invalid";
//     }
//  }