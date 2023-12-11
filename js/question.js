let questionAll = document.querySelectorAll('.question')
let answers = document.querySelectorAll('.answers')

for (let i = 0; i < questionAll.length; i++) {
    let e = questionAll[i]
    e.addEventListener('click', ()=> {
        answers.forEach(elem => {
            if (!elem.classList.contains("displayNone")) {
                elem.classList.add('displayNone')
            }
        });
        questionAll.forEach(elem => {
            if (elem.classList.contains("color")) {
                elem.classList.remove('color')
            }
        });
        answers[i].classList.remove('displayNone');
        e.classList.add('color');
    })
}


