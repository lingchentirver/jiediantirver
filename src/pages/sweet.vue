<!--
 * @Author: 李太白
 * @Date: 2019-11-08 19:52:27
 * @LastEditors: 李太白
 * @LastEditTime: 2019-11-09 15:03:08
 * @Description: 
 -->
 <template>
  <div>
    <sweettop></sweettop>
    <sweetcenter></sweetcenter>
    <sweetNav></sweetNav>
    <Footer></Footer>
  </div>
</template>

<script>
import sweettop from '../components/sweettop';
import sweetcenter from '../components/sweetcenter';
import sweetNav from '../components/sweetNav';
import Footer from '../components/Footer';

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
     Footer:Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
