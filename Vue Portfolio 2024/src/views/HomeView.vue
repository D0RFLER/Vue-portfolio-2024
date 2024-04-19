    <template>
        <div class="body"> 
<!----- HEADER ---------------------------------->

        <div class="header">
            <div class="logo-header">
                <router-link to="/home">
                    <img src="../assets/LOGO + IKONER/LOGO.svg" alt="">
                </router-link> <!-- Link så logo bliver home-knab -->
            </div>

        <div class="nav-links"> <!-- Undersider (til højre) -->
            
            <!-- <router-link to="/home">Home</router-link> (Skal være logo :> )-->
             <!-- <router-link to="/project" class="nav-link">PROJECTS</router-link> -->
            <router-link to="/gallery" class="nav-link">GALLERY</router-link>
            <router-link to="/about" class="nav-link">ABOUT</router-link>
            <router-link to="/contact" class="nav-link">CONTACT</router-link>

        </div>
    </div>

<!------ INDHOLD ------------------------------------------------>
<div class="cover-illu-body">
    <div class="billede-container">
        <!-- Class'en bliver brugt til at re-size billede pga det er en PNG-fil -->
        <img src="../assets/GALLERY/home art image.JPG" alt=""  class="cover-illu">
        <!-- Coverbillede/stemningsbillede - lys blå elementer(#658CBF) -->
    </div>
</div>

<!-- ____ FOOTER ____________________________________________________ -->

    <div class="footer">
        <!-- Ventre side elementer -->
        <div class="left">
            <div class="logo-icons">
                <a href="https://www.facebook.com/Freia.Ulla.Rask.Dorfler/" target="_blank">
                    <img src="../assets/icons8-facebook.svg" alt="" class ="pictogram">
                </a>

                <a href="https://www.instagram.com/furd_studios/" target="_blank"> 
                    <img src="../assets/icons8-instagram.svg" alt="" class ="pictogram">
                </a>

                <a href="https://www.linkedin.com/in/furd/" target="_blank">
                    <img src="../assets/icons8-linked-in.svg" alt="" class ="pictogram">
                </a> <!-- Target blank gør at den åbner i en ny fane -->
            </div>
    
            <!-- Logo with Text -->
            <div class="tekst-logo"> <!-- Fulde Logo med tekst -->
                <img src="../assets/LOGO + IKONER/LOGO - with text.svg" alt="" class ="pictogram">
            </div>
        </div>
    
        <!-- Højre side elementer -->
        <div class="right">
            <div class="colour-codes">
                <div class="rounded-square-1"></div>
                <div class="rounded-square-2"></div>
                <div class="rounded-square-3"></div>
                <div class="rounded-square-4"></div>
                <div class="rounded-square-5"></div>
            </div>
        </div>
    </div>
    
    

    </div>




</template>


<!----- Styles ---------------------------------------------------------------------->
<style lang="scss">
        .body {
            background-color: #f6f6f6;
            margin: 0;
            }           

        .cover-illu-body {
            margin: 0;
            }       

        .billede-container {
             position: relative;
             display: inline-block;
             max-width: 100%;
            }

        .cover-illu {
            width: 100%;
            height: auto; /* Fikser illustrationens højde efter behov */
            max-width: 100%; /* Gør at billede bliver i browserens format */
}

// ----- FOOTER -----

    .footer {
        padding-top: 25px;
        display: flex;
        justify-content: space-between; 
        align-items: center; 
    }
    
    .left  {
        display: flex;
        align-items: center;
    }

    .right {
        align-items: flex-end;
    }
    
    .logo-icons {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-left: 15px;
        margin-right: 5px;
    }
    
    .logo-icons img {
        width: 30px;
        height: 30px; 
    }
    
    .colour-codes {
        display: flex;
        justify-content: flex-end;
    }
    
    .tekst-logo {
        margin-right: 10px; /* Giver bedre rum */
    }
    
    .tekst-logo img {
        height: 150px; /* Matcher logo højden */
        width: auto; 
    }

/* Square Farvekoder */
   
    .rounded-square {
        width: 30px;
        height: 30px;
        border-radius: 1px;

        border-radius: 10px;
        margin-right: 5px; /* Mellemrum mellem de forskellige farve-kode-klumber */
    }

    .rounded-square-1 {
        background-color: #f6f6f6;
        border: 2px #27368C;

        width: 30px;
        height: 30px;
        border-radius: 1px;

        border-radius: 10px;
        margin-right: 5px; /* Mellemrum mellem de forskellige farve-kode-klumber */
    }

    .rounded-square-2 {
        background-color: #658CBF;

        width: 30px;
        height: 30px;
        border-radius: 1px;

        border-radius: 10px;
        margin-right: 5px; /* Mellemrum mellem de forskellige farve-kode-klumber */
    }

    .rounded-square-3 {
        background-color: #27368C;

        width: 30px;
        height: 30px;
        border-radius: 1px;

        border-radius: 10px;
        margin-right: 5px; /* Mellemrum mellem de forskellige farve-kode-klumber */
    }

    .rounded-square-4 {
        background-color: #191659;

        width: 30px;
        height: 30px;
        border-radius: 1px;

        border-radius: 10px;
        margin-right: 5px; /* Mellemrum mellem de forskellige farve-kode-klumber */
    }

    .rounded-square-5 {
        background-color: #0B0940;

        width: 30px;
        height: 30px;
        border-radius: 1px;

        border-radius: 10px;
        margin-right: 5px; /* Mellemrum mellem de forskellige farve-kode-klumber */
    }

// ----- HEADER -----------------------------------------------------------------------------

    .header {
        display: flex;
        justify-content: space-between; /* Aligns logo and nav-links at opposite ends */
        align-items: center; /* Center items vertically */
        }

    .nav-links {
        display: flex;
        align-items: center; /* Center items vertically */
        }

    .logo-header {
        /* re-sizer logo */
        width: 75px;
        height: 75px;
        padding: 10px;
        }

    .nav-link {
        margin: 0 15px; /* Adjust horizontal spacing */
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

/* Center the logo vertically */
    .logo {
        display: flex;
        align-items: center;
        }

</style>