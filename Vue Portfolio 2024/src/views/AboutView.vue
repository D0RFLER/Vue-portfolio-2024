<template>
    <div class="about-body"> <!-- Container for denne side -->

<!----- HEADER --------------------------------->

    <div class="header">
        <div class="logo-header">
            <router-link to="/home">
                <img src="../assets/LOGO + IKONER/LOGO.svg" alt="">
            </router-link>
        </div>

        <div class="nav-links">
            
            <!-- <router-link to="/home">Home</router-link> (Skal være logo :> )-->
            <router-link to="/gallery" class="nav-link">GALLERY</router-link>
            <router-link to="/about" class="nav-link">ABOUT</router-link>
            <router-link to="/contact" class="nav-link">CONTACT</router-link>

        </div>
    </div>

<!----------  About tekst -------------------------------------->
    <div class="about">
        <div class="about-img-boks"> 
            <!-- Class'en bliver brugt til at re-size billede pga det er en PNG-fil -->
            <img src="../assets/GALLERY/ABOUT flowers.jpg" alt="Flower banner" class="about-img">
        </div>

        <div class="about-text">
            <h1 class="mini-title">WELCOME TO FURD STUDIOS</h1>

            <p>
                My name is Freia Ulla Rask Dörfler and I’m a multimedia designer.
                <br> 
                As a multimedia designer I undertake the task of taking your unique vision into real life. That may be a website, illustrations, branding, packaging designs or a completely other project. No matter what, I’m up for the task!
            </p>

                <br>
                <br>

            <h1 class="mini-title">MY APPROACH</h1>

            <p>
                I am deeply committed to crafting meticulous and distinct designs that not only communicate a clear message but also captivate the viewer's attention without overwhelming the senses. I believe in the power of precision, ensuring that every element serves a purpose and contributes to the overall harmony of the composition. Whether it's a sleek modern aesthetic or a timeless classic vibe, I strive to create visuals that resonate with your audience and leave a lasting impression.
                    <br>
                    <br>
                Drawing inspiration from the intricate beauty of botanical life and the diverse wonders of fauna, I find endless fascination in the natural world. The delicate symmetry of a flower petal, the graceful movement of a wild creature, or the intricate patterns found in foliage all inspire me. 
                In most projects, whether it's a website, branding campaign, or printed collateral, I draw inspiration from these.  Whatever the medium or context, my goal remains the same: to create designs that not only captivate the eye but also carries the message clearly across.
            </p>

                <br>
                <br>

            <h1 class="mini-title">MY VISION</h1>

            <p>
                I’ve had the joy of growing up in a home with arcade machines, comics, art prints and intricate porcelain. And to add to that creativity and creating have always been a part of the household. It was both practical tasks as well as creative mind breaks. 
                As I grew, I started enjoying games, animations and comics as well as traditional art and it started my love for visual storytelling. Therefore I have a personal goal and I strive to work with visual storytelling on a higher level.
            </p>
        </div>
    </div>

<!-- pdf cv del -->

    <div class="cv-pdf"> <!-- Mørk baggrund, hvid tekst (download knap? Online new tab view) -->
        <div class="cv-pdf-bg"> 
            <div class="cv-content">

                <div class="cv-text">
                    <h1 class="headline-cv">My CV</h1>
                        <p>
                            If you're curious to learn more about my qualifications and experience, you can download my CV from the link below. It's a comprehensive overview of my educational background, work history, and skill set, providing valuable insights into how my expertise aligns with your project needs.
	                    <br>
                        <br>
                             Feel free to take a closer look at my journey, from my academic achievements to my professional endeavors. My CV highlights key accomplishments, relevant projects, and areas of specialization, giving you a deeper understanding of what I bring to the table.
	                    <br>
                        <br>
                            Click the link to access my CV and discover how my skills and experiences can benefit your next project.
                        <br>
                        <br>

                        </p>
                </div>

            <div class="cv-image"> <!-- Billede af CV -->
                <img src="../assets/LOGO + IKONER/CV Image.PNG" alt="" width="90%" height="auto">
            </div>

        </div>
    </div>
</div>

