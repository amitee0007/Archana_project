var xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var yValues = [500, 400, 250, 700, 500, 400, 250, 300, 500, 700, 800];
var barColors = ["whiteSmoke","whiteSmoke","whiteSmoke","whiteSmoke","whiteSmoke","whiteSmoke","whiteSmoke","whiteSmoke","whiteSmoke","whiteSmoke","whiteSmoke","whiteSmoke",];

 new Chart("myChart", {
 type: "bar",
 data: {
 labels: xValues,
 datasets: [{
    barPercentage:0.5,
 backgroundColor: barColors,
 data: yValues
 }]
 },
 options: {
 legend: {display: false},
 scales: {
        xAxes: [{
            gridLines: {
                color: "rgba(100, 0, 0, 0)",
            },
            ticks: {
                fontSize: 8
            },
        //     layout: {
        //     padding: 0
        // }
        }],
        yAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }   ,
            ticks: {
                fontSize: 8
            },
                        layout: {
            margin: 10
        }
        }]
    }
 }
 });
 var xValues = ["M", "T", "W", "T", "F", "S", "S"];
var yValues = [10,20,5,20,25,15,40];

new Chart("myChart1", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(255,255,255,1.0)",
      borderColor: "rgba(255,255,255,1.0)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:40}}],
    }
  }
});
var xValues = ["12am","3pm","6pm","9pm","12pm","3am","6am","9am"];
var yValues = [200,800,400,300,300,200,200,200];

new Chart("myChart3", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(255,255,255,1.0)",
      borderColor: "rgba(255,255,255,1.0)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:800}}],
    }
  }
});
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}