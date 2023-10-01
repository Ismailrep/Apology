const backgroundMusic = document.getElementById('backgroundMusic');
const apologyBtn = document.getElementById('apologyBtn');
const musicBtn = document.getElementById('musicBtn');

// Putar musik
function playAudio() {
  backgroundMusic.play().catch((error) => {
    console.error('Error playing background music: ', error);
  });
}

musicBtn.addEventListener('click', function () {
  playAudio();
  // Sembunyikan tombol setelah audio dimulai
  musicBtn.style.display = 'none';
});

apologyBtn.addEventListener('click', function () {
  playAudio();
  // Sembunyikan tombol setelah audio dimulai
  apologyBtn.style.display = 'none';
  // Tampilkan pesan maaf
  const apologyMessage = document.querySelector('.apology-message');
  apologyMessage.classList.remove('hidden');
});
