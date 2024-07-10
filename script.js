const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

bar.addEventListener('click', () => {
    nav.classList.add('active');
})

close.addEventListener('click', () => {
    nav.classList.remove('active');
})

// Click on each Product 

let pro = document.getElementsByClassName('pro');

for (i = 0; i < pro.length; i++) {
    pro[i].addEventListener('click', function() {
        window.location.href = 'sproduct.html';
})}

