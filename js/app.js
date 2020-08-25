
const sliderOne = document.querySelectorAll(".slider .slider-one img");
const sliderTwo = document.querySelectorAll(".slider .slider-two img");
const navBar = document.querySelector(".navigation");
const navBtn = document.querySelector(".nav-btn");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const hotelName = document.querySelector(".start-page h1");
const nameSplit = hotelName.textContent.split("");
hotelName.textContent = "";

const hamburOne = document.querySelector(".hamburger-one");
const hamburTwo = document.querySelector(".hamburger-two");
const hamburThree = document.querySelector(".hamburger-three");

const roomCircles = document.querySelectorAll(".room-type .room-type-circles");
const roomName = document.querySelector(".room-name h2");
const roomPrice = document.querySelector(".room-name span");
const roomImg = document.querySelector(".page-third-right img");
const bedImg = document.querySelector(".bed-img");
const bedCount = document.querySelector(".bed");
const humanCount = document.querySelector(".human");

const secondPageColor = document.querySelector(".page-second-color");
const secondPageLeft = document.querySelector(".page-second-left");
const secondPageLeftP = document.querySelector(".page-second-left p");
const secondPageLeftHTwo = document.querySelector(".page-second-left h2");

const secondPageRightHTwo = document.querySelector(".page-second-right h2");
const secondPageRightImgs = document.querySelectorAll(".page-second-right .page-second-img");
const secondPageRightText = document.querySelectorAll(".page-second-right .page-second-text");

const thirdPageLeftSliderStandart = document.querySelector(".page-third-right .slider-standart");
const thirdPageLeftSliderHostel = document.querySelector(".page-third-right .slider-hostel");
const thirdPageLeftImgsHostel = document.querySelectorAll(".page-third-right .slider-hostel img:not(.next-btn-img):not(.prv-btn-img)");
const thirdPageLeftImgsStandart = document.querySelectorAll(".page-third-right .slider-standart img:not(.next-btn-img):not(.prv-btn-img)");
const noDisplay = document.querySelector(".display-none");
const sliderHostelNext = document.querySelector(".sliderH-btn-next");
const sliderHostelPrev = document.querySelector(".sliderH-btn-prv");
const sliderStandartNext = document.querySelector(".page-third-right .sliderS-btn-next");
const sliderStandartPrev = document.querySelector(".page-third-right .sliderS-btn-prv");

const navList = document.querySelectorAll(".nav-list");
const scrollAbout = document.querySelector(".page-second");
const scrollRooms = document.querySelector(".page-third");
const scrollGallery = document.querySelector(".page-fourth");
const scrollMap = document.querySelector(".map");
const scrollMapLink = document.querySelector("header .scroll-map-link");

for(i=0; i <= nameSplit.length-1; i++){
    hotelName.innerHTML += "<span>" + nameSplit[i] + "</span>";
}

window.onload = calcAll;

