<template>
  <q-page>
  
    <div class="q-px-sm">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        infinite
        autoplay
        control-color="dark"
        navigation
        padding
        arrows
        height="480px"
        class="text-black rounded-borders bg-amber-1 "
      >
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
          <q-btn v-if="active" size="md" icon="home" color="yellow" flat round dense @click="onClick" />
          <q-btn v-else size="sm" :icon="btnProps.icon" color="dark" flat round dense @click="onClick" />
        </template>

        <q-carousel-slide name="first" class="rounded-borders" img-src="ss_children.jpg">
          <div class="absolute-center custom-caption text-center">
            <div class="text-h2">First stop</div>
            <div class="text-subtitle1">{{lorem}}</div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="second" class="rounded-borders" img-src="ss_children1.jpg">
          <div class="absolute-center custom-caption text-center">
            <div class="text-h2">Second stop</div>
            <div class="text-subtitle1">{{lorem}}</div>
          </div>
        </q-carousel-slide>
        
      </q-carousel>
    </div>
    <div class="row q-pa-lg justify-evenly q-gutter-md">
      <div class="col-xs-12 col-sm-4 col-md-3">
        <q-icon name="mdi-lightbulb-on-outline" size="6rem" color="primary"/>
        <div class="q-q-pt-md">
          <p class="text-weight-bold text-h5">Vision</p>
          {{ lorem }}
        </div>
      </div>
      <div class="col-xs-12 col-sm-4 col-md-3">
        <q-icon name="mdi-hand-heart-outline" size="6rem" color="primary"/>
        <div class="q-q-pt-md">
          <p class="text-weight-bold text-h5">Mission</p>
          {{ lorem }}
        </div>
      </div>
      <div class="col-xs-12 col-sm-4 col-md-3">
        <q-icon name="mdi-book-open-variant" size="6rem" color="primary"/>
        <div class="q-q-pt-md">
          <p class="text-weight-bold text-h5">Vision</p>
          {{ lorem }}
        </div>
      </div>
    </div>
    <div class="q-pa-lg">
      <P class="text-h2 text-center text-weight-bold">Our Work</P>
      <q-scroll-area style="height: 400px;" :bar-style="barStyle">
        <div class="row no-wrap">
          <div v-for="n in 10" :key="n" style="width:250px;" class="q-pa-sm">
            <q-card class="my-card">
                <img src="https://cdn.quasar.dev/img/chicken-salad.jpg">

                <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                    <div class="text-subtitle2">by John Doe</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    {{ lorem }}
                </q-card-section>
            </q-card>
          </div>
        </div>
      </q-scroll-area>
    </div>

    <div class="q-pa-lg">
      <q-card class="my-card" flat bordered dark>
        <q-card-section horizontal>
          <q-img
            class="col-5"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-card-section>
            <div class="q-pa-lg">
              <p text-center>We are proud of what we have achieved and what we are looking forward to achieving in regard 
              to building a future for blind children.<br/>
              We therefore invite you to Join the us and contribute to the cause of making the world a 
              better place by donating. <br/>
              There is no contribution that is small, Just do it for the good of humanity
            </p>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>

    <div class="row q-pa-md justify-evenly">
        <div class="col-xs-12 col-sm-6 col-md-4"></div>
        <div class="col-xs-12 col-sm-6 col-md-4">
            <q-card class="my-card">
                <img src="https://cdn.quasar.dev/img/mountains.jpg">

                <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                    <div class="text-subtitle2">by John Doe</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    {{ lorem }}
                </q-card-section>
            </q-card>

        </div>
        <div class="col-xs-12 col-sm-6 col-md-4"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
      vision: "",
      mission: "",
      //statement:"",
      barStyle: {
        right: '5px',
        borderRadius: '12px',
        backgroundColor: '#1976D2',
        width: '12px',
        
      }
    }
  }
})
</script>
