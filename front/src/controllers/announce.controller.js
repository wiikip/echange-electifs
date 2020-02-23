const axios = require('axios')

function deleteAnnounce(id){
    axios.post('/api/delete', {id: id}).then(res => console.log(res))

}

function addAnnounce(authId, fullName, wEl, rEl, seq, msg){
    return axios.post('/api/addToListe', {authId: authId, fullName: fullName, wantedCourse : wEl, receivedCourse : rEl, sequence : seq, message : msg})
    .then(res => res)


}

module.exports = {deleteAnnounce, addAnnounce}