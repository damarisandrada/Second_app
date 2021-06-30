import React from 'react';
import { Container, Title, Input} from "./Header.style";

const Header = () =>{
    return ( 
    <Container>
        <Title>RoboFriends</Title>
        <Input>
        <input type="text" placeholder="Search Robots"/>
        </Input>
        
    </Container>
    );
};

export default Header;