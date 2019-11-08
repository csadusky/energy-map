<template>
  <div id="app">
    <vue-particles style="position: fixed; height: 100%; width: 100%; z-index: -1;"
        color="#e6f1f5"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="1"
        linesColor="#e6f1f5"
        :linesWidth="1.5"
        :lineLinked="true"
        :lineOpacity="0.5"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
    ></vue-particles>
    <div id="header">
      <div @click="toggleAbout(true)" id="aboutButton">about app</div>
      <div><i>Select a state to compare fuel mix (%) of sources used to generate electricity</i></div>
      <div v-if="currentPie || currentPie === 0" id="currentState">{{this.pieData[this.$store.state.currentPie].State}}</div>
    </div>
    
    <Map />
    <div id="pieChartContainer">
      <div id="templateContainer">
        <div class="iconContainer" style="border: 1px solid #001f3f;"><img src="./assets/coal.png" class="icon">Coal <div class="resourcePercent" v-if="currentPie || currentPie === 0">{{this.pieData[this.$store.state.currentPie].coal}}%</div></div>
        <div class="iconContainer" style="border: 1px solid #85144b;"><img src="./assets/oil.png" class="icon">Oil <div class="resourcePercent" v-if="currentPie || currentPie === 0">{{this.pieData[this.$store.state.currentPie].oil}}%</div></div>
        <div class="iconContainer" style="border: 1px solid #B10DC9;"><img src="./assets/gas.png" class="icon">Gas <div class="resourcePercent" v-if="currentPie || currentPie === 0">{{this.pieData[this.$store.state.currentPie].gas}}%</div></div>
        <div class="iconContainer" style="border: 1px solid #FF4136;"><img src="./assets/nuclear.png" class="icon">Nuclear <div class="resourcePercent" v-if="currentPie || currentPie === 0">{{this.pieData[this.$store.state.currentPie].nuclear}}%</div></div>
        <div class="iconContainer" style="border: 1px solid #7FDBFF;"><img src="./assets/hydro.png" class="icon">Hydro <div class="resourcePercent" v-if="currentPie || currentPie === 0">{{this.pieData[this.$store.state.currentPie].hydro}}%</div></div>
        <div class="iconContainer" style="border: 1px solid #2ECC40;"><img src="./assets/biomass.png" class="icon">Biomass <div class="resourcePercent" v-if="currentPie || currentPie === 0">{{this.pieData[this.$store.state.currentPie].biomass}}%</div></div>
        <div class="iconContainer" style="border: 1px solid #0074D9;"><img src="./assets/wind.png" class="icon">Wind <div class="resourcePercent" v-if="currentPie || currentPie === 0">{{this.pieData[this.$store.state.currentPie].wind}}%</div></div>
        <div class="iconContainer" style="border: 1px solid #FFDC00;"><img src="./assets/solar.png" class="icon">Solar <div class="resourcePercent" v-if="currentPie || currentPie === 0">{{this.pieData[this.$store.state.currentPie].solar}}%</div></div>
        <div class="iconContainer" style="border: 1px solid #01FF70;"><img src="./assets/geothermal.png" class="icon"><span style="font-size: 10px;">Geothermal</span><div class="resourcePercent" v-if="currentPie || currentPie === 0">{{this.pieData[this.$store.state.currentPie].geothermal}}%</div></div>
        <div class="iconContainer" style="border: 1px solid #7a6f4e;"><img src="./assets/other.png" class="icon">Other<br>Fossil<div class="resourcePercent" v-if="currentPie || currentPie === 0">{{this.pieData[this.$store.state.currentPie].fossil}}%</div></div>
        <div class="iconContainer" style="border: 1px solid #7a7a78;"><img src="./assets/unknown.png" class="icon"><span style="font-size: 10px;">Unknown/ Purchased</span> <div class="resourcePercent" v-if="currentPie || currentPie === 0">{{this.pieData[this.$store.state.currentPie].unknown}}%</div></div>
      </div>

      <PieChart v-if="currentPie || currentPie === 0"/>
         
    </div>

    <transition name="fade">
      <AboutApp v-if="showAbout" />
    </transition>

  </div>
</template>

<script>
import Vue from 'vue'
import VueParticles from 'vue-particles'

import Map from './components/Map.vue'
import PieChart from './components/PieChart.vue'
import AboutApp from './components/AboutApp.vue'

Vue.use(VueParticles)
export default {
  name: 'app',
  components: {
    PieChart,
    Map,
    AboutApp
  },
  data(){
    return{
      pieData: this.$store.state.pieData
      // usState: this.$store.state.pieData[this.$store.state.currentPie].state

    }
    
  },
  computed:{
    currentPie (){
      return this.$store.state.currentPie
    },
    showAbout (){
      return this.$store.state.showAbout
    }
  },
  methods:{
    toggleAbout(toggle){
      this.$store.commit('toggleAbout', toggle)
    }
  }
}
</script>

<style>
html, body{
  height: 100%;
  width: 100%;
  margin: 0;
}
body{
  background-color: #d1cfcf;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#header{
  height: 50px;
  position: relative;
  z-index: 1;
  padding: 10px;
}
#aboutButton{
  border: 1px solid #42b983;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
  position: relative;
  float: left;
  cursor: pointer;

}
#aboutButton:hover{
  border: 3px solid #42b983;
}
#currentState{
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
}
#pieChartContainer{
  max-width: 500px;
  width: 25%;
  float: right;
  margin: 0 auto;
}

#templateContainer{
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.iconContainer{
  display: flex;
  align-items: center;
  height: 32px;
  width: 125px;
  margin-left: 5px;
  font-weight: bold;
  font-size: 13px;
  border-width: 1px 1px 1px 16px !important;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 3px;
  font-size: 12px;
}
.icon{
  width: 30px;
  margin-right: 5px;
}
.resourcePercent{
  margin-left: 8px;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-leave-active{
  transition: opacity .5s;
  transition-delay: .5s;
}
@media screen and (max-width: 1225px) and (orientation: portrait){

}

@media screen and (max-width: 736px) and (orientation: portrait){
  #pieChartContainer{
    float: none;
    width: 50%;
  }
  #templateContainer{
    display: none;
  }
  #header{
    font-size: 12px;
  }
}
@media screen and (max-width: 736px) and (orientation: landscape){
  #pieChartContainer{
    float: right;
  }
  #templateContainer{
    display: none;
  }
}
</style>
