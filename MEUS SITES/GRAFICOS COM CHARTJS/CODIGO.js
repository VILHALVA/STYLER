function createBarChart() {
    const ctx = document.getElementById('barChart').getContext('2d');
    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['A', 'B', 'C'],
        datasets: [{
          label: 'Data 1',
          data: [10, 20, 30],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
    }
});
}
  
function createLineChart() {
    const ctx = document.getElementById('lineChart').getContext('2d');
    return new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March'],
        datasets: [{
          label: 'Data 1',
          data: [10, 20, 30],
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
    }
});
}
  
function createPieChart() {
    const ctx = document.getElementById('pieChart').getContext('2d');
    return new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          data: [10, 20, 30],
          backgroundColor: ['red', 'blue', 'yellow']
        }]
    }
});
}
  
function createRadarChart() {
    const ctx = document.getElementById('radarChart').getContext('2d');
    return new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Sales', 'Marketing', 'Development', 'Customer Support', 'Finance'],
        datasets: [{
          label: 'Team A',
          data: [20, 30, 40, 50, 60],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
    }
});
}
  
let barChart = createBarChart();
let lineChart = createLineChart();
let pieChart = createPieChart();
let radarChart = createRadarChart();
  

function changeBarData() {
    barChart.data.datasets[0].data = [Math.random() * 50, Math.random() * 50, Math.random() * 50];
    barChart.update();
}
  
function changeLineData() {
    lineChart.data.datasets[0].data = [Math.random() * 50, Math.random() * 50, Math.random() * 50];
    lineChart.update();
}
  
function changePieData() {
    pieChart.data.datasets[0].data = [Math.random() * 50, Math.random() * 50, Math.random() * 50];
    pieChart.update();
}
  
function changeRadarData() {
    radarChart.data.datasets[0].data = [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100];
    radarChart.update();
}
  
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
    barChart = createBarChart();
    lineChart = createLineChart();
    pieChart = createPieChart();
    radarChart = createRadarChart();
}
  
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      changeBackgroundColor();
      changeBarData();
      changeLineData();
      changePieData();
      changeRadarData();
    });
});
  