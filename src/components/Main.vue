<template>
  <el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      socket: null,
      path: 'ws://localhost:1979/websocket/100000'
    }
  },
  created () {
    this.socket = new WebSocket(this.path)
    this.socket.onmessage = this.getMessage
    this.socket.onopen = this.open
    this.socket.onerror = this.error
  },
  methods: {
    getMessage (msg) {
    },
    open () {
    },
    error () {
    }
  }
}
</script>

<style scoped>
</style>
