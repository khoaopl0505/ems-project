import React, {useEffect, useState} from 'react'
 
import { deleteUser, listUsers } from '../Services/UserService'
import { useNavigate } from 'react-router-dom'
const ListUserComponent = () => {
    
    const [users, setUsers] = useState([])
    const navigator= useNavigate();

    

    useEffect(() => {
        getAllUsers();
    }, [])

    function getAllUsers(){
        listUsers().then((response)=>{
            setUsers(response.data);
        }).catch(error =>{  
            console.error(error);
        })
    }
    function addNewUser(){
        navigator('/add-user')
    }
    
    function updateUser(id){
        navigator(`/edit-user/${id}`)
    }

    function removeUser(id){
        console.log(id);

        deleteUser(id).then((response)=>{
            getAllUsers();
        }).catch(error=>{
            console.error(error);
        })
    }

    return (
    <div className='container'>
        <h2 className='text-center'>List User</h2>
        <button className='btn btn-primary mb-2' onClick={addNewUser} >Add User</button>
        <table className='table  table-striped table-bordered '>
            <thead>
                <tr>
                    <th>ID User</th>                   
                    <th>Email User</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>    
            </thead>  
            <tbody>
                {
                    users.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td >
                                <button className='btn btn-info mb-2' onClick={()=>updateUser(user.id)}>Update</button>
                                <button className='btn btn-danger mb-2' onClick={()=>removeUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                }    
            </tbody>  
        </table>    
    </div>
  )
}

export default ListUserComponent