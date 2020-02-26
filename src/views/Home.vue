<template>
  <div class="home">
    <div class="text-center my-3">
  <b-button v-b-tooltip.hover title="Tooltip directive content">
    Hover Me
  </b-button>

  <b-button id="tooltip-target-1">
    Hover Me
  </b-button>
  <b-tooltip target="tooltip-target-1" triggers="hover">
    I am tooltip <b>component</b> content!
  </b-tooltip>
</div>

<br/><br/>

<div class="text-center my-3">
  <b-button v-b-popover.hover.top="'I am popover directive content!'" title="Popover Title">
    Hover Me
  </b-button>

  <b-button id="popover-target-1">
    Hover Me
  </b-button>
  <b-popover target="popover-target-1" triggers="hover" placement="top">
    <template v-slot:title>Popover Title</template>
    I am popover <b>component</b> content!
  </b-popover>
</div>
<br/><br/>
    <div>
  <b-button v-b-modal.modal-1>Launch demo modal</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
</div>
<br/><br/>
<!-- <BulmaAccordion
    dropdown
    :icon="'caret'"
    :caretAnimation="{
        duration: '.6s',
        timerFunc: 'ease-in-out'
    }"
    :slide="{
        duration: '.9s',
        timerFunc: 'ease'
    }"
>
    
    <BulmaAccordionItem>
        <h4 slot="title">Just a title</h4>
    </BulmaAccordionItem>
  
    <BulmaAccordionItem>
        <h4 slot="title">A title with content</h4>
        <p slot="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eos
            illo expedita asperiores rem iure aliquid dolore, pariatur
            dignissimos, minima inventore? Minima voluptatum nulla, error omnis
            laboriosam voluptatibus rem aperiam.
        </p>
    </BulmaAccordionItem>
    <BulmaAccordionItem>
        <h4 slot="title">All of it</h4>
        <p slot="content">boo</p>
        <button class="button is-primary" slot="footer">Click Me!</button>
    </BulmaAccordionItem>
</BulmaAccordion> -->

<badger-accordion>
    <badger-accordion-item>
        <template slot="header">First Accordion Header</template>    
        <template slot="content">First Accordion Content</template>  
    </badger-accordion-item>
 
    <badger-accordion-item>
        <template slot="header">Second Accordion Header</template>    
        <template slot="content">Second Accordion Content</template>  
    </badger-accordion-item>
</badger-accordion>

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
