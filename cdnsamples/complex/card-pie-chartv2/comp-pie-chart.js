Vue.component('pie-chart', {
  extends: VueChartJs.Pie,
  data() {
    return {
      chartData: {
        labels: ['赤', '青', '黄', '緑', '紫', '橙'],
        datasets: [
          {
            label: '得票数',
            data: [19, 12, 8, 3, 2, 1],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            // ホバーしたときに領域をずらす幅
            hoverOffset: 20
          }
        ]
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, { responsive: true, maintainAspectRatio: false });
  }
});
