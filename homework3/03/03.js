var initialNumber = [2, 3, 4, 5], result = 1
/*for (var i = 0; i < initialNumber.length; i++) {
  result *=initialNumber[ i ]

}alert( result )*/
for (var i of initialNumber) {
  result *= i

}  alert ( result )
