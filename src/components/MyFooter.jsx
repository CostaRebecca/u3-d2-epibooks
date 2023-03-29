import { Container } from "react-bootstrap";

const MyFooter = props => (
    <Container fluid>
        <footer>
            <p>{props.footerContent}</p>
        </footer>
    </Container>
);

export default MyFooter;