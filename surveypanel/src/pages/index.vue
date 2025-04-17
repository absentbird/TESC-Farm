<template>
  <v-container>
    <h1>SUS Survey</h1>
    <v-row>
      <v-col v-for="question in questions" cols="12" sm="6" md="4">
        <v-card>
          <v-card-text>
            {{ question.text }}
          </v-card-text>
          <v-card-item>
            <br>
            <v-slider
              v-model="question.score"
                :min="1"
                :max="5"
                step="1"
                thumb-label
                :ticks="tickLabels"
                show-ticks="always"
            ></v-slider>
            <br>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    <h2 id="result">Result: {{ result }}</h2>
  </v-container>
</template>

<script lang="ts" setup>
const tickLables = ref({
  0: '1',
  1: '2',
  2: '3',
  3: '4',
  4: '5'
})
const question_list : Array<string> = [
    'I think that I would like to use this system frequently.',
    'I found the system unnecessarily complex.',
    'I thought the system was easy to use.',
    'I think that I would need the support of a technical person to be able to use this system.',
    'I found the various functions in this system were well integrated.',
    'I thought there was too much inconsistency in this system.',
    'I would imagine that most people would learn to use this system very quickly.',
    'I found the system very cumbersome to use.',
    'I felt very confident using the system.',
    'I needed to learn a lot of things before I could get going with this system.'
]
const questions : Ref<Array<{'text': string, 'score': number}>> = ref(question_list.map(q => ({'text': q, 'score': 1})))
const result : number = computed(() => {
  let total : number = 0
  questions.value.forEach((question, index) => {
    console.log(question)
    index % 2 == 0 ? total += question.score - 1 : total += 5 - question.score
  })
  return total * 2.5
})
</script>
