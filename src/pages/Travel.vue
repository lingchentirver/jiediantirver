<!--
 * @Author: your name
 * @Date: 2019-11-06 20:32:14
 * @LastEditTime: 2019-11-13 11:28:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\jiedianlvxing\src\components\Search.vue
 -->
 <template>
     <div class="box">
         <Tsearch style="position:fixed; z-index:10;left:0;top:0;"></Tsearch>
         <div class="center">
            <Tp></Tp>
            <Tlist></Tlist>
            <Tnav1></Tnav1>
            <!-- <Tlist1></Tlist1> -->
            <indexFooter></indexFooter>
         </div>
     </div>
 </template>
<script>
import Tsearch from '../components/Tsearch';
import Tp from '../components/Tp';
import Tlist from '../components/Tlist';
import Tnav1 from '../components/Tnav1';
import Tlist1 from '../components/Tlist1';
import indexFooter from '../components/indexFooter';
export default {
    name:"Travel",
    data(){
        return{

        }
    },
    components:{
        Tsearch,Tp,Tlist,Tnav1,Tlist1,indexFooter
    }
}
</script>
<style scoped>
.box{
  display: flex;
  flex-direction: column;
  height: 100%;  
}
.center{
  flex: 1;
  overflow-y: auto;
  margin-top:.79rem;
  margin-bottom:.5rem;
}
</style>