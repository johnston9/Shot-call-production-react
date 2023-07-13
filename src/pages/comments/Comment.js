/* Component to display Comments on the ChatPage */
import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import { UniDropdown } from "../../components/UniDropDown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Comment.module.css";
import CommentEditForm from "./CommentEditForm";
import { useRedirect } from '../../hooks/Redirect';

const Comment = (props) => {
  useRedirect("loggedOut");
  const { profile_id, 
    profile_image, owner, 
    updated_at, 
    content,
    id,
    setChat,
    setComments, 
    } = props;

    const [showEditForm, setShowEditForm] = useState(false);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setChat((prevChat) => ({
        results: [
          {
            ...prevChat.results[0],
            comments_count: prevChat.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {}
  };

  return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <UniDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
};

export default Comment;