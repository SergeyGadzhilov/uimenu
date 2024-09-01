import { Container } from "react-bootstrap";
import UIMenuHeader from "../components/UIMenuHeader/UIMenuHeader";
import UIMenuFooter from "../components/UIMenuFooter";

const MainLayout = function ({ children }){
  return (
    <>
        <UIMenuHeader/>
        <Container>
            { children }
        </Container>
        <UIMenuFooter />
    </>
  );
}

export default MainLayout;