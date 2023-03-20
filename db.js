const { Pool } = require('pg');

const connectionString = 'postgres://bishop_397f52:1pwKkabu3ml15Q6psy7XFDsruI2KcJAVSx0OK03F1MFAOSP9o9URWGPYe6Z8Inxu@fl0-shared-db-2-pooler.fl0-db:5432/handfish_8a5f12';

const pool = new Pool({
  connectionString: connectionString
});

module.exports = pool;
