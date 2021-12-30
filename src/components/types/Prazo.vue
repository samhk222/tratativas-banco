<template> <div class="col-md-3">
    <label for="">Prazo</label>
    <input v-mask="'##/##/####'" type="text" v-model="field" class="form-control" @keyup="emitChange">
    </div> </template>
<script>
import {formMixin} from "./Default.js";
import moment from 'moment';


export default {
name: "InputPrazo",
props: { },
mixins: [formMixin],
data() {
return {
};
},
created(){
    this.field = moment().add(this.opcao.plus, "days").format("DD/MM/YYYY");
    console.log("mounted");
},
 directives: {
        numberOnly: {
            bind: function(el) {
                el.handler = function() {
                    el.value = el.value.replace(/\D+/, '')
                }
                el.addEventListener('input', el.handler)
            },
            unbind: function(el) {
                el.removeEventListener('input', el.handler)
            }
        }
    }
}
</script>
<style lang="scss"></style>