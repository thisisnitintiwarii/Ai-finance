import { getUserAccounts } from "@/actions/dashborad.js";
import { defaultCategories } from "@/data/categories.js";
import { AddTransactionForm } from "../_componenets/transaction-form";
import { getTransaction } from "@/actions/transaction";
import { headers } from "next/headers";

export default async function AddTransactionPage() {
  const accounts = await getUserAccounts();

  // ✅ Get x-url or fallback to Referer or fallback to dummy URL
  const headersList = await headers();
  const fullUrl = headersList.get("x-url") ||
                  headersList.get("referer") ||
                  "http://localhost:3000/transaction/create";

  let editId = null;
  try {
    const url = new URL(fullUrl);
    editId = url.searchParams.get("edit");
  } catch (e) {
    console.error("Invalid URL in AddTransactionPage:", fullUrl);
  }

  let initialData = null;
  if (editId) {
    try {
      initialData = await getTransaction(editId);
    } catch (e) {
      console.error("Failed to fetch transaction:", e);
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-5">
      <div className="flex justify-center md:justify-normal mb-8">
        <h1 className="text-5xl gradient-title">Add Transaction</h1>
      </div>
      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData}
      />
    </div>
  );
}
