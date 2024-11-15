db.createUser({
    user: "admin",
    pwd: "password",
    roles: [ { role: "readWrite", db: "Sundaland" } ]
  });
  db.createCollection("Products");
  db.createCollection("Purchases");
  
  