import React from 'react'

class Profile extends React.Component{
    constructor(){
        super()
        this.state = {
            name : "Azqi Gaming"
        }
    }

    render(){
        return <h1>{this.state.name}</h1>
    }
}

export default Profile