<!-- Video CV del ------------------------------------------------------------------>

        <div class="cv-video" ><!-- Husk kvalitet upgrade -->

            <div class="yt-link">
                 <!-- Embed YouTube video (hjælpen - Guide: https://youtu.be/IQw-4JABPCM?si=zw-SJEpTcicfWfmD) -->
                 <iframe width="80%" height="auto" 
                    src="https://www.youtube.com/embed/Yi13cYIEafc" 
                    frameborder="0" allowfullscreen>
                </iframe>
            </div>

            <div class="video-text">
                <!-- Add your explanatory text here -->
                <h1 class="video-cv">VIDEO CV</h1>
                    <p>
                        Here is my video cv. It's made in AV-production class, but as of now it's due for a remake.
	                        <br>
                            <br>
	                        <br>
                            <br>
                        Note - It's in danish only
                            <br>
                            <br>
                    </p>
            </div>

        </div>

<!------ FOOTER ------------------------------------------------->

    <div class="footer-boks">
        <div class="footer">
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

    
    </div>
</template>
  

  <!-- --- STYLE ------------------------------------------------------ -->
  
  <style>

        .about {
            display: flex;
            align-items: stretch; /* Sikre at elementere er samme højde */
            margin-top: 20px; /* Giver lidt mere plads mellem nav og about's indehold */
        }

        .about-body {
            background-color: #f6f6f6;
        }


        .mini-title {
            color: #27368c; 
            font-weight: 700;
            font-family: "Bebas Neue", sans-serif;
            font-weight: 400;
            font-style: normal; 
        }

        .about-text {
            color: #0b0940; /* Den mørskeste blå - tekst */
            font-family: "PT Sans Narrow", sans-serif; /* Brødtekst */
            font-weight: 400; /* Tykkelse */
            font-style: normal;

            /* Størrelse */
            flex: 3; /* Sikre at størrelsesforholdene er korekte*/
            padding: 0 50px; /* Pynte-plads */
        }

        .about-img-boks {
            flex: 1; /* Sikre at størrelsesforholdene er korekte*/
            padding-left: 50px;
        }

        .about-img {
            width: 100%;
            height: auto;

            /* Runde hjørner */
            border-radius: 10px

        }


/* ----------- Alm. CV Style ------------------------------------------------------ */

    .cv-pdf {
        background-color: #658CBF;

        margin-top: 75px;
        }

    .cv-content {
        padding: 20px;

        display: flex;
        }


    .cv-text {
        flex: 1; /* Fikser pladsforholdende */
        padding: 20px 50px; /* Giver rum omkring*/

        color: #0b0940; /* Den mørskeste blå - tekst */
        font-family: "PT Sans Narrow", sans-serif; /* Brødtekst */
        font-weight: 400; /* Tykkelse */
        font-style: normal;
        }

    .headline-cv {
        color: #27368c; 
        font-weight: 700;
        font-family: "Bebas Neue", sans-serif;
        font-weight: 400;
        font-style: normal; 
        }


/* ----- Video CV Style ------------------------------------------------------- */

    .cv-video {
        margin-top: 50px;
        display: flex;
        }

    .yt-link {
        padding-left: 40px;
        }

    .video-cv {
        color: #27368c; 
        font-weight: 700;
        font-family: "Bebas Neue", sans-serif;
        font-weight: 400;
         font-style: normal; 
        }

    .video-text {
        flex: 1; /* Take up remaining space */
        padding: 20px 50px; /* Add spacing */

        color: #0b0940; /* Den mørskeste blå - tekst */
        font-family: "PT Sans Narrow", sans-serif; /* Brødtekst */
        font-weight: 400; /* Tykkelse */
        font-style: normal;
        }


/* --------- Header Style --------------------------------------------------- */

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
        width: 75px;
        height: 75px;
        padding: 10px;
        }

    .nav-link {
        margin: 0 15px; /* Horisontal spacing - nix pille */
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


/* ----- FOOTER -------------------------------------------- */

    .footer-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh; /* Sætter min. højde */
}

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

/* Square Farvekoder ------------------------------------------------------- */

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


/* telefon ---------------------------------------------------------------------------*/

@media only screen and (max-width: 764px) {
    .about{
        flex-direction: column; /* Layout så det passer bedre ind */
        }

    .cv-video {
        flex-direction: column-reverse; /* Skirfter retning, så tekst er først */
        }

    .about-text {
        padding: 0 20px; /* Justere padding til størrelsesforholdende */
        order: 2; /* Ædre rækkefølge på div'erne */
        }

    .yt-link,
    .video-text {
        width: 100%; /* Tilpasser width*/
        }


    .about-img-boks {
        display: none; /* Gemmer det store billede - var meget forstyrende */
        }

    .footer {
        flex-direction: column; /* Change layout to column */
        align-items: center; /* Center items vertically */
        }

    .left,
    .right {
        width: 100%; /* Make sections full width */
        margin-bottom: 0; /* Remove margin */
        }

    .tekst-logo {
        width: 75%;
        }

    .tekst-logo,
    .logo-icons {
        margin-top: 20px; /* Add space between sections */
        }

    .rounded-square,
    .rounded-square-5,
    .rounded-square-4,
    .rounded-square-3,
    .rounded-square-2,
    .rounded-square-1{
        display: none;
        } /* Gør sådan så de mindre farvekoder er væk. Kunne ik' få layoutet til at passe ellers */

    .cv-content {
        flex-direction: column; /* Change flex direction to column */
        }

    .cv-image {
        order: 1; /* Move the image above the text */
        }   
}

</style>