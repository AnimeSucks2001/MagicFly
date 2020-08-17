
const allImgs = document.querySelectorAll(".slider img");
const navBar = document.querySelector(".navigation");
const navBtn = document.querySelector(".nav-btn");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const hotelName = document.querySelector(".start-page h1");
const nameSplit = hotelName.textContent.split("");
hotelName.textContent = "";

const roomCircles = document.querySelectorAll(".room-type .room-type-circles");
const roomName = document.querySelector(".room-name h2");
const roomPrice = document.querySelector(".room-name span");
const roomImg = document.querySelector(".page-third-right img");
const bedImg = document.querySelector(".bed-img");
const bedCount = document.querySelector(".bed");
const humanCount = document.querySelector(".human");

const secondPageLeft = document.querySelector(".page-second");
const secondPageLeftP = document.querySelector(".page-second-left p");
const secondPageLeftHTwo = document.querySelector(".page-second-left h2");

const secondPageRightHTwo = document.querySelector(".page-second-right h2");
const secondPageRightImgs = document.querySelectorAll(".page-second-right .page-second-img");
const secondPageRightText = document.querySelectorAll(".page-second-right .page-second-text");

for(i=0; i <= nameSplit.length-1; i++){
    hotelName.innerHTML += "<span>" + nameSplit[i] + "</span>";
}

window.onload = calcWidth;

