import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_Covid from "../../assets/img/projects/covid.PNG";
import L_Keeper from "../../assets/img/projects/merntodo.PNG";
import L_Instagram from "../../assets/img/projects/insta.PNG";
import L_TSF from "../../assets/img/projects/tsf.PNG";
import L_BLOG from "../../assets/img/projects/blog.PNG";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_FIREBASE from "../../assets/img/skills/370873.svg";
// import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
// import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
// import L_DJANGO from "../../assets/img/skills/django.svg";
// import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
// import L_GIT from "../../assets/img/skills/github-api.svg";
// import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";

import "./projects-timeline.styles.css";

const TimeLine = () => {
    return (
        <div id='projects'>
            <h1 className='pt-3 text-center font-details-b pb-3'>PROJECTS</h1>
            <Timeline>
                <Events>
                    {/* Project: Todo List With MUI */}
                    <ImageEvent
                        date='22/08/2021'
                        className='text-center'
                        text='Mern Todolist'
                        src={L_Keeper}
                        alt='Todolist'
                    >
                        <div className='d-flex justify-content-between flex-column mt-1'>
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey='0'
                                            className='p-2 text-center accordian-main'
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse
                                            eventKey='0'
                                            className='text-left'
                                        >
                                            <Card.Body>
                                                <strong>Description:</strong>{" "}
                                                This is a fully authenticated
                                                todolist with realtime database
                                                where users information and
                                                notes are encrypted and
                                                stored.It is built using MERN
                                                stack.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className='list-styles pt-1'>
                                                    <li>
                                                        User information is
                                                        stored in MongoDb
                                                        datbase
                                                    </li>
                                                    <li>
                                                        Authenticated with Node
                                                        and Express
                                                    </li>
                                                    <li>
                                                        Jwt is used to identify
                                                        users
                                                    </li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_MONGODB}
                                                                alt='MongoDB'
                                                                rounded
                                                                className='image-style m-1'
                                                            ></Image>{" "}
                                                            MongoDB
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_EXPRESS}
                                                                alt='Express'
                                                                rounded
                                                                className='image-style m-1'
                                                            ></Image>{" "}
                                                            Express
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_REACT}
                                                                alt='React'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_NODE_JS}
                                                                alt='Node'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            Node
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className='d-flex justify-content-between flex-nowrap text-center'>
                                <UrlButton
                                    href='https://mymerntodolist.netlify.app'
                                    target='_blank'
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href='https://github.com/samarimam/todo-client'
                                    target='_blank'
                                >
                                    SOURCE CODE Frontend
                                </UrlButton>
                                <UrlButton
                                    href='https://github.com/samarimam/todo-backend'
                                    target='_blank'
                                >
                                    SOURCE CODE Backend
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Instagram clone */}
                    <ImageEvent
                        date='16/02/2021'
                        className='text-center'
                        text='Instagram clone'
                        src={L_Instagram}
                        alt='Instagram clone'
                    >
                        <div className='d-flex justify-content-between flex-column mt-1'>
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey='0'
                                            className='p-2 text-center accordian-main'
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse
                                            eventKey='0'
                                            className='text-left'
                                        >
                                            <Card.Body>
                                                <strong>Description:</strong>{" "}
                                                This app has user authentication
                                                with fiebase.You can make posts
                                                and share pictures with your
                                                friends.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className='list-styles pt-1'>
                                                    <li>User authentication</li>
                                                    <li>Firebase database</li>
                                                    <li>
                                                        For frontend react is
                                                        used and for backend
                                                        firebase is used.
                                                    </li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_REACT}
                                                                alt='React'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_NODE_JS}
                                                                alt='Node.js'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            Node.js
                                                        </span>
                                                    </li>
                                                    {/* <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li> */}
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_FIREBASE}
                                                                alt='Firebase'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            Firebase
                                                        </span>
                                                    </li>
                                                    {/* <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li> */}
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className='d-flex justify-content-between flex-nowrap text-center'>
                                <UrlButton
                                    href='https://instagram-clone-react-48d55.web.app/'
                                    target='_blank'
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href='https://github.com/samarimam/instagram-clone'
                                    target='_blank'
                                >
                                    SOURCE CODE
                                </UrlButton>
                                {/* <UrlButton
                  href="https://www.linkedin.com/posts/anand-kumar-jha-745798a4_react-nodejs-expressjs-activity-6712281977107603456-oH6t"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton> */}
                            </div>
                        </div>
                    </ImageEvent>

                    <ImageEvent
                        date='22/08/2021'
                        className='text-center'
                        text='Blog website'
                        src={L_BLOG}
                        alt='Blog'
                    >
                        <div className='d-flex justify-content-between flex-column mt-1'>
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey='0'
                                            className='p-2 text-center accordian-main'
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse
                                            eventKey='0'
                                            className='text-left'
                                        >
                                            <Card.Body>
                                                <strong>Description:</strong>{" "}
                                                This is a blog website where you
                                                can write blogs and store
                                                images.It is fully authenticated
                                                and uses realtime database.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className='list-styles pt-1'>
                                                    <li>
                                                        User information is
                                                        stored in MongoDb
                                                        datbase
                                                    </li>
                                                    <li>
                                                        Authenticated with octa
                                                        authentication
                                                    </li>
                                                    <li>
                                                        Blogs can be updated and
                                                        and filtered y
                                                        categories
                                                    </li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_MONGODB}
                                                                alt='MongoDB'
                                                                rounded
                                                                className='image-style m-1'
                                                            ></Image>{" "}
                                                            MongoDB
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_EXPRESS}
                                                                alt='Express'
                                                                rounded
                                                                className='image-style m-1'
                                                            ></Image>{" "}
                                                            Express
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_REACT}
                                                                alt='React'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_NODE_JS}
                                                                alt='Node'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            Node
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className='d-flex justify-content-between flex-nowrap text-center'>
                                <UrlButton
                                    href='https://happy-borg-18c560.netlify.app/'
                                    target='_blank'
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href='https://github.com/samarimam/blogfrontend'
                                    target='_blank'
                                >
                                    SOURCE CODE Frontend
                                </UrlButton>
                                <UrlButton
                                    href='https://github.com/samarimam/blogbackend'
                                    target='_blank'
                                >
                                    SOURCE CODE Backend
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: TSF donate */}
                    <ImageEvent
                        date='20/02/2021'
                        className='text-center'
                        text='TSf donate'
                        src={L_TSF}
                        alt='Tsf donate'
                    >
                        <div className='d-flex justify-content-between flex-column mt-1'>
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey='0'
                                            className='p-2 text-center accordian-main'
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse
                                            eventKey='0'
                                            className='text-left'
                                        >
                                            <Card.Body>
                                                <strong>Description:</strong>{" "}
                                                This app is a donation webapp.
                                                It has a payment integrated
                                                gateway.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className='list-styles pt-1'>
                                                    <li>
                                                        Integrated Payment
                                                        gateway
                                                    </li>
                                                    <li>Made with react</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_HTML5}
                                                                alt='HTML 5'
                                                                rounded
                                                                className='image-style m-1'
                                                            ></Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_CSS3}
                                                                alt='CSS 3'
                                                                rounded
                                                                className='image-style m-1'
                                                            ></Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_REACT}
                                                                alt='React'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            React
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className='d-flex justify-content-between flex-nowrap text-center'>
                                <UrlButton
                                    href='https://samar-tsf-donate.netlify.app/'
                                    target='_blank'
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href='https://github.com/samarimam/TSF-Donate'
                                    target='_blank'
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* {project covid tracker} */}
                    <ImageEvent
                        date='30/03/2021'
                        className='text-center'
                        text='Covid Tracker'
                        src={L_Covid}
                        alt='covid tracker'
                    >
                        <div className='d-flex justify-content-between flex-column mt-1'>
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey='0'
                                            className='p-2 text-center accordian-main'
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse
                                            eventKey='0'
                                            className='text-left'
                                        >
                                            <Card.Body>
                                                <strong>Description:</strong>
                                                Keep track on covid-19 cases all
                                                over the world.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className='list-styles pt-1'>
                                                    <li>API from disease.sh</li>
                                                    <li>
                                                        Graph for covid cases in
                                                        last 120 days
                                                    </li>
                                                    <li>
                                                        Can be installed in
                                                        Android phones using
                                                        Progressive web apps{" "}
                                                    </li>
                                                    <li>
                                                        Can track covid cases in
                                                        every country
                                                    </li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_REACT}
                                                                alt='React'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_NODE_JS}
                                                                alt='Node.js'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            Node.js
                                                        </span>
                                                    </li>
                                                    {/* <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li> */}
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_FIREBASE}
                                                                alt='Firebase'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            Firebase
                                                        </span>
                                                    </li>
                                                    {/* <li>
                          {/* <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li> */}
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className='d-flex justify-content-between flex-nowrap text-center'>
                                <UrlButton
                                    href='https://covid-tracker-586d8.web.app/'
                                    target='_blank'
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href='https://github.com/samarimam/covidtracker'
                                    target='_blank'
                                >
                                    SOURCE CODE
                                </UrlButton>
                                {/* <UrlButton
                  href="https://www.linkedin.com/posts/anand-kumar-jha-745798a4_react-materialui-fun-activity-6716765686963826688-GIpZ"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton> */}
                            </div>
                        </div>
                    </ImageEvent>
                </Events>
            </Timeline>
        </div>
    );
};

export default TimeLine;
