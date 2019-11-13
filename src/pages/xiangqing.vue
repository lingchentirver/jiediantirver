<!--
 * @Author: 李太白
 * @Date: 2019-11-08 19:52:27
 * @LastEditors: 李太白
 * @LastEditTime: 2019-11-11 19:57:03
 * @Description: 
 -->
 <template>
  <div>
    <xiangqingtop></xiangqingtop>
    <xiangqingcenter></xiangqingcenter>
    <xiangqingFooter></xiangqingFooter>
    
  </div>
</template>

<script>
import xiangqingtop from '../components/xiangqingtop';
import xiangqingcenter from '../components/xiangqingcenter';
import xiangqingFooter from '../components/xiangqingFooter';


export default {
  name: 'xiangqing',
  data () {
    return {
     
    }
  },
  components:{
     xiangqingtop:xiangqingtop,
     xiangqingcenter:xiangqingcenter,
     xiangqingFooter:xiangqingFooter,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>