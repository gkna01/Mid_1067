window.onload = pageLoad;

function pageLoad(){

	var startButton = document.getElementById("start");
	startButton.onclick = startGame;
}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var min = 0.5; // 0.5 minute
	var second = min * 60;
	var x = document.getElementById('clock');
	x.innerHTML = second; // display initial time
	var timer = setInterval(timeCount, TIMER_TICK);

	function timeCount(){
		second--;
		x.innerHTML = second;
		
		var allbox = document.querySelectorAll("#layer div");
		
		if (second > 0 && allbox.length == 0) {
			alert("You Win!!!");
			clearInterval(timer);
			resetLayer();
		} else if (second <= 0 && allbox.length > 0) {
			alert("Game Over!!");
			clearScreen();
			clearInterval(timer);
			resetLayer();
		}
	}

	function resetLayer()
	{
		timer = null;
		second = min * 60;
		x.innerHTML = "";
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("layer");
	var colorDrop = document.getElementById("color").value;
	for (var i = 0; i < numbox; i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square";
		tempbox.id = "box" + i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		tempbox.style.backgroundColor = colorDrop;
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
        box.remove(box);
    }
	
}

function clearScreen(){
	var allbox = document.querySelectorAll("#layer div");
	for (var i = 0; i < allbox.length; i++){
		allbox[i].remove(allbox[i]);
	}
}



