<script setup lan="ts">
const { t } = useLang()
</script>
<template>
  <div>
   
    <!-- end testimonials -->
    <!-- start about -->

    <!-- end about -->

    <!-- start blog -->
    
    <!-- end blog -->
    <!-- start cta -->

    <!-- <Carousel /> -->

    <!-- end cta -->
    <!-- start cta -->
    
    <!-- end cta -->

    <!-- start cta -->
    
    <!-- end cta -->
  </div>
</template>

<style>
.custom-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
}
.custom-grid > .custom-card {
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  text-align: center;
}
.custom-grid > .custom-card img {
  max-width: 100%;
}
.custom-grid > .custom-card .icondiv {
  font-size: 48px;
  line-height: 70px;
  height: 80px;
  width: 80px;
  border: 6px solid white;
  border-radius: 50%;
  background-color: white;
  text-align: center;
  margin-top: -36px;
}
.custom-grid .text {
  padding: 16px 20px 30px;
}
.custom-grid h3{
  font-family: "Montserrat", Sans-serif;
  font-size: 22px;
  font-weight: 500;
}
.custom-grid .btn {
  margin-top: 20px;
}
</style>