export default props => <div>
    <h1>Dashboard</h1>
    <h2>Status: Ready</h2>
    {Object.keys(props.data).map(k => <p key={k}>{k}: {props.data[k]}</p>)}
</div>