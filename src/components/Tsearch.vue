<!--
 * @Author: your name
 * @Date: 2019-11-06 20:32:14
 * @LastEditTime: 2019-11-08 20:57:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\jiedianlvxing\src\components\Search.vue
 -->
 <template>
     <div class="box">
         <input type="text" placeholder="主题，目的地" class="search">
         <img src="../assets/img/search.png" alt="" class="searchimg">
     </div>
 </template>
<script>
export default {
    name:"Tsearch",
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.box{
    position:relative;
    width:100%;
    height:0.77rem;
    display:flex;
    justify-content:center;
    align-items: center;
    
}
.search{
    width:90%;
    height:0.35rem;
    background:#f8f9fe;
    font-size:16px;
    border-radius:12px;
    border:#f8f9fe;
}
.searchimg
{
    position:absolute;
    top:.1.5rem;
    right: 9%;
    width:0.19rem;
    height:0.19rem;
}
</style>
