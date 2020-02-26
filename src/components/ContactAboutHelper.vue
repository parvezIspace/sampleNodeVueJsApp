ContactAboutHelper<template>
  <div>
    <b-card no-body class="content">
      <b-card-body>
        <h4>{{ title | to-uppercase}}</h4>
        <p class="card-text">
          <slot name="desc1"></slot>
        </p>
        <p class="card-text">
          <slot name="desc2"></slot>
        </p>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "contactAboutHelper",
  props: {
    title: String
  }
};
</script>

<style>
.content {
  width: 60%;
  margin: auto;
  padding: 40px;
  margin-top: 20px;
}
</style>
