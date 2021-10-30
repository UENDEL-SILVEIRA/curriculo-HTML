google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
    var data = google.visualization.arrayToDataTable([
        ['Element', 'Horas cursadas', { role: 'style' }, { role: 'annotation' } ],
        ['HTML CSS', 40, '#3366CC', 'Curso em Video'],
        ['Programador WEB', 200, '#3366CC', 'IFSUL' ],      
        ['Java Script', 40, '#3366CC', 'Curso em Video' ],
        ['PHP', 200, '#3366CC', 'Portal Hugo Cursos' ],
        ['MySql', 40, '#3366CC', 'Portal Hugo Cursos' ]
     ]);

      var options = {
        title: '',
        chartArea: {width: '40%', height: '100%'},
        hAxis: {
          title: '',
          minValue: 0
        },
        vAxis: {
          title: ''
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }