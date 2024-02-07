<template>
    <div class="btn">
      <p>{{ buttonContent }}</p>
    </div>
  </template>
  
  <script>
  export default {
      props:['buttonContent']
  }
  </script>
  
  <style>
  .btn{
    margin-top: 6%;
    transition-duration: 5s;
    background: linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)) padding-box,
                linear-gradient(to right, rgb(39, 235, 137), rgb(84, 84, 248) ) border-box;
    border-radius: 50px;
    border: 1px solid transparent;
    width: 27%;
    height: 52px;
  } 
.btn p{
    text-align: center;
    background: linear-gradient(to right, rgb(84, 84, 248), rgb(39, 235, 137));
    background-clip:text;
    -webkit-text-fill-color: transparent;
}
.btn:hover{
    background: linear-gradient(to right, rgb(39, 235, 137), rgb(84, 84, 248)) padding-box,
                linear-gradient(to right, rgb(39, 235, 137), rgb(84, 84, 248) ) border-box;
    /* color: #fff !important; */
}
 
  </style>