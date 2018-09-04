<template>
  <div class="about">
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <div v-if="system">
    <h1>{{system.label}}</h1>
    <p>Click on the links below to fetch data from the Flask server</p>
    <div  v-for="device in system.devices" v-bind:key="device.systemId">
      <mono-device :device = "device"></mono-device>
    </div>
    <a href="" @click.prevent="fetchSecureResource">Fetch System info</a>
    <h4>System descriptor</h4>

    <pre>{{system | json }}</pre>
    </div>
    <p>{{error}}</p>
  </div>
</template>

<script>

import $backend from '../backend'
import MonoDevice from '../components/MonoDevice'

export default {
  created () {
    this.fetchSecureResource()
  },
  name: 'about',
  components: {MonoDevice},
  data () {
    return {
      loading: false,
      system: {},
      error: ''
    }
  },
  methods: {
    fetchSecureResource () {
      this.loading = true
      $backend.fetchSecureResource()
        .then(responseData => {
          this.loading = false
          this.system = responseData
        }).catch(error => {
          this.loading = false
          this.error = error.message
        })
    }
  }
}

</script>

<style lang="scss">
</style>
