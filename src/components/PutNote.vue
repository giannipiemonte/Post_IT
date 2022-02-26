// Edit Note

<template>
    <div id="fond">
        <div id="form">
            <div class="case" id="form" v-for="note in note" v-bind:key="note._id">

                <input type="text" :placeholder="note.title" v-model="form.title" />
                <input class='description' type="text"  :placeholder="note.content" v-model="form.content" />

                <button class="btn btn-light " v-on:click="submit()" >✏️</button>
                <button class="btn btn-dark" @click="closeform">❌</button>
            </div>
        </div>
    </div>
</template>

<script>
import NoteApi from '@/apis/NoteApi.js'

export default {
    props: [
        'putid'
    ],

    data() {
        return{
            note:[],
            form: {
            title: '',
            content: ''
            }
        }
    },

    methods: {


        submit() {
            NoteApi.putNote(this.putid, this.form)
            .then(function(response)
            {
                console.log(response)
            }
            .bind(this))
        },

        closeform() {
            this.$emit('closeform');
        }
    }
    ,created() {
    NoteApi.getNote(this.putid)
    .then(response => {
      this.note = response.data
    })
    .catch(error => {
      console.log('Error :', error.response)
    })
  },
}

</script>

<style scoped>


#fond {
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
    background: rgba(66, 62, 62, 0.315);
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

.description {
    height: 100px;
}
/* button */
#form button {
     
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
