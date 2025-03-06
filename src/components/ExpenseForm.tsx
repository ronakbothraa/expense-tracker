import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import categories from "../categories";

const schema = z.object({
  description: z.string().min(10).max(100),
  amount: z.number().positive(),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Invalid category" }),
  }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  updateData: (data: FormData) => void;
}

const ExpenseForm = ({ updateData }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <form onSubmit={handleSubmit((data) => updateData(data))}>
        <div>
          <label htmlFor="name">description</label>
          <input
            {...register("category")}
            id="description"
            {...register("description")}
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
          <input
            {...register("amount")}
            id="amount"
            type="number"
            {...register("amount", { valueAsNumber: true })}
          />
          {errors.amount && <p>{errors.amount.message}</p>}
        </div>
        <div>
          <select {...register("category")} name="category" id="category">
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && <p>{errors.category.message}</p>}
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </>
  );
};

export default ExpenseForm;
