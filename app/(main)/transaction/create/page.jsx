
import { getUserAccounts } from "@/actions/dashborad.js";
import { defaultCategories } from "@/data/categories";
import { getTransaction } from "@/actions/transaction";
import { AddTransactionForm } from "../_componenets/transaction-form";



export default async function AddTransactionPage({ searchParams }) {
  const accounts = await getUserAccounts();

  let initialData = null;

  return (
    <div className="max-w-3xl mx-auto px-5">
      <div className="flex justify-center md:justify-normal mb-8">
        <h1 className="text-5xl gradient-title ">Add Transaction</h1>
      </div>
      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        initialData={initialData}
      />
    </div>
  );
}