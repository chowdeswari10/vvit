fetch("data.json")
.then((response)=>{
   return response.json();
}).then((data)=>{
     //console.log(data);
     display_info(data.basics);
})
var bodyElement=document.querySelector("#root");

function display_info(info){
   let card=document.createElement("div");
   card.classList.add("card");
   let heading=document.createElement("h2");
   heading.textContent=info.name;  
   bodyElement.append(card);
   card.append(heading);
   let line=document.createElement("hr");
   card.append(line);
   let heading1=document.createElement("h3");
   heading1.textContent=info.role;
   card.append(heading1); 
   let email=document.createElement("a");
   email.href="mailto:"+info.email;
   email.textContent=info.email;
   card.append(email);
   let mobile=document.createElement("a");
   let br=document.createElement("br");
   card.append(br);
   let br3=document.createElement("br");
   card.append(br3);
   mobile.textContent=info.mobile;
   mobile.href="tel:"+info.mobile;
   card.append(mobile);
   let br1=document.createElement("br");
   card.append(br1);
   let br9=document.createElement("br");
   card.append(br9);
   var button=document.createElement("a");
   button.textContent="View Profile";
   button.classList.add("btn");
   card.append(button);
}