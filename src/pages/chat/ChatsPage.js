/* Page to fetch all Chats data and render the cover info 
 * Contains the Chat component to which it passes the data
   for each Chat cover 
 * Contains links to fetch all the liked chats and feed by 
   followed profiles */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { fetchMoreData } from "../../utils/utils";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import Button from "react-bootstrap/Button";
import styles from "../../styles/ChatsPage.module.css";
import NoResults from "../../assets/no-results.png";
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import ChatTop from "./ChatTop";
import TopBox from "../../components/TopBox";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import useRedirectSign from "../../hooks/RedirectChat";
import ChatCreateForm from "./ChatCreateForm";

function ChatsPage({message, filter=""} ) {
  useRedirectSign();
  const [chat, setChat] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const history = useHistory();
  const currentUser = useCurrentUser();
  // eslint-disable-next-line
  const [error, setErrors] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const { data } = await axiosReq.get(`/chat/?${filter}search=${query}`);
        setChat(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchChat();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };

  }, [filter, pathname, query, currentUser]);
  
  return (
    <div className="mx-md-5">
      <TopBox title="Chat"/>
    <div>
    <Row className="mt-3" >
    <Col xs={3} >
    <Button
      className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
      onClick={() => history.goBack()}
    >
      Back
    </Button>
    </Col>
    <Col xs={3}>
    <Button
      className={`${btnStyles.Button} ${btnStyles.Order} mb-2`}
      onClick={() => history.push("/feed")}
    >
      Feed
    </Button>
    </Col>
    <Col xs={3} className="text-center" >
    <Button
      className={`${btnStyles.Button} ${btnStyles.Order} mb-2`}
      onClick={() => history.push("/liked")}
    >
      Liked
    </Button>
    </Col>
    <Col xs={3}>
    <Button
      className={`${btnStyles.Button} ${btnStyles.Order} float-right mb-2`}
      onClick={() => history.push("/profiles")}
    >
      Profiles
    </Button>
    </Col>
    </Row>
    {/* create */}
    <Row className="px-3">
      <Col className="text-center">
      <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
          onClick={() => setShow(show => !show)} >
          Add Chat
      </Button>
      </Col>
    </Row>
    {show ? (
              <ChatCreateForm
                setShow={setShow}
              />
            ) : (
              ""
            )}
    <Row>
      <Col className="py-2 p-0 p-lg-2" 
        xs={{span: 10, offset: 1}} md={{span: 6, offset: 3}} >
        {/* search */}
        <Form
          className={`${styles.SearchBar}`}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search chat"
          />
        </Form>
        </Col>
    </Row>
    <Row>
        <Col className="py-2 p-0 p-lg-2" >
        {/* chats */}
        {hasLoaded ? (
          <>
            {chat.results.length ? (
              <InfiniteScroll 
               children={
                chat.results.map((cha) => (
                  <ChatTop key={cha.id} {...cha} setChat={setChat} />
                )) }
                dataLength={chat.results.length}
                loader={<Asset spinner />}
                hasMore={!!chat.next}
                next={() => fetchMoreData(chat, setChat)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
    </Row>
    </div>
    </div>
  );
}

export default ChatsPage;