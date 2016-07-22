var baseURL = "https://adrion-remote-socket.herokuapp.com";

var CANVAS_WIDTH = window.innerWidth-100;
var CANVAS_HEIGHT = window.innerHeight-100;
var FPS = 30;
        
//Start game loop and stuff
var canvasElement = $("<canvas id='mainCanvas' width='" + CANVAS_WIDTH + "' height='" + CANVAS_HEIGHT + "'></canvas>");
var canvas = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('#wrapper');
       
setInterval(function() {
  draw();
}, 1000/FPS);
