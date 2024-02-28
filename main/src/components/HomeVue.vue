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
        <div class="circle-box">
          <img src="../assets/images/ab-shape.svg" alt="" class="circle">
          <div class="ab-circ">
            <svg class="shape-1" viewBox="0 0 100 100" width="100" height="100">
            <defs>
                <path id="circle" d="
                      M 50, 50
                      m -37, 0
                      a 37,37 0 1,1 74,0
                      a 37,37 0 1,1 -74,0">
                </path>
            </defs>
            <text font-size="15">
                <textPath xlink:href="#circle" class="shape-1">
                    Creative Minds_ Creative Minds_
                </textPath>
            </text>
          </svg>
          </div>
        </div>
        <div class="about-img-1 about-img-animation">
          <img src="../assets/images/about-1.png" alt="">
        </div>
        <div class="about-img-2 about-img-animation">
          <img src="../assets/images/about-2.png" alt="">
        </div>
        <div class="about-img-3 about-img-animation">
          <img src="../assets/images/about-3.png" alt="">
        </div>
        <div class="about-img-4 about-img-animation">
          <img src="../assets/images/about-4.png" alt="">
        </div>
      </div>
      <div class="about-sec-shape">
        <img src="../assets/images/shape-37.svg" alt="" class="shape-transaction">
      </div>
      <div v-motion-slide-visible-once-left class="about-text">
        <h3 class="titl">About Us</h3>
        <h2 class="about-header">Making Your Business More Unique</h2>
        <p class="about-paragraph">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>
        <p class="about-paragraph">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
        </p>
        <p class="about-paragraph">
          by injected humour, or randomised words which don't look even slightly believable.
        </p>
        <!-- <button class="about-btn">Read More</button> -->
        <Buttons button-content="Read More"/>
      </div>
    </secion>
    <div class="counter-sec">
      <div class="count-project">
        <vue3-autocounter class="count" ref='counter' :startAmount='0' :endAmount='254' :duration='3' suffix='+' />
          <p>Project Complete</p>
      </div>
      <div class="team-member">
        <vue3-autocounter class="count" ref='counter' :startAmount='0' :endAmount='164' :duration='3'  suffix='+' />
        <p>Quality Team Member</p>
      </div>
      <div class="award">
        <vue3-autocounter class="count" ref='counter' :startAmount='0' :endAmount='433' :duration='3'  suffix='+' />
        <p>Awards Wining</p>
      </div>
      <div class="experience">
        <vue3-autocounter class="count" ref='counter' :startAmount='0' :endAmount='30' :duration='3'  suffix='+' />
        <p>Years Of Experience</p>
      </div>
      <div class="counter-back-img">
        <img src="../assets/images/counter-shape.svg" alt="" class="count-img">
      </div>
      <div class="counter-back-img2">
        <img src="../assets/images/counter-shape1.svg" alt="" class="count-img">
      </div>
    </div>
    <div class="services-sec">
      <div class="services-description">
        <div class="serv-head1">
          <p>Our Services</p>
          <h2>Service We Provide</h2>
        </div>
        <div class="serv-pragraph">
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release</p>
        </div>
      </div>
      <div class="services-item">
        <div class="services-item1">
          <div class="head-img">
            <img class="first-img" src="../assets/images/service-image.svg" alt="">
            <!-- <i class="fa fa-pencil" aria-hidden="true"></i> -->
            <img src="../assets/images/pen.png" alt="" class="services-logo1">
          </div>
          <div class="description">
              <h2>Logo Design</h2>
              <p>look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum, and a search for</p>
          </div>
        </div>
        <div class="services-item1">
          <div class="head-img">
            <img class="second-img" src="../assets/images/service-image.svg" alt="">
            <img src="../assets/images/computer.png" alt="" class="services-logo2">
          </div>
          <div class="description">
              <h2>Web Design</h2>
              <p>look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum, and a search for</p>
          </div>
        </div>
        <div class="services-item1">
          <div class="head-img">
            <img class="third-img" src="../assets/images/service-image.svg" alt="">
            <img src="../assets/images/code.png" alt="" class="services-logo3">
          </div>
          <div class="description">
              <h2>Mobile Apps</h2>
              <p>look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum, and a search for</p>
          </div>
        </div>
        <div class="services-item1">
          <div class="head-img">
            <img class="fourth-img" src="../assets/images/service-image.svg" alt="">
          </div>
          <div class="description">
              <h2>Digital Marketing</h2>
              <p>look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum, and a search for</p>
          </div>
        </div>
      </div>
      <div class="services-btn">
        <P>View Details</P>
      </div>
    </div>
  </div>
