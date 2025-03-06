import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  description: z.string().min(10).max(100),
  amount: z.number().positive(),
  category: z.string().min(1, "Category is required")
});

type FormData = z.infer<typeof schema>;

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div>
          <label htmlFor="name">description</label>
          <input id="description" {...register("description")} />
          {errors.description && <p>{errors.description.message}</p>}
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            {...register("amount", { valueAsNumber: true })}
          />
          {errors.amount && <p>{errors.amount.message}</p>}
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <input
            type="search"
            id="category"
            list="category-options"
            {...register("category")}
          />
          <datalist id="category-options">
            <option value="Groceries" />
            <option value="Entertainment" />
            <option value="Bills" />
            <option value="Transportation" />
          </datalist>
          {errors.category && <p>{errors.category.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
