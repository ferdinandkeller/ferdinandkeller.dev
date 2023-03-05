<template>
  <div class="home">
    <div class="circles">
      <div class="nice-circle-2"></div>
      <div class="nice-circle-1"></div>
    </div>
    <p>I'm a datascientist and AI engineer at CareGame.</p>
    <p>I like to solve problems, and when I can't find any, I invent my own. My way of doing things has always been to
      observe, analyze, imagine, create & destroy, non-stop. And now this passion is also my job. I find it interesting to
      optimize and simplify complex systems. I'm also a huge Rust fan 🦀.</p>
    <p>Don't hesitate to contact me, even if it's just to say hi 👋 (especially if you also like rust).</p>
  </div>
</template>

<style lang="scss" scoped>
.nice-circle-1,
.nice-circle-2 {
  position: absolute;
  top: -100px;
  right: 100px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  z-index: -1;

  --c: rgb(246, 231, 185);
  box-shadow: 0 0 200px var(--c);
  background-color: var(--c);
  filter: blur(60px);
  opacity: .5;
}

.nice-circle-2 {
  top: 400px;
  right: 300px;

  --c: rgb(138, 235, 246);
  box-shadow: 0 0 200px var(--c);
  background-color: var(--c);
  filter: blur(60px);
  opacity: .5;
}
</style>