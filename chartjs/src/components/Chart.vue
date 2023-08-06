<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  name: 'chart',
  data() {
    // X軸のラベル情報,入力データ数に合わせる
    const mylabels = ['January', 'February', 'March', 'April', 'May', 'June'];
    // 入力データ(棒グラフ)
    const bardata = [10,20,30,40,50,30];
    const linedata = [10,50,20,30,30,40];
    // 入力データに対する棒グラフの色、中身と罫線
    const barcolorSet = [
      { bgcolor: 'rgba(255, 99, 132, 0.2)', bordercolor: 'rgba(255, 99, 132, 1)' },
      { bgcolor: 'rgba(54, 162, 235, 0.2)', bordercolor: 'rgba(54, 162, 235, 1)' },
      { bgcolor: 'rgba(255, 206, 86, 0.2)', bordercolor: 'rgba(255, 206, 86, 1)' },
      { bgcolor: 'rgba(75, 192, 192, 0.2)', bordercolor: 'rgba(75, 192, 192, 1)' },
      { bgcolor: 'rgba(153, 102, 255, 0.2)', bordercolor: 'rgba(153, 102, 255, 1)' },
      { bgcolor: 'rgba(255, 159, 64, 0.2)', bordercolor: 'rgba(255, 159, 64, 1)' },
    ];
    // 棒グラフ情報
    const myBarSampleDataSet = {
      label: 'Bar Dataset',
      data: bardata,
      backgroundColor: barcolorSet.map(obj => obj.bgcolor),
      borderColor: barcolorSet.map(obj => obj.bordercolor),
      borderWidth: 1,
      type: 'bar'
    };
    // 線グラフ情報
    const myLineSampleDataSet = {
      label: 'Line Dataset',
      data: linedata,
      borderColor: '#CFD8DC',
      fill: false,
      type: 'line',
      lineTension: 0.3
    }

    // グラフ出力内容
    return {
      data: {
        labels: mylabels,
        datasets: [
          myBarSampleDataSet,
          myLineSampleDataSet,
        ]
      },
      // グラフオプション
      options: {
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Month'
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 10
              }
            }
          ]
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted() {
    this.renderChart(this.data, this.options);
  }
};
</script>
