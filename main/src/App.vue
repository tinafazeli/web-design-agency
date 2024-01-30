<template>
  <router-view/>
</template>

<style>
@font-face {
    font-family: DreamyFont;
    src: url('assets/fonts/BilboSwashCaps-Regular.ttf');
}
@font-face {
    font-family: Cool;
    src: url('assets/fonts/Ubuntu-Bold.ttf');
}
html{
    scroll-padding-top: 9rem;
}
html::-webkit-scrollbar{
  width: .3rem;
  height: .3rem;  /* چرا این رو هرچی می دم کار نمی کنه */
}
html::-webkit-scrollbar-track{
  background: #ffff;
}
html::-webkit-scrollbar-thumb{
  background:rgb(84, 84, 248);
  border-radius: 5rem;
}
body{
  background-color: rgb(31, 30, 30);
  font-family: 'Nunito Sans', sans-serif;
  color: #ffff;
  margin-top: 0px;
}
</style>
