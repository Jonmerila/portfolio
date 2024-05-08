export default function Projects(props){
    console.log(props);
    let project = props.data.data[0];
    let {title, note, link} = project;
    return(
        <header>
            <h2>{title}</h2>
            <p>{note}</p>
            <p>{link}</p>
        </header>
        
    );
}