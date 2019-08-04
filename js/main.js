//to top btn
var btn = document.getElementById('to-top-btn');
if(btn){
	window.onscroll = function() {

if (window.pageYOffset >= 450) {
	btn.style.display = 'block';
	    } else {
		btn.style.display = 'none';
	}
};

}

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

//portfolio
//buttons
var allBtn = document.querySelector('.portfolio-btn:first-of-type');
var webBtn = document.querySelector('.portfolio-btn:nth-of-type(2)');
var androidBtn = document.querySelector('.portfolio-btn:nth-of-type(3)');
var iosBtn = document.querySelector('.portfolio-btn:last-of-type');
//cards
var all = document.querySelectorAll('[data-type]');
var web = document.querySelectorAll('[data-type="web"]');
var android = document.querySelectorAll('[data-type="android"]');
var ios = document.querySelectorAll('[data-type="ios"]');

allBtn.addEventListener('click', function(){
//buttons style
allBtn.classList.toggle('active');
webBtn.classList.remove('active');
androidBtn.classList.remove('active');
iosBtn.classList.remove('active');
//cards style
for(i=0;i<web.length;i++){
web[i].style.display = 'block';
}
for(i=0;i<android.length;i++){
android[i].style.display = 'block';
}
for(i=0;i<ios.length;i++){
ios[i].style.display = 'block';
}
});
webBtn.addEventListener('click', function(){
webBtn.classList.toggle('active');
allBtn.classList.remove('active');
androidBtn.classList.remove('active');
iosBtn.classList.remove('active');
//cards style
for(i=0;i<web.length;i++){
web[i].style.display = 'block';
}
for(i=0;i<android.length;i++){
android[i].style.display = 'none';
}
for(i=0;i<ios.length;i++){
ios[i].style.display = 'none';
}

});
androidBtn.addEventListener('click', function(){
androidBtn.classList.toggle('active');
webBtn.classList.remove('active');
allBtn.classList.remove('active');
iosBtn.classList.remove('active');
//cards style
for(i=0;i<web.length;i++){
web[i].style.display = 'none';
}
for(i=0;i<android.length;i++){
android[i].style.display = 'block';
}
for(i=0;i<ios.length;i++){
ios[i].style.display = 'none';
}
});
iosBtn.addEventListener('click', function(){
iosBtn.classList.toggle('active');
webBtn.classList.remove('active');
androidBtn.classList.remove('active');
allBtn.classList.remove('active');
//cards style
for(i=0;i<web.length;i++){
web[i].style.display = 'none';
}
for(i=0;i<android.length;i++){
android[i].style.display = 'none';
}
for(i=0;i<ios.length;i++){
ios[i].style.display = 'block';
}
});
//showcase view all
var viewBtn = document.querySelector('.view-btn');
var showcase = document.querySelector('.showcase');
if(viewBtn){
	viewBtn.textContent = 'view more';

viewBtn.addEventListener('click', function(){
if(viewBtn.textContent == 'view more'){
showcase.style.height = '1360px';
viewBtn.textContent = 'view less';	
}else{
showcase.style.height = '';
viewBtn.textContent = 'view more';	
}
});
}