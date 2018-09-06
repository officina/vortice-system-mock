<template>
  <div class="home">
    <form v-on:submit="checkForm">
      <span>Inserisci l'id di sistema</span>
      <br/>

      <input type="text" v-model="systemId"/>
      <input type="submit" value="GO"/>
    </form>
    <p v-if="error !== undefined">
      {{error}}
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data: function () {
    return {
      error: null,
      systemId: null
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    checkForm () {
      if (this.systemId !== undefined) {
        this.$router.push('api?systemId=' + this.systemId)
      } else {
        this.error = 'Inserisci l\'id di sistema prima di procedere'
      }
    }
  }
}
</script>
