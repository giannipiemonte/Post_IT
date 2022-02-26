<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Notes📌</router-link>
    </div>
    <router-view/>
  </div>
</template> 

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #51c957;
}
</style>
