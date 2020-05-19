<script>

</script>

<template>
  <div>
    <video autoplay muted loop class="myVideo">
      <source
        src="https://teamfighttactics.leagueoflegends.com/fr-fr/static/header-5aee73c95713ccb4a406843a7c0f5ba8.webm"
        type="video/webm"/>
    </video>
    <router-link to="/"><img class="logo" src="https://vignette.wikia.nocookie.net/logopedia/images/9/94/Teamfight_Tactics_2020_logo.png/revision/latest/scale-to-width-down/350?cb=20200320025423" alt=""></router-link>
    <div class="content">
      <h1>Blog Team Fight Tactic's</h1>
      <button><router-link to="/ListArticle">Acceder aux Articles</router-link></button>
    </div>
  </div>
</template>
