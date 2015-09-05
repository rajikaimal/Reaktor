var n = 2;
var m = 4;
var s1 = 40;
var s2 = 60;
var x = [
	[1,35,4],
	[1,20,3],
	[1,40,10],
	[1,60,7],
];
var vals = [];
var temp;
for(a=0;a<4;a++){
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

//console.log(vals);

console.log("-------");
var value;
var time = 0;
var timeGap;
var region1 = false;
var region2 = false;
console.log(vals[0]);
console.log(vals[1]);
console.log(vals[2]);
console.log(vals[3]);
for(a=0;a<4;a++){
	value = vals[a];
	// if(x[value][1] > s1){
	// 	console.log('Greater');
	// }
	//console.log(x[value]);
	//console.log(x[value][1]);
	if(x[value][1] <= s1 ){
		if(region1 == false){
			region1 = true;
			console.log("Program " + (a+1) + " runs in region 1 from " + time + " to " + x[value][2]);
		}
		else{
			console.log("Program " + (a+1) + " runs in region 2 from " + time + " to " + x[value][2]);
		}
	}
	if(x[value][1] > s1 ){
		if(region2 == false){
			region2 = true;
			console.log("Program " + (a+1) + " runs in region 1 from " + time + " to " + x[value][2]);
		}
		else{
			console.log("Program " + (a+1) + " runs in region 2 from " + time + " to " + x[value][2]);
		}
	}
	//console.log(x[a]);
}
console.log("-------");
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
