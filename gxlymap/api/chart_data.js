//销量统计
var chartDom01 = document.getElementById('char01');
var myChart01 = echarts.init(chartDom01);
var option01 = {
    xAxis: {			type: 'category',			boundaryGap: false,			data: ['7月', '8月', '9月', '10月','11月', '12月', '2021-1', '2月', '3月', '4月', '5月', '6月', ],
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff'
				}
			},
    },    yAxis: {			type: 'value',
			splitLine:{
				show:false
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff'
				}
			},    },
		grid:{
			x:50,
			y:20,
			x2:20,
			y2:20
		},    series: [{			data: [15359.57,16522.31,16875.14,15049.22,11546.73,10655.8,6641.82,7355.17,9219.97,9781.46,10552.42,11182.16],			type: 'line',
			itemStyle: {
                color: '#00b7ee'
            },			areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(9,166,239,0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(9,166,239,0.1)'
                }])
            },
			symbol: 'circle',
            symbolSize:5,
			smooth:true    }],
		tooltip : {
			trigger: 'axis',
			axisPointer: {
				label: {
					backgroundColor: '#fff'
				}
			}
		}};
myChart01.setOption(option01);
//
