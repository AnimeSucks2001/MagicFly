
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

const thirdPageLeftImgStandart = document.querySelector(".page-third-right .img-standart");
const thirdPageLeftImgHostel = document.querySelector(".page-third-right .img-hostel");

const navList = document.querySelectorAll(".nav-list");
const scrollAbout = document.querySelector(".page-second");
const scrollRooms = document.querySelector(".page-third");
const scrollGallery = document.querySelector(".page-fourth");
//const scrollMap = document.querySelector(".map");

for(i=0; i <= nameSplit.length-1; i++){
    hotelName.innerHTML += "<span>" + nameSplit[i] + "</span>";
}

window.onload = calcWidth;

function calcWidth(){
	const h2Height = document.querySelector(".page-second-right h2");
	const ulHeight = document.querySelector(".page-second-right ul");
	const chg = ulHeight.clientHeight - h2Height.clientHeight - 15;
	ulHeight.style.height = chg + "px";

	let currentImg = 0;
	
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

    		thirdPageLeftImgHostel.style.transform = "translateX(0)";
    		thirdPageLeftImgStandart.style.transform = "translateX(0)";
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

    		thirdPageLeftImgHostel.style.transform = "translateX(-100%)";
    		thirdPageLeftImgStandart.style.transform = "translateX(100%)";
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
			window.scrollTo(0, 0);
		} else {
			const scrollDistn = Math.abs(window.pageYOffset + target.getBoundingClientRect().top);
			window.scrollTo(0, scrollDistn);
		}
	}

	nextBtn.addEventListener("click", slideRight);
    //prevBtn.addEventListener("click", slideLeft);
    navBtn.addEventListener("click", sideBar);

    navList[0].addEventListener("click", () => {scrollToSm(0)});
    navList[1].addEventListener("click", () => {scrollToSm(scrollAbout)});
    navList[2].addEventListener("click", () => {scrollToSm(scrollRooms)});
    navList[3].addEventListener("click", () => {scrollToSm(scrollGallery)});
    //navList[4].addEventListener("click", () => {scrollToSm(scrollMap)});

}

