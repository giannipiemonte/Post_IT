// Diplay la list de note

<template>

  <!-- Use pour Bg -->
  <ul> 
    
      <div  id="notes">

      <!-- Création de la boucle / Récupérer l'ID par la méthode déclanché par l'évent @click -->
      <article id="note" v-for="note in notes" v-bind:key="note._id"
      @click="showDetailpost(note._id)">
<li>
      <!-- Affichage des infos -->
      <a href="#">  
        <h2><p><strong>{{note.title}}</strong></p></h2> 
        <p id="text">{{note.content}}</p>   
      </a>
    
</li>
      </article>
    
    </div>
  
    
</ul>
 

</template>

<script>

  // Import de l'API
  import NoteApi from '@/apis/NoteApi.js'

  export default {

    data() {
      return {
        notes: [], // Affiche les infos du array notes
        form: {
          title: '',
          content: ''
        }
      }
    },

    // Api Get
    mounted() {
      NoteApi.getNotes()
      .then(response => {
        this.notes = response.data.notes
      })
      .catch(error => {
      console.log('Error :', error.response)
      })
    },

  methods:{
    // Méthode showDetail avec l'id
    showDetailpost(noteid) {
      this.$emit('showDetailpost', noteid);
    }
  }

}
</script>


<style>

    body{
        font-family:arial,sans-serif;
        font-size:100%;
        margin:3em;
        background:#666;
        color:#fff;
    }
    h2,p{
        font-size:100%;
        font-weight:normal;
        color: rgba(0, 0, 0, 0.678);
    }
    ul,li{
        list-style:none;
    }
    ul{
        overflow:hidden;
        padding:3em;
    }
    ul li a{
        text-decoration:none;
        color:#000;
        background:#097ddb;
        display:block;
        height:15em;
        width:15em;
        padding:1em;
        -moz-box-shadow:5px 5px 7px rgba(33,33,33,1);
        /* Safari+Chrome */
        -webkit-box-shadow: 5px 5px 7px rgba(33,33,33,.7);
        /* Opera */
        box-shadow: 5px 5px 7px rgba(33,33,33,.7);
        -moz-transition:-moz-transform .15s linear;
        -o-transition:-o-transform .15s linear;
        -webkit-transition:-webkit-transform .15s linear;
    }
    ul li{
        margin:1em;
        float:left;
    }
    ul li h2{
        font-size:140%;
        font-weight:bold;
        padding-bottom:10px;
    }
    ul li p{
        font-family:"Reenie Beanie",arial,sans-serif;
        font-size:180%;
    }
    ul li:nth-child(even) a{
        -o-transform:rotate(4deg);
        -webkit-transform:rotate(4deg);
        -moz-transform:rotate(4deg);
        position:relative;
        top:5px;
    }
    ul li:nth-child(3n) a{
        -o-transform:rotate(-3deg);
        -webkit-transform:rotate(-3deg);
        -moz-transform:rotate(-3deg);
        position:relative;
        top:-5px;
        background:#f26b6b;
    }
    ul li:nth-child(5n) a{
        -o-transform:rotate(5deg);
        -webkit-transform:rotate(5deg);
        -moz-transform:rotate(5deg);
        position:relative;
        top:-10px;
        background: #6bbcf2;
    }
    ul li a:hover,ul li a:focus{
        -moz-box-shadow:10px 10px 7px rgba(0,0,0,.7);
        -webkit-box-shadow: 10px 10px 7px rgba(0,0,0,.7);
        box-shadow:10px 10px 7px rgba(0,0,0,.7);
        -webkit-transform: scale(1.25);
        -moz-transform: scale(1.25);
        -o-transform: scale(1.25);
        position:relative;
        z-index:5;
    }
</style> 
