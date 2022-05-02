// echarts图表
;(function(){
    let myChart = echarts.init(document.querySelector('.test'));
    let option = {
        xAxis: {
            type: 'category',
            data: ['A', 'B', 'C']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150],
                type: 'line'
            }
        ]
    };
    myChart.setOption(option,true);
    myChart.clear();
    myChart.setOption(option,true);
    window.onresize = myChart.resize;
})();


