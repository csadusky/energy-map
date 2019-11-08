

<script>
// import { VueCharts } from "vue-chartjs";
import { Pie } from 'vue-chartjs';

export default {
  name: 'PieChart',
  props: {
    
  },
  data(){
    return{
      pieData: this.$store.state.pieData

    }
    
  },
  extends: Pie,
  computed:{
    currentPie (){
      return this.$store.state.currentPie
    }
  },
  watch: {
    currentPie: function(newPie){
      this.renderChart({
      
      labels: ['coal', 'oil', 'gas', 'nuclear', 'hydro', 'biomass', 'wind', 'solar', 'geothermal', 'other fossil generation', 'unknown/ purchased'],
      datasets: [
        {
          data: [this.pieData[newPie].coal, this.pieData[newPie].oil, this.pieData[newPie].gas, this.pieData[newPie].nuclear, this.pieData[newPie].hydro, this.pieData[newPie].biomass, this.pieData[newPie].wind, this.pieData[newPie].solar, this.pieData[newPie].geothermal, this.pieData[newPie].fossil, this.pieData[newPie].unknown],
          backgroundColor: ["#001f3f", "#85144b", "#B10DC9", "#FF4136", "#7FDBFF", "#2ECC40", "#0074D9", "#FFDC00", "#01FF70", "#7a6f4e", "#7a7a78"]
          
        }
      ]
      
    }, {legend:{display: false}, responsive: true,})
    }
  },
  methods: {

  },
  mounted () {
    this.renderChart({
      
      labels: ['coal', 'oil', 'gas', 'nuclear', 'hydro', 'biomass', 'wind', 'solar', 'geothermal', 'other fossil generation', 'unknown/ purchased'],
      datasets: [
        {
          data: [this.pieData[this.currentPie].coal, this.pieData[this.currentPie].oil, this.pieData[this.currentPie].gas, this.pieData[this.currentPie].nuclear, this.pieData[this.currentPie].hydro, this.pieData[this.currentPie].biomass, this.pieData[this.currentPie].wind, this.pieData[this.currentPie].solar, this.pieData[this.currentPie].geothermal, this.pieData[this.currentPie].fossil, this.pieData[this.currentPie].unknown],
          backgroundColor: ["#001f3f", "#85144b", "#B10DC9", "#FF4136", "#7FDBFF", "#2ECC40", "#0074D9", "#FFDC00", "#01FF70", "#7a6f4e", "#7a7a78"]
        }
      ]
      
    }, {legend:{display: false}, responsive: true,})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
