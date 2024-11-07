// let tab1 = document.getElementById('tab1'),
//     tab2 = document.getElementById('tab2'),
//     tab3 = document.getElementById('tab3');

function showTab(tabNb, e){
    e.preventDefault();
    console.log(e);
    changeActiveTab(e.target);
    hideShowingTab();
    let tab = document.getElementById('tab' + tabNb);
    tab.classList.add('flex');
    tab.classList.remove('hidden');
}

function hideShowingTab(){
    [tab1, tab2, tab3].forEach(tab => {
        if(tab.classList.contains('flex'))
        {
            tab.classList.remove('flex') 
            tab.classList.add('hidden') 
        }  
            
    })
}

function changeActiveTab(tabLink){
    removeActiveClass();
    tabLink.classList.add('active');
}

function removeActiveClass(){
    let tabLinks = document.querySelectorAll('#tabLinks a');
    tabLinks.forEach(tablink => tablink.classList.remove('active'));
}

// show the answer
let questionDiv = document.querySelectorAll('.question');
questionDiv.forEach(question => {
    let questionLink = question.firstElementChild;
    questionLink.addEventListener('click', (event) =>{
        // console.log(questionLink.firstElementChild);
        event.preventDefault();
        hideAnswers();
        questionLink.nextElementSibling.classList.remove('hidden');
        questionLink.nextElementSibling.classList.add('block');
        // change the style of the svg arrow
        removeStyle();
        questionLink.lastElementChild.classList.add('rotate-180');
        // questionLink.lastElementChild.firstElementChild.classList.add('stroke-[#fa5757]')
        questionLink.lastElementChild.firstElementChild.style.stroke = '#fa5757';
        // console.log(questionLink.lastElementChild.firstElementChild.stroke);
    })
})

// hide all answers
function hideAnswers(){
    let answerList = document.querySelectorAll('.question p');
    answerList.forEach(answer => {
        if(answer.classList.contains('block')){
            answer.classList.remove('block');
            answer.classList.add('hidden');
        }
    });
}

// remove the style on the arrow
function removeStyle(){
    let svgElement = document.querySelectorAll('.question svg');
    let svgPath = document.querySelectorAll('.question svg path');
    svgElement.forEach(se => {
        if(se.classList.contains('rotate-180')){
            se.classList.remove('rotate-180');
        }
    })

    svgPath.forEach(sp => {
        // if(sp.classList.contains('stroke-[#fa5757]')){
        //     sp.classList.remove('stroke-[#fa5757]');
        // }
        sp.style.stroke = '#5267DF';
    })
}

// validating the contact form
let submitBtn = document.getElementById('submit');
let formInput = document.getElementById('email');
let errMsg = document.getElementById('errorMsg');
let errIcon = document.getElementById('iconErr');
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if(!formInput.value.match(validRegex) || formInput.value === '') {
        errIcon.classList.remove('hidden');
        errIcon.classList.add('block');
        errMsg.classList.remove('hidden');
        errMsg.classList.add('block');
    }else{
        errIcon.classList.remove('block');
        errIcon.classList.add('hidden');
        errMsg.classList.remove('block');
        errMsg.classList.add('hidden');
    }
})

// show the nav mobile
let hamburgerBtn = document.getElementById('nav-mobile-toggle');
let navMobile = document.getElementById('nav-mobile');
let nav = document.getElementById('nav');
let navClose = document.getElementById('close-nav');

hamburgerBtn.addEventListener('click', () =>{
    navMobile.classList.remove('hidden');
    navMobile.classList.add('block');

    nav.classList.remove('block');
    nav.classList.add('hidden');
})

// close nav mobile
navClose.addEventListener('click', (event) => {
    removeMobileNav();
})

// remove mobile nav
function removeMobileNav() {
    navMobile.classList.remove('block');
    navMobile.classList.add('hidden');

    nav.classList.remove('hidden');
    nav.classList.add('block');
}

// rmove mobile nav when a link is clicked
let navLinks = document.querySelectorAll('#nav-items a');
navLinks.forEach((navlink) => {
    navlink.addEventListener('click', () =>{
        removeMobileNav();
    })
})