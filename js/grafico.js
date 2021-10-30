google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

  var data = google.visualization.arrayToDataTable([
    ['', 'Horas Cursadas', { role: 'style' }, { role: 'annotation' }],
    ['HTML5 CSS', 80, '#3366CC', 'Curso em Vídeo'],
    ['HTML5', 40, '#3366CC', 'Curso em Vídeo'],
    ['PHP Básico', 40, '#3366CC', 'Curso em Vídeo'],
    ['GIT e GITHUB', 20, '#3366CC', 'Curso em Vídeo'],
    ['Programador WEB', 200, '#3366CC', 'IFSUL'],
    ['Java Script', 40, '#3366CC', 'Curso em Vídeo'],
    ['PHP', 160, '#3366CC', 'Portal Hugo Cursos'],
    ['MySql', 40, '#3366CC', 'Portal Hugo Cursos'],
    ['AJAX PHP', 20, '#3366CC', 'Q Cursos'],
    ['ProgramAção', 40, '#3366CC', 'Recode'],
    ['PHP', 40, '#3366CC', 'IFSUL'],
    ['Template Ecommerce', 25, '#3366CC', 'Portal Hugo Cursos'],
  ]);

  var options = {
    title: '',
    chartArea: { width: '60%' },
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