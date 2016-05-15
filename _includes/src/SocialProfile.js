class SocialProfile {
	constructor(displayName, link, iconClass, tags) {
		this.iconClass = iconClass || "question-circle-o";
		this.displayName = displayName;
		this.link = link;
		this.tags = tags || [];
	}
}

export default SocialProfile;