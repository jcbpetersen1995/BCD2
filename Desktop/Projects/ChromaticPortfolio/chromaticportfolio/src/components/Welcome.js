import React from 'react';
import '../css/welcome/index.css';
import {Container, Row, Col} from 'reactstrap';

function Welcome() {
    return (
        <Container className="welcomeBlock">
            <h1 className="welcomeText">WELCOME</h1>
            <h3 className="chromaticText">TO A <span className="rainbowText">MULTICHROMATIC</span> EXPERIENCE</h3>
        </Container>

    )
};

export default Welcome;