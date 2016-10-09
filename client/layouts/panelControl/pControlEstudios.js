import { ReactiveDict } from 'meteor/reactive-dict';
import { ReactiveVar } from 'meteor/reactive-var';
import { Estudios } from '../../../imports/api/mongo.js';

import '../../../lib/json.js';
import './pControlEstudios.html';

state = new ReactiveDict();
selP = new ReactiveVar();
var sel;

Template.listaPC.onCreated(function () {
    state.set('pantallaInicio', true);
    state.set('cSexo', 'Sexo indistinto');
    //state.set('nestudio','Por tipo / todos');
    Meteor.subscribe('itemEstudios');
});

// onRender para codigo Jquery
Template.detallesPC.onRendered(function () {
    // activa Jquery
    this.$('.ui.dropdown').dropdown({ on: 'hover' });
});

Template.detallesPC.helpers({
    tipoSexo: function () {
        return listaSexo;
    },

    selSexo: function () {
        console.log(listaSexo('texto'));
      //  var result = listaSexo[sel.sexo];
       
            return 'hols';
        },

            selPromo: function () {
                return selP.get();
            },
            estudios: function () {
                // limpia la validación del formulario   
                // resetForm();
                // recoge datos de la colleción según selección
                sel = Estudios.findOne({ 'titulo': state.get('seleccion') });
                selP.set(sel.esPromo);
                return sel;
            },

 
});

// activa o desactiva las opciones de promoción
Template.detallesPC.events({
    'click .sliderPromo'(event) {
        event.preventDefault();
        selP.set(!selP.get())
        // state.set('esPromo', !state.get('esPromo'));
    }
});

Template.listaPC.events({
    // recoge selección en dropdow tipo estudio
    'click .selPC'(event) {
        event.preventDefault();
        state.set('pantallaInicio', false);
        // se probó console.log( $(event.target).closest('a').data('value'));
        // pero en las actulizaciones del item no refrescaba

        state.set('seleccion', $(event.target).closest('a').text());
    }
});

Template.panelControlPpalEstudios.helpers({
    pantallaInicio() {
        return state.get('pantallaInicio');
    }
});

Template.panelControlPpalEstudios.events({

    'submit #formularioEstudios'(event) {

        event.preventDefault();

        var objeto = {};

        // esta propiedad es obligatoria
        objeto.titulo = event.target.titulo.value;
        objeto.esPromo = event.target.esPromoCheck.checked;
        // propiedades opcionales
        if (event.target.descripcion.value) objeto.descripcion = event.target.descripcion.value;
        if (event.target.requisitos.value) objeto.requisitos = event.target.requisitos.value;
        if (event.target.precio.value) objeto.precio = event.target.precio.value;


        var setObjeto = { $set: objeto };

        Estudios.update(sel._id, setObjeto);
        state.set('seleccion', event.target.titulo.value);
        state.set('pantallaInicio', false);

    }
});



function resetForm() {
    var form = $('#formularioEstudios');
}