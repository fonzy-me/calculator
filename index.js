const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  if (b === 0) {
    return 'Error: Pembagian dengan nol';
  }
  return a / b;
}

function hitung(operasi, a, b) {
  switch (operasi) {
    case '+':
      return tambah(a, b);
    case '-':
      return kurang(a, b);
    case '*':
      return kali(a, b);
    case '/':
      return bagi(a, b);
    default:
      return 'Error: Operasi tidak dikenali';
  }
}

rl.question('Masukkan operasi (+, -, *, /): ', (operasi) => {
  rl.question('Masukkan nilai pertama: ', (nilai1) => {
    rl.question('Masukkan nilai kedua: ', (nilai2) => {
      const a = parseFloat(nilai1);
      const b = parseFloat(nilai2);
      const hasil = hitung(operasi, a, b);
      console.log('Hasil:', hasil);
      rl.close();
    });
  });
});
