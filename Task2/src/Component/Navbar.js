import React, { Component } from 'react';
import User from './User';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
          userData: [],
          loading: true
        };
      }
    handleGetUser=async()=>{
        let url="https://reqres.in/api/users?page=1";
        this.setState({loading:false})
        let data=await fetch(url)
        let parsedData=await data.json()
        this.setState({
        userData: parsedData.data,
        loading:false
        })
    }

    render() {
        return (
            <>
                <nav className='Navbar'>
                    <div className='column1'>
                        <a href="/">LGM_VIP</a>
                    </div>
                    <div className='column2'>
                        <button onClick={this.handleGetUser}>Get Users</button>
                    </div>
                </nav>
                <User loading={this.state.loading} users={this.state.userData}/>
            
            
            </>
                
        );
    }
}

export default Navbar;
