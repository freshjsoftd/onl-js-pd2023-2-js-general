// console.log(history);
// console.log(location);
// console.log(navigator.platform);
// ========geolocation=============
/* function success(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let altiitude = position.coords.altiitude;
    let speed = position.coords.speed;

    console.log(`latitude is ${latitude}`);
    console.log(`longitude is ${longitude}`);
    console.log(`altiitude is ${altiitude}`);
    console.log(`speed is ${speed}`);
}

function error(obj){
    console.log('Geolocation error')
}

navigator.geolocation.getCurrentPosition(success, error); */
// ========================open=====================
/* function openWiki() {
    let timeId
	try {
		const popup = open(
			'http://wikipedia.org',
			'_blank',
			'width=1000,height=500'
		);
		console.log('Open wiki');
		popup.moveTo(1000, 300);
        timeId = setTimeout(() => popup.close(), 5000);
	} catch (error) {
		console.log(error);
	}finally{
        // clearTimeout(timeId)
    }
}

const span = document.querySelector('span');
span.addEventListener('click', openWiki); */
// ===========Watch=================
/* function getTime() {
	const time = document.getElementById('time');
	const now = new Date();
	
    time.textContent = 
    `${now.getHours() < 10 ? ('0' + now.getHours()) : now.getHours()}:
    ${now.getMinutes() < 10 ? ('0' + now.getMinutes()) : now.getMinutes()}:
    ${now.getSeconds() < 10 ? ('0' + now.getSeconds()) : now.getSeconds()}`
}

const timiId = setInterval(getTime, 1000) */
// =============cookie===================
/* const now = new Date('03/09/24');
console.log(now.toUTCString());
document.cookie = 'login=master';
document.cookie = `expires=${now}` */
// ===========localStorage==================
localStorage.setItem('url', 'https://www.ttspin.club/');
localStorage.setItem('password', 'qwertyu');

console.log(localStorage.getItem('url'));
console.log(localStorage.getItem('password'));
localStorage.clear()
// const rem = localStorage.removeItem('url');
// console.log(rem);
// =============JSON=====================
const player = {
    name: 'Ma Long',
    country: 'China',
    brand: 'Stiga',
    play(){
        console.log('I am playing')
    }
}

const array = ['Donic', 2, true]

localStorage.setItem('malong', JSON.stringify(player));
localStorage.setItem('array', JSON.stringify(array));
const json = JSON.stringify(player);

const malong = JSON.parse(localStorage.getItem('malong'));

console.log(malong)
console.log(json)