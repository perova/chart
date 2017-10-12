
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {



        labels: ['Jonas','Petras'],
        datasets: [{
            label: 'Amzius',
            data: ['25','30'],
            backgroundColor: [
                'yellow', 'green'
                
            ],
            borderColor: [ 
               
            ],
            borderWidth: 1


        },
       {
            label: 'Atlyginimas',
            data: ['400','500'],
            backgroundColor: [
                'red'
                
            ],
            borderColor: [
               'green'
            ],
            borderWidth: 1,
            type:'line'

        }]

    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
function addNew(){
    myChart.data.labels.push(document.getElementById('name').value);
    myChart.data.datasets[0].data.push(document.getElementById('age').value);
    myChart.data.datasets[1].data.push(document.getElementById('salary').value);
    myChart.update();
}



function chartRemoveLast(){
    myChart.data.labels.pop();
    myChart.data.datasets[0].data.pop();
    myChart.data.datasets[1].data.pop();
    myChart.update();
}

function chartClear (){
 myChart.data.labels = [];
    myChart.data.datasets[0].data = [];
    myChart.data.datasets[1].data = [];
 myChart.update();

}


