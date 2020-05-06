<script>
    import { Line } from 'vue-chartjs'
    export default {
        extends: Line,
        name: "EventTimeGraph",
        props: {
            chartData: {
                type: Object,
                required: true
            },
            chartName: {
                type: String,
                required: true
            }
        },
        mounted() {
            let formattedData = [];
            for(let dataSlice in this.chartData){
                if(Object.prototype.hasOwnProperty.call(this.chartData, dataSlice)){
                    formattedData.push(
                        {
                            x: new Date(parseInt(dataSlice) * 1000),
                            y: this.chartData[dataSlice]
                        }
                    );
                }
            }
            this.renderChart({
                datasets: [{
                    label: 'Events',
                    data: formattedData,
                    backgroundColor: 'rgba(5, 25, 48, 0.9)',
                    cubicInterpolationMode: 'monotone'
                }]
            },
                {
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
                })

        }
    }
</script>

<style scoped>

</style>