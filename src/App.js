
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import QuestionTest from './test/QuestionTest';
import Mysite from './test/mysite';




function App() {
  return (
    <div className="Quiz">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to='/'>모의고사</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">홈보기</Nav.Link>
          <Nav.Link as={Link} to="/borad">게시판</Nav.Link>
          <Nav.Link as={Link} to="/test">자료구조테스트</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path = '/borad'>
          <QuestionTest />
        </Route>
        <Route path = '/test'>
          <Mysite />
        </Route>
        <Route path = '/:id'>
          <div>각 테스트 가기</div>
        </Route>
        <Route path = '/'>
          <TestCard className='card' />
        </Route>
      </Switch>
    </div>
  );
}

function TestCard () {
  return(
    <div>
      <Container>
      <Row>
        <Col sm={4}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="http://placeimg.com/360/200/nature" />
          <Card.Body>
            <Card.Title>수도이름 맞추기</Card.Title>
            <Card.Text>
                난이도별 각 수도의 이름 맞추기
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
        
      </Row>
      </Container>
    </div>
  )
};



export default App;
