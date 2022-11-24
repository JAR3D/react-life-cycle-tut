import {useState} from "react";

const FunctionWithState = () => {
    const [state, setState] = useState(1);

    console.log('#', { component: 'FunctionWithState', log: 'before return'});
    return (
        <>
            <h2>FunctionWithState</h2>
        </>

    )
}

export default FunctionWithState;