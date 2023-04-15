import React from "react";

export const SignIn = (props) => {
    const handleSubmit=()=>{
        props.SignIn();
    }

    return(
        
            <button type='submit' onClick={handleSubmit}>Sign In</button>
        
    )
}