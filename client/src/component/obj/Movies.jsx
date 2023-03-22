import { useState, useEffect } from "react"
import axios from "axios"
import Form from "./Form"

const Movies = ({ user, setTitle }) => {
    // Declare Variables
    setTitle("Movies")
    const [arr, setArr] = useState([])

    // Get all
    useEffect(() => {
        axios.get('http://localhost:8000/api/movies')
            .then(res => { console.log(res.data); setArr(res.data) })
            .catch(err => console.log("getall error: " + err))
    }, [])

    const getTime = e => {
        var date = new Date(e)
        var seconds = Math.floor((new Date() - date) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) return interval + " years ago...";
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) return interval + " months ago...";
        interval = Math.floor(seconds / 86400);
        if (interval > 1) return interval + " days ago...";
        interval = Math.floor(seconds / 3600);
        if (interval > 1) return interval + " hours ago...";
        interval = Math.floor(seconds / 60);
        if (interval > 1) return interval + " minutes ago...";
        return Math.floor(seconds) + " seconds ago...";
    }

    const getName = (first, last) => {
        return `${first} ${last}`
    }
    //last[0].toUpperCase() + last.slice(1)}, ${first[0].toUpperCase() + first.slice(1)
    return (
        <>
            <div>
                <Form arr={arr} setArr={setArr} user={user}/>
                {/* read create */}
            </div>
            <div>
                <h1>
                    All Movies
                </h1>
                {/* MAP TROUGH THE GET ALL REQUEST RETURN */}
                {
                    arr.map(e =>
                        <div key={e._id}>
                            <h3>
                                {e.title}
                            </h3>
                            <h4>
                                {e.genre}
                            </h4>
                            <h4>By: {getName(e.creator.first, e.creator.last)}</h4>
                            <h4>{(e.createdAt == e.updatedAt) ? getTime(e.createdAt) : getTime(e.updatedAt)}</h4>
                        </div>

                    )
                }
            </div>
        </>
    )
}

export default Movies