function Description(props){
    return (
        <div style={{display: "flex",gap:2}}>
        <p>Description Text</p>
        <p>Hello My name is : {props.name}</p>
        </div>
    )
}
export default Description;