// Import axios
import axios from 'axios'

// const pour API
const apiClient = axios.create({
    baseURL: 'http://5.135.119.239:3090',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
export default {
// Affiche tout l'api
    getNotes() {
      return apiClient.get('/notes')  
    },    
// Afficher une note par ID
    getNote(id) {
        return apiClient.get(`/notes/${id}`)  
    },    
// Creer une note avec les infos de form
    postNote(form) {
        return apiClient.post(`/notes`, form)
    },
// supp. une note par l'id
    deleteNote(id) {
        return apiClient.delete(`/notes/${id}`)  
    },
//Edit une note
    putNote(id, form){
        return apiClient.put(`/notes/${id}`, form)
    }
    
    
}

// return apiClient.get(`/notes/6194b73ca7ac790012c26667`)