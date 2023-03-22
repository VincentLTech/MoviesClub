const Home = ({setTitle}) => {
    setTitle("Home")
    return (
        <>
            
            <div>
            <h2>
                Come expand your horizons in AMC movies.
            </h2>
            <br/>
            Share your dreams and imagination with us.
            <br/>
            <br/>
            Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.
            <br/>
            <br/>
            Keep Moving Foward!
            </div>

            <div>
                <iframe src="https://giphy.com/embed/13kajTax0GCg0g" border-radius= "1vh" width="440" height="278" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-avengers-iron-man-thor-13kajTax0GCg0g"></a></p>
            </div>
            <div>
                <div>  
                    <a type='button' href="/login-reg">
                        Come and Join Our Club
                    </a>  
                </div>
            </div>
        </>
    )
}

export default Home