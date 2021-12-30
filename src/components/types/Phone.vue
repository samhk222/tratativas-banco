<template> <div  class="col-md-3">
    <label for="">Telefone</label>
    <input v-mask="phoneMask" type="text" class="form-control" v-model="field" @keyup="emitChange">
    </div> </template>
<script>
import {formMixin} from "./Default.js";

export default {
name: "InputPhone",
props: { },
mixins: [formMixin],
data() {
return {
};
},
computed:{
phoneMask(){
    return this.field.length == 15 ? '(##) #####-#####' : '(##) ####-####'
},
},
methods:{}
}
</script>
<style lang="scss"></style>