<template>
  <div class="outer">
  <div class="inner">
    <div class="loader"></div>
  </div>
</div>
 <!-- <div class="center-container">
   <div class="loader"></div>
    </div> -->
    <!-- <h3>Loading.................</h3> -->
</template>

<script setup>

</script>
<style scoped>
/* HTML: <div class="loader"></div> */
/* HTML: <div class="loader"></div> */

.outer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
/* HTML: <div class="loader"></div> */
.loader {
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m: 
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: source-out;
          mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {to{transform: rotate(1turn)}}
</style>

<!-- <style  scoped> -->
<!-- .center-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
}
.loader::before,
.loader::after {    
  content:"";
  grid-area: 1/1;
  --c:no-repeat radial-gradient(farthest-side,#25b09b 92%,#0000);
  background: 
    var(--c) 50%  0, 
    var(--c) 50%  100%, 
    var(--c) 100% 50%, 
    var(--c) 0    50%;
  background-size: 12px 12px;
  animation: l12 1s infinite;
}
.loader::before {
  margin: 4px;
  filter: hue-rotate(45deg);
  background-size: 8px 8px;
  animation-timing-function: linear
}

@keyframes l12 { 
  100%{transform: rotate(.5turn)}
} -->
<!-- </style> -->