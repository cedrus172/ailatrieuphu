var ctx = document.getElementById("pieChart").getContext("2d");
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["A", "B", "C", "D"],
        datasets: [
            {
                label: ["Lượng khán giả chọn tính theo %"],
                data: [0, 0, 0, 0],
                backgroundColor: ["#fd0000", "#ce7e00", "#2986cc", "#62d900"],
                borderColor: ["white"],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {},
    },
});

function setMyChartData(data) {
    myChart.data.datasets[0].data[0] = data[0];
    myChart.data.datasets[0].data[1] = data[1];
    myChart.data.datasets[0].data[2] = data[2];
    myChart.data.datasets[0].data[3] = data[3];
    myChart.update();
}