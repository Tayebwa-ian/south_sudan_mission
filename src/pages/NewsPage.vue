<template>
    <q-page>
        <div class="row">
            <div class="col-xs-12 col-sm-3 col-md-3 q-pa-lg">
                <p class="text-weight-bolder text-h5">Related Links</p>
                <q-list separator >
                    <q-item clickable v-ripple v-for="item in site_store.news" :key="item.id">
                        <q-item-section class="text-weight-bold">{{ item.title }}</q-item-section>
                    </q-item>
                </q-list>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="q-pa-md q-gutter-sm">
                    <q-img
                    src="https://picsum.photos/500/300"
                    loading="lazy"
                    spinner-color="white"
                    height="350px"
                    />
                </div>
                <div>
                    {{ lorem }}
                </div>
            </div>
            <div class="col-xs-12 col-sm-3 col-md-3 q-pa-lg">
                <p class="text-weight-bolder text-h7">Key Highlights</p>
                <hr/>
                <p class="text-weight-bolder text-h7">Subscribe to our news letter</p>
                <hr/>
                <div class="row q-pt-md">
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

                    <div class="col-4 q-pt-xs">
                        <q-btn rounded label="Subscribe" type="submit" color="negative" dense/>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { siteStore } from 'src/stores/site-store';

export default defineComponent({
name: 'NewsPage',
setup () {
    const site_store = siteStore();
    return {
        site_store
    }
}
})
</script>