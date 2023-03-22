import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Form = ({ arr, setArr, old, submit, user }) => {
    const [item, setItem] = useState(
        (old)
        ?
        old
        :
        { title: '', genre:'' }
    )
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        // IF THERE IS NO USER REDIRECT
        if (!user.first) {
            navigate('/login-reg')
        // IF THERE IS A USER CONTINUE
        } else {
            console.log('logged in')
            axios.post('http://localhost:8000/api/movie', item, { withCredentials: true } )
                .then( res => {
                    setErrors([]);
                    setSuccess(true);
                    // deconstruct and add movie returned
                    setArr([...arr, res.data]);
                    // set blank form
                    setItem({ title: '', genre:'' });
                } )
                .catch( res => {
                    setSuccess(false);
                    setErrors(res.response.data.errors) ;
                    console.log("error in create: " + res.response.data.errors)
                } );
                navigate('/movies')
        };
    }

    const handleEdit = e => {
        e.preventDefault()
            console.log('edit and logged in')
            axios.put(`http://localhost:8000/api/movie/${item._id}`, item, {withCredentials:true} )
                .then( res => {
                    setErrors([])
                    setSuccess(true)
                } )
                .catch( res => {
                    setSuccess(false)
                    console.log(res.response.data.errors)
                    setErrors(res.response.data.errors)  
                } );
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* success */}
            {
                success && 
                <>
                <span className="accent">
                    SUCCESS
                </span>
                <br/>
                </>
            }
            {/* title */}

            <label>
                {
                    // NAME
                    errors.title && 
                    <>
                    <span className="accent">{errors.title.message}</span>
                    <br/>
                    </>
                }
                Name:
                <input type="text" value={item.title} onChange={e => setItem({...item, title: e.target.value})} />
            </label>

            <label>
                {
                    // PIC
                    errors.genre && 
                    <>
                    <span className="accent">{errors.genre.message}</span>
                    <br/>
                    </>
                }
                Genre:
                <input type="text" value={item.genre} onChange={e => setItem({...item, genre: e.target.value})} />
            </label>

            <input type="submit" value={submit || "Create Movie"} />
        </form>
    )
}

export default Form