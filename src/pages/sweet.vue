<!--
 * @Author: 李太白
 * @Date: 2019-11-08 19:52:27
 * @LastEditors: 李太白
 * @LastEditTime: 2019-11-13 16:30:32
 * @Description: 
 -->
 <template>
  <div>
    <sweettop></sweettop>
    <sweetcenter></sweetcenter>
    <sweetNav></sweetNav>
    <indexFooter></indexFooter>
  </div>
</template>

<script>
import sweettop from '../components/sweettop';
import sweetcenter from '../components/sweetcenter';
import sweetNav from '../components/sweetNav';
import indexFooter from '../components/indexFooter';

export default {
  name: 'sweet',
  data () {
    return {
     
    }
  },
  components:{
     sweettop:sweettop,
     sweetcenter:sweetcenter,
     sweetNav:sweetNav,
     indexFooter:indexFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
