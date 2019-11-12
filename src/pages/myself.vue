<!--
 * @Author: 李太白
 * @Date: 2019-11-08 19:52:27
 * @LastEditors: 李太白
 * @LastEditTime: 2019-11-11 14:19:51
 * @Description: 
 -->
 <template>
  <div>
    <myselftop></myselftop>
    <myselfnav></myselfnav>
    <Footer></Footer>
  </div>
</template>

<script>
import myselftop from '../components/myselftop';
import myselfnav from '../components/myselfnav';
import Footer from '../components/Footer';

export default {
  name: 'sweet',
  data () {
    return {
     
    }
  },
  components:{
     myselftop:myselftop,
     myselfnav:myselfnav,
     Footer:Footer,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
