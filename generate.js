const { date } = require("faker");
const { random } = require("lodash");//require random

module.exports = function(){
  /*   var faker = require("faker");//require faker para los objetos json prellenados aleatoriamente */
     var _ = require("lodash")//lodash para selecciónar la cantidad de objetos 
    var arrayValues = [true, false]//valores para seleccionarlo de manera random. 
    return{
        people:_.times(10, function(n){
            return{
                /* id: n,//Id
                name: faker.name.findName(),//Nombre
                email: faker.internet.email(),//Correo
                idCard: faker.random.uuid(),//Cédula
                avatar: faker.internet.avatar(),//Imagen 
                aprobed: arrayValues[random(0,1)],//valor Solicitado
                paymentDate: faker.date.past(2)//Fecha a pagar  */
                id: string,
                name: string,//Nombre
                email: string,//Correo
                idCard: string,//Cédula 
                aprobed: arrayValues[random(0,1)],//valor Solicitado
                paymentDate: date//Fecha a pagar 
            }
        })

    }

}