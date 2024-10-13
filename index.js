

let imageURL = "https://cdn4.iconfinder.com/data/icons/general-office/91/General_Office_54-512.png";

let body = document.querySelector('body');  


function createHeart(event){
    let heart = document.createElement('img');
    heart.src = imageURL;

    const size = Math.random() * 100;
    heart.style.width = size + 'px';

    heart.style.left = event.pageX + 'px';
    heart.style.top = event.pageY + 'px';

    const time = Math.random() * 2+2;
    heart.style.animationDuration = time + 's';

    body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, time*1000);
}


document.addEventListener('mousemove', createHeart);