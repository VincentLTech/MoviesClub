import React from 'react'

const Header = ({title}) => {

    return(
        <div>
            {
                title=="Home"? 
                <header>Welcome to the Movie Foundation</header> 
                :
                <header>{title}</header>
            }
        </div>
    )
}

export default Header