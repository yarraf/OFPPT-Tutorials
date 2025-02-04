import React from "react";
class Container extends React.Component{
    constructor(){
        super();
        this.state= {
            isLoggedIn: false,
            isLoadingLocalStorage:true,
        };
    }

    render(){
        return (<h1>Container</h1>);
    }
}

export default Container;