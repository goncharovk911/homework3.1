function fill( arr ) {
for(var i = 1; i <= 6; i ++) {
  arr[ i ] = []
  for(var j = 1; j <= 6; j ++) {
    arr[ i] [ j ]  = i * j
    }
  }
}
var arr = []
fill( arr )
console.log( arr )
