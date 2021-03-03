const escola = "Cod3r"

console.log(escola.charAt(4)) // pegar determinado caractere
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // pegando o código unicode do indice 3
console.log(escola.indexOf('3'))// pegando o indice apartir de um caractere

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3,'e'))

console.log('Ana, Maria,Pedro'.split(',')) // gerando um array com a função split