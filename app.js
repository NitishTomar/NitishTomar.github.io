const list = document.getElementById('ullist');

console.log(list)
const upperleft = document.getElementsByClassName('upperleft');
const leftdiv = document.getElementsByClassName('leftdiv');
leftdiv[0].style.display = "none"





setInterval(() => {
    leftdiv[0].style.display = "block"
    upperleft[0].style.display = 'none'
    
}, 2000);


if(window.screen.width > 100){
    const link = document.getElementById("contact");
   const anchor = document.getElementById("myanchor");
   console.log(anchor)
   link.addEventListener("click", function(e){
    anchor.removeAttribute("href")
    

Swal.fire('+91 8871525716')


})

}
   




const rightdiv = document.getElementsByClassName("rightdiv");


list.addEventListener('click', function (e) {

    const targetpoint = e.target.id;

    list.childNodes.forEach(function (item) {

        if (item.id == targetpoint) {

            const p = rightdiv[0].childNodes;
            p.forEach(function(item2){

                if(item2.id == targetpoint + "div"){
                    item2.style.display = "block"
                    item2.style.transition = "2s ease"
                }
                else{

                    if(item2.id != undefined){
                        item2.style.display = "none"
                    }

                }



            })
            
            item.classList.add("object");

        }
        else {

            if (item.id != undefined) {

            //     const s = document.getElementsByClassName(targetpoint + "div")
            // s[0].style.display = "none"
            // console.log(s[0])
                item.classList.remove("object");
            }

        }


    })



})
