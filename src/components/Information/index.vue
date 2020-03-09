<template>
  <div class="information" ref="information">
    
  </div>
</template>

<script>
  import { getInformation } from 'api/api.js'
  export default {
    data () {
      return {
      }
    },
    created () {
      getInformation()
        .then((res) => {
          let reg = /javascript:\(function\(AppBridge\){AppBridge\.redirect\('webview',{url:'/g
          let contentOne = res.data.data.content.replace(reg,'')
          let reg2 = /'}\);}\)\(AppBridge\);/g
          this.$refs.information.innerHTML = contentOne.replace(reg2,'')
        })
    }
  }
</script>

<style>
</style>
