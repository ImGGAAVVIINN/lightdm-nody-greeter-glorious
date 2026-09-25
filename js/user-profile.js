class UserProfile {
	constructor() {
		this._imageParentRotate = document.querySelector("#image-profile-parent");
		this._labelUserName = document.querySelector("#label-user-name");
		this._inputPassword = document.querySelector("#input-password");
		this._imageParentRotate.style.setProperty("animation-play-state", "paused");
		this._profileAnimRunning = false;
		this._init();
	}

	// Register events
	_init() {
		this._onClickEvent();
		this._animationEndEvent();
	}

	// Rotate profile picture
	rotateProfilePicture() {
		// Remove anim class
		this._imageParentRotate.classList.remove("image-profile-rotate");
		// Triggering reflow
		void this._imageParentRotate.offsetWidth;
		// Re-add animation class
		this._imageParentRotate.classList.add("image-profile-rotate");
		// Start rotation animation
		this._imageParentRotate.style.setProperty("animation-play-state", "running");
		this._profileAnimRunning = true;
	}

	// Re-enable animation after death
	_animationEndEvent() {
		this._imageParentRotate.addEventListener(
			"animationend",
			() => {
				this._profileAnimRunning = false;
			}
		);
	}

	// Show greeter (password input) - allow login without opening sidebar
	_showGreeter() {
		if (this._profileAnimRunning) return;
		this.rotateProfilePicture();
		this._inputPassword.blur();
		greeterScreen._showGreeter();
	}

	// On click event - left click shows greeter for quick login
	_onClickEvent() {
		this._imageParentRotate.addEventListener(
			"click",
			() => {
				this._showGreeter();
			}
		);
		this._labelUserName.addEventListener(
			"click",
			() => {
				this._showGreeter();
			}
		);
	}

	getProfileAnimationStatus() {
		return this._profileAnimRunning;
	}
}
