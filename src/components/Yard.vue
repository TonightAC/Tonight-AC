<template>
  <div style="text-align: right">
    <i style="margin: 25px; font-size: 30px" @click="backMain" class="el-icon-close"></i>
  </div>
</template>

<script>
export default {
  name: 'Yard',
  methods: {
    backMain () {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>

</style>
