document.querySelector(".mobile").addEventListener('click',e=>{
    const isMobContainer=e.target.closest(".mobile__container");
    const isOpen=document.body.classList.contains("burger--open");
    if(isOpen&& !isMobContainer){
        document.body.classList.remove("burger--open")
    }
 

})