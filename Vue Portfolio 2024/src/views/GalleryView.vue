<template>

    <div class="gallery-body">
<!----- HEADER ------------------------------------------------------------------>

<div class="header">
        <div class="logo-header">
            <router-link to="/home">
                <img src="../assets/LOGO + IKONER/LOGO.svg" alt="">
            </router-link>
        </div>

        <div class="nav-links">
            
            <!-- <router-link to="/home">Home</router-link> (Skal være logo :> )-->
             <!-- <router-link to="/project" class="nav-link">PROJECTS</router-link> -->
            <router-link to="/gallery" class="nav-link">GALLERY</router-link>
            <router-link to="/about" class="nav-link">ABOUT</router-link>
            <router-link to="/contact" class="nav-link">CONTACT</router-link>

        </div>

</div>

<!----- GALLERY Billeder -------------------------------------------------------------->
    

  <div class="gallery">
    <div class="gallery-item" v-for="(image, index) in images" :key="index">
      <img :src="image.src" :alt="image.alt">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ImageGallery',
  data() {
    return {
      images: [
        { src:"../assets/GALLERY/Nausicaa pixel art.PNG" },
        { src:"../assets/GALLERY/TRAPHOLT 04.PNG" }, 
        { src:"../assets/GALLERY/INTERNATIONAL DAY 02.PNG" },
        { src:"../assets/GALLERY/xo bil.PNG" },
        { src:"../assets/GALLERY/TRAPHOLT 1.PNG" },
        { src:"../assets/GALLERY/POMEGRANATE POSTER.PNG" },
        { src:"../assets/GALLERY/cloud pixel bottle.PNG" }, 
        { src:"../assets/GALLERY/potion pixel art.PNG"  },
        { src:"../assets/GALLERY/TRAPHOLT 03.PNG" },
        { src:"../assets/GALLERY/UX HOVEDER.PNG" },
        { src:"../assets/GALLERY/INTERNATIONAL DAY 03.PNG" },
        { src:"../assets/GALLERY/PAPAYA POSTER.PNG" },
        { src:"../assets/GALLERY/FLOWERS 001.PNG" },
        { src:"../assets/GALLERY/TRAPHOLT 5.PNG" },
        { src:"../assets/GALLERY/Potion bottle colletion.PNG"  },
        { src:"../assets/GALLERY/ORANGE ZONE.PNG" },
        { src:"../assets/GALLERY/STJERNESKUD.PNG" },
        { src:"../assets/GALLERY/INTERNATIONAL DAY 01.PNG" },
      ],
    };
  },
};
</script>

<style scoped>

</style>
  


<!----- Styles ---------------------------------------------------------------------->

<style scoped>

/* Gallery styles */

.gallery.body {
    background-color: #f6f6f6;
}
  
.gallery {
  display: flex;
  flex-wrap: wrap;
    }

.gallery-item {
  margin: 10px;
}

.gallery-item img {
  max-width: 100%;
  height: auto;
  display: block;
}





  

/* Header Style */
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        }

    .nav-links {
        display: flex;
        align-items: center;
        }

    .logo-header {
        width: 75px;
        height: 75px;
        padding: 10px;
        }

    .nav-link {
        margin: 0 15px;
        padding: 5px 10px;
        border: 2px solid transparent;
        border-radius: 10px;
        transition: border-color 0.3s ease;
        text-decoration: none;
        color: #0b0940;
        font-weight: 700;
        font-family: "Bebas Neue", sans-serif;
        }

    .nav-link:hover {
        border-color: #27368c;
        }

    .logo {
        display: flex;
        align-items: center;
        }


/* Responsive fix ------------------------------------------------------------*/
@media(max-width:768px){

    .portfolio-piece { 
      flex-direction: column;
        }

    .portfolio-piece-size {
        width: 100%; 
        max-width: 100%; 
        height: auto;
        }
   
  }

</style>
