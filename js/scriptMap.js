let ellipse2 = document.querySelector(".ellipse2")
let ellipse3 = document.querySelector(".ellipse3")
let ellipse4 = document.querySelector(".ellipse4")
let ellipse5 = document.querySelector(".ellipse5")
let ellipse6 = document.querySelector(".ellipse6")
let ellipse7 = document.querySelector(".ellipse7")
let ellipse8 = document.querySelector(".ellipse8")
let ellipse1 = document.querySelector(".ellipse1")
let names = document.querySelector('.main-orange-text')
let text = document.querySelector('.main-white-text1')
let ves = document.querySelector('#ves')
let rost = document.querySelector('#rost')
let ellipse = document.querySelectorAll('.ellipse')

ellipse1.addEventListener('click', ()=>{
    names.textContent = 'Черная дыра'
    text.textContent = 'Черная горка со скольжением в абсолютной темноте и множеством поворотов. Длина трассы спуска 126,3 м. Максимальная скорость спуска 7 м/с. Рост от 110 см, вес от 50 кг.'
    ves.textContent = '> 50 кг';
    rost.textContent = '> 110 см';
    ellipse.forEach(elem => {
        if (elem.classList.contains("colored")) {
            elem.classList.remove('colored')
        }
    });
    ellipse1.classList.add('colored');
})

ellipse2.addEventListener('click', ()=>{
    names.textContent = 'Иннертюб слайд'
    text.textContent = 'Желтая, самая длинная горка. Длина трассы спуска 139 м. Максимальная скорость спуска 7 м/с. Рост от 110 см, вес от 50 кг.'
    ves.textContent = '> 50 кг';
    rost.textContent = '> 110 см';
    ellipse.forEach(elem => {
        if (elem.classList.contains("colored")) {
            elem.classList.remove('colored')
        }
    });
    ellipse2.classList.add('colored');
})


ellipse3.addEventListener('click', ()=>{
    names.textContent = 'Водная петля'
    text.textContent = 'Бирюзовая горка с неожиданными, крутыми виражами. Длина трассы спуска 49 м. Средняя скорость спуска 10 м/с. Рост от 110 см до 150 см. Вес до 60 кг.'
    ves.textContent = '> 50 кг';
    rost.textContent = '> 110 см';
    ellipse.forEach(elem => {
        if (elem.classList.contains("colored")) {
            elem.classList.remove('colored')
        }
    });
    ellipse3.classList.add('colored');
})

ellipse4.addEventListener('click', ()=>{
    names.textContent = 'Боди слайд'
    text.textContent = 'Красная горка с неожиданными, крутыми виражами. Длина трассы спуска 102,1 м. Максимальная скорость спуска 12 м/с. Рост от 107 см.'
    ves.textContent = '> 50 кг';
    rost.textContent = '> 110 см';
    ellipse.forEach(elem => {
        if (elem.classList.contains("colored")) {
            elem.classList.remove('colored')
        }
    });
    ellipse4.classList.add('colored');
})

ellipse5.addEventListener('click', ()=>{
    names.textContent = 'Крыло'
    text.textContent = '«Крыло» − открытая горка для самых отважных. От падения под резким углом вы испытаете настоящий восторг! (Длина трассы спуска 20,35. Максимальная скорость спуска 5,4 м/с. Рост по одному от 160 см, по двое от 150 см.)'
    ves.textContent = '< 136 кг';
    rost.textContent = '> 150 см';
    ellipse.forEach(elem => {
        if (elem.classList.contains("colored")) {
            elem.classList.remove('colored')
        }
    });
    ellipse5.classList.add('colored');
})

ellipse6.addEventListener('click', ()=>{
    names.textContent = 'Волновой бассейн'
    text.textContent = 'Просторный (573 кв. м) волновой бассейн. Глубина возрастает постепенно –от 0 до 2,1 м, так что интересно будет всем – и понырять всласть, и побарахтаться на мелководье, и, конечно, покачаться на теплых волнах.'
    ellipse.forEach(elem => {
        if (elem.classList.contains("colored")) {
            elem.classList.remove('colored')
        }
    });
    ellipse6.classList.add('colored');
    ves.textContent = 'Без ограничений';
    rost.textContent = 'Без ограничений';
    
})

ellipse7.addEventListener('click', ()=>{
    names.textContent = 'Космическая тарелка'
    text.textContent = '«Космическая тарелка» − горка для экстремалов! Человек летит по прямой траектории, а затем кружится в чаше, в конце попадая в бассейн глубиной 2,5 метра. . (Длина трассы спуска 40,4 м. Максимальная скорость спуска 12 м/с. Рост от 150 см)'
    ellipse.forEach(elem => {
        if (elem.classList.contains("colored")) {
            elem.classList.remove('colored')
        }
    });
    ellipse7.classList.add('colored');
    ves.textContent = '< 136 кг';
    rost.textContent = '> 150 см';
    
})

ellipse8.addEventListener('click', ()=>{
    names.textContent = 'Джакузи'
    text.textContent = 'Оазис спокойствия среди шумных горок и бассейнов. Вода здесь теплая, а глубина безопасная – 1 м. Джакузи популярны среди гостей всех возрастов. Удобные широкие сиденья редко пустуют, но места хватит на всех.'
    ellipse.forEach(elem => {
        if (elem.classList.contains("colored")) {
            elem.classList.remove('colored')
        }
    });
    ellipse8.classList.add('colored');
    ves.textContent = 'Без ограничений';
    rost.textContent = 'Без ограничений';
})
