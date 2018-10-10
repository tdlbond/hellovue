<template>
  <div>
    <div id="mapContainer"></div>
    <input id="tipinput"/>
  </div>
</template>
<script>
import AMap from 'AMap';
export default {
  name: 'myMap',
  data() {
    return {

    }
  },
  methods: {
    loadmap(){
      const map = new AMap.Map('mapContainer', {
        zoom: 9
      });
      map.on('click', (e) => {
        console.log(e);
      });
      // const auto = new AMap.Autocomplete({
      //   input: 'tipinput'
      // });
      AMap.plugin('AMap.Autocomplete',function(){//回调函数
          var autoOptions = {
              city: "", //城市，默认全国
              input:"tipinput"//使用联想输入的input的id
          };
          var autocomplete= new AMap.Autocomplete(autoOptions);

          AMap.event.addListener(autocomplete, "select", function(data){
            console.log(data)
            AMap.service(["AMap.PlaceSearch"], function() {
              //构造地点查询类
              var placeSearch = new AMap.PlaceSearch({ 
                // pageSize: 5, // 单页显示结果条数
                // pageIndex: 1, // 页码
                city: "010", // 兴趣点城市
                // citylimit: true,  //是否强制限制在设置的城市内搜索
                map: map, // 展现结果的地图实例
                // panel: "panel", // 结果列表将在此容器中进行展示。
                // autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
              });
              //关键字查询
              placeSearch.search(data.poi.name);
            });
          }); 
      });
    }
  },
  created() {

  },
  mounted() {
    this.loadmap();
  }
}
</script>
<style lang="scss">
#mapContainer {
  width: 500px;
  height: 370px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
#tipinput {
  position: absolute;
  top: 240px;
  left: 20px;
}
</style>


