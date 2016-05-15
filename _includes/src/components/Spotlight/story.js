import { storiesOf, action } from "@kadira/storybook";
import React from "react";
import Spotlight from "./index";
import { events } from '../../sampleData'

storiesOf("Spotlight", module)
	.add("Defaults", () => (
			<Spotlight events={events} />
	))