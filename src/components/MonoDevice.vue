<template>
    <div>
    <b-card :title="device.label">
        <p class="card-text">
        {{device.label}}
        </p>
        <div class="device-status">{{device}}</div>
        <b-button href="#" variant="primary" >Turn on</b-button>
    </b-card>
    </div>
</template>

<script>
export default {
  name: 'MonoDevice',
  props: {
    device: Object
  }
}
</script>

<style scoped>
.device-status{
    color: red;
    font-size: 20px;
}
</style>
