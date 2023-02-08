google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Mes', 'Ventas', 'Total Dinero'],
    ['Enero',  1000,      400],
    ['Febrero',  1170,      460],
    ['Marzo',  660,       1120],
    ['Abril',  1030,      540],
    ['Mayo',  1030,      540],
    ['Junio',  1030,      540],
    ['Julio',  1030,      540],
    ['Agosto',  1030,      540],
    ['Septiembre',  1030,      540],
    ['Octubre',  1030,      540],
    ['Noviembre',  1030,      540],
    ['Diciembre',  1030,      540]
  ]);

  var options = {
    chart: {
      title: 'Ushumana Ventas del Año',
      subtitle: 'Mes, Ventas, Total',      
    },
    colors: ['#F77F00', '#003049', '#ff0000', '#00ffff','#F77F00', '#003049', '#ff0000', '#00ffff','#F77F00', '#003049', '#ff0000', '#00ffff']
  };

  var chart = new google.charts.Bar(document.getElementById('chart_barras'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}