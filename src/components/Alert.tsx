import { TAlertColors } from "../interfaces";

interface IAlertProps {
  message: string;
  color: TAlertColors;
}

export function Alert({ message, color }: IAlertProps) {
  const computedClass = color === "green" ? "alert-green" : "alert-red";

  return <div className={`alert b-radius-4 box-shadow ${computedClass}`}>{message}</div>;
}
