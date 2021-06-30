import React from "react";
import Card from "../card/Card";
import {Container} from "./Content.style";

const Content = () =>{
return(
       <Container>
           <Card idPrimit="1" numePrimit="Orntron" mailPrimit="orntron12@mail.com"></Card>
           <Card idPrimit="2" numePrimit="Inxator" mailPrimit="inxator77@mail.com"></Card>
           <Card idPrimit="3" numePrimit="Rusty" mailPrimit="rusty.123@mail.com"></Card>
           <Card idPrimit="4" numePrimit="Mechan" mailPrimit="mechan11@mail.com"></Card>
           <Card idPrimit="5" numePrimit="Ecroid" mailPrimit="ecroid55@mail.com"></Card>
           <Card idPrimit="6" numePrimit="Ihkator" mailPrimit="ihkator09@mail.com"></Card>
           <Card idPrimit="7" numePrimit="Ratchet" mailPrimit="ratchet32@mail.com"></Card>
           <Card idPrimit="8" numePrimit="Drillbit" mailPrimit="drillbit08@mail.com"></Card>
           <Card idPrimit="9" numePrimit="Crowby" mailPrimit="crowby@mail.com"></Card>
       </Container>
);
};

export default Content;