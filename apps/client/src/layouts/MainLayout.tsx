import { Container } from "react-bootstrap";
import RCMenuHeader from "../components/RCMenuHeader/RCMenuHeader";

const MainLayout = function ({ children }){
  return (
    <>
        <RCMenuHeader/>
        <Container>
            { children }
        </Container>
    </>
  );
}

export default MainLayout;