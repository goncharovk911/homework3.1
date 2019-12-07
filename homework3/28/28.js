var solid = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'], result = 0

for (var i = 0; i < solid.length; i++) {
  if (solid[ i ] > 0) {
    result += solid[ i ]

  }
}
alert( result )
