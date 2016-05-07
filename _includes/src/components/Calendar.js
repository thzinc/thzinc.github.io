import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Calendar.css'
import moment from 'moment'
import Color from 'color'

let keySelector = d => d.format(Calendar.ISO8601);


class Calendar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			today: moment().startOf('day').add(1, 'days')
		};
	}

	getActivityColorsByEvent(activityColors, events, eventSelector, keySelector) {
		let countsByKey = Object.keys(events)
			.reduce((o, k) => {
				o[keySelector(moment(k))] = eventSelector(events[k]);
				return o;
			}, {});

		let maxCount = Object.values(countsByKey)
			.reduce((m, c) => Math.max(m, c), 0);

		let maxIndex = activityColors.length - 1;

		return Object.keys(countsByKey)
			.reduce((o, k) => {
				let scale = countsByKey[k] / maxCount * maxIndex;
				let index = Math.floor(scale);
				let opacity = scale - index;
				let firstColor = Color(activityColors[index]);
				let secondColor = Color(activityColors[Math.min(index + 1, maxIndex)]);

				o[k] = firstColor.mix(secondColor, opacity).rgbString();

				return o;
			}, {});
	}

	buildCalendar(latestDate, value, unit, scale, padding, activityColors, hoverOutlineColor, events, eventSelector, onDayClick) {
		var date = moment(latestDate);
		var currDate = moment(date).subtract(value, unit);
		
		const side = (1 + padding * 2) * scale;
		const sidePadding = padding * scale;
		const sideInner = 1 * scale;
		const labelPadding = 1.5 * scale;

		let days = [];
		let labels = [
			<text
				key="m"
				styleName="dayOfWeek"
				x={sidePadding}
				y={labelPadding - (0.4 * scale) + (side * 2)}>M</text>,
			<text
				key="w"
				styleName="dayOfWeek"
				x={sidePadding}
				y={labelPadding - (0.4 * scale) + (side * 4)}>W</text>,
			<text
				key="f"
				styleName="dayOfWeek"
				x={sidePadding}
				y={labelPadding - (0.4 * scale) + (side * 6)}>F</text>
		];

		let activityColorsByKey = this.getActivityColorsByEvent(activityColors, events, eventSelector, keySelector);

		var lastMonthLabel;
		var week = 0;
		while (currDate < date) {
			let key = keySelector(currDate);
			let dayOfWeek = currDate.day();
			if (dayOfWeek === 0) {
				week++;
			}

			var data = {
				events: events[key] || [],
				date: moment(key, Calendar.ISO8601)
			};

			let activityColor = activityColorsByKey[key] || activityColors[0];

			days.push(
				<rect
					key={key}
					styleName="day"
					fill={activityColor}
					x={side * week}
					y={side * dayOfWeek}
					width={sideInner}
					height={sideInner}
					style={{ "stroke": hoverOutlineColor }}
					onClick={onDayClick.bind(null, data)} />
			);

			var monthLabel = currDate.format("MMM");
			if (monthLabel !== lastMonthLabel) {
				labels.push(
					<text styleName="month" x={labelPadding + (side * week)} y={sideInner}>
						{monthLabel}
					</text>
				);

				lastMonthLabel = monthLabel;
			}

			// Increment while loop
			currDate.add(1, 'days');
		}

		let calendarWidth = ((week + 1) * side) + labelPadding + side;
		let calendarHeight = (7 * side) + labelPadding;

		return (
			<svg styleName="calendar" viewBox={`0 0 ${calendarWidth} ${calendarHeight}`} width="100%">
				<g styleName="labels">
					{labels}
				</g>
				<g styleName="days" transform={`translate(${labelPadding}, ${labelPadding})`}>
					{days}
				</g>
			</svg>
		);
	}

	render() {
		return (
			<div styleName="container">
				{this.buildCalendar(
					this.state.today,
					this.props.period.value,
					this.props.period.unit,
					this.props.scale,
					this.props.padding,
					this.props.activityColors,
					this.props.hoverOutlineColor,
					this.props.events,
					this.props.eventSelector,
					this.props.onDayClick)}
			</div>
		);
	}
}

Calendar.ISO8601 = Object.freeze("YYYY-MM-DD");

Calendar.PeriodUnits = Object.freeze({
	years: "years",
	quarters: "quarters",
	months: "months",
	weeks: "weeks",
	days: "days"
});

Calendar.defaultProps = {
	scale: 10,
	padding: 0.05,
	period: {
		unit: Calendar.PeriodUnits.months,
		value: 12
	},
	activityColors: [
		"#dddddd",
		"#005500",
		"#00CC00"
	],
	hoverOutlineColor: "#999999"
}

export default CSSModules(Calendar, styles);