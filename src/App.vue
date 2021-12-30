<template>
<div class="container-fluid">
    <h3>Lista de Opções</h3>
    <div class="form-row">
        <div class='col-md-12'>
            <select class='form-control' v-model="opcao">
                <option :value="opcao" v-for="(opcao,i) in opcoes" :key=i>{{opcao.name}}</option>
            </select>
        </div>
    </div>
    <div class="row mt-2">
        <div class='col-md-12 mb-2'>
            <textarea v-model="replaced_text_combo" disabled class="form-control" cols="30" rows="10"></textarea>
        </div>
        <component :is="component" :ref="component" :opcao="FilteredOption(component)" v-for="(component,i) in regexes" :key="i" @update="replaceFields" ></component>
    </div>
    <div class="row mt-2">
        <div class='col-md-12 mb-2'>
            <button class="btn btn-primary" @click="rodar">Teste</button>
        </div>
    </div>
</div>
</template>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<script>
import CurrentTime from "./components/types/CurrentTime.vue"
import Protocolo from "./components/types/Protocolo.vue"
import Prazo from "./components/types/Prazo.vue"
import Ocorrencia from "./components/types/Ocorrencia.vue"
import Phone from "./components/types/Phone.vue"
import Email from "./components/types/Email.vue"

window._ = require("lodash");

export default {
  name: 'App',
  components: {
    CurrentTime,Protocolo, Prazo, Ocorrencia, Phone, Email
  },
  data(){
      return {
          opcoes:[],
          opcao: null,
          text_combo: null,
          replaced_text_combo: null,
      }
  },
  watch:{
    opcao(newVal){
        this.text_combo = this.replaced_text_combo = newVal.text;
    },
  },
  computed:{
      regexes(){
          if (this.opcao != null){
            const regex = /{{(.*?)}}/gmi;
            let m;
            let matches = [];

            while ((m = regex.exec(this.opcao.text)) !== null) {
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                m.forEach((match) => {
                    if (!match.includes("{")){
                        matches.push(match);
                    }
                });
            }
            return [...new Set(matches)];

          }
          return [];
      },
  },
  created(){
      this.opcoes.push({name: 'Protocolo e Prazo', text: `Segue protocolo {{protocolo}}  para acompanhar o andamento de sua solicitação. Documentos anexados.
Prazo de conclusão data: {{prazo}}. Para resposta desse protocolo, deve entrar em contato com a central de atendimento.`, fields:[{name:'protocolo', label: 'Protocolo'},{name:'prazo', label:"Prazo", plus:5}]});
      this.opcoes.push({name: 'Opcao 02', text: `Prezados,

Tentativa de contato sem sucesso às {{current-time}}, impossibilitando esclarecimento sobre Protocolo: {{protocolo}} Ocorrência: {{ocorrencia}}.
{{phone}} - cliente atendeu e desligou
{{email}}.

Caso cliente entre em contato, informar que dados não foram alterados pois cliente não possui cadastro no App. Sondar qual erro está acontecendo e abrir demanda correspondente. Caso cliente não esteja recebendo token, abrir demanda "Dificuldade de abertura de conta", solicitando exclusão dos dados para que cliente consiga solicitar nova conta.

{{phone}}
Izabel Regina de Faria Bastos`, fields:[{name:'current-time'},{name:'protocolo'},{name:'ocorrencia'},{name:'phone'},{name:'email', default: 'Sem e-mail'}]});
  },
  methods:{
      FilteredOption(component){
          let filtered = _.filter(this.opcao.fields, {name: component} );
          if (filtered.length >0 ){
              return filtered[0];
          }
          return {};
      },
      rodar(){
          console.log("this.$refs",this.$refs)
          for (let k in this.$refs){
              console.log("this.$refs[k]",this.$refs[k][0].field, k)
          }
      },
      replaceFields(){
          let newText = this.text_combo;
          for (let k in this.$refs){
             newText = newText.replace("{{"+k+"}}",this.$refs[k][0].field);
          }
          for (let k in this.$refs){
             newText = newText.replace("{{"+k+"}}",this.$refs[k][0].field);
          }
          this.replaced_text_combo = newText
      },
  },
}
</script>