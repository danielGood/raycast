

var app={model: {}};

app.model.light = [];


addLoadEvent(function() {
  var canvas =document.getElementById("myCanvas");
  paper.setup(canvas);
  var ctx =canvas.getContext("2d");

  app.model.objectModel=[];

  var rectangle = new paper.Rectangle(new paper.Point(60, 60), new paper.Size(60, 60));
  var rectangle2 = new paper.Rectangle(new paper.Point(100, 500), new paper.Size(60, 60));
  var rectangle3 = new paper.Rectangle(new paper.Point(50, 400), new paper.Size(60, 60));
  var rectangle4 = new paper.Rectangle(new paper.Point(10, 10), new paper.Size(10, 800));
  var rectangle5 = new paper.Rectangle(new paper.Point(800, 10), new paper.Size(10, 800));
  var rectangle6 = new paper.Rectangle(new paper.Point(10, 10), new paper.Size(800, 10));
  var rectangle7 = new paper.Rectangle(new paper.Point(10, 800), new paper.Size(800, 10));

  app.model.objectModel[0]=new paper.Path.Rectangle(rectangle);
  app.model.objectModel[1]= new paper.Path.Rectangle(rectangle2);
  app.model.objectModel[2]= new paper.Path.Rectangle(rectangle3);
  app.model.objectModel[3]= new paper.Path.Rectangle(rectangle4);
  app.model.objectModel[4]= new paper.Path.Rectangle(rectangle5);
  app.model.objectModel[5]= new paper.Path.Rectangle(rectangle6);
  app.model.objectModel[6]= new paper.Path.Rectangle(rectangle7);

  app.model.objectModel[0].strokeColor='black';
  app.model.objectModel[1].strokeColor='black';
  app.model.objectModel[2].strokeColor='black';
  app.model.objectModel[3].strokeColor='black';
  app.model.objectModel[4].strokeColor='black';
  app.model.objectModel[5].strokeColor='black';
  app.model.objectModel[6].strokeColor='black';

var directLight={
	vector: new paper.Point(1, 0),
	intensity: 10,
	lineSweep: function(){
		var perpen = this.vector.angle+90;
		var line = new paper.Point(this.vector);
		line.angle=perpen;
		line.length=canvas.height;
		//create big line segment in direction of vector line
		//move
		line=line+this.vector;
		
		//check for intersections
		//create new line segments
		//loop
		
	}
}
// var intersections = path1.getIntersections(path2);
//directLight.lineSweep();


//get intersections and put them into an array

//iterate over each object




function myRayCast(){
var myPoint = new paper.Point(300, 300);
var lightArray =rayCast(myPoint, app.model.objectModel);
//sort array
lightArray.sort(function(a, b){
		a=(a.subtract(myPoint)).angle;
		b=(b.subtract(myPoint)).angle;
		//a=a.angle;
		//b=b.angle;
		return (a-b);
	});
//display light
for(var i=0; i<app.model.light.length; i++){
	app.model.light[i].remove();
}
app.model.light = [];

for(var i=0; i<lightArray.length; i++){
	//console.log(lightArray[i].x+" "+lightArray[i].y);
	
	//lightArray[i].sort();
	//console.log(lightArray[i].angle);
	//console.log((lightArray[i]-myPoint).angle);
	//console.log(lightArray[i].x+" "+lightArray[i].y);
	
	

	app.model.light[i] = new paper.Path();
	app.model.light[i].add(lightArray[i]);
	app.model.light[i].add(myPoint);
	if(lightArray.length > i+1){
		
		app.model.light[i].add(lightArray[i+1]);
		
	}else{
		app.model.light[i].add(lightArray[0]);
	}
	
    app.model.light[i].fillColor = '#539f6f'; // red
	app.model.light[i].strokeColor='#539f6f';
	
	
	
	
}
}

paper.view.onFrame = function(event) {
	app.model.objectModel[0].position.x +=1;
	//paper.project.activeLayer.removeChildren();
	myRayCast();
}
paper.view.draw();

});


