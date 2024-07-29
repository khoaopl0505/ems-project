import React, { useEffect } from 'react'
import { useState } from 'react'
import { createUser, getUser, updateUser } from '../Services/UserService'
import { useNavigate, useParams } from 'react-router-dom';

const UserComponent = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const {id} = useParams();
    
    const [errors, setErrors] = useState({
        username:'',
        password:''
    })
    const navigator = useNavigate();

    useEffect(() => {
        if(id){
            getUser(id).then((response) =>{
                setUserName(response.data.username);
                setPassword(response.data.password);
            }).catch(error =>{
                console.error(error);
            })
        }
    },[id])
    
    function saveOrUpdateUser(e){
        e.preventDefault();

        if(validateForm()){
            const user ={username, password}
            console.log(user)

            if(id){
                updateUser(id, user).then((response) =>{
                    console.log(response.data);
                    navigator('/users')
                }).catch(error=>{
                    console.error(error);
                })
            }else{
                createUser(user).then((response)=>{
                    console.log(response.data);
                    navigator('/users')
                }).catch(error=>{
                    console.error(error);
                })
            }      
        }     
    }

    function validateForm(){
        let valid = true;
        const errorsCopy = {... errors}

        if(username.trim()){
            errorsCopy.username='';
        }else{
            errorsCopy.username='Username is required';
            valid = false;
        }

        if(password.trim()){
            errorsCopy.password='';
        }else{
            errorsCopy.password='Password is required';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }
    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update user</h2>
        }else{
            return <h2 className='text-center'>Add user</h2>
        }
    }
return (
    <div className='container'>
        <br/><br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>User Name</label>
                            <input
                                type='text'
                                placeholder='Enter Username'
                                name='username'
                                value={username}
                                className={`form-control ${errors.username ? 'is-invalid': ''}`}
                                onChange={(e) => setUserName(e.target.value)}
                            ></input>
                            {errors.username && <div className='invalid-feedback'>{errors.username}</div>}   
                        </div>
                        <div></div> 
                        <div className='form-group mb-2'>
                            <label className='form-label'>Password</label>
                            <input
                                type='password'
                                placeholder='Enter Password'
                                name='password'
                                value={password}
                                className={`form-control ${errors.password ? 'is-invalid': ''}` }
                                onChange={(e) =>  setPassword(e.target.value)}
                            ></input>
                            {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
                        </div>               
                        <button className='btn btn-success' onClick={saveOrUpdateUser}>Subbmit</button>
                    </form>
                </div>               
            </div>
        </div>
    </div>
  )
}

export default UserComponent