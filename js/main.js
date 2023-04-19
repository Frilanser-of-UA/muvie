let clock = document.querySelector('.clock');
function time() {
	let date = new Date();
	let house = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
	let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	let sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
	clock.innerHTML = `${house}:${min}:${sec}`;
}
setInterval(time, 1000);