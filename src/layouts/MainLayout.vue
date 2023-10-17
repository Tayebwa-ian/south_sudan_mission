<template>
  
  <q-layout view="hhh lpR fFf">
    <q-header elevated reveal bordered class="bg-dark">
      <div class="row q-pa-sm items-center">
        <q-avatar
        size="50px"
        >
          <q-img
            src="ss_logo.jpg"
            spinner-color="white"
            dense
          />
        </q-avatar>
        <p class="text-h5 q-pl-md">South Sudan Children and Deaf Ministry</p>
      </div>
      <q-toolbar glossy>
        <q-space/>
        <q-tabs >
          <q-route-tab to="/" label="Home" class="q-mx-sm text-white text-weight-bolder"></q-route-tab>
          <q-route-tab to="/activities" label="Activities" class="q-mx-sm text-white text-weight-bolder"></q-route-tab>
          <q-route-tab to="/about" label="About Us" class="q-mx-sm text-white text-weight-bolder">
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup>
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section>Help &amp; Feedback</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-route-tab>
          <q-route-tab to="/news" label="News" class="q-mx-sm text-white"></q-route-tab>
          <q-route-tab to="/team" label="Team" class="q-mx-sm text-white"></q-route-tab>
          <q-route-tab to="/contact" label="Reach Us" class="q-mx-sm text-white"></q-route-tab>
        </q-tabs>
        <q-space></q-space>
        <div class="p-l-lg">
          <q-btn
          to="/donate"
          label="Donate"
          rounded
          color="negative"
          ></q-btn>
        </div>
        <q-space></q-space>
      </q-toolbar>
      <q-page-sticky expand position="top" class="row z-top">
        <q-toolbar class="bg-grey text-black justify-center">
          behold. I will gather them out of all countries, whither I have driven them in my anger, and in my fury, and in my great wrath; 
          <br/> 
          and I will bring them again unto this place,and I will cause them to dwell safely: (JEREMAIH 32:37)
        </q-toolbar>
      </q-page-sticky>
    </q-header>

   
    <q-page-container>
      <router-view />

      <div class="row q-pa-md bg-dark text-white">
        <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="text-h5 text-red">Useful Links</div>
          <hr class="q-px-md"/>
          <q-list separator>
            <q-item
            clickable
            v-ripple
            exact
            to="/">
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>
              <q-item-section>Home</q-item-section>
            </q-item>
            <q-item
            clickable
            v-ripple
            exact
            to="about">
              <q-item-section avatar>
                <q-icon name="info" />
              </q-item-section>
              <q-item-section>About</q-item-section>
            </q-item>
            <q-item
            clickable
            v-ripple
            exact
            to="activities">
              <q-item-section avatar>
                <q-icon name="done" />
              </q-item-section>
              <q-item-section>Activities</q-item-section>
            </q-item>
            <q-item
            clickable
            v-ripple
            exact
            to="/contact">
              <q-item-section avatar>
                <q-icon name="key" />
              </q-item-section>
              <q-item-section>ReachUs</q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="text-h5 text-red">Location</div>
          <hr/>
          <div>
            P. O. Box 236 Kampala, Uganda<br/>
            Street 203 Luwima road<br/>
            Email: example@gmail.com<br/>
            Tel: +256 396 586 523
          </div>
          <div class="text-h5 text-red q-pt-md">Subcribe</div>
          <hr/>
          <div class="q-pa-md">
            <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
            >
            <div class="row">
              <q-input
                outlined
                dense
                rounded
                bg-color="white"
                v-model="name"
                label="example@gmail.com"
                color="secondary"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type your email']"
                class="col-8"
              />

              <div class="col-3 q-pt-xs">
                <q-btn rounded label="Subscribe" type="submit" color="negative"/>
              </div>
            </div>
            </q-form>
          </div>
          
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="text-h5 text-red">Socials</div>
          <hr/>
          <div class="row">
            <div class="q-px-sm">
              <q-icon name="facebook" size="30px" color="primary"></q-icon>
            </div>
            <div class="q-px-sm">
              <q-icon name="mdi-twitter" size="30px" color="primary"></q-icon>
            </div>
            <div class="q-px-sm">
              <q-icon name="mdi-youtube" size="30px" color="primary"></q-icon>
            </div>
            <div class="q-px-sm">
              <q-icon name="mdi-linkedin" size="30px" color="primary"></q-icon>
            </div>
          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  setup () {
    return {
      
    }
  }
})
</script>
