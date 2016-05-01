import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Calendar.css'
import moment from 'moment'

class Calendar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			today: moment().startOf('day')
		};
	}

	buildCalendar(date, scale, padding, events, onDayClick) {
		const iso8601 = "YYYY-MM-DD";
		var currDate = moment(date).subtract(12, 'months');
		const side = (1 + padding * 2) * scale;
		const sidePadding = padding * scale;
		const sideInner = 1 * scale;

		let days = [];
		let maxEventsPerDay = Object.keys(events)
			.map(k => events[k])
			.reduce((max, e) => Math.max(max, e.length), 0);

		var week = 0;
		while (currDate < date) {
			let key = currDate.format(iso8601);
			let dayOfWeek = currDate.day();
			if (dayOfWeek === 0) {
				week++;
			}

			var data = {
				events: events[key] || [],
				date: moment(key, iso8601)
			};

			let opacity = maxEventsPerDay > 0 ? data.events.length / maxEventsPerDay : 0;

			days.push(
				<g key={key} transform={`translate(${side * week}, ${side * dayOfWeek})`}>
					<rect styleName="day" x={sidePadding} y={sidePadding} width={sideInner} height={sideInner} onClick={onDayClick.bind(null, data)}/>
					<rect styleName="day-activity" opacity={opacity} x={sidePadding} y={sidePadding} width={sideInner} height={sideInner} onClick={onDayClick.bind(null, data)}/>
				</g>
			);
			
			currDate.add(1, 'days');
		}

		return (
			<svg styleName="calendar" viewBox={`0 0 ${53 * side} ${7 * side}`} width="100%">
				{days}
			</svg>
		);
	}

	render() {
		return (
			<div styleName="container">
				{this.buildCalendar(this.state.today, this.props.scale, this.props.padding, this.props.events, this.props.onDayClick)}
			</div>
		);
	}
}

Calendar.defaultProps = {
	scale: 10,
	padding: 0.05
}

export default CSSModules(Calendar, styles);