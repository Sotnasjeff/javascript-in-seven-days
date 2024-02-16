//creating array
const str = ['Marcos', 'Ana', 'Marcela']
const num = [1,5,6,8,56,3]
const any = ['Ajs', 125, true]


//adding values into array

//Adding in the end of array
num.push(89)
//Adding in the beginning of array
num.unshift(880)
//Adding in the middle of array
num.splice(2,0,100)

console.log(num)
//fetch item in array
console.log(num.indexOf(3))

console.log(num.includes(6))

//search for array when types are not primitive

const movies = [
    {id:1, movieName: "The Godfather"},
    {id:2, movieName: "Harry Potter"},
    {id:3, movieName: "John Wick"}
]

console.log(movies.find(function(movie){
    return movie.movieName === 'John Wick'
}))

//using arrow function to search item into array when types are not primitive
console.log(movies.find(movie => movie.movieName === 'Harry Potter'))

//removing items from array
//removing last item
num.pop()
console.log(num)
//removing first item
num.shift()
console.log(num)
//removing in the middle
num.splice(2,1)
console.log(num)

//clear array
num.splice(0, num.length)
console.log(num)

//concatenate an array
let letters = ['s', 'c', 'l']
let otherletters = ['j','o', 'w']

all = letters.concat(otherletters)
console.log(all)

//using array join
let clients = ['Maria', 'Rodrigo', 'Jose']

console.log(clients.join(', '))

//sorting and reversing an array
console.log(clients.sort())
console.log(clients.reverse())

//verifying elements in array

const tempLondon = [12,15,20,2,6]

const tempNegative = tempLondon.every(temp => temp <= 0)

console.log(tempNegative)

//filtering array

const filteredTemps = tempLondon.filter(value => value >= 10)
console.log(filteredTemps)
