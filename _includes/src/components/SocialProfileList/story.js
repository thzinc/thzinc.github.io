import { storiesOf, action } from "@kadira/storybook";
import React from "react";
import SocialProfileList from "./index";
import { socialProfiles } from '../../socialProfiles'

storiesOf("SocialProfileList", module)
	.add("Defaults", () => (
		<SocialProfileList socialProfiles={socialProfiles} />
	))