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
   
  let taxBtn = document.querySelectorAll(".tax__btn")
  
  //Loops through all the to select display a particular Div
  
  
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
  
  
  
  
  
  
   
    
    
    
    
    
    
    
}

