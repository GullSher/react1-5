import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
  return (
    <>
      <Navbar className='navbar fixed-top' bg="primary" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          
          </Nav>
          
        </Container>
      </Navbar>

       </>
  );
}

export default Navbar1;

// <nav class="navbar fixed-top navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Fixed top</a>
//   </div>
// </nav>