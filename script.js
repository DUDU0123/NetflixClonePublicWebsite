//start of frquent questions and answers
const qstn1Btn = document.getElementById("qstn-btn")
const close1Btn = document.getElementById("close-btn")
const answer1Div = document.getElementById("show-answer")
// 2 ids
const qstn2Btn = document.getElementById("qstn2-btn")
const close2Btn = document.getElementById("close2-btn")
const answer2Div = document.getElementById("show2-answer")
//3ids
const qstn3Btn = document.getElementById("qstn3-btn")
const close3Btn = document.getElementById("close3-btn")
const answer3Div = document.getElementById("show3-answer")
//4ids
const qstn4Btn = document.getElementById("qstn4-btn")
const close4Btn = document.getElementById("close4-btn")
const answer4Div = document.getElementById("show4-answer")
//5ids
const qstn5Btn = document.getElementById("qstn5-btn")
const close5Btn = document.getElementById("close5-btn")
const answer5Div = document.getElementById("show5-answer")
//6ids
const qstn6Btn = document.getElementById("qstn6-btn")
const close6Btn = document.getElementById("close6-btn")
const answer6Div = document.getElementById("show6-answer")

// implementation
// 1
if(qstn1Btn){
    qstn1Btn.addEventListener("click", ()=>{
        answer1Div.classList.add("show-answer")
        close1Btn.classList.add("show-close_icon")
        qstn1Btn.classList.add("qstn_icon_remove")
    })
}

if(close1Btn){
    close1Btn.addEventListener("click", ()=>{
        qstn1Btn.classList.remove("qstn_icon_remove");
        answer1Div.classList.remove("show-answer")
        close1Btn.classList.remove("show-close_icon")
    })
}
// 2
if(qstn2Btn){
    qstn2Btn.addEventListener("click", ()=>{
        answer2Div.classList.add("show-answer")
        close2Btn.classList.add("show-close_icon")
        qstn2Btn.classList.add("qstn_icon_remove")
    })
}

if(close2Btn){
    close2Btn.addEventListener("click", ()=>{
        qstn2Btn.classList.remove("qstn_icon_remove");
        answer2Div.classList.remove("show-answer")
        close2Btn.classList.remove("show-close_icon")
    })
}

// 3
if(qstn3Btn){
    qstn3Btn.addEventListener("click", ()=>{
        answer3Div.classList.add("show-answer")
        close3Btn.classList.add("show-close_icon")
        qstn3Btn.classList.add("qstn_icon_remove")
    })
}

if(close3Btn){
    close3Btn.addEventListener("click", ()=>{
        qstn3Btn.classList.remove("qstn_icon_remove");
        answer3Div.classList.remove("show-answer")
        close3Btn.classList.remove("show-close_icon")
    })
}
// 4
if(qstn4Btn){
    qstn4Btn.addEventListener("click", ()=>{
        answer4Div.classList.add("show-answer")
        close4Btn.classList.add("show-close_icon")
        qstn4Btn.classList.add("qstn_icon_remove")
    })
}

if(close4Btn){
    close4Btn.addEventListener("click", ()=>{
        qstn4Btn.classList.remove("qstn_icon_remove");
        answer4Div.classList.remove("show-answer")
        close4Btn.classList.remove("show-close_icon")
    })
}

// 5
if(qstn5Btn){
    qstn5Btn.addEventListener("click", ()=>{
        answer5Div.classList.add("show-answer")
        close5Btn.classList.add("show-close_icon")
        qstn5Btn.classList.add("qstn_icon_remove")
    })
}

if(close5Btn){
    close5Btn.addEventListener("click", ()=>{
        qstn5Btn.classList.remove("qstn_icon_remove");
        answer5Div.classList.remove("show-answer")
        close5Btn.classList.remove("show-close_icon")
    })
}
// 6
if(qstn6Btn){
    qstn6Btn.addEventListener("click", ()=>{
        answer6Div.classList.add("show-answer")
        close6Btn.classList.add("show-close_icon")
        qstn6Btn.classList.add("qstn_icon_remove")
    })
}

if(close6Btn){
    close6Btn.addEventListener("click", ()=>{
        qstn6Btn.classList.remove("qstn_icon_remove");
        answer6Div.classList.remove("show-answer")
        close6Btn.classList.remove("show-close_icon")
    })
}//end of frquent questions and answers


// lang select
const langBtn = document.getElementById("lang-btn")
const langDiv = document.getElementById("lang_div")
const englangSelected = document.getElementById("eng")
const hindilangSelected = document.getElementById("hindi")
const iconDown = document.getElementById("icon_down")
langBtn.addEventListener("click", ()=>{
    langDiv.classList.add("show-lang-div");
})

englangSelected.addEventListener("click", ()=>{
    langDiv.classList.remove("show-lang-div");
    langBtn.innerHTML = "English"
})
hindilangSelected.addEventListener("click", ()=>{
    langDiv.classList.remove("show-lang-div");
    langBtn.innerHTML = "Hindi"
})