<template>
    <div>
        <b-card :title="'System info'">
            <b-row>
                <b-col>
                    <!--USER INFO ROW-->
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
                </b-col>
                <b-col>
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
                            Case id:
                        </b-col>
                        <b-col class="col-9 device-detail-content">
                            {{ system.scenario.current.case_id }}
                        </b-col>
                    </b-row>
                    <b-row class="mb-3" fluid>
                        <b-col class="col-3 device-detail-title">
                            Case ref:
                        </b-col>
                        <b-col class="col-9 device-detail-content">
                            {{ system.scenario.current.case_ref }}
                        </b-col>
                    </b-row>
                    <b-row class="mb-3" fluid>
                        <b-col class="col-3 device-detail-title">
                            Scenario id:
                        </b-col>
                        <b-col class="col-9 device-detail-content">
                            {{ system.scenario.current.scenario_id }}
                        </b-col>
                    </b-row>
                    <b-row class="mb-3" fluid>
                        <b-col class="col-3 device-detail-title">
                            Scenario ref:
                        </b-col>
                        <b-col class="col-9 device-detail-content">
                            {{ system.scenario.current.scenario_ref }}
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
