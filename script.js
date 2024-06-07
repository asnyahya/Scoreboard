const pContainer = document.getElementById('p-container');

const p1Display = document.getElementById('p1-display');
const p2Display = document.getElementById('p2-display');
const option = document.getElementById('scoreOption');
const resetBtn = document.getElementById('reset');

// Variabel untuk menyimpan nilai - nilai
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let gamePoint = 5;

// Menambahkan event klik pada player container
pContainer.addEventListener('click', function (e) {
  const id = e.target.id;
  // Menangani klik pada button player 1
  if (id === 'p1-button' && !isGameOver) {
    p1Score += 1; //Tambah skor 1 pada p1Score
    // Jika p1Score mencapai gamePoint, permainan berakhir
    if (p1Score === gamePoint) {
      isGameOver = true; // Ubah nilai isGameOver menjadi true untuk menghentikan permainan
    }

    p1Display.textContent = p1Score;
  }
  // Menangani event klik pada player container
  else if (id === 'p2-button' && !isGameOver) {
    p2Score += 1; // Tambah skor 1 pada p2Score
    // Jika p2Score mencapai gamePoint, permainan berakhir
    if (p2Score === gamePoint) {
      isGameOver = true; // Ubah nilai isGameOver menjadi true untuk menghentikan permainan
    }
    p2Display.textContent = p2Score;
  }
});
