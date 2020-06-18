let carts = [
   {id: 1, name: "Alpha", address : "Jakarta"},
   {id: 2, name: "Beta", address : "Bekasi"},
   {id: 3, name : "Charlie", address : "Cikarang"} 
]
// let result = [
//    [1, Alpha, Jakarta],
//    [2, Beta, Bekasi],
//    [3, Charlie, Cikarang]
// ]

let result = carts.map(cart => {
   // cart = {id, name, address}
   return [cart.id, cart.name, cart.address]
})

console.log({carts, result})