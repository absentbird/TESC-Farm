<template>
  <v-container fluid class="taskpanel" class="fill-height d-flex flex-column">
    <v-row
      v-if="search"
      id="filters"
      class="align-self-start d-flex w-100 flex-grow-0"
    >
      <v-col cols="9" sm="4" md="7">
        <v-text-field
          id="search"
          v-model="search"
          clearable
          label="Search"
          hint="Search for tasks by name or description"
        ></v-text-field>
      </v-col>
      <v-col cols="3" class="mt-2 d-flex d-sm-none">
        <v-btn variant="tonal">
          <v-icon>mdi-cog</v-icon>
          <v-menu activator="parent">
            <v-list>
              <v-list-item
                v-for="setting in userSettings"
                :title="setting.title"
                @click="setting.action"
              ></v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </v-col>
      <v-col cols="6" sm="3" md="2">
        <v-combobox
          clearable
          chips
          multiple
          label="Tags"
          v-model="selectedTags"
          :items="taskTags"
        ></v-combobox>
      </v-col>
      <v-col cols="6" sm="3" md="2" class="d-flex align-self-start">
        <v-switch
          label="Show All"
          inset
          color="secondary"
          v-model="showall"
        ></v-switch>
      </v-col>
      <v-col cols="1" class="mt-2 d-none d-sm-flex">
        <v-btn variant="tonal">
          <v-icon>mdi-cog</v-icon>
          <v-menu activator="parent">
            <v-list>
              <v-list-item
                v-for="setting in userSettings"
                :title="setting.title"
                @click="setting.action"
              ></v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </v-col>
    </v-row>
    <v-row
      id="main-content"
      align="center"
      justify="center"
      class="d-flex flex-row w-100"
    >
      <TaskCard
        v-for="task in tasks"
        :task="task"
        :working="workingdata[task.ID]"
        :selected="selected == task.ID"
        @select="selectTask"
      ></TaskCard>
      <v-col cols="12">
        <v-btn
          class="bigbutton"
          :class="{ selected: selected == 0 }"
          variant="tonal"
          @click="selectTask(0)"
        >
          Not Tracking Time
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const props = defineProps({
  search: {
    type: Boolean,
    required: false,
  },
  tasks: {
    type: Array,
    required: true,
  },
  working: {
    type: Array,
    required: false,
  },
  selected: {
    type: Number,
    required: false,
  },
});

const selectTask = (taskID: number) => {
  if (props.selected == taskID) {
    return;
  }
  if (taskID > 0) {
    emit("select", taskID);
  } else {
    emit("select", 0);
  }
};
</script>
