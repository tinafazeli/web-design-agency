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
    <div class="shape4">
      <img src="../assets/images/shape-4.svg" alt="">
    </div>
    <div class="container">
      <div class="text">
        <h3 class="title1">Creative Thinking</h3>
        <h1 class="title2">Strategic Thinking, Tangible <span> Results for Business!</span></h1>
        <div class="contnet">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div class="img-box" dir="rtl">
        <img src="../assets/images/shape-6.svg" alt="" class="shape6">
        <img src="../assets/images/shape-7.svg" alt="" class="shape7">
        <img src="../assets/images/hero-1.png" alt="" class="img1">
        <img src="../assets/images/hero-2.png" alt="" class="img2">
        
      </div>
    </div>
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
/* .home{
  background-image: url("../assets/images/shape-2.svg") !important;
  background-repeat: no-repeat;
  background-position-x: right;
  
} */
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
  width: 75%;
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
  box-shadow: -10px -20px rgba(92, 91, 91, 0.514);
  /* border-top-left-radius:122px; */
  /*border-top-right-radius:110px; */
}
.shape1{
  position: absolute;
  bottom: 0;
  left:0;
  height: 80%;
}
.shape2{
  position: absolute;
  top:0;
  right:0;
}
.shape3{
  position: absolute;
  top:20%;
  left:0;
  opacity:0.2;
}
.shape4{
  position: absolute;
  right:16%;
  top:13%;
  opacity:0.2;
  transform: rotate(110deg);
}
.shape6{
  position: absolute;
  right:25%;
  top:18%;
}
.shape7{
  position: absolute;
  right:5%;
  top:22%;
}
</style>
