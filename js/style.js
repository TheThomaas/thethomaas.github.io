var Night = "-webkit-linear-gradient(bottom, #209cff 0%, #537895 100%)"; //Eternal Constance
var Morning = "-webkit-linear-gradient(60deg, #209cff 0%, #537895 100%)"; //Over Sun
var Day = "-webkit-linear-gradient(bottom, #209cff 0%, #537895 100%)"; //Seashore
var Evening = "-webkit-linear-gradient(-20deg, #209cff 0%, #537895 100%)"; //Orange Juice


$(document).ready(
	function Start()
	{
		// Times:
		// 	Morning => 06:00-11:00
		// 	Day	=> 11:00-16:00
		// 	Evening => 16:00-20:00
		// 	Night	=> 20:00-06:00
		
		// After 6 Hour Offset:
		// 	Morning => 00:00-05:00
		// 	Day	=> 05:00-10:00
		// 	Evening => 10:00-14:00
		// 	Night	=> 14:00-00:00
		
		var d = new Date().getHours() - 6; // Offset for less complicated calculations
		if (d < 5)
			document.getElementsByTagName("body")[0].style.background = Morning;
		else if (d < 10)
			document.getElementsByTagName("body")[0].style.background = Day;
		else if (d < 14)
			document.getElementsByTagName("body")[0].style.background = Evening;
		else
			document.getElementsByTagName("body")[0].style.background = Night;
	}
);
