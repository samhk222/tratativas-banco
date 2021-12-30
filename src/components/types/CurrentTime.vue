<template> <div  class="col-md-3">
    <label for="">Hora corrente</label>
    <input v-mask="'##:##'" type="text" class="form-control" v-model="field"  @keyup="emitChange">
    </div> </template>
<script>
import {formMixin} from "./Default.js";
import moment from 'moment';

export default {
name: "InputCurrentTime",
props: { },
mixins: [formMixin],
data() {
return {
};
},
created() {
    this.field = moment().format("HH:mm")
},
methods:{}
}
</script>
<style lang="scss"></style>