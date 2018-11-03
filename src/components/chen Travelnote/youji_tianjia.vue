<template>
  <div>
    <div id="bx">
<div id="bj">
  <img src="../../assets/noteSlide/QQ截图20181024112103.png" alt="">
</div>
      <div id="t1">
        <div id="t2">
          <p style="color: #ea9323">给你的游记起个名字吧</p>
        </div>

        <div id="t3">
          <input type="text"placeholder="游记标题"  v-model="mydata" id="sr">
        </div>

        <div id="t4">
          <span>选择要添加的图片</span>
          <input type="file" name="avatar"
                 @change="changeImage($event)"
                 accept="image/gif,image/jpeg,image/jpg,image/png"
                 ref="avatarInput"
                 multiple><br/>
        </div>
        <div id="t5">
          <el-input
            type="textarea"
            :rows="28"
            :autosize="{ minRows: 25, maxRows: 30 }"
            width="500"
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
        </div>
        <hr>
        <div id="t6">
          <button class="btn btn-primary" @click.prevent="addQuote">完成</button>
        </div>
        <div id="kk">
        </div>
      </div>

    </div>

  </div>

</template>
<script>


  export default {
    name: "youji_tianjia",
    components: {},
    computed: {
      useId() {
        return this.$store.state.userInfo.userId;
      }
    },
    data() {
      return {
        mydata: '',//标题
        upath: '', //保存选中的文件
        input: '',
        textarea: ''//文本内容
      }
    },
    methods: {
      addQuote() {
               console.log(sessionStorage.getItem('userId'))
        var zipFormData = new FormData();
        console.log(this.upath[0]);
        zipFormData.append('travelTitle', this.mydata)
        zipFormData.append('travelNoteImage', this.upath[0])
        zipFormData.append('travelNoteContent', this.textarea)
        zipFormData.append('fbtime', new Date().toLocaleString())
        zipFormData.append('userId', sessionStorage.getItem('userId'))
        let config = {headers: {'Content-Type': 'multipart/form-data'}};
        axios.post("http://localhost:3000/travelnote/add", zipFormData, config)

          .then(function (result) {
            console.log(result.data)
          })
        alert("游记添加成功"),
          this.$router.push({
            path:'/youji'
          })
      },
      //选中文件后，将文件保存到实例的变量中
      changeImage(e) {
        this.upath = e.target.files;
      }
    }
  }
</script>

<style scoped>
  #bx {
    width: 1200px;
    margin: 0 auto;
    background-image: url("../../assets/noteSlide/timg.jpg");
  }
#bj{
  width: 1200px;
  height: 300px;

}
#bj>img{
  width: 1200px;
  height: 300px;
}

  #t1 {
    width: 850px;
    background-color: #e2ffdd;
    margin: 0 auto;
    margin-top: 30px;

  }

  #t2 {
    width: 250px;
    margin-left: 300px;
  }

  #t2 > p {
    font-size: 25px;
    font-weight: bold;
  }

  #t3 {
    margin-left:300px;
    margin-top: 50px;
  }

  #sr {
    width: 250px;
    height: 40px;
    border-top: #e2ffdd;
    border-left: #e2ffdd;
    border-right: #e2ffdd;
    border-bottom: #3bfcf0 solid 1px;
    font-size: 18px;
  }
  #sr:hover{
    border-bottom: #3bfcf0 solid 2px;
  }
  #t4 {
    width: 300px;
    margin-left: 350px;
    margin-top: 20px;
  }

  #t4 > span {
    color: #ff9232;
  }

  #t4 > input {
    margin-top: 10px;
    color: #ff9232;
  }

  #t5 {
    width: 600px;
    margin-left: 130px;
    margin-top: 30px;

  }
  #t6{
    margin-left: 400px; ;
  }
  #kk{
    height: 50px;
  }
</style>

