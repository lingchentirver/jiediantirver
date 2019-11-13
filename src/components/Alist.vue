<!--
 * @Author: your name
 * @Date: 2019-11-11 18:05:53
 * @LastEditTime: 2019-11-11 21:53:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\jiedianlvxing\src\components\Alist.vue
 -->
<template>
    <div class="box">
        <div class="top">
            <span>证件类型</span>
            <select class="a">
                <option value="">身份证</option>
                <option value="">护照</option>
                <option value="">港澳台通行证</option>
            </select>
        </div>
        <div class="top">
            <span>中文姓名</span>
            <input type="text" placeholder="请输入中文姓名">
        </div>
        <div class="top">
            <span>身份证号</span>
            <input type="text" placeholder="请输入身份证号">
        </div>
        <div class="top">
            <span>手机号</span>
            <input type="text" placeholder="请输入手机号码">
        </div>
        <div class="top">
            <span class="top1">出行人类型</span>
            <div class="bottom">
                <button class="b">成人</button>
                <button class="c">儿童</button>
            </div>
        </div>
        <button class="cc">保存</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.box{
    width:3.4rem;
    height:100%;
    margin:0 auto;
    margin-top:0.28rem;
}
.top{
    width:3.2rem;
    height:0.33rem;
    margin:0 auto;
    margin-bottom:0.48rem;
    display:flex;
    border-bottom:2px solid #f7f7f7;
    justify-content: space-between;
}
.top span{
    width:0.6rem;
    height:0.33rem;
    font-weight:600;
    line-height:0.33rem;
    font-size:0.15rem;
}
.a{
    width:1.9rem;
    height:0.33rem;
    font-weight:600;
    border:none;
    background:white;
    font-size:0.13rem;
}
.top input{
    width:2.4rem;
    height:0.33rem;
    font-size:0.13rem;
    color:#8e8e8e;
    border:none;
    text-indent:0.5rem;
}
.top .top1{
    width:0.8rem;
    height:0.33rem;
    font-weight:600;
    line-height:0.33rem;
    font-size:0.15rem;
}
.bottom{
    width:2.43rem;
    height:0.33rem;
}
.b,.c{
    width:0.6rem;
    height:0.33rem;
    border-radius:8px;
    background:white;
    font-weight:600;
    border:1px solid #717171;
}
.b{
    margin-left:0.45rem;
    margin-right:0.16rem;
    border:1px solid #139299;
    color:#139299;
}
.cc{
    width:3.2rem;
    height:0.5rem;
    text-align:center;
    height:0.5rem;
    font-size:0.15rem;
    color:white;
    font-weight:600;
    background:#139299;
    border-radius:10px;
}
</style>