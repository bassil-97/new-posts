const pool = require("../db");

const addNewPost = async (req, res) => {
  const userId = req.params.user_id;
  const { title, description } = req.body;

  try {
    const client = await pool.connect();

    const query =
      "INSERT INTO post (user_id, title, description) VALUES ($1, $2, $3)";
    const values = [userId, title, description];

    await client.query(query, values);
    client.release();

    res.status(200).json({ message: "Post added successfully" });
  } catch (error) {
    console.error("Error adding post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
<<<<<<< HEAD
=======

>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
const getAllPosts = async (req, res) => {
  try {
    const client = await pool.connect();

<<<<<<< HEAD
    const query = "SELECT * FROM post";
=======
    const query =
      "SELECT post.id, post.title, post.description, post.likes, post.status, users.user_name FROM post JOIN users ON post.user_id = users.id";
>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b

    const result = await client.query(query);
    const allPosts = result.rows;

    client.release();

    res.status(200).json(allPosts);
  } catch (error) {
    console.error("Error retrieving posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
<<<<<<< HEAD
=======

>>>>>>> 34dd3d20efb1fdec2be500c7bc3ada991827699b
module.exports = { addNewPost, getAllPosts };
