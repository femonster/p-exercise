//销量统计
var chartDom01 = document.getElementById('char01');
var myChart01 = echarts.init(chartDom01);
var option01 = {
    xAxis: {
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff'
				}
			},
    },
			splitLine:{
				show:false
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff'
				}
			},
		grid:{
			x:50,
			y:20,
			x2:20,
			y2:20
		},
			itemStyle: {
                color: '#00b7ee'
            },
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
			smooth:true
		tooltip : {
			trigger: 'axis',
			axisPointer: {
				label: {
					backgroundColor: '#fff'
				}
			}
		}
myChart01.setOption(option01);
//