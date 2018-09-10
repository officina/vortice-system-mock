<template>
    <div>
        <b-card :title="device.label" bg-variant="dark" text-variant="white">
            <b-row fluid>
                <b-col class="col-6">
                    <b-row class="mb-3">
                        <b-col md="6" class="device-detail-title">
                            Firmware:
                        </b-col>
                        <b-col md="6">
                            {{device.firmwareVersion}}
                        </b-col>
                    </b-row>
                    <b-row class="mb-3">
                        <b-col md="6" class="device-detail-title">
                            Model:
                        </b-col>
                        <b-col md="6">
                            {{device.modelType}}
                        </b-col>
                    </b-row>
                    <b-row class="mb-3">
                        <b-col md="6" class="device-detail-title">
                            Master:
                        </b-col>
                        <b-col md="6">
                            <input type="checkbox" class="" :checked="device.master" disabled>
                        </b-col>
                    </b-row>
                    <b-row class="mb-3">
                        <b-col md="6" class="device-detail-title">
                            Velocità:
                        </b-col>
                        <b-col md="6">
                            --
                        </b-col>
                    </b-row>

                </b-col>
                <b-col class="col-6">
                    <b-row class="mb-3">
                        <b-col md="6" class="device-detail-title">
                            Room:
                        </b-col>
                        <b-col md="6">
                            {{room.label}}
                        </b-col>
                    </b-row>
                    <b-row class="mb-3">
                        <b-col md="6" class="device-detail-title">
                            Silent:
                        </b-col>
                        <b-col md="6">
                            <input type="checkbox" :checked="room.type.silent" disabled>
                        </b-col>
                    </b-row>
                    <b-row class="mb-3">
                        <b-col md="6" class="device-detail-title">
                            Modalità:
                        </b-col>
                        <b-col md="6">
                            --
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-button href="#" variant="success">Stato: {{ getStatus(device.status) }} </b-button>
        </b-card>
    </div>
</template>

<script>

export default {
  name: 'MonoDevice',
  props: {
    device: Object,
    room: Object
  },
  methods: {
    getStatus (index) {
      var deviceStatuses = ['PAIRING', 'WORKING', 'OFFLINE', 'FAILURE']
      return deviceStatuses[index]
    }
  }
}
</script>
