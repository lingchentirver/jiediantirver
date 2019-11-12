<!--
 * @Author: your name
 * @Date: 2019-11-04 17:16:01
 * @LastEditTime: 2019-11-05 08:45:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tongzhend:\workspace\workspace\src\components\HelloWorld.vue
 -->
<template>
  <div>
    <top></top>
    <center></center>
  </div>
</template>

<script>
import top from './top';
import center from './center';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msgleft: '0.00',
      msgright: '0.00',
    }
  },
  components:{
     top:top,
     center:center
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
