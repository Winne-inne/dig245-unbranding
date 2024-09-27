/* javascript */
let entire = document.querySelector(".entire");
let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");
let entire = 1;

page1.addEventListener("mouseover",function(){
    if (entire==1){
        visibility=2;
        page1.style.display="none"
        page2.style.display="block"
    }else{
        visibility=1

    }
    this.style.display = "none"
})