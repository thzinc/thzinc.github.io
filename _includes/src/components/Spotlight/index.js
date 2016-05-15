import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

class Spotlight extends Component {
	render() {
		return (
			<div styleName="container">
				<article styleName="primary">
				</article>
				<div styleName="secondaries">

				</div>
			</div>
		);
	}
}

Spotlight.propTypes = {
};

export default CSSModules(Spotlight, styles);