	var result;
	var result1;
	var number1;
	var number2;
	var sing;
	number1=Math.floor((Math.random()*100)+1);
	number2=Math.floor((Math.random()*100)+1);
	var sings=["+","-"];
	var sing=sings[Math.floor(Math.random()*sings.length)];
	document.getElementById("sign_number").innerHTML=sing;
	var btnAnswer=document.getElementById('btn_answer');
	var btnAnswer1=document.getElementById('btn_answer1');
	if (sing=="+"){
		btnAnswer.style.display="block";
	}
	else{
		btnAnswer1.style.display="block";
		btnAnswer.style.display="none";
	}
	document.getElementById("first_number").innerHTML=number1;
	document.getElementById("second_number").innerHTML=number2;
	
function answer(){
var answer=document.getElementById("answer").value;
	var textAnswer=document.getElementById("text_thirdAnswerNumber");
	var btnRestart=document.getElementById('btn_restart');
	result=number1+number2;
	console.log(result);
	if(result==answer) {
		textAnswer.innerHTML="Правильно";
		btnRestart.style.display="block";
		console.log(sing);
	}
	else{
		textAnswer.innerHTML="Неправильно";
	}
}
function answer1(){
var answer=document.getElementById("answer").value;
	var textAnswer=document.getElementById("text_thirdAnswerNumber");
	var btnRestart=document.getElementById('btn_restart');
	result1=number1-number2;
	console.log(result);
	if(result1==answer) {
		textAnswer.innerHTML="Правильно";
		btnRestart.style.display="block";
		

	}
	else{
		textAnswer.innerHTML="Неправильно";
	}
}

function example(){
	location.reload();
}