var str = "Как однажды Жак звонарь сломал фонарь головой", now=[ ], clearMas, masPush, result, deletMass
          //Как Однажды Жак Звонарь Городской Сломал Фонарь
function corrected() {
   now= str.split(" ")
   clearMas = now.splice(4, 2)
   masPush = now.push(clearMas[ 0 ])
   masPush = now.push(clearMas[ 1 ])
   for (var i = 0; i < now.length; i++) {
     if (now[ i ]==="головой") {
       deletMass = now.splice (i, 1, "городской")
     }
   }

  return now
}
corrected( str )
alert( now )
