const bcrypt = require('bcryptjs');
const hash = '$2a$12$aGiznUfbjWu/vbXZR7QYxuw4U..rtVmxOyNf9H2bT7wqx8xPDo336';
const password = '1Administrator$';
bcrypt.compare(password, hash).then(valid => {
  console.log('Password valid:', valid);
  console.log('Hash:', hash);
  console.log('Password length:', password.length);
});
