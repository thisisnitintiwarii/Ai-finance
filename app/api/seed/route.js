import { seedTransactions } from "@/actions/seed";
export async function GET(params) {
    const result = await seedTransactions();
    return Response.json(result);
}