import React from "react";
import { Container, Image, Nume, Mail} from "./Card.style";


const Card = ({idPrimit, numePrimit, mailPrimit}) =>{
    return(
           <Container>
               <Image>
               <img src={"https://robohash.org/412258" + idPrimit} alt="robot" style={{height:160, width:180}}/>
               </Image>
               <Nume>{numePrimit}</Nume>
               <Mail>{mailPrimit}</Mail>
           </Container>
    );
    };
    
    export default Card;







