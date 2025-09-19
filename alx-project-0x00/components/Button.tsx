import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
    return (
      <button className={`px-3 ${styles}`}>
       {title}
      </button>
    )
  }
  
  export default Button;