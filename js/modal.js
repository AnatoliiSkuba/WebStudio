(() => {
	const refs = {
		openmodalBtn: document.querySelector("[data-modal-open]"),
		closemodalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
	};

	refs.openmodalBtn.addEventListener("click", togglemodal);
	refs.closemodalBtn.addEventListener("click", togglemodal);

	function togglemodal() {
		refs.modal.classList.toggle("backdrop--hidden");
	}
})();
