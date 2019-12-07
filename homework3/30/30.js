var masLibrary = ["AngularJS", "jQuery"], newMasLibrary , clearMas, dlyaLyudshix =[]
console.log(masLibrary);
masLibrary.unshift("Backbone.js")
console.log(masLibrary);
masLibrary.push("ReactJS", "Vue.js")
console.log(masLibrary)
newMasLibrary = masLibrary.splice(0, 1, "CommonJS")
console.log(newMasLibrary);
console.log(masLibrary);
masLibrary.unshift(newMasLibrary[0])
console.log(masLibrary);
function arrayCleaning(mas) {
  for (var i = 0; i < mas.length; i++) {
     if (mas[i]==="jQuery") {
       alert("Он сдесь лишний")
       clearMas = mas.splice (i, 1)
     } else if (mas[i]==="Vue.js") {
       dlyaLyudshix.push(mas[i])
     }
   }return masLibrary

}
arrayCleaning(masLibrary)
console.log(masLibrary)
console.log(dlyaLyudshix);
