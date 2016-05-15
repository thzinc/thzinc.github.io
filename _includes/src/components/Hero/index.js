import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

class Hero extends Component {
	render() {
		var imageStyle = {
			backgroundImage: `url(${this.props.imageUrl})`
		};
		return (
			<article styleName="container">
				<div styleName="image" style={imageStyle}>
					<h1 styleName="heading">{this.props.heading}</h1>
					<i styleName="view-more"/>
				</div>
				<div styleName="text">
					{this.props.content}
				</div>
			</article>
		);
	}
}

Hero.propTypes = {
	heading: PropTypes.string.isRequired,
	content: PropTypes.element.isRequired,
	image: PropTypes.string.isRequired,
};

export default CSSModules(Hero, styles);