// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
require("chartist-plugin-tooltips");
var Chartist = require("chartist");
var Chart = require('chart.js');

var gameStuff = window.gameData.slice(-13);

var labels = gameStuff.map(d => d.game);

var dataQuarterback = gameStuff.map(d => d.Quarterback);
var dataRunningBack = gameStuff.map(d => d.RunningBack);
var dataWideReceiver = gameStuff.map(d => d.WideReceiver);
var dataTightEnd = gameStuff.map(d => d.TightEnd);
var dataOffensiveLine = gameStuff.map(d => d.OffensiveLine);
var dataDefensiveLine = gameStuff.map(d => d.DefensiveLine);
var dataLinebacker = gameStuff.map(d => d.Linebacker);
var dataSecondary = gameStuff.map(d => d.Secondary);
var dataSpecialTeams = gameStuff.map(d => d.SpecialTeams);

window.onload = function() {

  var ctx = document.getElementById("myChart").getContext('2d');
  var ctx2 = document.getElementById("myChart2").getContext('2d');

window.myChart = new Chart(ctx, {
  type: 'line',
    data: {
      labels,
      datasets: [{
        data: dataQuarterback,
        label: 'Quarterback',
        borderColor: "#002244",
        fill: false
      }, {
        data: dataRunningBack,
        label: 'Running Back',
        borderColor: "#69BE28",
        fill: false
      }, {
        data: dataWideReceiver,
        label: 'Wide Receiver',
        borderColor: "#A5ACAF",
        fill: false
      }, {
        data: dataTightEnd,
        label: 'Tight End',
        borderColor: "#203731",
        fill: false
      }, {
        data: dataOffensiveLine,
        label: 'Offensive Line',
        borderColor: "#FFB612",
        fill: false
      }]
    },
      options: {
          title: {
      display: true,
      text: 'Seahawks offense grades by position'
    },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }

      }
});

window.myChart2 = new Chart(ctx2, {
  type: 'line',
    data: {
      labels,
      datasets: [{
        data: dataDefensiveLine,
        label: 'Defensive Line',
        borderColor: "#0085CA",
        fill: false
      }, {
        data: dataLinebacker,
        label: 'Linebacker',
        borderColor: "#006778",
        fill: false
      }, {
        data: dataSecondary,
        label: 'Secondary',
        borderColor: "#D7A22A",
        fill: false
      }, {
        data: dataSpecialTeams,
        label: 'Special Teams',
        borderColor: "#008E97",
        fill: false
      }]
    },
      options: {
          title: {
      display: true,
      text: 'Seahawks defense and special teams grades by position'
    },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }

      }
});
}
