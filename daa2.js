var n = 2;
var m = 4;
//var regions = [ 40, 60 ];
var regions = [ 10, 20,30 ];
// var x = [
// 	[1,35,4,1],
// 	[1,20,3,2],
// 	[1,40,10,3],
// 	[1,60,7,4]
// ];

var regionStatus = [];
var tempRegions = regions.slice();

var x = [
	[1,12,30,1],
	[1,20,25,2],
	[1,25,19,3],
	[1,19,41,4],
	[1,10,18,5]
];


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
