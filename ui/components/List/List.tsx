import { ListStyled, ItemList, Photo, Informations, Name, Description } from "./List.style";
import { Button } from "@mui/material";
import { TextService } from "../../../src/data/services/TextService";
import {Pet} from '../../../src/data/@types/Pet';

interface ListProps{
    pets: Pet[];
}

export default function List(props: ListProps){
    const lenghtMaxText = 200;
    
    return(
        <ListStyled>
            {props.pets.map(pet=>(
            <ItemList key={pet.id}>
                <Photo src={pet.photo} alt={pet.name}></Photo>
                <Informations>
                    <Name>{pet.name}</Name>
                    <Description>{TextService.limitText(pet.history, lenghtMaxText)}</Description>
                    <Button fullWidth variant={'contained'}>Adopt</Button>
                </Informations>
            </ItemList>))}
        </ListStyled>
    )
}