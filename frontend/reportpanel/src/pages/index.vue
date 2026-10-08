<template>
  <section id="content">
    <v-container id="reportGenerator">
      <h1>Report Panel</h1>
      <p>Download reports in CSV format from live data</p>
      <!-- <v-btn @click="getExcel">Download Excel(.xlsx)</v-btn> -->
      <ul id="csvreportlist">
        <li>
          <a href="hours.csv" @click="getHours">Hours.csv</a>
        </li>
        <li>
          <a href="tasks.csv" @click="getTasks">Tasks.csv</a>
        </li>
        <li>
          <a href="crops.csv" @click="getCrops">Crops.csv</a>
        </li>
      </ul>
      <p>{{ errormsg }}</p>
      <p v-if="loading">Imagine a spinning circle</p>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
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
const csvDownload = (csvData: any, filename: string) => {
  const headers = Object.keys(csvData[0]).join(',')
  const rows = csvData.map(obj => Object.values(obj).join(','))
  const csvString = `${headers}\n${rows.join('\n')}`
  const url = URL.createObjectURL(new Blob([csvString], { type: 'text/csv' }))
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click();
  document.body.removeChild(link)
}
const getHours = async (e: Event) => {
  e.preventDefault()
  loading.value = true
  const response = await fetch('https://api.tesc.farm/hours')
  if (!response.ok) {
    errormsg.value = response.statusText
  }
  const csvdata = await response.json().then(data => {
    const minuteplus = data.filter(r => r.duration > 0.017)
    return minuteplus.map(r => {
      return {
        'id': r.ID,
        'date': new Date(r.start).toLocaleDateString(),
        'start': new Date(r.start).toLocaleTimeString(),
        'hours': r.duration,
        'task': r.task.name,
        'description': r.task.description,
        'task_id': r.task_id,
        'crop_id': r.task.planting_id ? r.task.planting.crop.ID : 'N/A',
        'worker_id': r.worker_id,
        'notes': r.notes
      }
    })
  })
  csvDownload(csvdata, 'hours.csv')
  loading.value = false
}
const getTasks = async (e: Event) => {
  e.preventDefault()
  loading.value = true
  const response = await fetch('https://api.tesc.farm/tasks')
  if (!response.ok) {
    errormsg.value = response.statusText
  }
  const csvdata = await response.json().then(data => {
    return data.map(r => {
      return {
        'id': r.ID,
        'name': r.name,
        'description': r.description,
      }
    })
  })
  csvDownload(csvdata, 'tasks.csv')
  loading.value = false

}
const getCrops = async (e: Event) => {
  e.preventDefault()
  loading.value = true
  const response = await fetch('https://api.tesc.farm/crops')
  if (!response.ok) {
    errormsg.value = response.statusText
  }
  const csvdata = await response.json().then(data => {
    return data.map(r => {
      return {
        'id': r.ID,
        'name': r.name,
        'variety': r.variety,
      }
    })
  })
  csvDownload(csvdata, 'crops.csv')
  loading.value = false

}
</script>
