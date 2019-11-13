<!--
 * @Author: your name
 * @Date: 2019-11-10 15:46:27
 * @LastEditTime: 2019-11-13 12:07:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\jiedianlvxing\src\components\Tnav1.vue
 -->
<template>
    <div class="box">
        <div class="box1">
            <ul>
                <li v-for="(item,index) in types" :key="index" @click="changetype(item.id)">{{item.name}}</li>
            </ul>
        </div>
        <div class="contentBox">
             <Tlist1 :typename="currcid"></Tlist1>
         </div>
    </div>
</template>
<script>
import Tlist1 from './Tlist1';
export default {
    name: 'Tnav1',
    data () {
    return {
        types:[],
        currcid:""
        }
    }, 
    components: {
        Tlist1
    },
    created(){
        fetch('http://localhost:3000/catalog2')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.types = data;
            this.currcid = this.types[0].id;
            console.log(this.types);
        })
        .catch(err=>{
            console.log(err);
        });
    },
    methods:{
      changetype(typename){
          console.log(typename);
          this.currcid = typename;
      }
  }
}
</script>
<style scoped>
.box{
    width:100%;
    height:100%;
}
.box1
{
    width:100% ;
    height:.35rem;
    font-size:0.11rem;
}
.box1 ul{
    display:flex;
    width:100%;
    height:.35rem;
    overflow-x: auto;
}
.box1  li{
    width:0.75rem;
    height:.33rem;
    background:#e1f1f1;
    border-radius:4px;
    margin-right:10px;
    flex-shrink: 0; 
    font-size:0.13rem;
    line-height:.33rem;
    text-align: center;
}
.box1 li:nth-child(1){
    width:0.75rem;
    height:.35rem;
    background:#11959a;
    margin-right:10px;
    margin-left:0.14rem;
}
.contentBox{
    width:100%;
    height:6rem;
}
</style>