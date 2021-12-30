<template> <div  class="col-md-3">
    <label for="">Ocorrência</label>
    <input v-numberOnly type="text" class="form-control" @keyup="emitChange" v-model="field">
    </div> </template>
<script>
import {formMixin} from "./Default.js";

export default {
name: "InputOcorrencia",
props: { },
mixins: [formMixin],
data() {
return {
};
},
created() {},
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