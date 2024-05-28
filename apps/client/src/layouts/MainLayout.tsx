import { Container } from "react-bootstrap";
import RCMenuHeader from "../components/RCMenuHeader/RCMenuHeader";
import RCMenuFooter from "../components/RCMenuFooter";

const MainLayout = function ({ children }){
  return (
    <>
        <RCMenuHeader/>
        <Container>
            { children }
        </Container>
        <RCMenuFooter />
    </>
  );
}

export default MainLayout;