function calcAll(){
	const sliderWidth = thirdPageLeftImgsStandart[0].clientWidth;
	const h2Height = document.querySelector(".page-second-right h2");
	const ulHeight = document.querySelector(".page-second-right ul");
	const chg = ulHeight.clientHeight - h2Height.clientHeight - 15;
	ulHeight.style.height = chg + "px";

	let currentImg = 0;
	let currImg = 0;
	let currImgS = 0;
	function nextIndex(array){
		if(currImg+1 > array.length-1){
			return 0;
		} else {
			return currImg+1;
		}
	}

	function nextIndexS(array){
		if(currImgS+1 > array.length-1){
			return 0;
		} else {
			return currImgS+1;
		}
	}

	function prevIndex(array){
		if(currImg-1 < 0){
			return array.length-1;
		} else {
			return currImg-1;
		}
	}

	function prevIndexS(array){
		if(currImgS-1 < 0){
			return array.length-1;
		} else {
			return currImgS-1;
		}
	}

	sliderOne[currentImg].style.zIndex = "1";
	sliderTwo[currentImg].style.zIndex = "1";
	sliderOne[currentImg].style.opacity = "1";
	sliderTwo[currentImg].style.opacity = "1";

	function slideRight(){
		function nextImg(){
			if (currentImg+1 >= sliderOne.length){
				return 0;
			} else {
				return currentImg + 1;
			}
		}

		sliderOne[currentImg].style.zIndex = "0";
		sliderOne[currentImg].style.opacity = "0.3";
		sliderOne[nextImg()].style.zIndex = "1";
		sliderOne[nextImg()].style.opacity = "1";
		sliderTwo[currentImg].style.zIndex = "0";
		sliderTwo[currentImg].style.opacity = "0.3";
		sliderTwo[nextImg()].style.zIndex = "1";
		sliderTwo[nextImg()].style.opacity = "1";

		if (currentImg >= sliderOne.length-1){
			currentImg = 0;
		} else {
			currentImg++;
		}
    }

    let clicked = false;
    function sideBar(){
    	const navWidth = navBar.clientWidth;

    	if(navBar.style.transform != "translateX("+navWidth+"px)"){
    		navBar.style.transform = "translateX("+navWidth+"px)";
    	} else {
    		navBar.style.transform = "translateX(0px)";
    	}

    	if(clicked){
    		clicked = false;
    		hamburOne.classList.remove("animate");
    		hamburTwo.classList.remove("animate");
    		hamburThree.classList.remove("animate");
    	} else {
    		clicked = true;
    		hamburOne.classList.add("animate");
    		hamburTwo.classList.add("animate");
    		hamburThree.classList.add("animate");
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

    roomCircles[0].classList.add("picked");
    function roomPicker(){
    	let currentCircle = 0;

    	if (this.classList.contains("rc1")){
    		currentCircle = 0;
    		roomName.style.opacity = "0";

    		function waitStyle(){
    			roomName.style.opacity = "1";
    			roomName.textContent = "Стандарт";
    			roomPrice.textContent = "400₴";
    			bedCount.textContent = "1";
    			bedImg.src = "img/bedone.svg";
    			humanCount.textContent = "2";
    		}
    		setTimeout(waitStyle, 310);

    		noDisplay.style.visibility = "visible";
    		
    		thirdPageLeftSliderHostel.style.flex = "0 1";
    		thirdPageLeftSliderStandart.style.flex = "1 0";
    		//thirdPageLeftImgsHostel.style.transform = "translateX(0)";
    		//thirdPageLeftImgStandart.style.transform = "translateX(0)";
    		roomCircles[currentCircle].classList.add("picked");
    		roomCircles[1].classList.remove("picked");
    		roomCircles[2].classList.remove("picked");
    	} else if (this.classList.contains("rc2")){
    		currentCircle = 1;
    		roomName.style.opacity = "0";

    		function waitStyle(){
    			roomName.style.opacity = "1";
    			roomName.textContent = "Хостел";
    			roomPrice.textContent = "130₴";
    			bedCount.textContent = "2";
    			bedImg.src = "img/bedtwo.svg";
    			humanCount.textContent = "4";
    		}
			setTimeout(waitStyle, 310);
			
    		noDisplay.style.visibility = "hidden";

    		thirdPageLeftSliderHostel.style.flex = "1 0";
    		thirdPageLeftSliderStandart.style.flex = "0 1";
    		//thirdPageLeftImgsHostel.style.transform = "translateX(-100%)";
    		//thirdPageLeftImgStandart.style.transform = "translateX(100%)";
    		roomCircles[currentCircle].classList.add("picked");
    		roomCircles[0].classList.remove("picked");
    		roomCircles[2].classList.remove("picked");
    	} else {
    		currentCircle = 2;
    		roomName.style.opacity = "0";

    		function waitStyle(){
    			roomName.style.opacity = "1";
    			roomName.textContent = "Люкс";
    			roomPrice.textContent = "900₴";
    			bedCount.textContent = "99";
    			humanCount.textContent = "1";
    		}
    		setTimeout(waitStyle, 310);

    		roomCircles[currentCircle].classList.add("picked");
    		roomCircles[0].classList.remove("picked");
    		roomCircles[1].classList.remove("picked");
    	}
    }

    for(i=0; i < roomCircles.length; i++){
    	roomCircles[i].addEventListener("click", roomPicker);
	}

	function hostelSliderNext(){
		thirdPageLeftImgsHostel[nextIndex(thirdPageLeftImgsHostel)].style.transition = "0ms";
		thirdPageLeftImgsHostel[nextIndex(thirdPageLeftImgsHostel)].style.transform = "translateX("+sliderWidth*(currImg)+"px)";
		thirdPageLeftImgsHostel[currImg].style.transform = "translateX("+(-sliderWidth*(currImg+1))+"px)";

		function delay(){
			thirdPageLeftImgsHostel[fixedImg()].style.transition = "400ms";
			thirdPageLeftImgsHostel[fixedImg()].style.transform = "translateX("+(-sliderWidth*(currImg))+"px)";
		}
		setTimeout(delay, 40);

		function fixedImg(){
			if(nextIndex(thirdPageLeftImgsHostel) <= 0){
				return thirdPageLeftImgsHostel.length-1;
			} else {
				return nextIndex(thirdPageLeftImgsHostel)-1;
			}
		}

		currImg++;
		if(currImg > thirdPageLeftImgsHostel.length-1){
			currImg = 0;
		}
	}

	function hostelSliderPrev(){
		thirdPageLeftImgsHostel[prevIndex(thirdPageLeftImgsHostel)].style.transition = "0ms";
		thirdPageLeftImgsHostel[prevIndex(thirdPageLeftImgsHostel)].style.transform = "translateX("+(-sliderWidth*(prevIndex(thirdPageLeftImgsHostel)+1))+"px)";
		thirdPageLeftImgsHostel[currImg].style.transform = "translateX("+(-sliderWidth*(currImg-1))+"px)";

		function delay(){
			thirdPageLeftImgsHostel[fixedImg()].style.transition = "400ms";
			thirdPageLeftImgsHostel[fixedImg()].style.transform = "translateX("+(-sliderWidth*(currImg))+"px)";
		}
		setTimeout(delay, 40);

		function fixedImg(){
			if(prevIndex(thirdPageLeftImgsHostel) >= thirdPageLeftImgsHostel.length-1){
				return 0;
			} else {
				return prevIndex(thirdPageLeftImgsHostel)+1;
			}
		}

		currImg--;
		if(currImg < 0){
			currImg = thirdPageLeftImgsHostel.length-1;
		}
	}

	function standartSliderNext(){
		thirdPageLeftImgsStandart[nextIndexS(thirdPageLeftImgsStandart)].style.transition = "0ms";
		thirdPageLeftImgsStandart[nextIndexS(thirdPageLeftImgsStandart)].style.transform = "translateX("+sliderWidth*(currImgS)+"px)";
		thirdPageLeftImgsStandart[currImgS].style.transform = "translateX("+(-sliderWidth*(currImgS+1))+"px)";
		console.log(nextIndexS(thirdPageLeftImgsStandart))
		function delay(){
			thirdPageLeftImgsStandart[fixedImg()].style.transition = "400ms";
			thirdPageLeftImgsStandart[fixedImg()].style.transform = "translateX("+(-sliderWidth*(currImgS))+"px)";
		}
		setTimeout(delay, 40);

		function fixedImg(){
			if(nextIndexS(thirdPageLeftImgsStandart) <= 0){
				return thirdPageLeftImgsStandart.length-1;
			} else {
				return nextIndexS(thirdPageLeftImgsStandart)-1;
			}
		}

		currImgS++;
		if(currImgS > thirdPageLeftImgsStandart.length-1){
			currImgS = 0;
		}
	}

	function standartSliderPrev(){
		thirdPageLeftImgsStandart[prevIndexS(thirdPageLeftImgsStandart)].style.transition = "0ms";
		thirdPageLeftImgsStandart[prevIndexS(thirdPageLeftImgsStandart)].style.transform = "translateX("+(-sliderWidth*(prevIndexS(thirdPageLeftImgsStandart)+1))+"px)";
		thirdPageLeftImgsStandart[currImgS].style.transform = "translateX("+(-sliderWidth*(currImgS-1))+"px)";

		function delay(){
			thirdPageLeftImgsStandart[fixedImg()].style.transition = "400ms";
			thirdPageLeftImgsStandart[fixedImg()].style.transform = "translateX("+(-sliderWidth*(currImgS))+"px)";
		}
		setTimeout(delay, 40);

		function fixedImg(){
			if(prevIndexS(thirdPageLeftImgsStandart) >= thirdPageLeftImgsStandart.length-1){
				return 0;
			} else {
				return prevIndexS(thirdPageLeftImgsStandart)+1;
			}
		}

		currImgS--;
		if(currImgS < 0){
			currImgS = thirdPageLeftImgsStandart.length-1;
		}
	}

	window.onscroll = function(){
		if (window.scrollY >= secondPageLeft.getBoundingClientRect().y){
			secondPageLeft.style.backgroundColor = "#2C282B";
			secondPageColor.style.backgroundColor = "#2C282B";
			secondPageRightHTwo.classList.add("animate");

			for(i=0; i <= secondPageRightImgs.length-1; i++){
				secondPageRightImgs[i].classList.add("animate");
			}
		} else {
			secondPageLeft.style.backgroundColor = "#68645E";
			secondPageColor.style.backgroundColor = "#68645E";
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

	function scrollToSm(target){
		if (target === 0){
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth"
			});
		} else {
			const scrollDistn = Math.abs(window.pageYOffset + target.getBoundingClientRect().top);
			window.scrollTo({
				left: 0,
				top: scrollDistn,
				behavior: "smooth"
			});
		}
	}

	nextBtn.addEventListener("click", slideRight);
    //prevBtn.addEventListener("click", slideLeft);
    navBtn.addEventListener("click", sideBar);
    sliderHostelNext.addEventListener("click", hostelSliderNext);
    sliderHostelPrev.addEventListener("click", hostelSliderPrev);
    sliderStandartNext.addEventListener("click", standartSliderNext);
    sliderStandartPrev.addEventListener("click", standartSliderPrev);

    navList[0].addEventListener("click", () => {scrollToSm(0)});
    navList[1].addEventListener("click", () => {scrollToSm(scrollAbout)});
    navList[2].addEventListener("click", () => {scrollToSm(scrollRooms)});
    navList[3].addEventListener("click", () => {scrollToSm(scrollGallery)});
    navList[4].addEventListener("click", () => {scrollToSm(scrollMap)});
    scrollMapLink.addEventListener("click", () => {scrollToSm(scrollMap)});
}

