<template>
  <div class="home">
    <div class="circles">
      <div class="nice-circle-1"></div>
      <div class="nice-circle-2"></div>
      <div class="nice-circle-3"></div>

      <div class="nice-circle-4"></div>
      <div class="nice-circle-5"></div>
      <div class="nice-circle-6"></div>
    </div>
    <h1>Hi, my name is Ferdinand</h1>
    <p>I'm a datascientist and AI engineer at <NuxtLink to="https://caregame.com" target="blank">CareGame</NuxtLink>. I
      like to solve problems. I'm also a huge <NuxtLink to="https://www.rust-lang.org" target="blank">
        Rust</NuxtLink> fan 🦀. Don't hesitate to contact me, even if it's
      just to say hi 👋</p>
  </div>
</template>

<style lang="scss" scoped>
.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
}

.nice-circle-1,
.nice-circle-2,
.nice-circle-3,
.nice-circle-4,
.nice-circle-5,
.nice-circle-6 {
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;

  background: radial-gradient(rgba(255, 49, 121, 0.2) 0%, rgba(255, 23, 89, 0.1) 30%, transparent 60%);
  filter: blur(30px);
}

.nice-circle-1 {
  top: -200px;
  right: -300px;
}

.nice-circle-2 {
  top: -100px;
  right: -100px;
  background: radial-gradient(rgba(79, 173, 255, 0.2) 0%, rgba(23, 112, 255, 0.1) 30%, transparent 60%);
}

.nice-circle-3 {
  top: 100px;
  right: -200px;
  width: 600px;
  height: 600px;
  background: radial-gradient(rgba(79, 173, 255, 0.2) 0%, rgba(23, 112, 255, 0.1) 30%, transparent 60%);
}


.nice-circle-4 {
  bottom: -200px;
  left: -50px;
  width: 500px;
  height: 500px;
}

.nice-circle-5 {
  bottom: -300px;
  left: 0px;
  width: 800px;
  height: 800px;
  background: radial-gradient(rgba(79, 173, 255, 0.2) 0%, rgba(23, 112, 255, 0.1) 30%, transparent 60%);
}

.nice-circle-6 {
  bottom: -100px;
  left: -100px;
  width: 600px;
  height: 600px;
  background: radial-gradient(rgba(79, 173, 255, 0.2) 0%, rgba(23, 112, 255, 0.1) 30%, transparent 60%);
}

.home {
  height: 100%;
  margin-top: 20rem;
  width: 60rem;
  font-size: 1.8rem;

  h1 {
    margin-bottom: 1em;
  }
}
</style>