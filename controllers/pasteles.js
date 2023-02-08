google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([ 
    ['Mes', 'Ventas'],
    ['Enero',  1000],
    ['Febrero',  1170],
    ['Marzo',  660],
    ['Abril',  660],
    ['Mayo',  660],
    ['Junio',  660],
    ['Julio',  660],
    ['Agosto',  660],
    ['Septiembre',  660],
    ['Octubre',  660],
    ['Noviembre',  660],
    ['Diciembre',  660]

  ]);

  var options = {
    chart: {
      title: 'Ushumana Ventas del Año',
      subtitle: 'Mes, Ventas, Total',
    },
    colors: ['#F77F00', '#003049', '#03071e', '#FCBF49','#F77F00', '#003049', '#03071e', '#FCBF49','#F77F00', '#003049', '#03071e', '#FCBF49'],    
    width: 500,
    height: 400
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart_pastel'));

  chart.draw(data, options);
}
