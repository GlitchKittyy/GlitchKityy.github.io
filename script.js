var binary = document.getElementById('binary');
var translateBtn = document.getElementById('translateBtn');
var icons = document.getElementById('glow');

document.getElementById('year').textContent = new Date().getFullYear();

function translate(){
    translateBtn.classList.add('fade-out')
    setTimeout(function(){
        translateBtn.style.display="none";
    },500)
    setTimeout(function(){
        binary.innerHTML = "B 01101001 01101110 01100001 01110010 01111001";
    },100)
    setTimeout(function(){
        binary.innerHTML = "B i 01101110 01100001 01110010 01111001";
    },200)
    setTimeout(function(){
        binary.innerHTML = "B i n 01100001 01110010 01111001";
    },300)
    setTimeout(function(){
        binary.innerHTML = "B i n a 01110010 01111001";
    },400)
    setTimeout(function(){
        binary.innerHTML = "B i n a r 01111001";
    },500)
    setTimeout(function(){
        binary.innerHTML = "B i n a r y";
    },600)
    setTimeout(function(){
        binary.innerHTML = "B i n a ry";
    },700)
    setTimeout(function(){
        binary.innerHTML = "B i n ary";
    },800)
    setTimeout(function(){
        binary.innerHTML = "B i nary";
    },900)
    setTimeout(function(){
        binary.innerHTML = "B inary";
    },1000)
    setTimeout(function(){
        binary.innerHTML = "Binary";
    },1100)
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden, .hidden2, .hidden3');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', function() {
    translateBtn.addEventListener('click', function() {
        translate();
    });
});
