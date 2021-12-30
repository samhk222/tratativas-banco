<template> <div  class="col-md-3">
    <label for="">Data corrente</label>
    <input v-mask="'##/##/####'" type="text" class="form-control" v-model="field"  @keyup="emitChange">
    </div> </template>
<script>
import {formMixin} from "./Default.js";
import moment from 'moment';

export default {
name: "InputCurrentDate",
props: { },
mixins: [formMixin],
data() {
return {
};
},
created() {
    this.field = moment().format("DD/MM/YYYY")
},
methods:{}
}
</script>
<style lang="scss"></style>