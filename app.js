
function calculate(){
	const score = document.querySelector('#score').value;
	const total = document.querySelector('#total').value;
	const output = document.getElementById('answer');
	var result,grade,helper;
	let sign = "% .";
	 if(Number(score) > Number(total)){
	 	helper = "";
		result = 'Marks scored should be smaller than total marks.';
		output.style.display = 'block';
	}else {
		output.style.display = 'block';
		helper = 'Percentage obtained is ';
		result = ((score/total) * 100).toFixed(2);
		

	}
	if(result >= 90.00){grade = "Grade obtained is A1.";}
	else if(result >= 80.00){grade = "Grade obtained is A2.";}
	else if(result >= 70.00){grade = "Grade obtained is B1.";}
	else if(result >= 60.00){grade = "Grade obtained is B2.";}
	else if(result >= 50.00){grade = "Grade obtained is C1.";}
	else if(result >= 40.00){grade = "Grade obtained is C2.";}
	else if(result >= 35.00){grade = "Grade obtained is D1.";}
	else if(result < 35.00) {
		grade = "Grade obtained is E1 and you fail";
	}
	else {
		grade = "";
	}
	document.getElementById('result').innerHTML = helper + result + sign;
	document.getElementById('grade').innerHTML = grade;
}