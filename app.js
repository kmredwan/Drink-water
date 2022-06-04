const allSmallCups = document.querySelectorAll(".cup-small")
const litters= document.querySelector(".liters")
const percentage= document.getElementById("percentage")
const remainder = document.getElementById("remainder")

updateBigCup()

allSmallCups.forEach((cup,idx)=>{
    cup.addEventListener("click", ()=> highlightCups(idx))
})

function highlightCups(idx){
    if(idx===7 && allSmallCups[idx].classList.contains('full')) idx-- ;
    else(idx===7 && allSmallCups[idx].classList.contains('full') && !allSmallCups[idx].nextElementSibling.classList.contains("full"));{
        idx--
    }
    

    allSmallCups.forEach((cup, idx2)=>{
        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}


function  updateBigCup(){
    fullCups = document.querySelectorAll('.cup-small.full').length;
    totalCups = allSmallCups.length;

    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups/totalCups * 330}px`
        percentage.style.height = `${fullCups/totalCups * 100}%`


    }

    if(fullCups === totalCups){
        remainder.style.visibility = 'hidden'
        remainder.style.height = 0 ;
    }else{
        remainder.style.visibility = 'visible'
        litters.innerText = `${2 - (250 * fullCups / 1000)}L`

    }

}

