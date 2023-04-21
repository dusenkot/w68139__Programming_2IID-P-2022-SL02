const btns = document.querySelectorAll("button")

let activites;

for(let i = 0;i<btns.length;i++){
    const btns = btns[i];
    
    btns.addEventListener("click",()=>{
        if(activites){
            activites.classlist.remove("selected");
        }
    
    btns.classlist.add("selected");
    activites = btns;
    });
}