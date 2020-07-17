const button = document.getElementById('btn');
const share = document.querySelector('.share')
button.addEventListener('click', () => {
    share.classList.toggle('display');
    console.log("share")
})