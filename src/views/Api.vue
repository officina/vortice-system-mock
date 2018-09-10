<template>
  <div class="about">
    <!--<div class="loading" v-if="loading">
      Loading...
    </div>-->
    <div v-if="system">
      <system :system="system" :owner="getOwner()"></system>
      <b-container fluid>
        <b-row class="mb-3" v-for="(data, index) in chunkedDevices" v-bind:key="index">
          <b-col md="6" v-for="device in data" v-bind:key="device.systemId">
            <mono-device :device = "device" :room="getRoom(device.roomId)"></mono-device>
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
    setInterval(function () {
      console.log('requesting system info')
      this.fetchSecureResource()
    }.bind(this), 5000)
    this.fetchSecureResource()
  },
  name: 'about',
  components: {
    System,
    MonoDevice
  },
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
      $backend.fetchSecureResource(this.$route.query.systemId)
        .then(responseData => {
          this.loading = false
          this.system = responseData
          this.error = ''
        }).catch(error => {
          this.loading = false
          this.error = error.message
        })
    },
    getRoom (roomId) {
      for (let room of this.system.rooms) {
        if (room.hasOwnProperty('id') && room.id === roomId) {
          return room
        }
      }
    },
    getOwner () {
      if (this.system.users !== undefined) {
        for (let user of this.system.users) {
          if (user.hasOwnProperty('userId') && user.userId === this.system.ownerId) {
            return user
          }
        }
      }
    }
  },
  computed: {
    chunkedDevices () {
      return _.chunk(this.system.devices, 2)
    }
  }
}

</script>