</template>

<script>
import Vue3autocounter from 'vue3-autocounter';
import Navbar from '@/components/NavbarSec.vue'
import Buttons from '@/components/ButtonVue.vue'
export default {
  name:'NavbarView',
  components:{
    Navbar,
    Buttons,
    'vue3-autocounter': Vue3autocounter
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

.shape-transaction{
  animation: trans 2.5s ease-in-out infinite;
}
@keyframes shake{
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
  animation: shake 5s;
  animation-iteration-count: infinite;
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
  height:700px;
}

.about-sec-shape img{
  position:absolute;
  bottom:-60%;
  right:4%;
  height: 30%;
}
.about-sec-shape-group{
  display:flex;
  width:100%;
  margin-top: 40px;
}
.circle-box{
  position:absolute;
  border-radius: 50%;
  left:40%;
  bottom:-60%;
}
.circle{
  position: absolute;
  top: 90%;
  left: 20%;
  transform: translate(-50%, -50%);
  max-width:150px;
}
.ab-circ{
  background: rgba(228, 225, 255, 0.15) !important;
  border-radius: 132px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid #705fff;
  padding:5px;
}
.ab-circ svg{
  height: auto;
  max-width: 80px;
  fill:#5f39ff;
  font-weight:700;
}
@keyframes rotateImage {
  0%{
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100%{
    webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.ab-circ .shape-1{
  border-radius: 50%;
  padding: 5px;
  position: relative;
  z-index: 3;
  -webkit-animation: rotateImage 10s infinite linear;
  animation: rotateImage 10s infinite linear;
}
@keyframes trans {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
}
50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
}

100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
}
}
.about-img-animation{
  -webkit-animation: trans 2.5s ease-in-out infinite;
  animation: trans 2.5s ease-in-out infinite;
  position: absolute;
  border:1px solid #5f39ff;
  border-radius: 50%;
}
.about-img-1{
  padding: 8px;
  left:20%;
  bottom:-620px;
}
.about-img-1 img{
  width: 280px;
  height: 280px;
}
.about-img-2{
  padding: 7px;
  left:13%;
  bottom:-660px;
}
.about-img-2 img{
  width: 90px;
  height: 90px;
}
.about-img-3{
  padding: 7px;
  left:35%;
  bottom:-800px;
}
.about-img-3 img{
  width: 115px;
  height: 115px;
}
.about-img-4{
  padding: 7px;
  left:10%;
  bottom:-370px;
}
.about-img-4 img{
  width: 150px;
  height: 150px;
}
.about-text{
  width:550px;
  position: absolute;
  left:50%;
  top:145%;
}

.about-text .titl {
  font-family:DreamyFont;
  font-weight:100;
  font-size: 2.2rem;
  display: inline-block;
  background: linear-gradient(to right, rgb(84, 84, 248), rgb(39, 235, 137));
  background-clip:text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  }

.about-text .about-header{
  color:rgba(31, 30, 30, 0.87);
  font-family:Cool;
  font-size: 3rem;
  margin-top: 0px;
}
.about-text .about-paragraph{
  color:rgba(49, 49, 49, 0.788);
  line-height: 25px;
  font-size: 1rem;
}

.counter-sec{
  display: grid;
  grid-template-columns:auto auto auto auto;
  padding-left:70px;
  padding-right:70px;
}
.counter-sec div{
  text-align: center;
  margin-top: 15%;
  margin-bottom: 15%;
}
.counter-sec .count{
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
  line-height: 1;
  font-size:4rem;
  font-weight: 600;
}
.counter-sec p{
  font-family: Cool;
  font-size:1.2rem;
}
.counter-sec .team-member , .counter-sec .award , .counter-sec .experience{
  border-left: 1px solid rgba(255, 255, 255, 0.5);
}
.counter-sec .counter-back-img{
  position: absolute;
  left:-20px;
  top:212%;
}
.counter-sec .counter-back-img img,.counter-sec .counter-back-img2 img{
  max-width:94%;
}
.counter-sec .counter-back-img2{
  position: absolute;
  right:-20px;
  top:212%;
}
.services-sec{
  background: #fff;
}
.services-sec .services-description .serv-head1{
  padding-top: 50px;
}
.services-sec .services-description .serv-head1 p{
  font-family: DreamyFont;
  font-size:2rem;
  background: linear-gradient(to right, rgb(84, 84, 248), rgb(39, 235, 137));
  background-clip:text;
  -webkit-text-fill-color: transparent;
  text-align:center;
  margin-bottom: 4px;
}
.services-sec .services-description .serv-head1 h2{
  font-family: Cool;
  font-size:3rem;
  color:rgba(31, 30, 30, 0.87);
  text-align:center;
  margin-top: 0px;
  padding-top: 0px;
}
.serv-pragraph{
  color:rgba(44, 44, 44, 0.658);
  margin-left: 17%;
}
.services-sec .services-description .serv-pragraph p{
  font-family: Ubuntu;
  font-weight:normal;
  font-size:1rem;
  text-align: center;
  width:75%;
}
.services-sec .services-item{
  display:grid;
  grid-template-columns:260px 260px 260px 260px; 
  margin-top:10%;
  margin-left:130px;
  margin-right:130px;
  position:relative;
}

.services-sec .services-item .services-item1 .head-img img{
  position: absolute;
}
.services-sec .services-item .services-item1 .head-img .first-img{
left:60px;
top:-49px;
}
.services-sec .services-item .services-item1 .head-img .services-logo1{
  /* color:#ffff; */
  width:50px;
  height:50px;
  left:87px;
  top:-28px;
}
.services-sec .services-item .services-item1 .head-img .second-img{
  top:-49px;
  left:320px;
}
.services-sec .services-item .services-item1 .head-img .services-logo2{
  width:50px;
  height:50px;
  left:342px;
  top:-28px;
}
.services-sec .services-item .services-item1 .head-img .third-img{
  top:-49px;
  left:582px;
}

.services-sec .services-item .services-item1 .head-img .services-logo3{
  width:40px;
  height:40px;
  left:600px;
  top:-28px;
}
.services-sec .services-item .services-item1 .head-img .fourth-img{
  top:-49px;
  left:840px;
}

.services-sec .services-item .services-item1 .description{
  border-radius: 20px;
  border:2px solid #f8f7ff;
  width:220px;
  height:290px;
  text-align:center;
  /* background-color: #f8f7ff; */
  background-color: #f0eef7e5;
}
.services-sec .services-item .services-item1 .description:hover{
  border: 2px solid transparent;
  background: 
        linear-gradient(to right, #f8f7ff, #f8f7ff), 
        linear-gradient(90deg,#20d9a1,#5f39ff); 
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  box-shadow: 9px 8px 20px rgb(214, 214, 214);
}
.services-sec .services-item .services-item1 .description h2{
  font-family:Cool;
  font-size:1.2rem;
  color:#3a3a3a;
  padding-top: 60px;
}
.services-sec .services-item .services-item1 .description p{
  font-family: Ubuntu;
  width:180px;
  color:#727272;
  margin-left: 20px;
  line-height: 22px;
}
.services-sec .services-btn{
  margin-top: 2%;
  margin-left: 40%;
  transition-duration: 5s;
  background: linear-gradient(#fff, #fff) padding-box,
              linear-gradient(to right, rgb(39, 235, 137), rgb(84, 84, 248) ) border-box;
  border-radius: 50px;
  border: 1px solid transparent;
  width: 12%;
  height: 50px;
}
.services-sec .services-btn:hover{
  background: linear-gradient(to right, rgb(39, 235, 137), rgb(84, 84, 248)) padding-box,
              linear-gradient(to right, rgb(39, 235, 137), rgb(84, 84, 248) ) border-box;
}
.services-sec .services-btn p{
  text-align: center;
  background: linear-gradient(to right, rgb(84, 84, 248), rgb(39, 235, 137));
  background-clip:text;
  -webkit-text-fill-color: transparent;
}


</style>
