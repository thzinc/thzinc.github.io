import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'
import 'font-awesome/css/font-awesome.css'

class SocialProfile extends Component {
	render() {
		var socialProfile = this.props.socialProfile;
		return (
			<a styleName="profileLink" href={socialProfile.link} target="_blank" title={socialProfile.displayName}>
				{socialProfile.iconClass ? (
					<i styleName="icon" className={`fa fa-${socialProfile.iconClass}`}/>
				) : (
					<span styleName="displayName">{socialProfile.displayName}</span>
				)}
			</a>
		);
	}
}

SocialProfile.propTypes = {
	socialProfile: PropTypes.object.isRequired,
};

export default CSSModules(SocialProfile, styles);