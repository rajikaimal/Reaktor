var n = 2;
var m = 3;
var regions = [ 40, 60 ];
//var regions = [ 10, 20,30 ];
var x = [
	[1,1,35,4],
	[2,1,20,3],
	[3,1,40,10],
	[4,1,60,7]
];

var regionStatus = [];
var tempRegions = regions.slice();

// var x = [
// 	[1,1,12,30],
// 	[2,1,20,25],
// 	[3,1,25,19],
// 	[4,1,19,41],
// 	[5,1,10,18]
// ];


x = x.sort(function(a,b) {
 return a[3] > b[3];
});

var lastprogramNo = x.length;

var newX = x.slice();

var totalTime = 0;

var exeTime = [0];

var specTotal = [];
var turnAround = 0;
var prevTime = [];
for(a=0;a<=m;a++){
	for(b=0;b<=n;b++){
		for(c=0;c<=m;c++){
			if(x[c][2] == 0){
				continue;
			}
			else if(x[c][2] <= regions[b]){
				regionNo = regions.indexOf(regions[b])+1;
				if(regionStatus[regionNo] != "true"){
					prevTime[regionNo] = 0;
					regionStatus[regionNo] = "true";
					specTotal[regionNo] = prevTime[regionNo] + x[c][3];
					totalTime = prevTime[regionNo] + x[c][3];
					turnAround = turnAround + totalTime;
					console.log('im hrer');
				}
				else{
					prevTime[regionNo] = totalTime;
					totalTime = prevTime[regionNo] + x[c][3];
					turnAround = turnAround + totalTime;
				}

				console.log("Program " + x[c][0] + " runs in region " + regionNo + " from " + prevTime[regionNo] + " to " + totalTime);
				
				x[c] =0;
				break;
				//}	
			}
		}
	}
}

console.log("Turnaround time : " + (turnAround/(m+1)));
