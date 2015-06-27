
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}


function rayCast (myPoint, objectModel){
	var lightArray=[];
	for(var i=0; i<objectModel.length; i++){
		//iterate over each point
		
		for(var j=0; j<objectModel[i].segments.length; j++){
			//objectModel[i].segments[j].point
			var temp=objectModel[i].segments[j].point.subtract(myPoint);
			temp.angle;
		
			var inter=rayPoint(objectModel[i].segments[j].point ,myPoint, objectModel);
			var side1=rayAngle(myPoint, temp.angle+.5, 1000, objectModel);
			var side2=rayAngle(myPoint, temp.angle-.5, 1000, objectModel);
			lightArray.push(inter);
			lightArray.push(side1);
			lightArray.push(side2);
			
		}
	}
	return lightArray;
}


function rayAngle(point, angle, length, objectModel){
	this.angle=angle;
	this.origin=point;
	this.length=length;
	
	var myPath = new paper.Path();
	myPath.add(this.origin);
	var vector = new paper.Point();
	vector.angle=this.angle;
	vector.length=this.length;
	vector = vector.add(point);
	myPath.add(vector);
	
		
		
		
		var intersection= vector;
		var distance=this.length;
		for(var i=0; i<objectModel.length; i++){
			var intersections = myPath.getIntersections(objectModel[i]);
			
			if(intersections.length>0){
				
				var checkPoint =new paper.Point(intersections[0]._point.x, intersections[0]._point.y);
				var checkdistance=this.origin.getDistance(checkPoint);
				//checkdistance=Math.sqrt(checkdistance);
				
				if(checkdistance<distance){
					distance=checkdistance;
					intersection=new paper.Point(checkPoint);
					
				}
			}
		}
		
		
		myPath.remove();
		//var rayPath= new paper.Path();
		//rayPath.strokeColor='black';
		//rayPath.add(this.origin);
		//rayPath.add(intersection);
	return intersection;
	

	
}


function rayPoint(collisionPoint, point, objectModel){
	//this.angle=angle;
	this.origin=point;
	
	var myPath = new paper.Path();
	myPath.add(this.origin);
		
	myPath.add(collisionPoint);
	
		
		var intersection= new paper.Point(collisionPoint);
		var distance=this.origin.getDistance(collisionPoint);
		for(var i=0; i<objectModel.length; i++){
			var intersections = myPath.getIntersections(objectModel[i]);
			
			if(intersections.length>0){
				
				var checkPoint =new paper.Point(intersections[0]._point.x, intersections[0]._point.y);
				var checkdistance=this.origin.getDistance(checkPoint);
				//checkdistance=Math.sqrt(checkdistance);
				
				if(checkdistance<distance){
					distance=checkdistance;
					intersection=new paper.Point(checkPoint);
					
				}
			}
		}
		
		
		myPath.remove();
		//var rayPath= new paper.Path();
		//rayPath.strokeColor='black';
		//rayPath.add(this.origin);
		//rayPath.add(intersection);
	return intersection;
	

	
}