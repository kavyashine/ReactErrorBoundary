import React from "react";

class ErrorBoundary extends React.Component{
state={
    error:''
}
static getDerivedStateFromError(error){
    return{
        error:error
    }
}

componentDidCatch(error,info){
    console.log("Error is ",error);
    console.log("info is",info);
}
render(){
    if(this.state.error){
        return(
            <div>
                <h2>Some error occured</h2>
                {/* <p>This is the Error:{this.state.error}</p> */}
            </div>
        )
    }
    return this.props.children
}
}
export default ErrorBoundary;