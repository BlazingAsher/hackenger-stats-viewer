<template>
  <div id="app">
    <div class="container">
      <h1 class="text-center">MasseyHacks VI Hackenger Stats</h1>
      <p class="text-center">Namespaces: <a :href="'#' + nsp + '-n-title'" :key="nsp + '-n-b'" class="black-link" v-for="nsp in Object.keys(statsData)" v-smooth-scroll>({{nsp}}) </a></p>
      <div v-if="statsData">
        <div v-for="(nspData, nsp) in statsData" :key="nsp">
          <h1 :id="nsp + '-n-title'" class="mt-5">Namespace: {{nsp}} <small><a href="#top" class="black-link" v-smooth-scroll="">(top)</a></small></h1>
          <hr>
          <h5>Questions: <a class="btn btn-primary mr-2" :href="'#' + ques + '-q-title'" v-for="ques in Object.keys(nspData)" :key="ques+'-q-b'" v-smooth-scroll>{{ques}}</a></h5>
          <div v-for="(quesData, ques) in nspData" :key="ques">
            <h2 class="mt-5" :id="ques + '-q-title'">Question: {{ques}} <small><a :href="'#' + nsp + '-n-title'" class="black-link" v-smooth-scroll="">(namespace top)</a></small></h2>
            <h5>Events: <a class="btn btn-primary mr-2" :href="'#' + eve + '-e-title'" v-for="eve in Object.keys(quesData)" :key="eve+'-e-b'" v-smooth-scroll>{{eve}}</a></h5>
            <div class="row">
              <div v-for="(eventData, eve) in quesData" :key="eve" class="col-sm-6">
                <h2 class="mt-5" :id="eve + '-e-title'">Event: {{eve}} <small><a :href="'#' + ques + '-q-title'" class="black-link" v-smooth-scroll="">(question top)</a></small></h2>
                <p>Last occurrence: {{eventData.lastTrigger | moment("dddd, MMMM Do [at] h:mm:ss a [UTC]Z")}}</p>
                <p>Number of occurrences: {{eventData.num}}</p>
                <event-time-graph :chart-name="eve" :chart-data="eventData.freq" :height="null" :width="null"></event-time-graph>
              </div>
            </div>
          </div>
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
      statsData : {}
    }
  },
  mounted(){
    axios.get(process.env.VUE_APP_STATS_ENGINE_BASEURL + '/stats').then((response) => {
      this.statsData = response.data.stats.data;
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
  color: #2c3e50;
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
