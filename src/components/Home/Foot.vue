<template>
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
        </ul>
      </div>
</template>

<script>
  export default {
    name: "Foot"
  }
</script>

<style scoped>
  .footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 20%;
    z-index:1;
    background-color: lightblue;

  }
  .footer .big {
    width: 100%;
    height: 20%;
    background-color: lightblue;
  }

  ul li{
    list-style: none;
    margin: 0 auto;
  }

  ul.big > li {
    float: left;
    margin-left: 200px;
  }

</style>
