

// Open answer function
function openAndCloseQuestionAnswer(qstnBtnId, closeBtnId, answerPartId) {
    const qstn1Btn = document.getElementById(qstnBtnId)
    const close1Btn = document.getElementById(closeBtnId)
    const answer1Div = document.getElementById(answerPartId)
    if (qstn1Btn) {
        qstn1Btn.addEventListener("click", () => {
            answer1Div.classList.add("show-answer")
            close1Btn.classList.add("show-close_icon")
            qstn1Btn.classList.add("qstn_icon_remove")
        })
    }
    if (close1Btn) {
        close1Btn.addEventListener("click", () => {
            qstn1Btn.classList.remove("qstn_icon_remove");
            answer1Div.classList.remove("show-answer")
            close1Btn.classList.remove("show-close_icon")
        })
    }
}
// lang select
const langBtn = document.getElementById("lang-btn")
const langDiv = document.getElementById("lang_div")
const englangSelected = document.getElementById("eng")
const hindilangSelected = document.getElementById("hindi")
const iconDown = document.getElementById("icon_down")
langBtn.addEventListener("click", () => {
    langDiv.classList.add("show-lang-div");
})

englangSelected.addEventListener("click", () => {
    langDiv.classList.remove("show-lang-div");
    langBtn.innerHTML = "English"
})
hindilangSelected.addEventListener("click", () => {
    langDiv.classList.remove("show-lang-div");
    langBtn.innerHTML = "Hindi"
})