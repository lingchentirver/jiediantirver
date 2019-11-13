<!--
 * @Author: 李太白
 * @Date: 2019-11-08 19:52:27
 * @LastEditors: 李太白
 * @LastEditTime: 2019-11-13 16:56:10
 * @Description: 
 -->
 <template>
  <div>
    <myselftop></myselftop>
    <myselfnav></myselfnav>
    <indexFooter></indexFooter>
  </div>
</template>

<script>
import myselftop from '../components/myselftop';
import myselfnav from '../components/myselfnav';
import indexFooter from '../components/indexFooter';

export default {
  name: 'sweet',
  data () {
    return {
     
    }
  },
  components:{
     myselftop:myselftop,
     myselfnav:myselfnav,
     indexFooter:indexFooter,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
