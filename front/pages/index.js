import React, { useState, useEffect} from 'react';
import AppLayout from '../components/AppRayout';
import { Card, Tabs, Table, Tab, Button, Accordion } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useSelector, useDispatch } from 'react-redux';
import { InfoAction } from '../reducers/user'



const Home = () =>{
	const dispatch = useDispatch();
	const [login,setLogin] = useState(false);
	const user = useSelector(state=>state.user.user);
	useEffect(() => {
		dispatch(InfoAction(JSON.parse(sessionStorage.getItem('userid')))); //변하고 바로 보이지 않는다.
	}, []);

  return (
		<>
			<AppLayout>
				<br />
					<Accordion defaultActiveKey="0">
						<Carousel
							style={{
								width: '900px',
								marginTop: '10px',
								margin: 'auto',
								marginBottom: '40px',
							}}
						>
							
						<Carousel.Item>
							<img className="d-block w-100" src="/1.jpg" alt="First slide" />
							<Carousel.Caption>
								<h3>오름이</h3>
								<p>오름1동에 살고 있는 고양이 오름이</p>
							</Carousel.Caption>
						</Carousel.Item>
							
						<Carousel.Item>
							<img className="d-block w-100" src="/2.jpg" alt="Third slide" />
							<Carousel.Caption>
								<h3>금오공과대학교 운동장</h3>
								<p>By 연서</p>
							</Carousel.Caption>
						</Carousel.Item>
								
						<Carousel.Item>
							<img className="d-block w-100" src="/3.jpg" alt="Third slide" />
							<Carousel.Caption>
								<h3>모카</h3>
								<p>자고 있는 모카</p>
							</Carousel.Caption>
						</Carousel.Item>

						<Carousel.Item>
							<img className="d-block w-100" src="/4.jpg" alt="Third slide" />
							<Carousel.Caption>
								<h3>금오공대 하늘</h3>
							</Carousel.Caption>
						</Carousel.Item>

						</Carousel>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="1">
									자유게시판
								</Accordion.Toggle>

								<Accordion.Collapse eventKey="1">
									<Card.Body>
										<Table responsive="sm"  className="table table-hover">
											<thead>
											</thead>
											<tbody>
													<tr>
														<td>글제목1 👍1 작성자: 아무개</td>
													</tr>
													<tr>
														<td>글제목2 👍2 작성자: 아무개</td>
													</tr>
													<tr>
														<td>글제목3 👍3 작성자: 아무개</td>
													</tr>
											</tbody>
										</Table>
									</Card.Body>
								</Accordion.Collapse>
							</Card>

							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="2">
									강의후기
								</Accordion.Toggle>
							</Card>
					</Accordion>
          
			</AppLayout>
		</>
	);
};

export default Home;