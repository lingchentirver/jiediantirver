<template>
    <div class="box">
        <div class="box1">
            <ul>
                <li v-for="(item,index) in types" :key="index" @click="changetype(item.name)" >{{item.name}}</li>
                
            </ul>
        </div>
        <div class="box2">
            <div class="box3">
                <div class="left">
                    <img src="../assets/img/3.jpg" alt="">
                </div>
                <div class="right">
                    <div class="right1">
                        <p class="g">光雾山赏红叶+网红芦苇荡+兴<br/>汉胜境2日游(网红芦苇荡+···)</p>
                        <p class="x">西安-天汉湿地公园兴汉胜境-米仓<br/>山森林公园-西安</p>
                        <div class="right11">
                            <p>288CNY起/人</p>
                            <img src="../assets/img/Xiao3.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="box3">
                <div class="left">
                    <img src="../assets/img/4.jpg" alt="">
                </div>
                <div class="right">
                    <div class="right1">
                        <p class="g">光雾山赏红叶+网红芦苇荡+兴<br/>汉胜境2日游(网红芦苇荡+···)</p>
                        <p class="x">西安-天汉湿地公园兴汉胜境-米仓<br/>山森林公园-西安</p>
                        <div class="right11">
                            <p>288CNY起/人</p>
                            <img src="../assets/img/Xiao3.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="box3">
                <div class="left">
                    <img src="../assets/img/5.jpg" alt="">
                </div>
                <div class="right">
                    <div class="right1">
                        <p class="g">光雾山赏红叶+网红芦苇荡+兴<br/>汉胜境2日游(网红芦苇荡+···)</p>
                        <p class="x">西安-天汉湿地公园兴汉胜境-米仓<br/>山森林公园-西安</p>
                        <div class="right11">
                            <p>288CNY起/人</p>
                            <img src="../assets/img/Xiao3.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="box3">
                <div class="left">
                    <img src="../assets/img/6.jpg" alt="">
                </div>
                <div class="right">
                    <div class="right1">
                        <p class="g">光雾山赏红叶+网红芦苇荡+兴<br/>汉胜境2日游(网红芦苇荡+···)</p>
                        <p class="x">西安-天汉湿地公园兴汉胜境-米仓<br/>山森林公园-西安</p>
                        <div class="right11">
                            <p>288CNY起/人</p>
                            <img src="../assets/img/Xiao3.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="box3">
                <div class="left">
                    <img src="../assets/img/3.jpg" alt="">
                </div>
                <div class="right">
                    <div class="right1">
                        <p class="g">光雾山赏红叶+网红芦苇荡+兴<br/>汉胜境2日游(网红芦苇荡+···)</p>
                        <p class="x">西安-天汉湿地公园兴汉胜境-米仓<br/>山森林公园-西安</p>
                        <div class="right11">
                            <p>288CNY起/人</p>
                            <img src="../assets/img/Xiao3.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="box3">
                <div class="left">
                    <img src="../assets/img/3.jpg" alt="">
                </div>
                <div class="right">
                    <div class="right1">
                        <p class="g">光雾山赏红叶+网红芦苇荡+兴<br/>汉胜境2日游(网红芦苇荡+···)</p>
                        <p class="x">西安-天汉湿地公园兴汉胜境-米仓<br/>山森林公园-西安</p>
                        <div class="right11">
                            <p>288CNY起/人</p>
                            <img src="../assets/img/Xiao3.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="box3">
                <div class="left">
                    <img src="../assets/img/3.jpg" alt="">
                </div>
                <div class="right">
                    <div class="right1">
                        <p class="g">光雾山赏红叶+网红芦苇荡+兴<br/>汉胜境2日游(网红芦苇荡+···)</p>
                        <p class="x">西安-天汉湿地公园兴汉胜境-米仓<br/>山森林公园-西安</p>
                        <div class="right11">
                            <p>288CNY起/人</p>
                            <img src="../assets/img/Xiao3.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="box3">
                <div class="left">
                    <img src="../assets/img/3.jpg" alt="">
                </div>
                <div class="right">
                    <div class="right1">
                        <p class="g">光雾山赏红叶+网红芦苇荡+兴<br/>汉胜境2日游(网红芦苇荡+···)</p>
                        <p class="x">西安-天汉湿地公园兴汉胜境-米仓<br/>山森林公园-西安</p>
                        <div class="right11">
                            <p>288CNY起/人</p>
                            <img src="../assets/img/Xiao3.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="box3">
                <div class="left">
                    <img src="../assets/img/3.jpg" alt="">
                </div>
                <div class="right">
                    <div class="right1">
                        <p class="g">光雾山赏红叶+网红芦苇荡+兴<br/>汉胜境2日游(网红芦苇荡+···)</p>
                        <p class="x">西安-天汉湿地公园兴汉胜境-米仓<br/>山森林公园-西安</p>
                        <div class="right11">
                            <p>288CNY起/人</p>
                            <img src="../assets/img/Xiao3.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Tnav1',
    data () {
    return {
        id:[],
        currid:""
    }
    }, 
     created(){
    axios.get('http://localhost:3000/catalog1')
    .then((response)=> {
        // console.log(response.data);
        this.id = response.data;
        this.currid = this.id[0].name;//把拿到的类型的第一个赋给当前类型。
    })
    .catch(function (error) {
        console.log(error);
    });
  },
  methods:{
      changetype(typename){
          console.log(typename);
          this.currid = typename;
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
.box2{
    width:100%;
    height:2.8rem;
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