//myPath.add(new Point(100, 100));

//console.log(myPath);


/*
function lightSource(location, range){
	this.location=location;
	this.range=range;
	
}



function createArc(center, radius, angle1, angle2){
	var v1 = new Point ({length: radius, angle: angle1});
	var v2 = new Point ({length: radius, angle: angle2});
	var to =v1+center;
	var from = v2+center;
	
	var medium = new Point(from.x, Math.abs(from.y-to.y));

	var vector=medium -center;
	
    vector.length=radius;
	
	var trgh1= center+vector;
	
	
	var trgh2 = center -vector;
	
	return{to: to, from: from, trgh1: trgh1, trgh2: trgh2};
	
}



function showIntersections(path1, path2) {
    var intersections = path1.getIntersections(path2);
    for (var i = 0; i < intersections.length; i++) {
        new Path.Circle({
            center: intersections[i].point,
            radius: 5,
            fillColor: '#009dec'
        }).removeOnMove();
    }
}



function onKeyDown(event) {
	if(event.key == 'a') {
		player.position.x -= step;
	}

	if(event.key == 'd') {
		player.position.x += step;
	}

	if(event.key == 'w') {
		player.position.y -= step;
	}

	if(event.key == 's') {
		player.position.y += step;
	}
	
}



function displaySegmentPoints(path){
	for(var i=0; i<path.segments.length; i++){
		console.log(path.segments[i].handleIn.x +" " + path.segments[i].handleIn.y);
		console.log(path.segments[i].handleOut.x +" " + path.segments[i].handleOut.y);
		console.log(path.segments[i].point.x +" " + path.segments[i].point.y);
	}
	
}



function onFrame(event) {
	//showIntersections(circle, player);
	
	
	
	
	
	
}


function getCritIntersections(path1, point1){
	//this function will return the intersections points
	//that are critical in raycasting
	var greatest=0;
	var least=0;
	for(var i=0; i<path1.segments.length; i++){
		
		var diff=path1.segments[i].handleIn+path1.segments[i].point-point1;
		
		
        if(diff.angle>greatest.angle || greatest==0){
			diff=greatest;
		}
         if(diff.angle<least.angle ||greatest==0){
			diff=least;
		}
		
        var hi = diff - path1.segments[i].handleIn;
		if(hi.angle>greatest.angle){
			hi=greatest;
		}
         if(hi.angle<least.angle){
			ho=least;
		}
		
        var ho = diff - path1.segments[i].handleOut;
		if(ho.angle>greatest.angle){
			ho=greatest;
		}
         if(h.angle<least.angle){
			ho=least;
		}
		
		
	}
	
}





var myLight = new lightSource(new Point(200, 200), 200);


var angle1=0;
var angle2=160;

myArc=createArc(myLight.location, myLight.range, angle1, angle2);
var circle = new Path.Circle(this.location, this.range);
//circle.fillColor="yellow";
var path = new Path.Arc(myArc.from, myArc.trgh2, myArc.to);


//path.strokeColor = 'black';
//var path = new Path.Circle(new Point(50, 50), view.bounds.height*.4);

path.fillColor="rgba(255, 255, 200, .5)";
/*
path.fillColor = {
    gradient: {
        stops: [["hsla(58, 100%, 70%, .5)", 0], ["rgba(255, 255, 200, .5)", .2], ["rgba(255, 255, 200, .5)", .8],["rgba(255, 255, 255, 0)", 1.0]],
        radial: true
    },
    origin: path.position,
    destination: path.bounds.rightCenter
};
*/



/*

var player = new Path.Circle(new Point(300, 300), 50);
player.fillColor='black';
//////////////////////////////////////
//displaySegmentPoints(player);

// The amount we will move when one of the keys is pressed:
var step = 10;



player.fullySelected=true;

var diff=player.segments[0].handleIn+player.segments[0].point-myLight.location;


var hi = diff - player.segments[0].handleIn;
var ho = diff - player.segments[0].handleOut;

*/