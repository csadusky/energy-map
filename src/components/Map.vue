<template>
  <div id="map">
    <svg id="us-map" width="959px" height="593px" viewBox="174 100 959 593" enable-background="new 174 100 959 593" xml:space="preserve">
    <!-- <sodipodi:namedview bordercolor="#666666" objecttolerance="10" pagecolor="#ffffff" borderopacity="1" gridtolerance="10" guidetolerance="10" inkscape:cx="509.19152" inkscape:cy="282.2353" inkscape:zoom="1.2137643" showgrid="false" id="namedview71" inkscape:current-layer="g5" inkscape:window-maximized="1" inkscape:window-y="-8" inkscape:window-x="-8" inkscape:pageopacity="0" inkscape:window-height="1017" inkscape:window-width="1920" inkscape:pageshadow="2">
      </sodipodi:namedview> -->
    <g id="g5">
      <path v-for="(data, index) in mapData" v-bind:key="index" :id="data.state" :fill="'#' + data.fill" :d="data.d" @click="changeCurrentPie(index)" :class="{currentState: currentPie === index}" />
    </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: {
    msg: String
  },
  methods:{
    changeCurrentPie(newPie){
      this.$store.commit('changeCurrentPie', newPie)
    }
  },
  computed:{
    mapData (){
      return this.$store.state.mapData
    },
    currentPie (){
      return this.$store.state.currentPie
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#us-map {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 75%;
  height: calc(100% - 50px);
  cursor: pointer;
 
}

path:hover,
circle:hover {
  stroke: rgba(66, 185, 131, 0.4) !important;
  stroke-width: 5px;
  stroke-linejoin: round;
  /* fill: rgba(66, 185, 131, 0.4) !important; */
  cursor: pointer;
}

#path67 {
  fill: none !important;
  stroke: #2cb3f0 !important;
  cursor: default;
}
.currentState{
  fill: rgba(66, 185, 131, 0.4) !important;
}
@media screen and (max-width: 1225px) and (orientation: portrait){

}

@media screen and (max-width: 736px) and (orientation: portrait){
  #us-map {
    position: relative;
    width: 100%;
  }
}

@media screen and (max-width: 736px) and (orientation: landscape){
  #us-map {
    width: 60%;
  }
}

</style>
