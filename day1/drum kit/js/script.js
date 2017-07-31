// function removeTransition(e) {
//   if (e.propertyName !== 'transform') return;
//   e.target.classList.remove('playing');
// }
// function playSound(e) {
// 	var audio = document.querySelector('audio[data-key="${e.keyCode}"]');
// 	var key = document.querySelector('div[data-key="${e.keyCode}"]');
// 	console.log("key vaut : ",key);
// 	if (!audio)return;
// 	drum.classList.add('playing');
//  	audio.currentTime = 0;
//  	audio.play();
// 	console.log("key vaut : ",key);
// }
// var keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach(drum => key.addEventListener('transitionend', removeTransition));
// window.addEventListener('keydown', active_sound);




// var drums = Array.from(document.querySelectorAll('.drum'));
// drums.forEach(function(drum){
// 	drum.addEventListener('transitionend', removeTransition)
// });
// window.addEventListener('keydown', active_sound);




window.addEventListener('keydown',function(e){
	var audio = document.querySelector("audio[data-key='${e.keyCode}']");
	console.log("audio vaut : ",audio);
	console.log("e.keyCode vaut : ",e.keyCode);
});




