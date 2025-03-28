import categories from "../categories";

interface Props {
  handleSelect: (id: string) => void;
}

const ExpenseFilter = ({ handleSelect }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => handleSelect(event.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
