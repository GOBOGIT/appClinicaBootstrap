// ruta en root
// layout es el template base donde se va a inyectar el template incluido en "main"
FlowRouter.route( '/', {
  action: function() {
    BlazeLayout.render( 'inicio', { cabeceraSel: 'cabeceraInicio',  }); 
  }, name: 'inicio'
});

// rutas estudios
FlowRouter.route( '/estudios', {
  action: function() {
    BlazeLayout.render( 'estudiosPpal',  {  cabeceraSel: 'cabeceraSmall', main:'estudios' }); 
  }, name: 'estudios'
});

FlowRouter.route( '/estudios/:titulo', {
  action: function() {
    BlazeLayout.render( 'estudiosPpal',  {  cabeceraSel: 'cabeceraSmall', main:'estudio'  }); 
  }, name: 'estudios'
});


// rutas clinicas
FlowRouter.route( '/clinicas', {
  action: function() {
    BlazeLayout.render( 'clinicasPpal',  {  cabeceraSel: 'cabeceraSmall', main:'clinicas'  }); 
  },  name: 'clinicas'
});

FlowRouter.route( '/clinicas/:nombre', {
  action: function() {
    BlazeLayout.render( 'clinicasPpal',  {  cabeceraSel: 'cabeceraSmall', main:'clinica'  }); 
  },  name: 'clinicas'
});

// rutas avisos
FlowRouter.route( '/avisos', {
  action: function() {
    BlazeLayout.render( 'avisosPpal',  {
        cabeceraSel: 'cabeceraSmall'
    }); 
  }, name: 'avisos'
});

// rutas panel de Control
FlowRouter.route( '/panelControl', {
  action: function() {
    BlazeLayout.render( 'panelControlPpal'); 
  }
});


