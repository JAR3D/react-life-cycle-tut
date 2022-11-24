const FunctionWithoutState = () => {
    console.log('#', { component: 'FunctionWithoutState', log: 'before return'});
    return (
        <h2>FunctionWithoutState</h2>
    )
}

export default FunctionWithoutState;
