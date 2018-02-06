$(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('nestedPies'));

    // 指定图表的配置项和数据
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c}" + "袋" + " ({d}%)"
        },
        series: [
            {
                name:'',
                type:'pie',
                radius: [0,'38%'],
                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                color: [
                    '#2ec7c9',
                    '#b6a2de',
                    '#5ab1ef',
                    '#d87a80'
                ],
                data:[
                    {'name': "夏威夷果", 'value': 15},
                    {'name': "松子", 'value': 9},
                    {'name': "巴旦木", 'value': 36},
                    {'name': "开心果", 'value': 22}
                ]
            },
            {
                name:'',
                type:'pie',
                radius: ['55%', '66%'],
                label: {
                    normal: {
                        show: true
                    }
                },
                color: [
                    '#f8f151',
                    '#e99950',
                    '#debc61',
                    '#fff45c',
                    '#bbf852',
                    '#00feae',
                    '#00fff1',
                    '#00ceff'
                ],
                data:[
                    {'name': "三只松鼠", 'value': 10},
                    {'name': "百草味", 'value': 5},
                    {'name': "三只松鼠", 'value': 4},
                    {'name': "百草味", 'value': 5},
                    {'name': "三只松鼠", 'value': 12},
                    {'name': "良品铺子", 'value': 14},
                    {'name': "百草味", 'value': 10},
                    {'name': "三只松鼠", 'value': 10},
                    {'name': "百草味", 'value': 12}
                ]
            },
            {
                name: 'Line1',
                type: 'pie',
                animation: false,
                radius: ['45%', '46%'],
                itemStyle: {
                    normal: {
                        color: '#00c0ed',
                    }
                },
                label: {
                    normal: {
                        show: false
                    }
                },
                hoverAnimation: false,
                tooltip: {
                    show: false
                },
                data: [{'name': 'a','value':100}]
            },
            {
                name: 'Line2',
                type: 'pie',
                animation: false,
                radius: ['49%', '50%'],
                itemStyle: {
                    normal: {
                        color: '#00c0ed',
                    }
                },
                label: {
                    normal: {
                        show: false
                    }
                },
                hoverAnimation: false,
                tooltip: {
                    show: false
                },
                data: [{'name': 'b','value':100}]
            },
            {
                name: 'Line3',
                type: 'pie',
                animation: false,
                radius: ['75%', '76%'],
                itemStyle: {
                    normal: {
                        color: '#00c0ed',
                    }
                },
                label: {
                    normal: {
                        show: false
                    }
                },
                hoverAnimation: false,
                tooltip: {
                    show: false
                },
                data: [{'name': 'c','value':100}]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});