<template>
    <q-page>
        <div class="row ">
            <div class="col-md-6">
                <div class="q-pa-sm">
                    <q-form
                        @submit="onSubmit"
                        @reset="onReset"
                        class="q-gutter-md q-pa-md"
                    >
                        
                        <q-input
                        v-model="name"
                        label="Your name *"
                        hint="Name"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        square
                        bg-color="white"
                        outlined
                        />

                        <q-input
                        outlined
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

                        <q-input
                        type="email"
                        label="e.g example@gmail.com *"
                        lazy-rules
                        :rules="[
                            val => val !== null && val !== '' || 'Please type your email'
                        ]"
                        square
                        bg-color="white"
                        outlined
                        />
                        <q-input 
                        outlined 
                        v-model="text"
                        label="The Message you would like to send to us*"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                         />
                        <div class="row justify-center">
                            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                            <q-btn label="Send" type="submit" color="red"/>
                        </div>
                    </q-form>
                </div>
            </div>
            <div class="col-md-6">
                <q-icon
                name="location"
                />
            </div>
        </div>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
name: 'ContactPage',

setup () {
    return {

    }
}
})
</script>