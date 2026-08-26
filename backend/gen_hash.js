const bcrypt = require('bcryptjs');
bcrypt.hash('1Administrator$', 12).then(h => {
  console.log(h);
});
