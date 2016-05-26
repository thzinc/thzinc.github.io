import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'
import SocialProfile from '../SocialProfile'

class SocialProfileList extends Component {
	render() {
		var socialProfiles = this.props.socialProfiles;
		return (
			<div styleName="container">
				{socialProfiles.map(socialProfile => (
					<div styleName="socialProfile">
						<SocialProfile socialProfile={socialProfile} onTagClick={this.props.onTagClick}/>
					</div>
				))}
			</div>
		);
	}
}

SocialProfileList.propTypes = {
	socialProfiles: PropTypes.array.isRequired,
};

export default CSSModules(SocialProfileList, styles);