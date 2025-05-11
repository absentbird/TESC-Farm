<template>
    <h1>Task Builder</h1>

    <h2>Choose Area</h2>
    <v-row>
    <v-col v-for="area in areasdata" :key ="area.ID" class="d-flex flex-column" cols="12" sm="4" md="3" lg="2">
    <a class="card-button" :href="'/punch/'+task.ID" @click.prevent="selectArea(area.ID)">
    <v-card class="task-card d-flex flex-column text-center" :class="{'selected': selectedArea == area.ID}"
        variant="tonal" @click="selectArea(area.ID)">
        <v-card-item>
        <v-card-title>{{ area.name }}</v-card-title>
        </v-card-item>
        <v-card-text>
        {{ area.description }}
        </v-card-text>
    </v-card>
    </a>
</v-col>
</v-row>


    <h2>Choose Crop</h2>

    <v-row>
    <v-col v-for="crop in cropdata" :key ="crop.ID" class="d-flex flex-column" cols="12" sm="4" md="3" lg="2">
    <a class="card-button" :href="'/punch/'+crop.ID" @click.prevent="selectCrop(crop.ID)">
    <v-card class="task-card d-flex flex-column text-center" :class="{'selected': selectedCrop == crop.ID}"  
        variant="tonal" @click="selectCrop(crop.ID)">
        <v-card-item>
        <v-card-title>{{ crop.name }}</v-card-title>
        </v-card-item>
    </v-card>
    </a>
</v-col>
</v-row>

    <h2>Task Type</h2>

    <v-row>
    <v-col v-for="type in taskTypes" :key ="type.ID" class="d-flex flex-column" cols="12" sm="4" md="3" lg="2">
    <a class="card-button" :href="'/punch/'+type.ID" @click.prevent="selectType(type.ID)">
    <v-card class="task-card d-flex flex-column text-center" :class="{'selected': selectedType == type.ID}"  
        variant="tonal" @click="selectType(type.ID)">
        <v-card-item>
        <v-card-title>{{ type.name }}</v-card-title>
        </v-card-item>
    </v-card>
    </a>
</v-col>
</v-row>

    <v-btn 
        size="x-large" 
        variant="tonal" 
        @click="createTask" 
    >
        Create Task
    </v-btn>
</template>

<script setup lang="ts">
const areaID = ref(0)
interface Area {
    ID: number
    name: string
    description: string
    use: string
}

interface Crop {
    ID: number
    name: string
    variety: string
}


const taskTypes = ref([
    {
        ID: 1,
        name: 'Preharvest',
        action: 'preharvest',
        users: ['worker', 'admin']
    },
    {
        ID: 2,
        name: 'Harvest',
        action: 'harvest',
        users: ['worker', 'admin']
    },
])

const areasdata = ref({})
const cropdata = ref<Array<Crop>>({})
const selectedArea: Ref<number> = ref(0)
const selectedCrop: Ref<number> = ref(0)
const selectedType: Ref<number> = ref(0)
const loading: Ref<boolean> = ref(false)
const flash: Ref<string> = ref('')


    const getAreas = async () => {
    loading.value = true
    try {
        const response = await fetch(import.meta.env.VITE_API + '/areas')
        if (!response.ok) {
            console.log(response.status)
        }
        areasdata.value = await response.json()
    } catch (e) {
        console.log(e)
    }
}

const getCrops = async () => {
    loading.value = true
    try {
        const response = await fetch(import.meta.env.VITE_API + '/crops')
        if (!response.ok) {
            console.log(response.status)
        }
        cropdata.value = await response.json()
    } catch (e) {
        console.log(e)
    }
}

const selectArea = (areaID: number) => {
if (selectedArea.value == areaID) {
    return
}
selectedArea.value = areaID
}

const selectCrop = (cropID: number) => {
if (selectedCrop.value == cropID) {
    return
}
selectedCrop.value = cropID
}

const selectType = (typeID: number) => {
if (selectedType.value == typeID) {
    return
}
selectedType.value = typeID
}

const createTask = async () => {
    const data = { area_id: selectedArea.value, crop_id: selectedCrop.value, type: selectedType.value }
    const response = await fetch(import.meta.env.VITE_API + '/task/new', { method: 'POST', credentials: 'include', body: JSON.stringify(data) })
    if (!response.ok) {
        flash.value = response.statusText
        snackbar.value = true
        console.log(response)
    }
}








onMounted(() => {

getAreas() 
getCrops()

})
onBeforeUnmount(() => {
clearInterval(intervalID);
});
</script>