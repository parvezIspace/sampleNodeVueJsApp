<template>
  <div class="contact">
    <contactAboutHelper title="Contact us">
      <div slot="desc1">
        Some quick example text to build on the
        <em>card title</em> and make up the bulk of the card's
        content.
      </div>
      <div slot="desc2">A second paragraph of contact us in the app.</div>
    </contactAboutHelper>
  </div>
</template>

<script>
import contactAboutHelper from "./../components/ContactAboutHelper";
export default {
  name: "contact",
  components: {
    contactAboutHelper
  }
};
</script>

<style scoped>
.bg-red{
  background-color: red;
}
</style>