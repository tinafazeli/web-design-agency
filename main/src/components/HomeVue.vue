<template>
  <div class="home">
    <Navbar/>
    <div class="shape1">
      <img src="../assets/images/shape-1.svg" alt="">
    </div>
    <div class="shape2">
      <img src="../assets/images/shape-2.svg" alt="">
    </div>
    <div class="shape3">
      <img src="../assets/images/shape-3.svg" alt="">
    </div>

    <div class="container">
      <div class="text">
        <h3 class="title1">Creative Thinking</h3>
        <h1 class="title2">Strategic Thinking, Tangible <span> Results for Business!</span></h1>
        <div class="contnet">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <button>Explore Now</button>
      </div>
      <div class="img-box" dir="rtl">
        <img src="../assets/images/shape-4.svg" alt="" class="shape4">
        <img src="../assets/images/shape-6.svg" alt="" class="shape6 shape-transaction">
        <img src="../assets/images/shape-7.svg" alt="" class="shape7 shape-transaction">
        <img src="../assets/images/hero-1.png" alt="" class="img1 shape-transaction2">
        <img src="../assets/images/hero-2.png" alt="" class="img2 shape-transaction">
      </div>
      <div class="scroll">
        <img src="../assets/images/scroll-bg.svg" alt="" class="scroll-back">
        <div class="scroll-icon shape-transaction">
          <a href="#scroll-bottom">
            <img src="../assets/images/scroll-icon.svg" alt="">
          </a>
        </div>
      </div>
    </div>
    <secion id="scroll-bottom" class="About-sec">
      <div class="about-sec-shape-group">
        <img src="../assets/images/about-1.png" alt="">
        <img src="../assets/images/about-2.png" alt="">
        <img src="../assets/images/about-3.png" alt="">
        <img src="../assets/images/about-4.png" alt="">
      </div>
      <div class="about-sec-shape">
        <img src="../assets/images/shape-37.svg" alt="" class="shape-transaction">
      </div>
    </secion>
  </div>
</template>

<script>
import Navbar from '@/components/NavbarSec.vue'
export default {
  name:'NavbarView',
  components:{
    Navbar
  }
}
</script>


<style scoped>

.container{
  display: flex;
  margin-top: 5%;
}
.text .title1{
  font-family:DreamyFont;
  font-weight:100;
  font-size: 1.6rem;
  letter-spacing: 3.5px;
  width: 50%;
  margin-left: 10%;
  margin-bottom: 0px;
  
}
.text .title2{
  font-family:Cool;
  font-size: 3.2rem;
  letter-spacing: 1.5px;
  line-height: 70px;
  width: 80%;
  margin-left: 9%;
  margin-top: 10px;
}
.text .title2 span{
  background: linear-gradient(to right, rgb(84, 84, 248), rgb(39, 235, 137));
  background-clip:text;
  -webkit-text-fill-color: transparent;
}
.contnet{
  margin-left: 9.5%;
  color: rgb(172, 170, 170);
  line-height: 30px;
  width: 70%;
}
.container button{
  margin-left: 9.5%;
  margin-top: 7.5%;
  width: 150px;
  height:50px;
  font-family:Cool;
  font-size: 1rem;
  color:#fff;
  text-align: center;
  border:none;
  border-radius: 50px;
  background: linear-gradient(to right, rgb(39, 235, 137), rgb(84, 84, 248));

}
.container button:hover{
  background: linear-gradient(to right,  rgb(84, 84, 248),rgb(39, 235, 137));  
}
.img-box{
  display: flex;
  margin-right: 7%;
}
.img1{
  margin-top: 10px;
  width: 100%;
  position: relative;
}
.img2{
  position: absolute;
  right: 24%;
  top:50%;
  width: 17%;
  height: 60%;
  border:10px solid rgb(61, 50, 50);
  border-radius: 118px;
  box-shadow: -10px -20px rgba(92, 91, 91, 0.11);
}
.shape1,.shape2,.shape3,.shape4,.shape6,.shape7{
  position: absolute;
}
.shape1{
  bottom: 50px;
  left:0;
  height: 80%;
}
.shape2{
  top:0;
  right:0;
}
.shape3,.shape4{
  opacity:0.2;
}
.shape3{
  top:12%;
  left:0;
}
.shape4{
  right:16%;
  top:13%;
  transform: rotate(110deg);
  
}
.shape6{
  right:25%;
  top:18%;
}
.shape7{
  right:5%;
  top:22%;
}
@keyframes shake{
  0% {
    
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
.shape-transaction{
  animation: shake 4s;
}
@keyframes shake2{
  0% {
    bottom:10px;
    opacity: 0;
  }
  40% {
    bottom:30px;
    opacity: 1;
  }
  80%{
    bottom:-20px;
    opacity: 1;
  }
  100% {
    bottom:-10px;
  }
}

.shape-transaction2{
  animation: shake2 5s;
}
.container .scroll{
  position: absolute;
  top:42.5rem;
  left:50%;
}
.container .scroll-icon{
  position: absolute;
  top:3.2rem;
  left:44%;
}
.About-sec{
  margin-top: 79px;
  background-color: #fff !important;
  display:grid;
  grid-template-columns: auto auto;
  column-gap: 50px;
}
/* .about-sec-shape-group{
  display: flex;
} */
.about-sec-shape img{
  margin-top: 40px;
  height: 55%;
}
</style>
