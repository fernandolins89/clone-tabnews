import database from "../../../../infra/database.js";

async function status(request, response) {
  try {
    const result = await database.query("SELECT 1 + 1 as sum;");
    console.log("Database query result:", result.rows);

    response.status(200).json({ chave: "valor", sum: result.rows[0].sum });
  } catch (error) {
    console.error("Erro ao acessar o banco de dados:", error);

    response.status(500).json({ error: "Erro interno no servidor" });
  }
}

export default status;
