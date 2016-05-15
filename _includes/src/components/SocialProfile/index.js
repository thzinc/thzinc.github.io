import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'
import 'font-awesome/css/font-awesome.css'

class SocialProfile extends Component {
	render() {
		var socialProfile = this.props.socialProfile;
		return (
			<div styleName="container">
				<div styleName="profile">
					<a styleName="profileLink" href={socialProfile.link} target="_blank">
						<i styleName="icon" className={`fa fa-${socialProfile.iconClass}`}/>
						<span styleName="displayName">{socialProfile.displayName}</span>
					</a>
				</div>
				<div styleName="tags">
					{socialProfile.tags.map(tag => (
						<span styleName="tag" onClick={this.props.onTagClick.bind(null, tag)}>
							{tag}
						</span>
					))}
				</div>
			</div>
		);
	}
}

SocialProfile.propTypes = {
	socialProfile: PropTypes.object.isRequired,
	onTagClicked: PropTypes.func.isRequired,
};

export default CSSModules(SocialProfile, styles);