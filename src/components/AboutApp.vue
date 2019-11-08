<template>
  <div class="about">
		<div id="aboutContainer">
			<div @click="toggleAbout(false)" class="close">X</div>
			<h1>About app</h1>
			<h2>Inspiration</h2>
			<p>When looking up information on Inspire, it had me wonder.. <i>How much of my energy is "clean"?</i><br> there is alot of data out there, but not alot that is formatted in a good way for me to understand. So I thought I would make a little web app to show off some of my skills and maybe learn something myself. </p>
			<p>User can click on a state and a pie chart will render to show the percent fuel mix used to generate electricity for the selected state</p>
			<p>Created using the Vue CLI</p>
			<h2>Dependencies</h2>
			<ul>
				<li>
					vue-chartjs
					<ul>
						<li>to create pie chart</li>
						<li><a href="https://www.npmjs.com/package/vue-chartjs" target="_blank"> https://www.npmjs.com/package/vue-chartjs</a></li>
					</ul>
				</li>
				<li>vuex
					<ul>
						<li>to manage state of selected US state</li>
					</ul>
				</li>

			</ul>
			<h2>Resources</h2>
			<ul>
				<li>all data was collected from EPA
					<ul>
						<li><a href="https://www.epa.gov/energy/power-profiler#/" target="_blank">https://www.epa.gov/energy/power-profiler#/</a></li>
					</ul>
				</li>
				<li>data was download as excel then converted to json using software below:
					<ul>
						<li><a href="http://processr.com/#/library/" target="_blank">http://processr.com/#/library/</a></li>
					</ul>
				</li>
				
				<!-- <li>US map SVGs: 
					<ul>
						<li><a href="https://codepen.io/Gogh/pen/bYwqrL" target="_blank">https://codepen.io/Gogh/pen/bYwqrL</a></li>
					</ul>
				</li> -->
			</ul>
		</div>
  </div>
</template>

<script>
export default {
  name: 'AboutApp',
  props: {
	},
	methods:{
    toggleAbout(toggle){
      this.$store.commit('toggleAbout', toggle)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about{
	text-align: left;
	height: 100%;
	width: 100%;
	position: absolute;
	z-index: 2;
	display: flex;
	align-items: center;
	top: 0;
	left: 0;
	right: 0;
	background-color: rgba(0,0,0,0.8);
}
#aboutContainer{
	background-color: #fff;
	position: relative;
	z-index: 3;
	max-width: 800px;
	margin: 0 auto;
	padding: 20px;
	overflow-y: auto;
}
.close{
	border: 1px solid #42b983;
	padding: 10px;
	border-radius: 5px;
	display: inline-block;
	position: absolute;
	right: 0;
	top: 0;
	cursor: pointer;
	margin-right: 5px;
	margin-top: 5px;
	font-weight: bold;
}
.close:hover{
	border: 3px solid #42b983;
}
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}

@media screen and (max-width: 736px){
	.about{
		display: block;
	}
}


</style>
