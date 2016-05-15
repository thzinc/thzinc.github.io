import { storiesOf, action } from "@kadira/storybook";
import React from "react";
import SocialProfileList from "./index";
import { socialProfiles } from '../../sampleData'

storiesOf("SocialProfileList", module)
	.add("Defaults", () => (
		<SocialProfileList socialProfiles={socialProfiles} onTagClick={onTagClick} />
	))

let onTagClick = action('tag clicked');