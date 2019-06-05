//Do a counter for the stats section !!!!!!!!!

var btn = document.getElementById('to-top-btn');
window.onscroll = function() {

if (window.pageYOffset >= 450) {
	btn.style.display = 'block';
	    } else {
		btn.style.display = 'none';
	}
};

//chatbot btn
var chat = document.querySelector('.chatbot-btn');
var startChat = document.querySelector('.start-chat'); 
var card = document.querySelector('.chatbot-card');
var secondCard = document.querySelector('.chatbot-card-two');
chat.addEventListener('click', function(){
chat.firstElementChild.classList.toggle('fa-comments');
chat.firstElementChild.classList.toggle('fa-times');
card.classList.toggle('Ndisplay');
secondCard.style.zIndex = 9998;
});
startChat.addEventListener('click', function(){
secondCard.style.zIndex = 10000;
});