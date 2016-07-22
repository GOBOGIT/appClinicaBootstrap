import './cabecera.html';

Template.cabeceraSmall.helpers({
// spaceBars devuelve el valor seccion y lo refresa a secc
// urlDir seccion (parametro)
urlDir : function(secc){
  var estadoUrl = FlowRouter.getRouteName();
  console.log("url " + estadoUrl);
  return estadoUrl === secc;

},

seccionesUsuario: [
   { seccion: 'inicio', url:'/' },
   { seccion: 'estudios', url:'/estudios' },
   { seccion: 'clinicas', url:'/clinicas' },
   { seccion: 'avisos', url:'/avisos' },
  ],
});

Template.cabeceraPC.helpers({
  seccionesPC: [
    { seccion: 'estudios', url:'/estudios' },
    { seccion: 'clinicas', url:'/clinicas' },
    { seccion: 'avisos', url:'/avisos' },
    ],
});

