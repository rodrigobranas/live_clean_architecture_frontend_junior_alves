import express from "express";
import cors from "cors";
import pgp from "pg-promise";
const app = express();
app.use(cors());

const connection = pgp()("postres://postgres:123456@localhost:5432/app");

app.get("/todos", async function (req, res) {
	const todos = await connection.query("select * from branas.todo", []);
	res.json(todos);
});

app.listen(3000);