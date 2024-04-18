<template>
    <div class="project-body">
 <!-------HEADER  -------->

 <div class="header">
                    <div class="logo-header">
                        <router-link to="/home">
                            <img src="../assets/LOGO + IKONER/LOGO.svg" alt="">
                        </router-link>
                    </div>

                    <div class="nav-links">
            
                        <!-- <router-link to="/home">Home</router-link> (Skal være logo :> )-->
                            <router-link to="/project" class="nav-link">PROJECTS</router-link>
                            <router-link to="/gallery" class="nav-link">GALLERY</router-link>
                            <router-link to="/about" class="nav-link">ABOUT</router-link>
                            <router-link to="/contact" class="nav-link">CONTACT</router-link>

                    </div>
        </div>

<!-- INDEHOLD -->

<div class="project-card">
    <div class="image-container">
        <img src="" alt="Project Image">
    </div>
    <div class="project-details">
        <div class="numbers">
            <h2>100+</h2>
        </div>
        <div class="text">
            <h3>Project Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, ligula eu convallis varius, mi nisi dignissim magna, vel laoreet tortor lectus eu enim.</p>
            <p>Client: XYZ Company</p>
            <p>Date: January 1, 2024</p>
        </div>
    </div>
</div>





    </div>
</template>



<script setup>
  

</script>

<style>

.project-body {
    background-color: #f6f6f6;
}

/* Card Style */

.project-card {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    margin: 20px;
}

.image-container img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ccc;
}

.project-details {
    padding: 20px;
}

.numbers {
    float: left;
    width: 30%;
}

.numbers h2 {
    font-size: 36px;
    margin: 0;
}

.text {
    float: right;
    width: 70%;
}

.text h3 {
    margin-top: 0;
}

.text p {
    margin: 5px 0;
}


/* Header Style */

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