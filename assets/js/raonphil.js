function openModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const fullImageUrl = imgElement.dataset.full;

  modal.classList.add("show");
  modalImg.src = fullImageUrl;
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");

  modal.classList.remove("show");
  modalImg.src = ""; // 메모리 해제
}