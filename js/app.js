
const allImgs = document.querySelectorAll(".slider img");
const navBar = document.querySelector(".navigation");
const navBtn = document.querySelector(".nav-btn");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const hotelName = document.querySelector(".start-page h1");
const nameSplit = hotelName.textContent.split("");
hotelName.textContent = "";

for(i=0; i <= nameSplit.length-1; i++){
    		hotelName.innerHTML += "<span>" + nameSplit[i] + "</span>";
    }

window.onload = calcWidth;

function calcWidth(){
	const imgWidth = allImgs[0].clientWidth;
	let resetWidth = 0;
	let currentImg = 2;
	let dynamicWidth = imgWidth;

	for (i = 0; i <= allImgs.length - 1; i++) {
			resetWidth = resetWidth + imgWidth;
			allImgs[i].style.transform = "translateX("+(-1200)+"px)";
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

    nextBtn.addEventListener("click", slideRight);
    prevBtn.addEventListener("click", slideLeft);
    navBtn.addEventListener("click", sideBar);
}

