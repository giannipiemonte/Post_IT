// Création de note

<template>

    <!-- Bg du form -->
    <div id="fond">

        <!-- Form -->
        <div id="form">
        Nouvelle Note
        <input type="text" v-model="form.title" placeholder="Titre"/> 
        <input type="text" v-model="form.content" placeholder="Message"/>

        <!-- Bouton faisant appel aux différentes methods -->
        <button class="btn btn-light " v-on:click="submit()">✏️</button>
        <button class="btn btn-dark"  @click="closePostit">❌</button>

        </div>

    </div>

</template>

<script>
// appel de l'API
import NoteApi from '@/apis/NoteApi.js'

export default {
    data() {
        return{

// Récup des valeurs du form
        form: {
            title: '',
            content: ''
        }
    }
  },
    
    methods: {

    //   Methods pour créer appelée au moment du clic
        submit(){
            NoteApi.postNote(this.form) // recup les valeurs du form rempli
            .then(function( response ){
                console.log(response)
            }
            .bind(this)); //!

        },

        // Methods close Récuperée
        closePostit() {
            this.$emit('closePostit'); // $emit permet de récupérer la méthode créer dans le /Notes.vue
        }
    }
}

</script>

<style scoped>
#fond{
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0%;

    background-color: rgba(0, 0, 0, 0.66);
    width: calc(100% - 0px);
    height: calc(100% - 0px);
}

#form{
    font-family: Georgia, serif;
    margin-left: 3px;
    background: rgba(255, 255, 255, 0.253);
    gap: 5mm;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    align-self: center;
    width: 50%;
    max-width: 510%;
    height: 50%;
    border-radius: 5px;
    
}
#form button{
    
    margin-right: 25%;
    margin-left: 25%;
    
}
#form :hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
#form input{
    margin-right: 25%;
    margin-left: 25%;
}
</style>
