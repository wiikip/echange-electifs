import { useState } from 'react';
import axios from 'axios';

function useGetUserName(){
    const [user,setUser] = useState(undefined);
    function getUserName(){

        axios.post('/api/session/get_loged_user')
        .then(res => {return res.data.user})
        .catch(err => {return {logged: false}});
    }

    if(user === undefined)
    {
        console.log("user est undefined", getUserName())
        setUser(getUserName())
        console.log("il devrait etre defined", user)
    }
    console.log("hooks", user)
    return user;
}

export default useGetUserName;
