// var n = 2;
// var m = 3;
// var regions = [ 40, 60 ];
// //var regions = [ 10, 20,30 ];
// var x = [
// 	[1,35,4],
// 	[1,20,3],
// 	[1,40,10],
// 	[1,60,7]
// ];

// var len = x.length;
// var v = [];
// for(a=0;a<4;a++){
// 	b = a+1;
// 	x[a].push(b);
// }



// console.log(x);
var n;


$("#no-of-regions").keyup(function(){
	$("#regions").empty();
	var noRegions = $(this).val();
	for(a=0;a<noRegions;a++){
		$("#regions").append('<td><input type="text" id="' + a + '-region"></td>');
	}
});

$("#no-of-programs").keyup(function(){
	$("#programs").empty();
	var noPrograms = $(this).val();
	for(a=0;a<noPrograms;a++){
		$("#programs").append('<tr><td><input type="text" id="' + a + '" class="pairNo" name="'+ a +'"><td></tr>');
	}
});

$("body").on("keyup",".pairNo",function(){
	var noOfPairs = $(this).val()*2;
	var ID = $(this).attr("id");
	var name = $(this).attr("name");
	$("#"+ID).empty();

	for(a=0;a<noOfPairs;a++){
		$("#"+ID).after('<td><input type="text" id="' + ID + '-op-'+ a +'" class="op-class" name="'+ name +'"><td>');
	}
});

console.log(n);



$("#algo-submit").click(function(){
	var n = $("#no-of-regions").val();	
	var m = $("#no-of-programs").val();
	var x = [];

	for(a=0;a<m;a++){
		var row = [];
		var pairs = $("#" + a + "-op-" + 0).attr("name");
		for(b=0;b<pairs;b++){
			var val = $("#" + a + "-op-" + b).val();
			row.push(val);
		}
		x.push(row);
	}
	console.log(x);
	alert(x);
});

$("#algo-submit2").click(function(){
	var n = $("#no-of-regions").val();	
	var m = $("#no-of-programs").val();
	var x = [];

	x.push($('.inin').val());
	console.log($('.inin').val());
	console.log(x);
});

$(".inin").keyup(function(){
	alert($(this).val());
});