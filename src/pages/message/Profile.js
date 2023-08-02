import React from "react";
import "./Profile.css";
import { user, states } from "../../data/account-profile";
import { useCallback, useState } from "react";
import { Button, Stack } from "@mui/material";
import AccountProfileDetails from "../../sections/AccountProfileDetails";

const Profile = () => {
  const userProfile = user;
  return (
    <>
      <div className="profile-top-area">
        <label className="profile-label">Profile</label>
      </div>
      <div className="profile-section-container">
        <div className="profile-section">
          <div className="profile-section-top">
            <img
              className="profile-avatar"
              src={userProfile.avatar}
              alt="avatar"
            />
            <div className="profile-details">
              <label className="profile-name">
                {userProfile.firstName +
                  (userProfile.middleName
                    ? " " + userProfile.middleName + " " + userProfile.lastName
                    : " " + userProfile.lastName)}
              </label>
              <label className="profile-email">{userProfile.email}</label>
              <div className="profile-edit">
                <img
                  className="profile-edit-image"
                  src={`/assets/icons/ic_edit.svg`}
                  alt="avatar"
                />
                <label className="profile-edit-label">
                  Change Profile Picture
                </label>
              </div>
            </div>
          </div>
          <div className="profile-forms">
            <AccountProfileDetails />
          </div>
        </div>

        <Stack
          spacing={2}
          direction="row"
          className="profile-bottom"
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            padding: 3,
            justifyContent: "flex-end",
            alignItems: "flex-end",
            width: "100%",
            backgroundColor: "var(--white)",
            zIndex: -1,
            boxShadow: "0px 1px 3px rgba(50, 50, 50, 0.75)",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderRadius: "10px",
              paddingX: 2,
              textTransform: "none",
              borderColor: "var(--dark-100)",
              color: "var(--dark-100)",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: "10px",
              paddingX: 3,
              backgroundColor: "var(--purple-100)",
              textTransform: "none",
            }}
          >
            Save
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default Profile;
