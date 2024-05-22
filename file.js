window.onload=()=>{
  
  let cgt = document.querySelector(".cgt")
  let wht = document.querySelector(".wht")  
  let edt = document.querySelector(".edt")
  let vat = document.querySelector(".vat")
  
  //Tax Divs
  
  let cgtDiv = document.querySelector(".cgt__div")
  let whtDiv = document.querySelector(".wht__div")
  let vatDiv = document.querySelector(".vat__div")
  let edtDiv = document.querySelector(".edt__div")
   //Input Divs
   
   let salesPro = document.querySelector(".sales__proceeds");
   let allowableExp= document.querySelector(".allowable__exp")
   let aqCost = document.querySelector(".aq__cost")
   
   //buttons
  
  let taxBtn = document.querySelectorAll(".tax__btn")
  
  
  //Cgt btn 
  let cgtBtn = document.querySelector(".cgt__btn")
  
  //Computation buttons
  let indInput = document.querySelector(".indInput");
  let coyInput = document.querySelector(".coyInput");
  let whtIndBtn = document.querySelector(".wht__ind");
  let whtCoyBtn = document.querySelector(".wht__coy");
  
 
  
  cgtBtn.addEventListener("click",()=>{
      
  })
  
  taxBtn.forEach((btn)=>{
     btn.addEventListener("click",()=>{
      if(btn.classList.contains("cgt")){
          cgtDiv.classList.toggle("active")
      }     
  })
  }) 
  
    
  
  
  taxBtn.forEach((btn)=>{
     btn.addEventListener("click",()=>{
      if(btn.classList.contains("edt")){
          edtDiv.classList.toggle("active")
      }
  })
   }) 
  
  taxBtn.forEach((btn)=>{
     btn.addEventListener("click",()=>{
      if(btn.classList.contains("wht")){
          whtDiv.classList.toggle("active")
      }
  })
   
   })
  taxBtn.forEach((btn)=>{
     btn.addEventListener("click",()=>{
      if(btn.classList.contains("vat")){
          vatDiv.classList.toggle("active")
      }
  
  })
   
   })
  
  
  
  //Wht computation 
  whtIndBtn.addEventListener("click",()=>{
      
  })
  
  
   
    
    
    
    
    
    
    
}

/*

All display none 
only display on click
toggle display 
tax functions

*/
