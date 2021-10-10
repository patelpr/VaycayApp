exports.DATABASE_URL =
  process.env.DATABASE_URL ||
  global.DATABASE_URL ||
  "mongodb+srv://adminvaycay:HT7zu3Aap3XZU0R7@pickapot.7i7cs.mongodb.net/applicants?retryWrites=true&w=majority";
exports.options=process.env.OPTIONS||{cloud_name: 'dhuxkntcu', api_key: '697694359827511', api_secret: 'WIYHQFBfqdA_1SXe_FVdh3OnxK4'} 
exports.PORT = process.env.PORT || 8080;
