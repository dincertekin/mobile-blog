const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const Database = require('./Database.js').Database;
let db = new Database({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'dtblog'
});

app.get('/posts/:id?', async(req, res) => {
    const postID = req.params.id;
    if (postID != undefined) {
		console.log(`[SELECT] Listing post ${postID} on response...`);
		let post = await db.query(`SELECT * FROM posts WHERE postID = '${postID}'`);
        return res.json(post);
    } else {
		console.log(`[SELECT] Listing posts on response...`);
		let posts = await db.query(`SELECT * FROM posts`);
        return res.json(posts);
    }
});

app.patch('/posts/:id', async(req, res) => {
    const postID = req.params.id;
    const body = req.body;
    if (postID != undefined && body != undefined) {
        let updateQuery = "UPDATE posts SET ";
        let updateValues = [];

        if (body.postTitle) updateValues.push(`postTitle = '${body.postTitle}'`);
        if (body.postImageURL) updateValues.push(`postImageURL = '${body.postImageURL}'`);
        if (body.postDate) updateValues.push(`postDate = '${body.postDate}'`);
        if (body.postViews) updateValues.push(`postViews = '${body.postViews}'`);
        if (body.postAuthor) updateValues.push(`postAuthor = '${body.postAuthor}'`);
        if (body.postCategory) updateValues.push(`postCategory = '${body.postCategory}'`);

        if (updateValues.length > 0) {
            updateQuery += updateValues.join(", ");
            updateQuery += ` WHERE postID = '${postID}'`;

            await db.query(updateQuery);
            console.log(`[UPDATE] Post ${postID} updated.`);
            return res.json({ message: `Post ${postID} updated successfully.` });
        } else {
            return res.json({ message: 'No valid fields to update.' });
        }
    } else {
        return res.json({ message: 'Invalid postID or body.' });
    }
});

app.post('/posts', async(req, res) => {
	let body = req.body;
	if (body != undefined) {
		let post = await db.query(`INSERT INTO posts(postTitle, postImageURL, postDate, postViews, postAuthor, postCategory) VALUES('${body.postTitle}', '${body.postImageURL}', '${body.postDate}', '${body.postViews}', '${body.postAuthor}', '${body.postCategory}')`);
		body.postID = post.insertId;
		console.log(`[INSERT] Post ${post.insertId} inserted.`);
		return res.json(body);
	}
});

app.delete('/posts/:id', async(req, res) => {
	const postID = req.params.id;
	if (postID != undefined) {
		await db.query(`DELETE FROM posts WHERE postID = '${postID}'`);
		console.log(`[DELETE] Post ${postID} deleted.`);
		console.log(`[SELECT] Listing posts on response...`);
		let posts = await db.query(`SELECT * FROM posts`);
		return res.json(posts);
	}
});

app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});