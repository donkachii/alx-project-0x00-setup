import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, style }) => {
    return (
      <button className={`px-3 ${style}`}>
       {title}
      </button>
    )
  }
  
  export default Button;