const db = connect("mongodb://localhost:27017/quiz");

db.users.drop();

// password = username
db.users.insertMany([
  {
    username: "anishakdeol",
    password_digest:
      "$2a$10$tCppT1FG0aaUBFeYpFfDX..sitL9Hj4sHGyZHh6r5OUTLEvAcIorq",
  },
  {
    username: "bethan98",
    password_digest:
      "$2a$10$1r.PF9X3eD8KmZmIBdrK5ufokHBePZrNXv564aKijge2rZDp0hDju",
  },
  {
    username: "peterlydev",
    password_digest:
      "$2a$10$trsIf9zyAe.xiKQpanD5jOtD3if0lY.h4IQp/JfEsYCeL8m6rVHIe",
  },
  {
    username: "anwar",
    password_digest:
      "$2a$10$ovlXEPRhziLESsFPZaxlNenr9f6orAFcVX0ed9MeEhEBJXBmybO0u",
  },
  {
    username: "saruThy",
    password_digest:
      "$2a$10$tr7TlkmfM8CAsbGCbA.ooe0GRAhjilm0eqhe6Ed3svL8BJCbCRVGK",
  },
]);

db.scores.drop();

db.scores.insertMany([
  { topic: "maths", username: "anishakdeol", score: 25 },
  { topic: "physics", username: "bethan98", score: 20 },
  { topic: "movies", username: "anwar", score: 9 },
  { topic: "animals", username: "peterlydev", score: 22 },
  { topic: "movies", username: "saruThy", score: 19 },

  { topic: "maths", username: "bethan98", score: 25 },
  { topic: "physics", username: "anwar", score: 24 },
  { topic: "movies", username: "peterlydev", score: 18 },
  { topic: "animals", username: "saruThy", score: 1 },
  { topic: "movies", username: "anishakdeol", score: 5 },
]);
