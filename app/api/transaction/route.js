import { getTransaction } from "@/actions/transaction";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return Response.json({ error: "Missing transaction id" }, { status: 400 });
  }

  const transaction = await getTransaction(id);
  return Response.json(transaction);
}
