<!--
 * @Author: your name
 * @Date: 2019-11-11 11:55:11
 * @LastEditTime: 2019-11-11 16:49:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\jiedianlvxing\src\pages\Choose.vue
 -->
<template>
    <div class="box">
        <Fnav></Fnav>
        <Flist></Flist>
        <Fslide></Fslide>
        <Farticle></Farticle>
        <Ffooter></Ffooter>
    </div>
</template>
<script>
import Fnav from '../components/Fnav';
import Flist from '../components/Flist';
import Fslide from '../components/Fslide';
import Farticle from '../components/Farticle';
import Ffooter from '../components/Ffooter';
export default {
    name:"Fillorder",
    data(){
        return{

        }
    },
    components:{
        Fnav,Flist ,Fslide,Farticle,Ffooter
    }
}
</script>
<style scoped>

</style>
