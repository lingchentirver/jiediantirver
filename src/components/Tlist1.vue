<!--
 * @Author: your name
 * @Date: 2019-11-12 21:49:56
 * @LastEditTime: 2019-11-13 12:03:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\jiedianlvxing\src\components\Tlist1.vue
 -->
 <template>
    <div class="box">
        <div style="display:none" >{{typename}}</div>
            <div class="box3" v-for="(item,index) in tours" :key="index" @click="getBooksByType(item.cid)">
                <div class="left">
                    <img :src="item.pic" alt="">
                </div>
                <div class="right">
                    <div class="right1">
                        <p class="g">{{item.name}}</p>
                        <p class="x">{{item.router}}</p>
                        <div class="right11">
                            <p>{{item.price}}</p>
                            <img src="../assets/img/Xiao3.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    name: 'Tlist1',
    props:['typename'],
    data () {
    return {
        tour:[],
        tours:[]
        }
    }, 
    created(){
        fetch('http://localhost:3000/goods')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.tour = data;
            this.tours = this.getBooksByType(this.tour);
            console.log(this.tours);
        })
        .catch(err=>{
            console.log(err);
        });
    },
    beforeUpdate(){
        console.log("数据更新了------------：");
        this.tours = this.getBooksByType(this.tour);
    },
    methods:{
        getBooksByType(data){//根据类型获取数据
            let arr=[];
            for(let i in data){
                if(data[i].cid==this.typename){
                    console.log(data[i].cid)
                    arr.push(data[i]);
                }
            }
            return arr;
        }
    }
}
</script>
<style scoped>
.box{
    width:100%;
    height:100%;
}
.box3{
    width:100%;
    height:1.47rem;
    margin-top:5px;
    margin-bottom:0.16rem;
    display:flex;
    justify-content: space-between;
}
.left{
    width:1.6rem;
    height:1.47rem;
}
.left img{
    width:1.43rem;
    height:1.43rem;
    margin-left:0.15rem;
    margin-top:4px;;
}
.right{
    width:2.1rem;
    height:1.47rem;
}
.right1{
    width:1.9rem;
    height:1.47rem;
    margin-right:0.2rem;
}
.g{
    width:1.9rem;
    height:0.36rem;
    font-size:0.14rem;
    margin-bottom:0.18rem;
}
.x{
    width:1.9rem;
    height:0.28rem;
    font-size:14px;
    color:#717171;
    margin-bottom:0.43rem;
}
.right11{
    width:1.9rem;
    height:.18rem;
    display:flex;
    justify-content: space-between;
}
.right11 p{
    width:1.1rem;
    height:.18rem;
    color:red;
    font-size:.15rem;
}
</style>
