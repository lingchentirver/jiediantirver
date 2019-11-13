<!--
 * @Author: your name
 * @Date: 2019-11-06 20:32:14
 * @LastEditTime: 2019-11-11 09:51:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\jiedianlvxing\src\components\Search.vue
 -->
 <template>
     <div class="box">
        <Onav></Onav>
        <Olist></Olist>
         <!-- <div class="center">
            
         </div> -->
     </div>
 </template>
<script>
import Onav from '../components/Onav';
import Olist from '../components/Olist';
// import Tp from '../components/Tp';
// import Tlist from '../components/Tlist';
export default {
    name:"Order",
    data(){
        return{

        }
    },
    components:{
        Onav,Olist
    }
}
</script>
<style scoped>
/* .box{
  display: flex;
  flex-direction: column;
  height: 100%;  
}
.center{
  flex: 1;
  overflow-y: auto;
  margin-top:.77rem;
  margin-bottom:.5rem;
} */
</style>