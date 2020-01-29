import { UseState } from 'react';
import axios from 'axios';

function useGetUserName()
{
    const [user,setUser] = UseState(undefined);
    const getUserName = () => {
        axios.post('/api/session/get_loged_user')
        .then(res => {setUser(res.data.user);})
        .catch(err => {setUser({logged : false})});
    }
    if(user === undefined)
    {
        user = useGetUserName();
    }

    return user;
}

export default getUserName();