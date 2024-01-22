import { Container } from "./styles";
import { Tag } from "../Tag";
import { Rating } from "../Rating";

export function Synopsis({data}){
    return (
        <Container>
            <h2>{data.title}</h2>
            <Rating ratingnumber={data.ratingnumber}/>
            <p>{data.description}</p>
            {
                data.tags &&
                <footer>
                {    data.tags.map(tag =>  <Tag key={tag.id} name={tag.name}/>)
                
                }

                </footer>
            }
        </Container>
    )
    
}