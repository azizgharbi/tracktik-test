<template>
  <div>
    <div class="field">
      <b-tag v-for="tag in tags" :key="tag" class="spacing" type="is-primary ">{{ tag }}</b-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteTags",
  props: {
    tags: Array
  }
};
</script>
