<script>
    import { Line } from 'vue-chartjs'
    export default {
        extends: Line,
        name: "EventTimeGraph",
        props: {
            chartInitData: {
                type: Object,
                required: true
            },
            chartName: {
                type: String,
                required: true
            },
            chartNamespace: {
                type: String,
                required: true
            },
            chartQuestion: {
                type: String,
                required: true
            },
            chartEvent: {
                type: String,
                required: true
            }
        },
        data() {
          return {
              options: {},
              chartData: this.chartInitData
          }
        },
        methods: {
            drawChart(){
                this.renderChart(this.chartData, this.options)
            },
            updateChart(newData){
                this.chartData = newData;
            },
            getChartInfo(){
                return [this.chartNamespace, this.chartQuestion, this.chartEvent];
            }
        },
        mounted() {
            this.options = {
                title: {
                    display: true,
                    text: this.chartName+' Event Trigger History'
                },
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: {
                            displayFormats: {
                                toSecond: 'h:mm:ss a'
                            }
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Time (UTC -4)"
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "# Occurances"
                        }
                    }]
                },
                responsiveAnimationDuration: 500,
                responsive: true
            }
            this.drawChart();
        }
    }
</script>

<style scoped>

</style>