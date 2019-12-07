var mas = [ ], sum = 0
function masCkl( ) {
  var i = 0, num
  while (i < 5) {
    num = Number(prompt("Enter Number",))
    mas.push( num )
    sum+= mas[ i ]
    i++
  }return sum;
}
masCkl( mas )
alert( sum );
