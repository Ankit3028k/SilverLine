

export default function Input(props:any) {
    return (
        <div className={`input ${props.className || ''}`} style={props.style}>
            <input id={props.id || 'input'} type={props.type || 'text'} placeholder={props.placeholder || ''} />
            <label className="row justify-start items-center" htmlFor={props.id || 'input'}><i className={`${props.icon || ''}`}></i> <span> {props.label || 'Input'}</span></label> 
        </div>
    )
}