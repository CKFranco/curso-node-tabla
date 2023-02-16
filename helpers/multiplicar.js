const fs = require('node:fs');

const tableGenerator = async(base, hasta = 10, l, t ) => {

    try {
        

        let salida = ''
        let consola = ''

        if(t){
            for(j=1; j<=base; j++){
                    for(i=1; i<=hasta; i++) {
                    salida  +=`${j} X ${i} = ${ j * i}\n`
                    consola +=`${j} ${'X'.green} ${i} ${'='.green} ${ j * i}\n`
                }
            }
        }else{
            for(i=1; i<=hasta; i++) {
                salida  +=`${base} X ${i} = ${ base * i}\n`
                consola +=`${base} ${'X'.green} ${i} ${'='.green} ${ base * i}\n`
            }
        }

        if(l){

            console.log('<================>'.green)
            console.log(`    Tabla del ${base}`.yellow)
            console.log('<================> \n'.green)
            console.log(consola)
            console.log(hasta)
        }
        
        fs.writeFileSync(`./salida/tabla*${base}.txt`, salida)
        
        return`tabla*${base}.txt`

    } catch (err) {

        throw err
        
    }
}

module.exports = {
    tableGenerator: tableGenerator
}