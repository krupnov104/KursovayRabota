let service = document.querySelector('.service');
let full = document.querySelector('.full-service');
let minus = document.querySelectorAll('.minus');
let plus = document.querySelectorAll('.plus');
let onePrice = document.querySelector('.one-price');
let oneTicket = document.querySelector('.one-ticket');
let twoPrice = document.querySelector('.two-price');
let twoTicket = document.querySelector('.two-ticket');
let threePrice = document.querySelector('.three-price');
let threeTicket = document.querySelector('.three-ticket');
let res = document.querySelector('#res');
let service1 = document.querySelectorAll('.service1');
let textService = document.querySelector('.text-service');
let price1 = document.querySelector('#price1');
let price2 = document.querySelector('#price2');
let button = document.querySelector('.button');
let email = document.querySelector('.input-email');

var clickCount = 0;
service.addEventListener ('click', ()=> {
    if ( clickCount % 2 == 0 ) {
        full.classList.remove('displayNone');
    } else {
        full.classList.add('displayNone');
    }

    clickCount++
});

service1.forEach(elem => {
    elem.addEventListener('click', ()=> {
        textService.textContent = elem.textContent;
        if (elem.textContent == 'Аквапарк + SPA') {
            price1.textContent = '2290';
            price2.textContent = '1590';
            onePrice.textContent = "0";
            oneTicket.textContent = "0";
            twoPrice.textContent = "0";
            twoTicket.textContent = "0";
            threePrice.textContent = "0";
            threeTicket.textContent = "0";
            res.textContent = '0';
            full.classList.add('displayNone');
        } else if (elem.textContent == 'Аквапарк + SPA + Термы') {
            price1.textContent = '3690';
            price2.textContent = '1990';
            onePrice.textContent = "0";
            oneTicket.textContent = "0";
            twoPrice.textContent = "0";
            twoTicket.textContent = "0";
            threePrice.textContent = "0";
            threeTicket.textContent = "0";
            res.textContent = '0';
            full.classList.add('displayNone');
        } else if (elem.textContent == 'Аквапарк + Термы') {
            price1.textContent = '1990';
            price2.textContent = '1190';
            onePrice.textContent = "0";
            oneTicket.textContent = "0";
            twoPrice.textContent = "0";
            twoTicket.textContent = "0";
            threePrice.textContent = "0";
            threeTicket.textContent = "0";
            res.textContent = '0';
            full.classList.add('displayNone');
        }
    })
});

plus.forEach(elem => {
    elem.addEventListener('click', ()=> {
        if (elem.classList.contains('one')) {
            onePrice.textContent = +onePrice.textContent + +price1.textContent;
            res.textContent = +res.textContent + +price1.textContent;
            oneTicket.textContent++;
            button.classList.remove('displayNone');
        } else if (elem.classList.contains('two')) {
            twoPrice.textContent = +twoPrice.textContent + +price2.textContent;
            res.textContent = +res.textContent + +price2.textContent;
            twoTicket.textContent++;
            button.classList.remove('displayNone');
        } else {
            threeTicket.textContent++;
        }
    })
});

minus.forEach(elem => {
    elem.addEventListener('click', ()=> {
        if (elem.classList.contains('one')&onePrice.textContent != 0) {
            onePrice.textContent = +onePrice.textContent - +price1.textContent;
            res.textContent = +res.textContent - +price1.textContent;
            oneTicket.textContent--;
        } else if (elem.classList.contains('two')&twoPrice.textContent != 0) {
            twoPrice.textContent = +twoPrice.textContent - +price2.textContent;
            res.textContent = +res.textContent - +price2.textContent;
            twoTicket.textContent--;
        } else if (elem.classList.contains('three')&threeTicket.textContent != 0) {
            threeTicket.textContent--;
        }
    })
});

minus.forEach(elem => {
    elem.addEventListener('click', ()=> {
        if (onePrice.textContent == 0 & twoPrice.textContent == 0 & threePrice.textContent == 0) {
            button.classList.add('displayNone')
        }
    })
});

button.addEventListener('click', ()=> {
    if (email.value == '') {
        alert('Введите почту')
    } else if (oneTicket.textContent == 0) {
        alert('В сопровождении должен быть хотя бы один взрослый')
    } else {
        alert('Поздравляем вам на почту пришло письмо с оплатой билетов. Спасибо за покупку!')
    }
})


