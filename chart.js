// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table, instantiates the pie chart, passes in the data and draws it.
function drawChart() {
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Answer');
  data.addColumn('number', 'Result');
  data.addRows([
    ['Developer', 28],
    ['Web Designer', 12],
    ['Designer', 18],
    ['Web Master', 14],
    ['Pixel Pusher', 5]
  ]);

  // Set chart options
  var options = {
    'title':'Job titles for people working on the web',
    'width':500,
    'height':400
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}