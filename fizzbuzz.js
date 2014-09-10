/* attempt to get the fizzbuzz exercise completed */

for (var counter = 1; counter <= 100; counter = counter + 1)
{
  if (counter % 3 == 0 && counter % 5 == 0)
  console.log ("fizzbuzz");
  else if (counter % 5 == 0)
    console.log ("buzz");
  else if (counter %3 == 0)
    console.log ("fizz");
  else
    console.log (counter)}
