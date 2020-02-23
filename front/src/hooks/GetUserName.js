import { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

function useGetUserName(){
    const [user,setUser] = useState(undefined);
    async function getUserName(){

        await axios.post('/api/session/get_loged_user')
        .then(res => { setUser(res.data) })
        .catch(err => { setUser({ logged: false })});
    }
    if(user === undefined)
    {
        getUserName()

    }
    return user;
}

export default useGetUserName;
