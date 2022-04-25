<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/p152">p152</router-link> |
    <router-link to="/p159">p159</router-link> |
    <router-link to="/p160">p160(8.1.3)</router-link> |
    <router-link to="/p161">p161(8.1.4)</router-link> |
    <router-link to="/p162">p162(8.1.5)</router-link> |
    <router-link to="/p163">p163(8.1.6)</router-link> |
    <router-link to="/p164">p164(8.1.7)</router-link> |
    <router-link to="/p167">Slot</router-link> |
    <router-link to="/p171">Provider/Inject</router-link> |
  </nav>

  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
