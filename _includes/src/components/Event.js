import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Event.css'
import moment from 'moment'
import 'font-awesome/css/font-awesome.css'

class Event extends Component {
	renderTypeComponent(type) {
		return (
			<i className={`fa fa-${type}`}/>
		);
	}
	render() {
		var event = this.props.event;
		var formattedDate = moment(event.pubDate).fromNow();
		var typeComponent = this.renderTypeComponent(this.props.type);

		return (
			<article styleName="container">
				<div styleName="meta">
					<div styleName="pubDate">
						<a href={event.link}>
							{formattedDate}
						</a>
					</div>
					<div styleName="type">
						<a href={event.authorLink}>
							{typeComponent}
						</a>
					</div>
				</div>
				<div styleName="description" dangerouslySetInnerHTML={{__html: event.description}}/>
			</article>
		);
	}
}

Event.propTypes = {
	type: PropTypes.string.isRequired,
	event: PropTypes.object.isRequired
};

export default CSSModules(Event, styles);