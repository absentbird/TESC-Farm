<template>
  <section id="content">
    <v-container id="reportGenerator">
      <v-btn @click="getExcel">Download Excel(.xlsx)</v-btn>
      <ul id="csvreportlist">
        <li>
          <a href="hours.csv" class="csvlink" @click="getHours">Hours.csv</a>
          <download-csv class="hidden" :data="hoursdata" name="hours.csv"></download-csv>
        </li>
        <li>
          <a href="tasks.csv" class="csvlink" @click="getTasks">Tasks.csv</a>
          <download-csv class="hidden" :data="tasksdata" name="hours.csv"></download-csv>
        </li>
        <li>
          <a href="crops.csv" class="csvlink" @click="getCrops">Crops.csv</a>
          <download-csv class="hidden" :data="cropsdata" name="hours.csv"></download-csv>
        </li>
      </ul>
      <p>{{ errormsg }}</p>
      <p v-if="loading">Imagine a spinning circle</p>
    </v-container>
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
  e.preventDefault()
  loading.value = true
  const response = await fetch('https://api.tesc.farm/hours')
  if (!response.ok) {
    errormsg.value = response.statusText
  }
  console.log(response)
  const data = await response.json()
  hoursdata.value = data.map(r => {
    return {
      'id': r.ID,
      'start': new Date(r.start).toLocaleString(),
      'hours': r.duration,
      'task_id': r.task_id,
      'worker_id': r.worker_id,
      'notes': r.notes
    }
  })
  loading.value = false
}

const getTasks = (e: Event) => { }
const getCrops = (e: Event) => { }
</script>
