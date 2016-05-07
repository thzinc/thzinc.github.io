import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import Event from './Event'
import moment from 'moment'
import { twitterEvent, tumblrEvent } from '../sampleData'

storiesOf('Event', module)
	.add('Twitter event', () => (
		<Event type={twitterEvent.type} event={twitterEvent}/>
	))
	.add('Tumblr event', () => (
		<Event type={tumblrEvent.type} event={tumblrEvent}/>
	))
