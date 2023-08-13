let collapsable= document.getElementById('collapsable');
let menu= document.getElementById('menu');
let closeM= document.getElementById('closeM');

menu.addEventListener('click', ()=>{
    collapsable.classList.add('show');

})
closeM.addEventListener('click',()=>{
    collapsable.classList.remove('show');
})
//let liItems=document.querySelectorAll('.middle menu li');
//console.log(liItems);
//liItems.forEach(li=>{
//    li.classList.add('modify');})