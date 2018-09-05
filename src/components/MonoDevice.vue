<template>
    <div>
    <b-card :title="device.label" bg-variant="dark" text-variant="white">
        <b-container fluid>
            <b-row class="mb-3">
                <b-col md="3" class="device-detail-title">
                    FW:
                </b-col>
                <b-col md="3">
                    {{device.firmwareVersion}}
                </b-col>
            </b-row>
            <b-row class="mb-3">
                <b-col md="3" class="device-detail-title">
                    Model:
                </b-col>
                <b-col md="3">
                    {{device.modelType}}
                </b-col>
            </b-row>
            <b-row class="mb-3">
                <b-col md="3" class="device-detail-title">
                    Status:
                </b-col>
                <b-col md="3">
                    {{device.status}}
                </b-col>
            </b-row>
            <b-row class="mb-3">
                <b-col md="3" class="device-detail-title">
                    Master:
                </b-col>
                <b-col md="3">
                    <input type="checkbox" class="" :checked="device.master" disabled>
                </b-col>
            </b-row>
        </b-container>
        <div>
            <b-badge v-if="device.master" variant="success"/>
            <b-badge v-else variant="danger"/>
        </div>
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
