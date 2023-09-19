// using jquery
const buttons = $('.faq-toggle')

buttons.on("click", function() {
    $(this).closest('.faq').toggleClass('active')
});

// using vanilla javascript
// const toggles = document.querySelectorAll('.faq-toggle')

// toggles.forEach(toggle => {
//     toggle.addEventListener('click', () => {
//         toggle.parentNode.classList.toggle('active')
//     })
// })