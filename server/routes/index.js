const express = require('express');
const router = express.Router();

// Controladores
const nosotrosController = require('../controllers/nosotrosController');
const { consultasHomepage } = require('../controllers/homeController');
const { mostrarViajes, mostrarViaje } = require('../controllers/viajesController');
const { mostrarTestimoniales, agregarTestimonial } = require('../controllers/testimonialesController');

module.exports = function() {
    
    // Fijarse como puede hacerse de ambas formas, la primera se autollena, la segunda es manual
    router.get('/',consultasHomepage);
    router.get('/nosotros', nosotrosController.infoNosotros);
    router.get('/viajes',mostrarViajes); 
    router.get('/viajes/:id', mostrarViaje);
    router.get('/testimoniales', mostrarTestimoniales);
    router.post('/testimoniales', agregarTestimonial);

    return router;
}