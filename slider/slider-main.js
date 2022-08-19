import Slider from "./slider";

export default class MainSlider extends Slider{
  constructor(btns){
    super(btns)
  }

  showSlides(n){
    if(n > this.showSlides.length){
      this.slideIndex = 1
    }
    if(n < 1){
      this.slideIndex = this.showSlides.length
    }
    try{
      this.handson.style.opasity = '0'
      if(n == 3){
        this.handson.classList.add('animated')
        setTimeout(() => {
          this.hanson.style.opasity = '1'
          this.hanson.classList.add('slideInUp')
        }, 3000)
      } else {
        this.hanson.classList.remove('slideInUp')
      }
    }catch(e){

    }
  }
  plusSlides(n){
    this.showSlides(this.slideIndex += n)
  }
  render(){
    try{
      this.hanson = document.querySelector('.handson')
    }catch(e){

    }
    this.btns.forEach(item => {
      item.addEventListener('click', () => {
        this.plusSlides(1)
      })
      item.parentNode.previosElementSibling.addEventListener('click', (e) => {
        e.preventDefault()
        this.slideIndex = 1
        this.showSlides(this.slideIndex)
      })
    })
    this.showSlides(this.slideIndex)
  }
}