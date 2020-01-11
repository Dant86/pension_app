var ageSlider = document.getElementById("ageSlider");
var yearsWorkedSlider = document.getElementById("yearsWorkedSlider");
var salarySlider = document.getElementById("salarySlider");

var ageParagraph = document.getElementById("age");
var yearsWorkedParagraph = document.getElementById("years_worked");
var salaryParagraph = document.getElementById("salary");
ageParagraph.innerHTML = "21 years old";
yearsWorkedParagraph.innerHTML = "0 years";
salaryParagraph.innerHTML = "$60,000/year";
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
	/*
	chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		theme: "light2",
		title:{
			text: "Pension Data"
		},
		axisY:{
			includeZero: false
		},
		data: [{        
			type: "line",       
			dataPoints: [
				{ y: 450 },
				{ y: 414},
				{ y: age * 5, indexLabel: "highest",markerColor: "red", markerType: "triangle" },
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
	*/
}

// UPDATE YEARS WORKED
yearsWorkedSlider.oninput = function() {
	yearsWorked = this.value;
	yearsWorkedParagraph.innerHTML = yearsWorked.toString() + " " + "years";
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
	var mon = "$" + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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