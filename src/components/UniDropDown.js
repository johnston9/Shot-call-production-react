/* Component containing all the dropdowns and their icons used to edit
   and delete items and select categories
 * Contains:
 * The EditDeleteIcon 
 * The UniDropdown which is used throughout
   to allow edit and delete functions
 * The ProfileEditDropdown to allow 
   users to edit their profiles
 * CURRENTLY IT IS NOT DISPLAYING CORRECTLY AND NEEDS FIXING 
   FOR X, Y AND Z POSITIONING */
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/Dropdown.module.css";
import { useHistory } from "react-router-dom";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const EditDeleteIcon = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const UniDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={EditDeleteIcon} />
      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleEdit}
          aria-label="edit"
        >
          <i className="fas fa-edit" />
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleDelete}
          aria-label="delete"
        >
          <i className="fas fa-trash-alt" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const ProfileEditDropdown = ({ id }) => {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} 
      drop="left">
      <Dropdown.Toggle as={EditDeleteIcon} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          <i className="fas fa-edit" /> Edit Profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
        >
          <i className="far fa-id-card" />
          Change Username
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className="fas fa-key" />
          Change Password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};