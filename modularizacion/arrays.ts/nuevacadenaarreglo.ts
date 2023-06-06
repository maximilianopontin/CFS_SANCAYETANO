const cadenaDeTexto: string = "El éxito es aprender a ir de fracaso en fracaso sin desesperarse. La vida es un 10% lo que nos pasa y un 90% cómo reaccionamos ante ello. La creatividad es la inteligencia divirtiéndose. En la vida no se trata de esperar a que pase la tormenta, se trata de aprender a bailar bajo la lluvia. Si lo puedes soñar, lo puedes hacer. La felicidad no es la ausencia de problemas, es la habilidad de lidiar con ellos. La educación es el arma más poderosa que puedes usar para cambiar el mundo. Todo lo que puedas imaginar es real. La verdad nunca daña una causa que es justa. El fracaso es una gran oportunidad para empezar otra vez con más inteligencia. El secreto de la creatividad es saber cómo esconder tus fuentes. No tengas miedo de renunciar a lo bueno para perseguir lo grandioso. La paciencia es amarga, pero su fruto es dulce. La única forma de hacer un gran trabajo es amar lo que haces. Lo que no te mata, te hace más fuerte. El éxito no es la clave de la felicidad, la felicidad es la clave del éxito. Si buscas resultados distintos, no hagas siempre lo mismo. Siempre parece imposible hasta que se hace. La simplicidad es la máxima sofisticación.";
let  textoLimpio = cadenaDeTexto
.replace(/[áàäâ]/g, 'a')
.replace(/[éèëê]/g, 'e')
.replace(/[íìïî]/g, 'i')
.replace(/[óòöô]/g, 'o')
.replace(/[úùüû]/g, 'u')
.replace(/[ñ]/g, 'n')
.replace(/\./g, '')
.replace(/\%/g, '')
.replace(/\,/g, '')
.replace(/[0-9]/g, '')

const textoMinuscula = textoLimpio.toLowerCase(); //Transforma todo el texto en minuscula
const arregloDePalabras: string[] = textoMinuscula.split(" ");//Dividir la cadena de texto en un arreglo de palabras
arregloDePalabras.sort();//Ordenar el arreglo de palabras alfabéticamente
const cadenaOrdenada = arregloDePalabras.join(" ");//Unir las palabras ordenadas en una nueva cadena de texto
const arregloFinal: string[] = new Array(cadenaOrdenada);

console.log(arregloFinal);