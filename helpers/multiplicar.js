const fs = require('fs');

const crearTabla = async (base, listar, limite) => {
    try {
        let salida = '';
    
        for (let index = 1; index <= limite; index++) {
            salida += `${base} * ${index} = ${base * index}\n`;
        }
    
        fs.writeFileSync(`./data/tabla-${base}.txt`, salida);

        if(listar) console.log(salida);

        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearTabla
}