<template>
    <div>
        <b-card :title="'System info'">
            <b-row>
                <b-col>
                    <!--USER INFO ROW-->
                    <b-row class="mb-3" fluid>
                        <b-col class="col-3 device-detail-title">
                            GENERAL INFO
                        </b-col>
                    </b-row>
                    <b-row class="mb-3" fluid>
                        <b-col class="col-3 device-detail-title">
                            System name:
                        </b-col>
                        <b-col class="col-9 device-detail-content">
                            {{ system.label }}
                        </b-col>
                    </b-row>
                    <b-row class="mb-3" fluid>
                        <b-col class="col-3 device-detail-title">
                            Location:
                        </b-col>
                        <b-col class="col-9 device-detail-content">
                            {{ system.location !== undefined ? system.location.coordinates : "--"}}
                        </b-col>
                    </b-row>
                </b-col>
                <!--<b-col>
                    &lt;!&ndash;USER INFO ROW&ndash;&gt;
                    <b-row class="mb-3" fluid>
                        <b-col class="col-3 device-detail-title">
                            OWNER INFO
                        </b-col>
                    </b-row>
                    <b-row class="mb-3" fluid>
                        <b-col class="col-3 device-detail-title">
                            Id:
                        </b-col>
                        <b-col class="col-9 device-detail-content">
                            {{ owner.userId }}
                        </b-col>
                    </b-row>
                    <b-row class="mb-3" fluid>
                        <b-col class="col-3 device-detail-title">
                            First name:
                        </b-col>
                        <b-col class="col-9 device-detail-content">
                            {{ owner.firstName }}
                        </b-col>
                    </b-row>
                    <b-row class="mb-3" fluid>
                        <b-col class="col-3 device-detail-title">
                            Last name:
                        </b-col>
                        <b-col class="col-9 device-detail-content">
                            {{ owner.lastName }}
                        </b-col>
                    </b-row>
                </b-col>-->
                <b-col v-if="system.scenario">
                    <!--SCENARIO INFO ROW-->
                    <b-row class="mb-3" fluid>
                        <b-col class="col-3 device-detail-title">
                            INFO SCENARIO
                        </b-col>
                    </b-row>
                    <b-row class="mb-3" fluid>
                        <b-col class="col-3 device-detail-title">
                            CURRENT:
                        </b-col>
                    </b-row>
                    <b-row class="mb-3" fluid>
                        <b-col class="col-3 device-detail-title">
                            Scenario corrente:
                        </b-col>
                        <b-col class="col-9 device-detail-content">
                            {{ system.scenario.current.case_ref }}
                        </b-col>
                    </b-row>
                    <b-row class="mb-3" fluid>
                        <b-col class="col-3 device-detail-title">
                            Prossimo scenario:
                        </b-col>
                        <b-col class="col-9 device-detail-content">
                            {{ system.scenario.next.scenario_ref }}
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>

export default {
  name: 'System',
  props: {
    system: Object,
    owner: Object
  },
  computed: {

  }
}
</script>
