
let button = document.querySelectorAll(".but")
let para = document.querySelectorAll(".hist")
let aa = document.querySelector(`#aa`)

// console.log(para)

button.forEach(function (item) {
    item.addEventListener("click", function (but)
    
    
    {
        button[0].classList.remove("active")
        const buttype = but.currentTarget.dataset.id
    //   console.log(buttype)
        
        let paratype= para.forEach(function(a)
        {
            if(buttype==a.dataset.id)
            {
          
               
             console.log(a.id)  
             document.getElementById(`${a.id}`).style.display="block"
            }
            else{
                document.getElementById(`${a.id}`).style.display="none" 
            }
        })
      
    })
})

// console.log(para[0])
// para[0].style.display="none"
// para[1].style.display="none"

// if(para.dataset.id=="Vision")
// {
//     para.st
// }

// aa.style.display="none"
