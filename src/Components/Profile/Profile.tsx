import React from "react";
import { Col, Container, Row } from "reactstrap";

interface IProps {

}

/**
 * Displays persons profile information
 * 
 * @param props N/A
 */
export const ProfileComp: React.FC<IProps> = (props:IProps) => {



    return(
        <Container>
            <Row>
                {/* Profile Image */}
                <Col xs={10} medium={5} large={2}>
                    <img src="https://cdn.shopify.com/s/files/1/1635/2935/products/38336_large.jpg?v=1600837700" 
                    alt="I'm not sure what this is" />
                </Col>
                {/* Profile Info */}
                <Col xs={10} medium={5} large={2}>
                    
                </Col>
            </Row>
        </Container>
    );
}