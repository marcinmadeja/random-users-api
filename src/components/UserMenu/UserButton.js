import React from 'react';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';

const UserButton = ({
  loggedUser,
  anchorEl,
  handleClick,
}) => {
  const getUserPhotoUrl = () => {
    return loggedUser.picture.large;
  };

  const userPhotoUrl = getUserPhotoUrl();

  return (
    <IconButton
      onClick={handleClick}
      aria-label="More"
      aria-owns={anchorEl ? 'user-menu' : null}
      aria-haspopup="true"
    >
      <Avatar
        alt=""
        src={userPhotoUrl}
      />
    </IconButton>
  );
};

export default UserButton;
