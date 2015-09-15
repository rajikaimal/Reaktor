var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Number of memory regions ? ", function(answer) {
	rl.question("Number programs ? ", function(programs) {
		var x = [];
		var y = [];

		//reads file with synchronous variation of readFile
		var file  = fs.readFileSync('input.txt');

		var array = file.toString().split(" ");
		for(i in array) {
			if(array[i] == "/"){
				x.push(y);
				y = [];
			}
			else{
		        y.push(parseInt(array[i]));
			}
		}

		var regionsFile  = fs.readFileSync('regions.txt');		
		
		var regions = [];
		
		array = regionsFile.toString().split(" ");
		
		for(i in array) {
		    regions.push(parseInt(array[i]));
		}

		var len = x.length;
		var v = [];
		for(a=0;a<4;a++){
			b = a+1;
			x[a].push(b);
		}

		var n = answer;
		var m = (programs-1);

		//var regions = [ 40, 60 ];

		var regionStatus = [];
		var tempRegions = regions.slice();

		x = x.sort(function(a,b) {
		 return a[2] > b[2];
		});

		var lastprogramNo = x.length;

		var newX = x.slice();

		var totalTime = [];

		var specTotal = [];

		var turnAround = 0;

		var prevTime = [];

		for(a=0;a<=m;a++){
			for(b=0;b<=n;b++){
				for(c=0;c<=m;c++){
					if(x[c][1] == 0){
						continue;
					}
					else if(x[c][1] <= regions[b]){
						regionNo = regions.indexOf(regions[b])+1;
						if(regionStatus[regionNo] != "true"){
							prevTime[regionNo] = 0;
							regionStatus[regionNo] = "true";
							specTotal[regionNo] = prevTime[regionNo] + x[c][2];
							totalTime[regionNo] = prevTime[regionNo] + x[c][2];
							
						}
						else{
							prevTime[regionNo] = totalTime[regionNo];
							totalTime[regionNo] = prevTime[regionNo] + x[c][2];
			
						}


						console.log("Program " + x[c][3] + " runs in region " + regionNo + " from " + prevTime[regionNo] + " to " + totalTime[regionNo]);
						turnAround = turnAround + totalTime[regionNo];			
						x[c] =0;
						break;
					}
				}
			}
		}

		console.log("Average turnaround time : " + (turnAround/(m+1)));

	    rl.close();
	});
});


