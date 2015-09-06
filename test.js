var n = 2;
var m = 4;
var s1 = 40;
var s2 = 60;
var x = [
	[1,35,4],
	[1,20,3],
	[1,40,10],
	[1,60,7]
];
var vals = [];
var temp;
for(a=0;a<m;a++){
	h = x[a][0];
	for(b=1;b<=(h*2);b++){
		if(b%2 == 0 && b != 0){
			console.log(x[a][b]);	
			if(a == 0){
				vals.push(a);
			}
			else{
				if(x[a][b] < x[a-1][b]){
					temp = vals[a-1];
					vals[a-1] = a;
					vals[a] = temp;
				}
				else{
					vals.push(a);
				}
			}
			//vals.push(x[a][b]);	
		}
	}
}



var vals2 = [];
var temp2;
for(a=0;a<m;a++){
	h = x[a][0];
	for(b=1;b<=(h*2);b++){
		if(b%2 != 0 && b != 0){
			console.log(x[a][b]);	
			if(a == 0){
				vals2.push(a);
			}
			else{
				if(x[a][b] < x[a-1][b]){
					temp = vals2[a-1];
					vals2[a-1] = a;
					vals2[a] = temp;
				}
				else{
					vals2.push(a);
				}
			}
			//vals.push(x[a][b]);	
		}
	}
}

console.log("vals ! " + vals);
console.log("vals 2 ! " + vals2);

//console.log(vals);

console.log("-------");
var value;
var time1 = 0;
var time2 = 0;
var turnAround = 0;
var time = 0;
var timeGap;
var timer = false;
var timeLater1 = 0;
var timeLater2 = 0;
var timeLater3 = 0;
var timeLater4 = 0;
var region1 = false;
var region2 = false;
console.log(vals[0]);
console.log(vals[1]);
console.log(vals[2]);
console.log(vals[3]);
for(a=0;a<m;a++){
	value = vals[a];
	value1 = vals2[a];
	// if(x[value][1] > s1){
	// 	console.log('Greater');
	// }
	//console.log(x[value]);
	//console.log(x[value][1]);
	// if(x[a][1] <= s1){
	// 	region1 = true;
	// 	if(!timer){
	// 		time = x[a][2];
	// 		console.log("Program " + (a+1) + " runs in region 1 from " + time + " to " + x[a][2]);			
	// 	}
	// 	else{
	// 		if(x[a][2];
	// 		console.log("Program " + (a+1) + " runs in region 2 from " + time + " to " + x[a][2]);	
	// 	}
	// }
	// if(x[a][1] > s1){
	// 	region2 = true;
	// 	console.log("Program " + (a+1) + " runs in region 2 from " + time + " to " + x[a][2]);
	// }
	for(o=0;o<m;o++){
		value = vals[o];
		value2 = vals2[o];
		if(a == vals[o]){
			if(x[value][1] <= s1){
				//if(vals[a]vals[a++])
				if(region1 == false){
					region1 = true;
					
					timeLater1 = timeLater1 + x[value][2];
					
					console.log("Program " + (a+1) + " runs in region 1 from " + time1 + " to " + timeLater1);
					time1 = timeLater1;
					turnAround = turnAround + timeLater1;
				}
				else{
					timeLater2 = timeLater2 + x[value][2];
					turnAround = turnAround + timeLater2;
					console.log("Program " + (a+1) + " runs in region 2 from " + time2 + " to " + timeLater2);
					time2 = timeLater2;
					region1 = false;
				}
			}
			if(x[value][1] > s1 ){
				// if(region1 == false){
				// 	region1 = true;

				// 	timeLater1 = timeLater1 + x[value][2];
				// 	console.log("Program " + (a+1) + " runs in region 1 from " + time1 + " to " + timeLater1);
				// 	time1 = time1 + timeLater1;
				// }
				// else{
					timeLater2 = timeLater2 + x[value][2];
					turnAround = turnAround + timeLater2;
					console.log("Program " + (a+1) + " runs in region 2 from " + time2 + " to " + timeLater2);
					time2 = timeLater2;
					region1 = false;
				//}
			}
			
		}
	}
	
	//console.log(x[a]);
}
console.log("-------");
console.log("Average turnaround time " + (turnAround/m));
for(a=0;a<4;a++){
//	value = vals[a];
	// if(x[value][1] > s1){
	// 	console.log('Greater');
	// }
//	console.log(x[value]);
	console.log(x[a]);
}

console.log("-------");

console.log(vals);

//console.log(vals);
//console.log(mergeSort(vals));
 
function mergeSort(arr)
{
    if (arr.length < 2)
        return arr;
 
    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);
 
    return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right)
{
    var result = [];
 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;
}

