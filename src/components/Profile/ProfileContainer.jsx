import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as axios from 'axios';
import Profile from './Profile';
import { setFriendProfile } from '../../redux/profile-reducer';

class ProfileContainer extends Component {
  componentDidMount() {
    const { setFriendProfile, match: { params } } = this.props;

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userId}`)
      .then(res => setFriendProfile(res.data));
  }

  render() {
    return <Profile {...this.props.profile} />;
  }
}

ProfileContainer.propTypes = {
  profile: PropTypes.object,
  match: PropTypes.object,
  setFriendProfile: PropTypes.func
};

const mapStateToProps = state => ({ ...state.profilePage });

const mapDispatchToProps = {
  setFriendProfile
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);
