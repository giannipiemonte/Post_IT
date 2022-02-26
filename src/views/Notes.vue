// Page index

<template>
  <div >
    <!-- Button appartenant à la page -->
    <button @click="showPostit" style="float='right">Create  </button>

    <!-- Formulaire de création de note disable ( Shownote = false -> passe true avec showPostit() ) -->
    <newNotes v-if="showNote"
    @closePostit = "closePostit"/>

    <!-- Display les post-it -->
    <Notes
    @showDetailpost = "showDetailpost" />

    <!-- Détail de post-it disable ( ShowDetail = false -> passe true avec showDetailpost() ) -->
    <Show v-if="showDetail"
    @closeDetailpost = "closeDetailpost"
    :noteid = "noteid"/>

  </div>
</template>

<script>

// Importations de 3 composants
import Notes from '@/components/Note.vue';
import Show from '@/views/NoteShow.vue';
import newNotes from '@/components/newNotes.vue';

export default {
  
  data: () =>  {
    return   {
    
      showNote: false, // Disable newNote
      showDetail: false, // Disable le detail
      noteid: '' // Stock rien dans l'ID afin de le modifer
    }
  },

  // Rappel des différents composants de la page
  components: {
    Notes,
    Show,
    newNotes
  },

  methods: {
    
    showPostit()
    {
      this.showNote = true; //Passe True shownote pour le display
    },

    closePostit()
    {
      this.showNote = false // Passe False shownote au moment de fermer la page
      location.reload()
    },

    showDetailpost(id) //recupérer l'ID pour la fonction DELETE
    {
      this.noteid = id
      this.showDetail = true;
    },
    closeDetailpost() // Rends l'ID à sa valeur d'usine
    {
      this.noteid = ''
      this.showDetail = false;
      
    },
  }
}
</script>

<style>
body{
  background: rgb(75, 75, 82);
}

</style>