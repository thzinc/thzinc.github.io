import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import Calendar from './Calendar'
import moment from 'moment'
import { events } from '../sampleData'

storiesOf('Calendar', module)
	.add('Empty, defaults', () => (
		<Calendar onDayClick={onDayClick} events={emptyEvents}/>
	))
	.add('With random events, defaults', () => (
		<Calendar onDayClick={onDayClick} events={randomEvents} eventSelector={randomEventSelector}/>
	))
	.add('With random events, 3-month calendar', () => (
		<Calendar onDayClick={onDayClick} events={randomEvents} eventSelector={randomEventSelector} period={{unit: "months", value: 3}}/>
	))
	.add('With sample events, defaults', () => (
		<Calendar onDayClick={onDayClick} events={sampleEvents} eventSelector={randomEventSelector}/>
	))
	.add('With sample events, 3-month calendar', () => (
		<Calendar onDayClick={onDayClick} events={sampleEvents} eventSelector={randomEventSelector} period={{unit: "months", value: 3}}/>
	))

let onDayClick = action('Day clicked');
let randomEventSelector = e => e.length;

let emptyEvents = [];
let randomEvents = Array.from(Array(100).keys())
	.map(() => {
		return {
			date: moment().subtract(Math.random() * 365, 'days').startOf('day').format("YYYY-MM-DD"),
			permalink: 'https://google.com',
			content: 'Some content; maybe a tweet or post or commit'
		}
	})
	.reduce((o, i) => {
		o[i.date] = (o[i.date] || [])
		o[i.date].push(i);
		return o;
	}, {})

let sampleEvents = events
	.reduce((o, event) => {
		o[event.key] = o[event.key] || [];
		o[event.key].push(event);
		return o;
	}, {})