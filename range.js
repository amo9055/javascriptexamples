/* trying to simply accomplish the first task so I have a small piece to build on.*/

var list = []
function range(start, end) {
	for (var i = start; i <= end; i ++)
	list.push(i)
	
	return list;

}

function sum(list) {
  var total = 0;
  for (var i = 0; i < list.length; i++)
    total += list[i];
  return total;
}

console.log(sum(range(1, 10)));




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