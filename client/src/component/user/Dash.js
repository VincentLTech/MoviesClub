import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Form from '../obj/Form';

const Dash = ({user, setTitle}) => {
    // change header if name
    //if (user.first) setTitle(`${user.first[0].toUpperCase()+user.first.slice(1)}'s World`)
    // declare variables
    const [arr, setArr] = useState([])
    // get all per user
    useEffect(() => {
        axios.get('http://localhost:8000/api/movies/user', {withCredentials:true})
            .then(res => { console.log(res.data); setArr(res.data) })
            .catch(err => console.log("getall error: " + err))
    }, [])
    // delete
    const handleDelete = (event, id) => {
        event.preventDefault()
        axios.delete(`http://localhost:8000/api/movie/${id}`)
        .then(res => {
            console.log('worked ', res.data)
            setArr(arr.filter(e=>e._id !== id))} )
        .catch(res=> console.log("couldnt delete") )
    }
    
    return (
        <>
        <div>
            <h2>
                Name:
            </h2>
            {/* show what we are getting with data */}
                {user.last}, {user.first}
            <h2>
                Email:
            </h2>
                {user.email}
        </div>
        <div>
            {
                (arr && arr.length > 0)
                ?
                    arr.map(e => (
                        <>
                            <button class="edit"><Form arr={arr} setArr={setArr} user={user} submit={"Update"} old={e}/>
                                <button class="edit2" onClick={ event=> handleDelete(event, e._id)}>
                                    Delete
                                </button>
                            </button>
                        </>
                    ))
                :
                <>
                    GO MAKE SOMETHING!!!
                </>
            }
        </div>
        </>
    )
}

export default Dash