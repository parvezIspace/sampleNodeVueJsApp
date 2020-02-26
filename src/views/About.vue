<template>
  <div class="about">
    <contactAboutHelper title="About us">
      <div slot="desc1"> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali....
      </div>
      <div slot="desc2">A second paragraph of About us in the app.</div>
    </contactAboutHelper>
  </div>
</template>

<script>
import contactAboutHelper from "./../components/ContactAboutHelper";
export default {
  name: "about",
  components: {
    contactAboutHelper
  }
};
</script>

<style>
</style>
