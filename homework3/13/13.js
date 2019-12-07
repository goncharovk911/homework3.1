var str = "aaa bbb ccc", resultSubstr, resultSubstring, resultSlice
resultSubstr = str.substr(0, 3) + str.substr(7, 4)
console.log( resultSubstr )
resultSubstring = str.substring(0, 3) + str.substring(7)
console.log( resultSubstring )
resultSlice = str.slice(0, 3) + str.slice(7)
console.log( resultSlice );
