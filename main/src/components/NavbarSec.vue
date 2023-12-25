<template>
  <div class="navbar">
    <div class="navItem">
      <div class="nav-logo">
        <img src="../assets/images/white-logo.png" alt="">
      </div>
      <ul class="navbar-nav">
        <li class="nav-item" v-for="x in sections" :key="x" >
        <router-link class="nav-link" :to="x.to">
          {{ x.name }}
        </router-link>
        </li>
      </ul>
      <div class="nav-btn">
        <P>Contact Us</P>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      sections:[
        {name:'Home', to:'/'},
        {name:'About Us', to:'/about-us'},
        {name:'Services', to:'/services'},
        {name:'Pages', to:'/pages'},
        {name:'Blog', to:'/blog'},
        {name:'Contact', to:'/contact'},
      ]
    }
  }
}
</script>

<style scoped>
.navbar{
  height: 100px;
}
.navItem{
  display:grid;
  grid-template-columns:250px auto auto;
  margin-bottom: 0px;
  padding-bottom: 0px;
}
.nav-logo img{
  width: 70%;
  height: 70%;
  margin-left: 30%;
  margin-top: 8%;
  margin-bottom: 0px;
}
.navbar-nav{
  margin-top: 6%;
  display: flex;
  justify-content: space-between;
}
ul li{
  list-style: none;
  margin-left: auto;
  margin-right: auto;
}
.nav-item a{
  color: #ffff;
  font-size: large;
  text-decoration: none;
}
.nav-item a:hover{
  background: linear-gradient(to right, rgb(39, 235, 137), rgb(84, 84, 248));
  background-clip:text;
  -webkit-text-fill-color: transparent;
}
.nav-btn{
  margin-top: 6%;
  margin-left: 20%;
  transition-duration: 5s;
  background: linear-gradient(rgb(20, 20, 20), rgb(20, 20, 20)) padding-box,
              linear-gradient(to right, rgb(39, 235, 137), rgb(84, 84, 248) ) border-box;
  border-radius: 50px;
  border: 1px solid transparent;
  /* border-image: linear-gradient(to right,rgb(255, 94, 0),#ffa600) 1; */
  width: 40%;
  height: 50px;
}
.nav-btn:hover{
  background: linear-gradient(to right, rgb(39, 235, 137), rgb(84, 84, 248)) padding-box,
              linear-gradient(to right, rgb(39, 235, 137), rgb(84, 84, 248) ) border-box;
}
.nav-btn p{
  
  text-align: center;
}
</style>