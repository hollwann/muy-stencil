<template>
  <div id="app">
    <muy-input :value="value" label="Vue" placeholder="Test" @eInput="value = $event.target.value"></muy-input>
    <span>{{ value }}</span>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      value: 'Value'
    }
  },
  methods: {
    test(event) {
      console.log(event)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
