<template>
  <section id="content">
    <v-containter id="reportGenerator">
      <v-btn @click="getExcel">Download Excel(.xlsx)</v-btn>
      <v-list id="csvreportlist">
        <a class="csvlink" @click="getHours">Hours.csv</a>
        <download-csv class="hidden" :data="hoursdata" name="hours.csv"></download-csv>
        <a class="csvlink" @click="getTasks">Tasks.csv</a>
        <download-csv class="hidden" :data="tasksdata" name="hours.csv"></download-csv>
        <a class="csvlink" @click="getCrops">Crops.csv</a>
        <download-csv class="hidden" :data="cropsdata" name="hours.csv"></download-csv>
      </v-list>

      <p>{{ errormsg }}</p>
    </v-containter>
  </section>
</template>

<script lang="ts" setup>
import JsonCSV from "vue-json-csv"
const loading = ref(false)
const formType = ref('')
const dateStart = ref('')
const dateEnd = ref('')
const errormsg = ref('')

const hoursdata = ref({})
const tasksdata = ref({})
const cropsdata = ref({})
const getExcel = (e: Event) => {

}
const getHours = async (e: Event) => {
  loading.value = true
  const response = await fetch('https://api.tesc.farm/hours')
  if (!response.ok) {
    errormsg.value = response.statusText
  }
  hoursdata.value = await response.json().then(data => {
    return data.map(r => {
      //      wait for the json and then pipe that json into a function where we map every entry in json into another function
      return {
        'id': r.ID,
        'start': new Date(r.start).toLocaleString(),
        'hours': r.duration,
        'task_id': r.task_id,
        'worker_id': r.worker_id,
        'notes': r.notes
      }
    })
  })
}

const getTasks = (e: Event) => { }
const getCrops = (e: Event) => { }
</script>
