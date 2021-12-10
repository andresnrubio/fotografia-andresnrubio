import "./FormInput.css";

export const FormInput = ({ setBuyer, buyer, field }) => {
  const handleBuyerChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <input type="text" name={field} onChange={handleBuyerChange} />
    </div>
  );
};
