
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {



        labels: ['Jonas'],
        datasets: [{
            label: 'Atlyginimas',
            data: [],
            backgroundColor: [
                
                
            ],
            borderColor: [ 
               
            ],
            borderWidth: 1


        },
       {
            label: 'Amzius',
            data: [],
            backgroundColor: [
               
                
            ],
            borderColor: [
               
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
    myChart.data.datasets[0].data.push(document.getElementById('salary').value);
    myChart.data.datasets[1].data.push(document.getElementById('age').value);

    if (document.getElementById('salary').value > 300) {
         myChart.data.datasets[0].backgroundColor.push('green');
    }else { myChart.data.datasets[0].backgroundColor.push('red');
}
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


// function changeColor (){
//     if (myChart.data.datasets[1].data.push(document.getElementById('salary').value) >= 300) {
//          myChart.data.datasets[1].backgroundColor = 'violet';
//     }else {
//         myChart.data.datasets[1].backgroundColor = 'red';
//     }
// }