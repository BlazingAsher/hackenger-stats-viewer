<template>
  <div id="app">
    <div class="container">
      <h1 class="text-center">MasseyHacks VI Hackenger Stats</h1>
      <p class="text-center">Last Update: {{lastServerStatsUpdate | moment("dddd, MMMM Do [at] h:mm:ss a [UTC]Z")}} <span v-if="lastServerStatsUpdate !== 0">({{(lastServerStatsUpdate - Date.now()) | duration('humanize', true)}})</span> - Update Interval: {{Math.floor(statsUpdateFrequency/1000)}} seconds</p>
      <p class="text-center"><button class="btn btn-primary" @click="toggleDisplay">Toggle Chart/Table</button></p>
      <p class="text-center">Namespaces: <a :href="'#' + nsp + '-n-title'" :key="nsp + '-n-b'" class="black-link" v-for="nsp in Object.keys(statsData)" v-smooth-scroll>({{nsp}}) </a></p>
    </div>
    <div v-if="chartsEnabled" class="container">
      <div v-if="statsData">
        <div v-for="(nspData, nsp) in statsData" :key="nsp + '-n'">
          <h1 :id="nsp + '-n-title'" class="mt-5">Namespace: {{nsp}} <small><a href="#top" class="black-link" v-smooth-scroll="">(top)</a></small></h1>
          <hr>
          <h5>Questions: <a class="btn btn-primary mr-2" :href="'#' + ques + '-q-title'" v-for="ques in Object.keys(nspData)" :key="ques+'-q-b'" v-smooth-scroll>{{ques}}</a></h5>
          <div v-for="(quesData, ques) in nspData" :key="ques + '-q'">
            <h2 class="mt-5" :id="ques + '-q-title'">Question: {{ques}} <small><a :href="'#' + nsp + '-n-title'" class="black-link" v-smooth-scroll="">(namespace top)</a></small></h2>
            <h5>Events: <a class="btn btn-primary mr-2" :href="'#' + eve + '-e-title'" v-for="eve in Object.keys(quesData)" :key="eve+'-e-b'" v-smooth-scroll>{{eve}}</a></h5>
            <div class="row">
              <div v-for="(eventData, eve) in quesData" :key="eve + '-e'" class="col-sm-6">
                <h2 class="mt-5" :id="eve + '-e-title'">Event: {{eve}} <small><a :href="'#' + ques + '-q-title'" class="black-link" v-smooth-scroll="">(question top)</a></small></h2>
                <p>Last occurrence: {{eventData.lastTrigger | moment("dddd, MMMM Do [at] h:mm:ss a [UTC]Z")}}</p>
                <p>Number of occurrences: {{eventData.num}}</p>
                <event-time-graph :chart-name="eve" :chart-init-data="eventData.chartData" :chart-namespace="nsp" :chart-question="ques" :chart-event="eve" :height="null" :width="null" ref="charts"></event-time-graph>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div v-else class="container">
      <div v-for="(nspData, nsp) in statsData" :key="nsp + '-n-t'">
        <h1 :id="nsp + '-n-title'" class="mt-5">Namespace: {{nsp}} <small><a href="#top" class="black-link" v-smooth-scroll="">(top)</a></small></h1>
        <table class="table table-bordered">
          <thead>
          <tr>
            <th>Subject</th>
            <th>Number of Occurrences</th>
            <th>Last Occurrence</th>
          </tr>
          </thead>
          <tbody v-for="(quesData, ques) in nspData" :key="ques + '-q-t'">
          <tr>
            <td><strong>Question: {{ques}}</strong></td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr v-for="(eventData, eve) in quesData" :key="eve + '-e'">
            <td>{{eve}}</td>
            <td>{{eventData.num}}</td>
            <td>{{eventData.lastTrigger | moment("dddd, MMMM Do [at] h:mm:ss a [UTC]Z")}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container-fluid" style="padding-top: 5em; padding-bottom: 1em;">
      <hr>
      <div class="row">
        <div class="col-lg-12">
          <p class="text-center">MasseyHacks Hackenger Stats Viewer. Copyright (c) 2020 MasseyHacks.<br><a class="black-link" href="#top" v-smooth-scroll>Back to Top</a> - <a class="black-link" href="https://masseyhacks.ca">Main Site</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventTimeGraph from "@/components/EventTimeGraph";
import axios from 'axios';

export default {
  name: 'App',
  components: {
    EventTimeGraph
  },
  data() {
    return {
      statsData : {},
      statsUpdateFrequency: 0,
      lastServerStatsUpdate: 0,
      fromLengthText: "",
      chartsEnabled: true
    }
  },
  methods: {
    fetchStats(fromPageLoad = false) {
      axios.get(process.env.VUE_APP_STATS_ENGINE_BASEURL + '/stats').then((response) => {
        this.statsData = response.data.stats.data;
        this.lastServerStatsUpdate = parseInt(response.data.stats.timestamp);
        if(!fromPageLoad && this.chartsEnabled){
          for(let chart of this.$refs.charts){
            let chartInfo = chart.getChartInfo();
            chart.updateChart(this.statsData[chartInfo[0]][chartInfo[1]][chartInfo[2]]["chartData"]);
            chart.drawChart();
          }
        }
      })
      window.setTimeout(this.fetchStats, this.statsUpdateFrequency + Math.floor(this.statsUpdateFrequency * (1/6)))


    },
    toggleDisplay(){
      this.chartsEnabled = !this.chartsEnabled;
    }
  },
  mounted(){
    axios.get(process.env.VUE_APP_STATS_ENGINE_BASEURL + '/updateFrequency').then((response) => {
      this.statsUpdateFrequency = parseInt(response.data.frequency);
      this.fetchStats(true);
      this.$moment.relativeTimeThreshold('ss', 5);
    })

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*  text-align: center;*/
/*  color: #2c3e50;*/
  color: black;
  margin-top: 60px;
}
  .black-link {
    color: black;
  }

  .black-link:hover {
    color: grey;
    text-decoration: none;
  }

  small {
    font-size: 1.2rem;
  }

</style>
