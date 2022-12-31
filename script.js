let buton = document.getElementById("btn");
buton.addEventListener("click", () => {
	// declaratie variabile lunile anului
	var luna = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

	//declarare zilele anului in vederea alegerii datei

	let data = document.getElementById("date");
	let mesaj = document.createElement("h1");

	var d = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	];
	var M = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

	var startTime = document.getElementById("startTime").value;
	var finishTime = document.getElementById("finishTime").value;
	var today = document.getElementById("date").value;

	var start = startTime.split(":");
	var end = finishTime.split(":");
	var numberStart = start.map(Number);
	var numberEnd = end.map(Number);
	/* transform hours to minutes */
	let h = numberEnd[0] - numberStart[0];
	let mH = h * 60;
	/* calculate just minutes */
	let m = numberEnd[1] - numberStart[1];
	let min = mH + m - document.getElementById("break").value;
	//transform minutes into hh:mm
	let hours = Math.floor(min / 60);
	let minutes = min % 60;
	//define pay rate and calculate daily wage
	let rate = document.getElementById("rate").value;
	let ratePerMin = rate / 60;
	let payMin = ratePerMin * min;
	let overTime = min - 540;

	//function for overtime
	if (min <= 540) {
		console.log("basic");
		payMin = ratePerMin * min;
	} else {
		console.log("9h basic " + overTime / 60 + " h overtime");
		payMin = ratePerMin * 540 + ratePerMin * overTime * 1.25;
	}

	var day = new Date(data.value).getDay();
	var month = new Date(data.value).getMonth();
	var year = new Date(data.value).getFullYear();
	var Day = today.substr(8, 2);

	var result = document.createElement("p");

	result.innerHTML =
		"On " +
		d[day] +
		" " +
		M[month] +
		" " +
		Day +
		" year " +
		year +
		" you worked " +
		hours +
		" hours " +
		"and " +
		minutes +
		" minutes" +
		" and you will be paid " +
		payMin +
		" pounds";
	document.getElementById("form").appendChild(result);

	let reset = document.getElementById("reset");
	reset.addEventListener("click", () => {
		document.getElementById("form").reset();
		document.getElementById("form").removeChild(result);
	});
});
