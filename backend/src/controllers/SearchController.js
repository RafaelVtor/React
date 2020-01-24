const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        console.log(request.query);
        // Buscar todos os Devs num raio de 10km
        // Filtrar por tecnologia
        console.log(request.query);

        const {latitude, longitude, techs} = request.query;

        const techsArray = parseStringAsArray(techs);

        const dev = await Dev.find({
            techs:{
                $in:techsArray,
            },
            location:{
                $near:{
                    $geomatry:{
                        type: 'Point',
                        coordinates:[longitude, latitude],
                    },
                    $maxDistance: 10000,
                }
            }
        });

        return response.json(dev);
    }
}