
	var barChartData = {
		labels : ["HTML","CSS","JavaScript","jQuery","AngularJS","PHP","MySQL","Jasmine","Yii Framework","Bootstrap","NodeJS"],
		datasets : [
			{
                label: "Years of Experience",
				fillColor : "rgba(255,0,0,0.5)",
				strokeColor : "rgba(255,0,0,0.8)",
				highlightFill: "rgba(255,0,0,0.75)",
				highlightStroke: "rgba(255,0,0,1)",
				data : [5, 5, 5, 5, 1, 3, 5, 1, 3, 1, 1]
			}
		]
	}
	window.onload = function(){
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myBar = new Chart(ctx).Bar(barChartData, {
			responsive : true
		});
	}