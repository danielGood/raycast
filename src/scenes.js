
//this is the game scene
Crafty.scene('Game', function(){
	
	this.player= Crafty.e('PlayerCharacter').at(5, 5);
	//start = Crafty.e('Start').at(8, 8);
	//finish = Crafty.e('Finish').at(16, 16);
    
	
	var occupied = new Array(Game.map_grid.width);
  for (var i = 0; i < Game.map_grid.width; i++) {
    occupied[i] = new Array(Game.map_grid.height);
    for (var y = 0; y < Game.map_grid.height; y++) {
      occupied[i][y] = false;
    }
  }
	//occupied[this.player.at().x][this.player.at().y] = true;
	//occupied[start.at().x][start.at().y] = true;
	//occupied[finish.at().x][finish.at().y] = true;
	
	this.myBush=Crafty.e('Bush').at(4, 5);
	this.myTree =Crafty.e('Tree').at(10, 5);
	//this.myBush.move('e', 250);
	
	
	vectorSquare ={
		v1: {x:Game.map_grid.width, y:0},
		v2: {x:0, y: -Game.map_grid.height},
		v3: {x:-Game.map_grid.width, y:0},
		v4: {x:0, y: Game.map_grid.height}
	};
	
	this.myBush.vectorLight= vectorSquare;
	
	
	for (var x = 0; x < Game.map_grid.width; x++) {
      for (var y = 0; y < Game.map_grid.height; y++) {
        var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;
         console.log(x +''+ y);
        if (at_edge) {
          // Place a tree entity at the current tile
          Crafty.e('Tree').at(x, y);
            
        } else if (Math.random() < 0.25 && occupied[x][y]==false) {
          // Place a bush entity at the current tile
          //Crafty.e('Bush').at(x, y);
		  occupied[x][y]=true;
           
        }
      }
    }
	
	 var arr = Crafty("2D").get();
	var len = arr.length;
  for (var y = 0; y < len; y++) {
      //console.log(arr[y]);
	  //console.log(arr[y]._x + " "+arr[y]._y);
    }
	
	
	
	
	//Raycasting Code
	//////////////////////////////////////////
	
	
	
	
	
	
});
 //
 
 