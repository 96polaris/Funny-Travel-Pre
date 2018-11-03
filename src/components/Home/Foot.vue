<template>
  <div>
    <div class="footer">
      <ul class="big">
        <li>
          <ul class="about">
            <li>
              <h4>关于我们</h4>
            </li>
            <li>
              <a target="_blank" title="简介" href="" rel="nofollow">简介</a>
            </li>
            <li>
              <a target="_blank" title="可信网站" href="" rel="nofollow">可信网站</a>
            </li>
            <li>
              <a target="_blank" title="法律声明" href="" rel="nofollow">法律声明</a>
            </li>
            <li>
              <a target="_blank" title="网站地图" href="">网站地图</a>
            </li>
            <li>
              <a target="_blank" title="旅游度假资质" href="" rel="nofollow">旅游度假资质</a>
            </li>
          </ul>
        </li>
        <!-- 加盟 -->
        <li>
          <ul class="join">
            <li>
              <h4>加盟合作</h4>
            </li>
            <li>
              <a target="_blank" title="合作加盟" href="" rel="nofollow">合作加盟</a>
            </li>
            <li>
              <a target="_blank" title="商旅合作" href="" rel="nofollow">商旅合作</a>
            </li>
            <li><a target="_blank" title="旅游保险" href="" rel="nofollow">旅游保险</a></li>
            <li><a target="_blank" title="网站联盟" href="" rel="nofollow">网站联盟<em><i>推广赚佣金</i></em></a></li>
            <li><a target="_blank" title="门票合作" href="" rel="nofollow">门票合作</a></li>
          </ul>
        </li>
        <!-- 联系我们 -->
        <li>
          <ul class="contact">
            <li>
              <h4>联系我们</h4>
            </li>
            <li class="contactTcLi">
              <a target="_blank" title="联系我们" href="" rel="nofollow">联系我们</a>
            </li>
            <li class="contactTcLi">
              <a target="_blank" title="投诉建议" href="" class="specialList" rel="nofollow">投诉建议</a>
            </li>
            <li class="contactTcLi">
              <a target="_blank" title="诚聘英才" href="http:" rel="nofollow">诚聘英才</a>
            </li>
            <li>
              <a target="_blank" title="友情链接" href="" rel="nofollow">友情链接</a>
            </li>
          </ul>
        </li>
        <!--友情链接-->
        <li>
          <ul class="join">
            <li>
              <h4>友情链接</h4>
            </li>
            <li>
              <a target="_blank" title="平安保险" href="" rel="nofollow">平安保险</a>
            </li>
            <li>
              <a target="_blank" title="" href="" rel="nofollow">商旅合作</a>
            </li>
            <li><a target="_blank" title="中国人寿" href="" rel="nofollow">中国人寿</a></li>
            <li><a target="_blank" title="大众票务" href="" rel="nofollow">大众票务</a></li>

          </ul>
        </li>
      </ul>
      <div id="pic">
        <img src="../../assets/activityImg/66.png" alt="">
      </div>
    </div>
    <div style="width: 100%;background-color: #aaa;text-align: center">
      <!--<p>苏之旅版权声明：版权所有侵权必究</p>-->
      <p>苏之旅版权声明：版权所有侵权必究|Copyright ©2018 funnyTravel.com京公网安备110108901530京ICP备05021087号营业执照信息保险经纪资质(京)-非经营性-2016-0110 网客服电话95117</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Foot"
  }
</script>

<style scoped>
  .footer{
    margin: 0 auto;
    width: 100%;
    /*position: fixed;*/
    margin-top: 20px;
    height: 180px;
    bottom: 0;
    z-index:1;
    background-color: #bbb;

  }
  .footer .big {
    width: 100%;
    height: 20%;
    /*background-color: lightblue;*/
  }

  ul li{
    list-style: none;
    margin: 0 auto;
  }

  ul.big > li {
    float: left;
    margin-top: 30px;
    margin-left: 120px;
  }
#pic{
  width: 120px;
  height: 120px;
  margin-left: 1150px;
}
  #pic img{
    width: 120px;
    height: 120px;
  }
</style>
