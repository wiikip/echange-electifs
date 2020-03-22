import { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
const session = new Cookies();

function useGetUserName(){
    console.log(session.get('user'))
       async function getUserName(){

        await axios.post('/api/session/get_loged_user')
        .then(res => { session.set('user', res.data)})

    }
    if (session.get('user') === undefined){
        getUserName()
    }
    
    return session.get('user')

}

export default useGetUserName;
