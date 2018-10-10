<template>
  <div class="overview">
    <div class="overview-info overview-info-avatar">
      <img id="img" src="" alt="">
    </div>
    <el-button @click="viewMap" plain>地图</el-button>
    <p class="overview-info-title" @click="innerGreet">hello jumps</p>
    <h2 slot="testSlot">haha</h2>
    <input type="text" v-focus v-model="testValue" style="margin-bottom: 20px;">
    <com-test :message="testValue" @childChange="parentChange">
      <p>父组件替换插槽内容</p>
    </com-test>
    <div class="overview-info">
      <el-button @click="saySomething">saySomething</el-button>
      <el-button @click="mapaction">mapaction</el-button>
    </div>
    <div class="overview-info" style="margin-top: 20px;">
      <el-button @click="toLogin">Login</el-button>
    </div>
    <canvas id="cvs" style="width: 100px;height: 100px;border: 1px solid #ccc;"></canvas>
    <div style="margin: 20px 0;">
      <label for="files">
        <span v-if="!fileName" style="cursor: pointer;">上传文件</span>
      </label>
      <span v-if="fileName">{{ fileName }}<span @click="removeFile" class="el-icon-error" style="color: orange;margin-left: 10px;cursor: pointer;"></span></span>
      <input id="files" type="file" @change="fileChange" style="display: none;" multiple="multiple">
    </div>
  </div>
</template>
<script>
import mixins from 'assets/mixins';
import { mapState, mapMutations, mapActions } from 'vuex';
import comTest from '@/components/test1.vue';
export default {
  name: 'overview',
  mixins: [mixins],
  components: {
    comTest
  },
  data() {
    return {
      srcData: '',
      testValue: '',
      fileName: '',
      currentComponent: ''
    }
  },
  computed: {
    ...mapState([
      'count'
    ])
  },
  methods: {
    saySomething() {
      this.claCount(2);
    },
    toLogin() {
      this.$router.push({ name: 'login' });
    },
    mapaction() {
      this.addCount(10);
    },
    ...mapMutations({
      claCount: 'CLA_COUNT'
    }),
    ...mapActions([
      'addCount'
    ]),
    innerGreet() {
      this.sayHello();
      console.log(this.$slots)
    },
    fileChange() {
      let file = document.getElementById('files').files[0];
      console.log(file)
      if (file) {
        if ((file.name.search(/\.(jpg|png|gif)$/)) === -1) {
          return alert('上传文件格式不正确');
        }
        let name = file.name.replace(/\.(jpg|png)$/, '');
        this.fileName = name;

        var cvs = document.getElementById("cvs");

        let fr = new FileReader();
        fr.readAsDataURL(file);
        fr.onload = function(e) {
          document.getElementById('img').src = e.target.result;
          let image = new Image();
          image.onload = function() {
            console.log(`image's width: ` + image.width);
            console.log(`image's height: ` + image.height);
          var ctx = cvs.getContext('2d');
                ctx.drawImage(this, 0, 0);
          }
          image.src = e.target.result;
        }
      }
    },
    removeFile() {
      this.fileName = '';
      document.getElementById('img').src = '';
      document.getElementById('files').value = '';
    },
    parentChange() {
      alert('i know')
    },
    viewMap() {
      this.$router.push({ name: 'maps' });
    }
  },
  watch: {
    // testValue: function(newVal, oldVal) {
    //   console.log(this);
    //   console.log(newVal, oldVal);
    // }
  }
}
</script>
<style lang="scss">
  .overview {
    width: 100%;
    .overview-info-avatar {
      img {
        max-width: 100px;
        max-height: 100px;
        // margin: 0 auto
      }
    }
    .overview-info-title {
      text-align: center;
    }
  }
</style>


