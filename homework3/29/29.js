  var arr = []
var chance = function(one, max) {
  var  i = 5, pos = Math.floor(Math.random() * (i + 1))

      while(i--){

          var rnd = Math.ceil(Math.random()*max)

          arr.push(rnd > one ? ++rnd : rnd)

      }


      return arr

}
chance(11,99)
function mas(arr, exp) {
  function involution(num, exp) {
		var res = 1;
		for (var j = 0; j < exp; j += 1) {
			res *= num;
		}
		return res;
	}

	result = [];

	for (var i = 0; i < arr.length; i += 1) {
		result[i*2]=(arr[i]);
		result[i*2+1]=(involution(arr[i], exp));
	}
	return result;
}
console.log(mas(arr, 5));
