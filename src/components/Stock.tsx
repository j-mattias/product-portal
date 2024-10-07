interface IStockProps {
  stock: number;
  className?: string;
}

export function Stock({ stock, className }: IStockProps) {
  return (
    <div className={`stock ${className ? className : ""}`}>
      <i className="fa-solid fa-box"></i>
      <p className="stock__text">{stock}</p>
    </div>
  );
}
