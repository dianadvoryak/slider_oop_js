import MainSlider from "./slider/slider-main";
import MiniSlider from "./slider/slider-mini";

window.addEventListener('DOMContentLoaded', () => {
	const slider = new MainSlider({btns: '.page', container: '.next'})
	slider.render()

	const showUpSlider = new MainSlider({
		container: '.showup__content-slider',
		prev: '.showup__prev',
		next: '.showup__next'
	})
	showUpSlider.init()

	const feedSlider = new MiniSlider({
		container: '.feen__slider',
		prev: '.feed__slider . slick-prev',
		next: '.feed__slider . slick-next',
		activeClass: 'card-active',
		animate: true,
		autoplay: true
	})
	feedSlider.init()

})