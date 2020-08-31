
const sliderOne = document.querySelectorAll(".slider .slider-one img");
const sliderTwo = document.querySelectorAll(".slider .slider-two img");
const navBar = document.querySelector(".navigation");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const hotelName = document.querySelector(".page-first-wrapper h1");
const nameSplit = hotelName.textContent.split("");
hotelName.textContent = "";

const roomCircles = document.querySelectorAll(".room-type .room-type-circles");
const roomName = document.querySelector(".room-name h2");
const roomPrice = document.querySelector(".room-name span");
const roomImg = document.querySelector(".page-third-right img");
const bedImg = document.querySelector(".bed-img");
const bedCount = document.querySelector(".bed");
const humanCount = document.querySelector(".human");

//  sP = second Page  :  tP = third Page  :  Sl = Slider  //
const sPColor = document.querySelector(".page-second-color");
const sPLeft = document.querySelector(".page-second-left");
const sPLeftp = document.querySelector(".page-second-left p");
const sPLeftHtwo = document.querySelector(".page-second-left h2");

const sPRightHTwo = document.querySelector(".page-second-right h2");
const sPRightImgs = document.querySelectorAll(".page-second-right .page-second-img");
const sPRightText = document.querySelectorAll(".page-second-right .page-second-text");

const tPLeftSlStndrt = document.querySelector(".page-third-right .slider-standart");
const tPLeftSlHstl = document.querySelector(".page-third-right .slider-hostel");
const tPLeftImgsHstl = document.querySelectorAll(".page-third-right .slider-hostel img:not(.next-btn-img):not(.prv-btn-img)");
const tPLeftImgsStndrt = document.querySelectorAll(".page-third-right .slider-standart img:not(.next-btn-img):not(.prv-btn-img)");
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
	const sliderWidth = tPLeftImgsStndrt[0].clientWidth;
	const h2Height = document.querySelector(".page-second-right h2");
	const ulHeight = document.querySelector(".page-second-right ul");
	const chg = ulHeight.clientHeight - h2Height.clientHeight - 15;
	ulHeight.style.height = chg + "px";

	let currentImg = 0;
	let currImgH = 0;
	let currImgS = 0;
	function nextIndex(array){
		if(currImgH+1 > array.length-1){
			return 0;
		} else {
			return currImgH+1;
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
		if(currImgH-1 < 0){
			return array.length-1;
		} else {
			return currImgH-1;
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
    		
    		tPLeftSlHstl.style.flex = "0 1";
    		tPLeftSlStndrt.style.flex = "1 0";
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

    		tPLeftSlHstl.style.flex = "1 0";
    		tPLeftSlStndrt.style.flex = "0 1";
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
		tPLeftImgsHstl[nextIndex(tPLeftImgsHstl)].style.transition = "0ms";
		tPLeftImgsHstl[nextIndex(tPLeftImgsHstl)].style.transform = "translateX("+sliderWidth*(currImgH)+"px)";
		tPLeftImgsHstl[currImgH].style.transform = "translateX("+(-sliderWidth*(currImgH+1))+"px)";

		function delay(){
			tPLeftImgsHstl[fixedImg()].style.transition = "400ms";
			tPLeftImgsHstl[fixedImg()].style.transform = "translateX("+(-sliderWidth*(currImgH))+"px)";
		}
		setTimeout(delay, 40);

		function fixedImg(){
			if(nextIndex(tPLeftImgsHstl) <= 0){
				return tPLeftImgsHstl.length-1;
			} else {
				return nextIndex(tPLeftImgsHstl)-1;
			}
		}

		currImgH++;
		if(currImgH > tPLeftImgsHstl.length-1){
			currImgH = 0;
		}
	}

	function hostelSliderPrev(){
		tPLeftImgsHstl[prevIndex(tPLeftImgsHstl)].style.transition = "0ms";
		tPLeftImgsHstl[prevIndex(tPLeftImgsHstl)].style.transform = "translateX("+(-sliderWidth*(prevIndex(tPLeftImgsHstl)+1))+"px)";
		tPLeftImgsHstl[currImgH].style.transform = "translateX("+(-sliderWidth*(currImgH-1))+"px)";

		function delay(){
			tPLeftImgsHstl[fixedImg()].style.transition = "400ms";
			tPLeftImgsHstl[fixedImg()].style.transform = "translateX("+(-sliderWidth*(currImgH))+"px)";
		}
		setTimeout(delay, 40);

		function fixedImg(){
			if(prevIndex(tPLeftImgsHstl) >= tPLeftImgsHstl.length-1){
				return 0;
			} else {
				return prevIndex(tPLeftImgsHstl)+1;
			}
		}

		currImgH--;
		if(currImgH < 0){
			currImgH = tPLeftImgsHstl.length-1;
		}
	}

	function standartSliderNext(){
		tPLeftImgsStndrt[nextIndexS(tPLeftImgsStndrt)].style.transition = "0ms";
		tPLeftImgsStndrt[nextIndexS(tPLeftImgsStndrt)].style.transform = "translateX("+sliderWidth*(currImgS)+"px)";
		tPLeftImgsStndrt[currImgS].style.transform = "translateX("+(-sliderWidth*(currImgS+1))+"px)";
		console.log(nextIndexS(tPLeftImgsStndrt))
		function delay(){
			tPLeftImgsStndrt[fixedImg()].style.transition = "400ms";
			tPLeftImgsStndrt[fixedImg()].style.transform = "translateX("+(-sliderWidth*(currImgS))+"px)";
		}
		setTimeout(delay, 40);

		function fixedImg(){
			if(nextIndexS(tPLeftImgsStndrt) <= 0){
				return tPLeftImgsStndrt.length-1;
			} else {
				return nextIndexS(tPLeftImgsStndrt)-1;
			}
		}

		currImgS++;
		if(currImgS > tPLeftImgsStndrt.length-1){
			currImgS = 0;
		}
	}

	function standartSliderPrev(){
		tPLeftImgsStndrt[prevIndexS(tPLeftImgsStndrt)].style.transition = "0ms";
		tPLeftImgsStndrt[prevIndexS(tPLeftImgsStndrt)].style.transform = "translateX("+(-sliderWidth*(prevIndexS(tPLeftImgsStndrt)+1))+"px)";
		tPLeftImgsStndrt[currImgS].style.transform = "translateX("+(-sliderWidth*(currImgS-1))+"px)";

		function delay(){
			tPLeftImgsStndrt[fixedImg()].style.transition = "400ms";
			tPLeftImgsStndrt[fixedImg()].style.transform = "translateX("+(-sliderWidth*(currImgS))+"px)";
		}
		setTimeout(delay, 40);

		function fixedImg(){
			if(prevIndexS(tPLeftImgsStndrt) >= tPLeftImgsStndrt.length-1){
				return 0;
			} else {
				return prevIndexS(tPLeftImgsStndrt)+1;
			}
		}

		currImgS--;
		if(currImgS < 0){
			currImgS = tPLeftImgsStndrt.length-1;
		}
	}

	window.onscroll = function(){
		if (window.scrollY >= sPLeft.getBoundingClientRect().y){
			sPLeft.style.backgroundColor = "#2C282B";
			sPColor.style.backgroundColor = "#2C282B";
			sPRightHTwo.classList.add("animate");

			for(i=0; i <= sPRightImgs.length-1; i++){
				sPRightImgs[i].classList.add("animate");
			}
		} else {
			sPLeft.style.backgroundColor = "#68645E";
			sPColor.style.backgroundColor = "#68645E";
			sPRightHTwo.classList.remove("animate");

			for(i=0; i <= sPRightImgs.length-1; i++){
				sPRightImgs[i].classList.remove("animate");
			}
		}

		if (window.scrollY >= sPLeft.getBoundingClientRect().y+100){
			sPLeftp.classList.add("animate");
			sPLeftHtwo.classList.add("animate");

			for(i=0; i <= sPRightText.length-1; i++){
				sPRightText[i].classList.add("animate");
			}
		} else {
			sPLeftp.classList.remove("animate");
			sPLeftHtwo.classList.remove("animate");

			for(i=0; i <= sPRightText.length-1; i++){
				sPRightText[i].classList.remove("animate");
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

