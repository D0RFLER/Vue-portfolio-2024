<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   
  <header>
    
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

<RouterView>
</RouterView>
  



</template>


