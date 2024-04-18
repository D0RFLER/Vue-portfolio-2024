<template>
 
        <div class="body-contact"> <!-- Weird body  -->

            <!-------HEADER  -------->

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

            <!-- INDEHOLD ------------------>
        <div class="contact">
            <div class="contact-text-img"> <!-- Kompetencer fancy skirft Billede -->
                <img src="../assets/ILLUSTRATIONER/Contact Skills Text.svg" alt="">
            
            </div>

            
                <div class="contact-text"> <!-- Infomationstekst -->

            <p>My style is playful, illustrative and intricate. 
                If it sounds like it will fit into your project, then don’t be scared to reach out! I did love to bring your vision to life. 
                    <br>
                You can reach me through my contact the listed email - I cannot wait to hear from you </p>

                <!-- Email kontakt -->      
                <div class="email-info">

                    <h3 class="email-headline"> Email </h3>
                        <br>
                    <a href="contact@furd.com" class="email-link">contact@furd.com</a>

                </div>
            </div>
        </div>
        <!-- ____ FOOTER ____________________________________________________ -->

    <div class="footer">
        <!-- Left Section -->
        <div class="left">
            <!-- Logo Icons Container -->
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
    
        <!-- Right Section -->
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

    </div> <!-- Final div -->

</template>

    <script setup>
  
    </script>
  
  <style>
        .body-contact {
            background-color: #f6f6f6;
        }

        .contact {
            background-color: #f6f6f6;
            display: flex;
        }

        .contact-text-img {
            display: flex;
            justify-content: center;
            padding-top: 50px;

            /* placering */
            margin: 50px;

            /* Ny størrelse - scale down */
            width: 75%;
            height: 85;
        }

        .contact-text {
            color: #0b0940; /* Den mørskeste blå - tekst */
            font-family: "PT Sans Narrow", sans-serif; /* Brødtekst */
            font-weight: 400; /* Tykkelse */
            font-style: normal;

            /* placering */
            margin: 50px;
            padding-top: 50px;
            
        }

        .email-info {
            color: #0b0940; /* Den mørskeste blå - tekst */
            font-family: "PT Sans Narrow", sans-serif; /* Brødtekst */
            font-weight: 400; /* Tykkelse */
            font-style: normal;

            /* placering */
            margin-top: 128px;
        }

        .email-link {
            color: #0b0940; /* Link farve */
            font-family: "PT Sans Narrow", sans-serif; /* Brødtekst */
            font-weight: 400; /* Tykkelse */
            font-style: normal;
        }

        .email-headline {
            color: #27368c; 
            font-family: "Bebas Neue", sans-serif;
            font-weight: 400;
            font-style: normal; 
        }

        .tekst-logo {
            width: 100%;
            height: auto;
        }

/* ----- FOOTER ----- */

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

/* Tekst + farve kaos */
.copy-right {
    color: rgba(0, 0, 0, 0.3);
    font-size: 12px;
}

.pictogram {
    stroke: #27368c;
}

/* CSS for smaller screens */
@media only screen and (max-width: 764px) {
    .contact {
        flex-direction: column; /* Change flex direction to column */
    }

    .contact-text {
        width: 100%; /* Make both elements full width */
    }

    .contact-text-img {
        order: -1; /* Move the image above the text */
        align-self: stretch; /* Stretch the image to fill the container horizontally */
    }
}

</style> 