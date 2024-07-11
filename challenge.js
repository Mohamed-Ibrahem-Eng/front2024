let tabs = document.querySelectorAll(".tabs li")
let tabsArray =Array.from(tabs)
let divs = document.querySelectorAll(".content div")
let divsArray =Array.from(divs)


tabsArray.forEach((ele)=>{
    ele.addEventListener("click",(e) =>{
        tabsArray.forEach((ele)=>{
ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        divsArray.forEach((ele)=>{
            ele.style.display="none"
        })
        document.querySelector(e.currentTarget.dataset.cont).style.display="block"
    })
})



let generate =document.querySelector(".generate")
let serial =document.querySelector(".serial")
generate.onclick =function(){
    let characters ="abcdefghklmnobqabcdefghklmnobqabcdefghklmnobq1234"
    let count =10;
let randomh ="";
for(let i =0 ; i < count ; i++){
    randomh += characters[Math.floor(Math.random() * characters.length)]
}
serial.innerHTML =randomh
}
//###########################
let btn =document.getElementById("btn")
window.onscroll =function(){

    if(this.scrollY >= 597){
        btn.classList.add("show")
        // btn.style.display ="block"
    }else{
        btn.classList.remove("show")
        // btn.style.display ="none"
        
            }

}
btn.onclick =function(){
window.scrollTo({
    top:0,
    behavior:"smooth"
})
    
}











    let listArray =document.querySelectorAll(".list li")
    let box =document.querySelectorAll(".container div")
    let all= document.querySelector(".nav-show")
    listArray.forEach((ele)=>{
        ele.addEventListener("click",removeAll)
        ele.addEventListener("click",manangeBox)
     
    })

    function removeAll(){
        listArray.forEach((ele)=>{
            ele.classList.remove("show")
           
        })
        this.classList.add("show")
    }

    function manangeBox(){
box.forEach((b)=>{
    b.style.display="none"
})
document.querySelectorAll(this.dataset.show).forEach((el)=>{
    el.style.display="block"
})

}

let ar =["a","b","c","d","e","f",0,1,2,3,4,5,6,7,8,9]
let hexiCode = []

for(let i =0 ;i<6 ;i++){
    hexiCode.push(ar[Math.floor(Math.random() * ar.length)])
}
let final =`#${hexiCode.join("")}`
document.body.style.backgroundColor =final




// #####################

let nums =document.querySelectorAll(".nums .num")
let main =document.querySelector(".main")
let started =false;

// لما اوصل لسيكشن المين من فوق او تحت شغل الفور ايتش علي كل عنصر
window.onscroll =function(){
    if(scrollY >= main.offsetTop){
        if(!started){

            nums.forEach((num)=> startCount(num))  // شغل الداله علي كل عنصر في النمز
        }
        started = true
    }
}

function startCount (el){
    let goal =el.dataset.goal  //handel data set goal

    let count =setInterval(()=>{    // interval each 100 from second 
el.textContent++  // increment on zero nested content 
if(el.textContent ==goal){
    clearInterval(count)
}
    },2000 / goal)
}

// // ######################

// let obj = {
//     //property

//     firstName :"mphamed",
//     lastName :"ibrahem",
//     age : 23 ,
//     calcAge :function(){
//         return `my names ${this.firstName} ${this.lastName} and my age is ${this.age * 365 }`
//     },
//     addresses :{
//         from:"manz",
//         and :"bosrat",
//         nstedmethood :()=>{return "where"}
//     }

// }
// console.log(obj.calcAge())
// console.log(obj.addresses.nstedmethood())
// console.log(obj.addresses)

// let cr ={
//     thename :"mohamed",
//     theage:23,
//     bool:true ,
//     fun :function(){
//         return`the name is ${this.thename} and the age is${this.theage} ${this.bool ? "yes":  "no"}`
//     }
// }
// console.log(cr.fun())
// let newcr = Object.create(cr)
// newcr.theage = 40
// newcr.bool =false
// console.log(newcr.fun())  

// let obj1 ={
//     value1 :"one",
//     value2 :"two",
//     meth : function(){
//         return 'three'
//     }
// }
// let obj2 ={
//     value3 :"three",
//     value4 :"four",
//     meth : function(){
//         return 'three'
//     }
// }
// let obj3 ={
//     value5 :"five",
//     value6 :"six",
//     meth : function(){
//         return 'three'
//     }
// }
// let newobj = Object.assign(obj3 , obj2 , obj1)
// console.log(newobj)
// let lastobj = Object.assign( {}, obj3)
// console.log(lastobj)
// let finalobj = Object.assign(lastobj , {key : "val-1"})
// finalobj.key2 = "val-2"
// console.log(finalobj)

// let user = Object.freeze({del :"delete-1" , re :"remove-item"})
//  delete user.del 
//  user.remov ="remov"
// console.log(user)

// let obj = {
//     first :"one",
//     two : "two",
//     three :function (){
//         return`three ${two}`
//     }
// }
// let newobj = new Object(obj)
// console.log(newobj)
// let lastobj = Object.create({} )
// lastobj.four ="four"
// console.log(lastobj)
// let ass = Object.assign({} , newobj ,{five :"five"}  )
// ass.four ="four"
// delete ass.three

// console.log(ass)
// let newass =Object.freeze(ass)
// ass.six ="six"
// delete ass.two
// console.log(newass)
// for(let i in newass){
//     console.log(i , newass[i])
// }


//####################

// كده الاوبجيكت دي استرينج واعرف استخدم فيها فنكشن الاسترنج زي كده 
// function User (name){
//     this.name =name
// }
// let us = new User ("mohamed")
// console.log(us.name.toLocaleUpperCase())
// console.log(us.name.split())
let cont =document.querySelectorAll(".cont")[0]
let icon =document.getElementById("icon").onclick =function(){
cont.classList.add("act")
}