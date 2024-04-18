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
        <div class="portfolio-gallery"> <!-- Container til gallery -->

  <div class="column"> <!-- Første column (6 pr. række) -->
      <div class="portfolio-piece">
          <img src="../assets/GALLERY/INTERNATIONAL DAY 01.PNG" alt="" class="portfolio-piece-size">
      </div>

      <div class="portfolio-piece">
          <img src="../assets/GALLERY/STJERNESKUD.PNG" alt="" class="portfolio-piece-size">
      </div>

      <div class="portfolio-piece">
          <img src="../assets/GALLERY/ORANGE ZONE.PNG" alt="" class="portfolio-piece-size">
      </div>

      <div class="portfolio-piece">
          <img src="../assets/GALLERY/Potion bottle colletion.PNG" alt="" class="portfolio-piece-size">
      </div>

      <div class="portfolio-piece">
          <img src="../assets/GALLERY/TRAPHOLT 5.PNG" alt="" class="portfolio-piece-size">
      </div>

      <div class="portfolio-piece">
          <img src="../assets/GALLERY/FLOWERS 001.PNG" alt="" class="portfolio-piece-size">
      </div>
  </div> <!-- Første column slut -->
  
  <div class="column"> <!-- Anden column start -->
      <div class="portfolio-piece">
          <img src="../assets/GALLERY/PAPAYA POSTER.PNG" alt="" class="portfolio-piece-size">
      </div>

      <div class="portfolio-piece">
          <img src="../assets/GALLERY/INTERNATIONAL DAY 03.PNG" alt="" class="portfolio-piece-size">
      </div>

      <div class="portfolio-piece">
          <img src="../assets/GALLERY/UX HOVEDER.PNG" alt="" class="portfolio-piece-size">
      </div>

      <div class="portfolio-piece">
          <img src="../assets/GALLERY/TRAPHOLT 03.PNG" alt="" class="portfolio-piece-size">
      </div>

      <div class="portfolio-piece">
          <img src="../assets/GALLERY/potion pixel art.PNG" alt="" class="portfolio-piece-size">
      </div>

      <div class="portfolio-piece">
          <img src="../assets/GALLERY/cloud pixel bottle.PNG" alt="" class="portfolio-piece-size">
      </div>
  </div> <!-- Anden column slut -->

  <div class="column"> <!-- Tredje column start -->
      <div class="portfolio-piece">
          <img src="../assets/GALLERY/POMEGRANATE POSTER.PNG" alt="" class="portfolio-piece-size">
      </div>

      <div class="portfolio-piece">
          <img src="../assets/GALLERY/TRAPHOLT 1.PNG" alt="" class="portfolio-piece-size">
      </div>

      <div class="portfolio-piece">
          <img src="../assets/GALLERY/xo bil.PNG" alt="" class="portfolio-piece-size">
      </div>

      <div class="portfolio-piece">
          <img src="../assets/GALLERY/INTERNATIONAL DAY 02.PNG" alt="" class="portfolio-piece-size">
      </div>

      <div class="portfolio-piece">
          <img src="../assets/GALLERY/TRAPHOLT 04.PNG" alt="" class="portfolio-piece-size">
      </div>

      <div class="portfolio-piece">
          <img src="../assets/GALLERY/Nausicaa pixel art.PNG" alt="" class="portfolio-piece-size">
      </div>

  </div> <!-- Tredje column slut -->
</div> <!-- Container til gallery ende -->

</div>


</div> <!-- gallery-body-kaos -->
</template>
  


<!----- Styles ---------------------------------------------------------------------->

<style>

/* Gallery styles */

  *{
    padding: 0;
    margin: 0;
    }

  .gallery-body {
    max-width: 1224px;
    width: 90%;
    margin: auto;
    padding: 15px 0;

    background-color: #f6f6f6;
    }
  
  .portfolio-gallery {
    display: flex;
    gap: 15px; /* Giver mellemrum mellem columns */
    }

  .column {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-left: 20px;
    margin-right: 20px;
    }

  .portfolio-piece {
    border-radius: 10px;

    object-fit: cover;
    }

  .portfolio-piece-size {
    width: 300px;
    height: auto;
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
