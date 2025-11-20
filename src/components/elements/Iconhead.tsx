export default function Iconhead(props:any) {
    return (
        <>
        <p className={`display-2 primary2 ${props.className || ''}`} style={props.style}>
            <i className={`${props.icon} || ''`}></i> 
            <span className="ml-2">{props.text || 'Heading Text'}</span>
          </p>
        </>
    )
}