function calcWidth(){
	const h2Height = document.querySelector(".page-second-right h2");
	const ulHeight = document.querySelector(".page-second-right ul");
	const chg = ulHeight.clientHeight - h2Height.clientHeight - 15;
	ulHeight.style.height = chg + "px";

	const imgWidth = allImgs[0].clientWidth;
	let resetWidth = 0;
	let currentImg = 0;
	let dynamicWidth = imgWidth;

	for (i = 0; i <= allImgs.length - 1; i++) {
			resetWidth = resetWidth + imgWidth;
			allImgs[i].style.transform = "translateX("+(0)+"px)";
	}
	
	function slideRight(){

		//// Selecting 4 index imgs ///////////////////////
		let imgSelected = currentImg;
		let imgNext = function(){
			if (currentImg >= allImgs.length - 1){
				return 0;
			} else {
				return currentImg + 1;
			}
		}

		let imgNextTwo = function(){
			if (currentImg === allImgs.length - 2){
				return 0;
			} else if (currentImg >= allImgs.length - 1) {
				return 1;
			} else {
				return currentImg + 2;
			}
		}

		let imgPrev = function(){
			if (currentImg <= 0){
				return allImgs.length - 1;
			} else {
				return currentImg - 1;
			}
		}

		let imgPrevTwo = function(){
			if (currentImg <= 0){
				return allImgs.length - 2;
			} else if (currentImg === 1){
				return allImgs.length - 1;
			} else {
				return currentImg - 2;
			}
		}
		//////////////////////////////////////////////////

		function prevImgTwo(){
			return -imgWidth * (imgPrevTwo() - 2);
		}

		function nextImgTwo(){
			return -imgWidth * (imgNextTwo() - 1);
		}
		console.log(currentImg +" "+imgNext())
		console.log(allImgs)
		allImgs[imgPrevTwo()].style.transition = "none";
		allImgs[imgNextTwo()].style.transition = "600ms";

		allImgs[currentImg].style.transform = "translateX("+(-dynamicWidth * testtt())+"px)";
		allImgs[imgNext()].style.transform = "translateX("+(-dynamicWidth * imgNext())+"px)";
		allImgs[imgNextTwo()].style.transform = "translateX("+nextImgTwo()+"px)";
		allImgs[imgPrev()].style.transform = "translateX("+(-dynamicWidth * testttt())+"px)";
		allImgs[imgPrevTwo()].style.transform = "translateX("+prevImgTwo()+"px)";

		function testtt(){
			if(currentImg > 0){return currentImg+1}else{return 1}
		}
		function testttt(){
			if(imgPrev() > 0){return currentImg+1}else{return 2}
		}

		currentImg++;

		if (currentImg >= allImgs.length){
			currentImg = 0;
		}
    }

    function slideLeft(){

		//// Selecting 4 index imgs ///////////////////////
		let imgSelected = currentImg;
		let imgNext = function(){
			if (currentImg >= allImgs.length - 1){
				return 0;
			} else {
				return currentImg + 1;
			}
		}

		let imgNextTwo = function(){
			if (currentImg === allImgs.length - 2){
				return 0;
			} else if (currentImg >= allImgs.length - 1) {
				return 1;
			} else {
				return currentImg + 2;
			}
		}

		let imgPrev = function(){
			if (currentImg <= 0){
				return allImgs.length - 1;
			} else {
				return currentImg - 1;
			}
		}

		let imgPrevTwo = function(){
			if (currentImg <= 0){
				return allImgs.length - 2;
			} else if (currentImg === 1){
				return allImgs.length - 1;
			} else {
				return currentImg - 2;
			}
		}
		//////////////////////////////////////////////////

		function prevImgTwo(){
			return -imgWidth * (imgPrevTwo() + 1);
		}

		function nextImgTwo(){
			return -imgWidth * (imgNextTwo() + 2);
		}

		allImgs[imgNextTwo()].style.transition = "none";
		allImgs[imgPrevTwo()].style.transition = "600ms";

		allImgs[currentImg].style.transform = "translateX("+(-dynamicWidth * testtt())+"px)";
		allImgs[imgNext()].style.transform = "translateX("+(-dynamicWidth * testttt())+"px)";
		allImgs[imgNextTwo()].style.transform = "translateX("+nextImgTwo()+"px)";
		allImgs[imgPrev()].style.transform = "translateX("+(-dynamicWidth * imgPrev())+"px)";
		allImgs[imgPrevTwo()].style.transform = "translateX("+prevImgTwo()+"px)";
		
		function testtt(){
			if(currentImg > 0){return currentImg-1}else{return -1}
		}
		function testttt(){
			if(imgNext() > 0){return currentImg-1}else{return -2}
		}

		currentImg--;

		if (currentImg <= -1){
			currentImg = allImgs.length - 1;
		}
    }

    function sideBar(){
    	const navWidth = navBar.clientWidth;
    	if(navBar.style.transform != "translateX("+navWidth+"px)"){
    		navBar.style.transform = "translateX("+navWidth+"px)";
    	} else {
    		navBar.style.transform = "translateX(0px)";
    	}
    }

    let inxEl = 0;
    let textTimer = setInterval(editName, 55);
    function editName(){
    	const nameSpan = hotelName.querySelectorAll("span")[inxEl];
		nameSpan.classList.add("text-animate");
		inxEl++;

		if(inxEl >= nameSplit.length){
			end();
			return;
		}
    }

    function end(){
    	clearInterval(textTimer);
    	textTimer = null;
    }

    function roomPicker(){
    	let currentCircle = 0;

    	if (this.classList.contains("rc1")){
    		currentCircle = 0;
    		roomName.style.opacity = "0";

    		function waitStyle(){
    			roomName.style.opacity = "1";
    			roomName.textContent = "Стандарт";
    			roomPrice.textContent = "450$";
    			bedCount.textContent = "1";
    			bedImg.src = "img/bedone.svg";
    			humanCount.textContent = "2";
    		}
    		setTimeout(waitStyle, 310);

    		roomCircles[currentCircle].classList.add("picked");
    		roomCircles[1].classList.remove("picked");
    		roomCircles[2].classList.remove("picked");
    	} else if (this.classList.contains("rc2")){
    		currentCircle = 1;
    		roomName.style.opacity = "0";

    		function waitStyle(){
    			roomName.style.opacity = "1";
    			roomName.textContent = "Хостел";
    			roomPrice.textContent = "130$";
    			bedCount.textContent = "2";
    			bedImg.src = "img/bedtwo.svg";
    			humanCount.textContent = "4";
    		}
    		setTimeout(waitStyle, 310);

    		roomCircles[currentCircle].classList.add("picked");
    		roomCircles[0].classList.remove("picked");
    		roomCircles[2].classList.remove("picked");
    	} else {
    		currentCircle = 2;
    		roomName.style.opacity = "0";

    		function waitStyle(){
    			roomName.style.opacity = "1";
    			roomName.textContent = "Люкс";
    			roomPrice.textContent = "900$";
    			bedCount.textContent = "99";

    			humanCount.textContent = "1";
    		}
    		setTimeout(waitStyle, 310);

    		roomCircles[currentCircle].classList.add("picked");
    		roomCircles[0].classList.remove("picked");
    		roomCircles[1].classList.remove("picked");
    	}
    }

    nextBtn.addEventListener("click", slideRight);
    prevBtn.addEventListener("click", slideLeft);
    navBtn.addEventListener("click", sideBar);

    for(i=0; i < roomCircles.length; i++){
    	roomCircles[i].addEventListener("click", roomPicker);
	}

	window.onscroll = function(){
		if (window.scrollY >= secondPageLeft.getBoundingClientRect().y){
			secondPageLeft.style.backgroundColor = "#132D38";
			secondPageRightHTwo.classList.add("animate");

			for(i=0; i <= secondPageRightImgs.length-1; i++){
				secondPageRightImgs[i].classList.add("animate");
			}
		} else {
			secondPageLeft.style.backgroundColor = "#113C58";
			secondPageRightHTwo.classList.remove("animate");

			for(i=0; i <= secondPageRightImgs.length-1; i++){
				secondPageRightImgs[i].classList.remove("animate");
			}
		}

		if (window.scrollY >= secondPageLeft.getBoundingClientRect().y+100){
			secondPageLeftP.classList.add("second-animate");
			secondPageLeftHTwo.classList.add("second-animate");

			for(i=0; i <= secondPageRightText.length-1; i++){
				secondPageRightText[i].classList.add("animate");
			}
		} else {
			secondPageLeftP.classList.remove("second-animate");
			secondPageLeftHTwo.classList.remove("second-animate");

			for(i=0; i <= secondPageRightText.length-1; i++){
				secondPageRightText[i].classList.remove("animate");
			}
		}
	}


}

