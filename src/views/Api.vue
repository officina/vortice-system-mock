<template>
  <div class="about">
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <div v-if="system">
      <system :system="system"></system>
      <b-container fluid>
        <b-row class="mb-3" v-for="(data, index) in chunkedDevices" v-bind:key="index">
          <b-col md="6" v-for="device in data" v-bind:key="device.systemId">
            <mono-device :device = "device"></mono-device>
          </b-col>
        </b-row>
      </b-container>
      <a href="" @click.prevent="fetchSecureResource">Fetch System info</a>
    </div>
    <p>{{error}}</p>
  </div>
</template>

<script>

import $backend from '../backend'
import MonoDevice from '../components/MonoDevice'
import _ from 'lodash'
import System from '../components/System'

export default {
  created () {
    this.fetchSecureResource()
  },
  name: 'about',
  components: {
    System,
    MonoDevice},
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
  },
  computed: {
    chunkedDevices () {
      return _.chunk(this.system.devices, 2)
    }
  }
}

</script>
