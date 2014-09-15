/* trying to simply accomplish the first task so I have a small piece to build on.*/


/* I think this var list = [] should go inside the function, 
but when I put it there, it doesn't work. 
Is this location going to cause a problem?*/
var list = []
function range(start, end) {
	for (var i = start; i <= end; i ++)
	list.push(i)
	
	return list;

}
/*second piece */
function sum(list) {
  var total = 0;
  for (var i = 0; i < list.length; i++)
    total += list[i];
  return total;
}

console.log(sum(range(1, 10)));

console.log(range(5, 2, -1));


/* this wasn't working...

function range(start, end) {
	var array = [];
	for (var i = start; i >= end; i ++)
      array.push(i);
      return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}

document.write(sum(range(1, 10)));

*/