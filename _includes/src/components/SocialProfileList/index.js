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
					<SocialProfile socialProfile={socialProfile} onTagClick={this.props.onTagClick}/>
				))}
			</div>
		);
	}
}

SocialProfileList.propTypes = {
	socialProfiles: PropTypes.array.isRequired,
	onTagClick: PropTypes.func.isRequired,
};

export default CSSModules(SocialProfileList, styles);