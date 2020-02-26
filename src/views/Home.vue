<template>
  <div class="home">
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>
<script src="https://unpkg.com/vue-bulma-accordion"></script>
<script>
// @ is an alias to /src
import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion'
import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'
// import bulmaAccordion from 'bulma-extensions/bulma-accordion/dist/js/bulma-accordion.min.js'
   // import 'bulma-extensions/bulma-accordion/dist/css/bulma-accordion.min.css';
export default {
  name: 'home',
  components: {
        BulmaAccordion,
        BulmaAccordionItem,
         BadgerAccordion,
        BadgerAccordionItem
    }
}
</script>

<style scoped>
.badger-accordion__panel {
    max-height: 75vh;
    overflow: hidden;
}

.badger-accordion__panel.-ba-is-hidden {
    max-height: 0 !important;
    visibility: hidden;
}

.badger-accordion--initialized .badger-accordion__panel {
    transition: all ease-in-out 0.2s;
}
</style>
