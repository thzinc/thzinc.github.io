import { storiesOf, action } from "@kadira/storybook";
import React from "react";
import SocialProfile from "./index";
import { socialProfiles } from '../../sampleData'

storiesOf("SocialProfile", module)
	.add("Sample 1", () => (
			<SocialProfile socialProfile={socialProfiles[0]} onTagClick={onTagClick} />
	))
	.add("Sample 2", () => (
			<SocialProfile socialProfile={socialProfiles[1]} onTagClick={onTagClick} />
	))
	.add("Sample 3", () => (
			<SocialProfile socialProfile={socialProfiles[2]} onTagClick={onTagClick} />
	))
	.add("Sample 4", () => (
			<SocialProfile socialProfile={socialProfiles[3]} onTagClick={onTagClick} />
	))

let socialProfile = socialProfiles[0];
let onTagClick = action('tag clicked');