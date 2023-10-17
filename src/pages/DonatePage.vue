<template>
  <q-page class="bg-image">
  
   <div class="row q-pa-xl justify-center items-center full-width">
    <div class="col-md-4 col-sm-6 col-xs-12">

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md q-pa-md bg-dark"
      >
        <q-btn-toggle
          bg-color="white"
          v-model="model"
          push
          glossy
          toggle-color="primary"
          :options="[
            {label: '$20', value: 20},
            {label: '$30', value: 30},
            {label: '$50', value: 50}
          ]"
        />
        <q-input
          filled
          type="number"
          label="turn you currency to USD eg $30 *"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please enter a valid figure',
          ]"
          square
          dense
          bg-color="white"
        />
        <q-input
          filled
          v-model="name"
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
          square
          dense
          bg-color="white"
        />

        <q-input
          filled
          type="email"
          label="e.g example@gmail.com *"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please type your email',
            val => val > 0 && val < 100 || 'Please type a real age'
          ]"
          square
          dense
          bg-color="white"
        />
        <q-input
          filled
          type="phone"
          label="e.g 2567xxxxxxxx *"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please type your number',
            val => val > 0 && val === 12 || 'Please type a real age'
          ]"
          square
          dense
          bg-color="white"
        />

        <div class="row justify-center">
          <q-btn label="Donate" type="submit" color="red"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>

    </div>
   

   </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  name: 'DonatePage',
  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)

    return {
      model: ref('one'),
      name,
      age,

      onSubmit () {
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }
    }
  }
}
</script>

<style>
  .bg-image {
    background-image: url(ss.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .my-custom-toggle {
    border: 1px solid #027be3
  }
  
</style>