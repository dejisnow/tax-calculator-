window.onload=()=>{
  
  let cgt = document.querySelector(".cgt")
  let wht = document.querySelector(".wht")  
  let edt = document.querySelector(".edt")
  let vat = document.querySelector(".vat")
  
  //Tax Divs
  
  let cgtDiv = document.querySelector(".cgt__div")
   
  
  let taxBtn = document.querySelectorAll(".tax__btn")
  
  taxBtn.forEach((btn)=>{
     btn.addEventListener("click",()=>{
      if(btn.classList.contains("cgt")){
          cgtDiv.classList.toggle("active")
      }
  }) 
  })
  
   
    
    
    
    
    
    
    
}

/*

All display none 
only display on click
toggle display 
tax functions

*/
       
