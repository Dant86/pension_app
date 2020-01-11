var ageSlider = document.getElementById("ageSlider");
var yearsWorkedSlider = document.getElementById("yearsWorkedSlider");
var salarySlider = document.getElementById("salarySlider");

var ageParagraph = document.getElementById("age");
ageParagraph.innerHTML = "21 years old";
var yearsWorkedParagraph = document.getElementById("years_worked");
yearsWorkedParagraph.innerHTML = "0 years";
var salaryParagraph = document.getElementById("salary");
salaryParagraph.innerHTML = "$60,000/year";

var inputAge = document.getElementById("input_age");
var ageButton = document.getElementById("age_button");
var inputYearsWorked = document.getElementById("input_years_worked");
var yearsWorkedButton = document.getElementById("years_worked_button");
var inputSalary = document.getElementById("input_salary");
var salaryButton = document.getElementById("salary_button");

// MAKE CHART
/*
window.onload = function () {
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Simple Line Chart"
	},
	axisY:{
		includeZero: false
	},
	data: [{        
		type: "line",       
		dataPoints: [
			{ y: 450 },
			{ y: 414},
			{ y: 520, indexLabel: "highest",markerColor: "red", markerType: "triangle" },
			{ y: 460 },
			{ y: 450 },
			{ y: 500 },
			{ y: 480 },
			{ y: 480 },
			{ y: 410 , indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
			{ y: 500 },
			{ y: 480 },
			{ y: 510 }
		]
	}]
});
chart.render();
}
*/

// UPDATE AGE
ageSlider.oninput = function() {
	age = this.value;
	ageParagraph.innerHTML = age.toString() + " " + "years old";
	inputAge.value = age;
}

ageButton.onclick = function() {
	age = inputAge.value;
	if (Number.isSafeInteger(Number(age))) {
		ageParagraph.innerHTML = age + " " + "years old";
		ageSlider.value = age;
	}
}

// UPDATE YEARS WORKED
yearsWorkedSlider.oninput = function() {
	yearsWorked = this.value;
	yearsWorkedParagraph.innerHTML = yearsWorked.toString() + " " + "years";
	inputYearsWorked.value = yearsWorked;
}

yearsWorkedButton.onclick = function() {
	yearsWorked = inputYearsWorked.value;
	if (Number.isSafeInteger(Number(yearsWorked))) {
		yearsWorkedParagraph.innerHTML = yearsWorked + " " + "years";
		yearsWorkedSlider.value = yearsWorked;
	}
}

// UPDATE SALARY
function numToMon(num) {
	/*var thousand = Math.floor(num/1000).toString();
	if (thousand > 0) {
		var numLength = num.toString().length;
		var hundred = num.toString().slice(numLength - 3, numLength);
		var mon = "$" + thousand + "," + hundred;
	}
	else {
		var mon = "$" + num.toString();
	}*/
	var mon = "$" + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/year";
	// SOURCE: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
	return mon;
}

salarySlider.oninput = function() {
	salary = this.value - (this.value % 500);
	salaryParagraph.innerHTML = numToMon(salary);
	inputSalary.value = salary;
}

salaryButton.onclick = function() {
	salary = inputSalary.value;
	salary = salary.replace("$", "");
	salary = salary.replace(",", "");
	if (Number.isSafeInteger(Number(salary))) {
		salaryParagraph.innerHTML = numToMon(salary);
		salarySlider.value = salary;
	}
}
