<template>
    <b-card :title="system.label" :sub-title="'State: ' + system.state">
        <b-container fluid>
            <b-row class="mb-3">
                <b-col>

                </b-col>
                <b-col>

                </b-col>
            </b-row>
        </b-container>
    </b-card>
</template>

<script>

export default {
  name: 'System',
  props: {
    system: Object
  }
}
</script>
