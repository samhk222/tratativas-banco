export const formMixin = {
    props: {
        opcao:{
            type: Object,
            default: ()=>{}
        }
    },
    created () {

    },
    data() {
        return {
            field:"",
        };
    },
    methods: {
        onlyLetters(e) {
            let char = String.fromCharCode(e.keyCode);
            console.log(char)
            if (/^[A-Za-z0-9]+$/.test(char)) return true;
            else e.preventDefault();
        },
        emitChange(){
            this.$emit('update');
        },
    }
};
