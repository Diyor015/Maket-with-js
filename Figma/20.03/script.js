let date = document.querySelector('.date');
let body = document.querySelector('body');


// let getDate = new Date()
// let day = getDate.getDate()
// let weekDay = getDate.getDay()
// let year = getDate.setFullYear()
// let hours = getDate.getHours()
// let minutes = getDate.getMinutes()
// let month = getDate.getMonth() + 1;

// console.log(getDate);
// date.innerHTML = `${day}. ${month}. ${year}`


let getDate = new Date();
let dateLocal = getDate.getDate()
let month = getDate.getMonth() + 1;
let year = getDate.getFullYear()


console.log(getDate.getFullYear());

date.innerHTML = `${dateLocal}. 0${month}. ${year}`

let mySong = document.querySelector('#mySong');
let icon = document.querySelectorAll('.fa-solid');

for (let i = 0; i <= icon.length; i++){
    icon[i].addEventListener('click', () => {
        if(mySong.paused){
            mySong.play()
            icon[0].style.display = 'none'
            icon[1].style.display = 'block'
        }
        else{
            mySong.pause()
            icon[0].style.display = 'block'
            icon[1].style.display = 'none'
        }
    })
}

