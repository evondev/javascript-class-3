const buttonConnect = document.querySelector(".button-connect");
const modalAccount = document.querySelector("#modal-account");
const modalClose = modalAccount?.querySelector(".modal-close");
const modalOverlay = modalAccount?.querySelector(".modal-overlay");
buttonConnect?.addEventListener("click", handleOpenModalContent);
[modalOverlay, modalClose].forEach((item) =>
  item?.addEventListener("click", handleCloseModal)
);
// modalOverlay?.addEventListener("click", handleCloseModal);
// modalClose?.addEventListener("click", handleCloseModal);
function handleOpenModalContent() {
  modalAccount?.classList.add("is-active");
}
function handleCloseModal() {
  modalAccount?.classList.remove("is-active");
}
