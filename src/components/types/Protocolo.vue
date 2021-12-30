<template> <div  class="col-md-3">
    <label for="">Protocolo</label>
    <input v-numberOnly type="text" class="form-control" v-model="field" @keyup="emitChange">
    </div> </template>
<script>
import {formMixin} from "./Default.js";

export default {
name: "InputProtocolo",
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