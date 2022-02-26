// Détail Note

<template>
<!-- Use pour Bg -->
  <div id="show">
    
    <!-- Detail Post-it -->
    <div class="post" v-for="note in note" v-bind:key="note._id">

 
      
      <!-- Infos appelées -->
      <h1>{{note.title}}</h1>    
      <h1>{{ note.content }}</h1>


      <!-- Button pour DL et close -->
      <button class="btn btn-light" @click="Showform(note._id)">📝</button>
      <button class="btn btn-danger" @click="deleteProduct(note._id)"  style="float='left'" >🗑️</button>
      <button class="btn btn-dark" @click="closeDetailpost" style="float='center'">❌</button>
      
      <!-- Edit -->
      <PutNote v-if="ShowEdit"
      @closeform = "closeform"
      :putid = 'putid'/>
    </div>

  </div>

</template>

<script>
// import API
import NoteApi from '@/apis/NoteApi.js'

// import Components
import PutNote from '@/components/PutNote.vue'

export default {

// Affiche le Post-it selon l'id
  props: [
    'noteid'
  ],

// Rappel des components
  components: {
  PutNote,
},
// Données de la page
  data() {
    return {
      ShowEdit: false, // Disable
      note:[], // Affiche les infos notes
      putid: ''
    }
  },

  // Get la note par l'ID
  created() {
    NoteApi.getNote(this.noteid)
    .then(response => {
      this.note = response.data
    })
    .catch(error => {
      console.log('Error :', error.response)
    })
  },

  methods: 
  {
  // Edit
    // Show Edit
    Showform(id)
    {
      this.putid = id
      this.ShowEdit = true;
    },
    // Hide Edit
    closeform()
    {
      this.putid = ''
      this.ShowEdit = false;
      location.reload()
    },

    // Méthode DL
    deleteProduct(id){
      NoteApi.deleteNote(id)
      .then(function( response ){
        console.log(response)
      }.bind(this));
    },

    // Rappel du close de /Notes grâce à $emit
    closeDetailpost()
    {
      this.$emit('closeDetailpost');
    }
  }

}
</script>

<style scoped> 

/* Fond de la page */
#show{
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
/* Post-it */
.post{
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
/* button */
#show button{
  margin-right: 25%;
  margin-left: 25%;
    
}
#show :hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

</style>