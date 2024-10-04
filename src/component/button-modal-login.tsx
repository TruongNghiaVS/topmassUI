import { IButtonLogin } from "@/interface/interface";
import { useModalStore } from "@/store/useModalStore";
import { getToken } from "@/utils/token";

export const WrapButtonLogin = ({
  onClick,
  children,
  className,
}: IButtonLogin) => {
  const { isOpen, openModal } = useModalStore();

  const handleClick = () => {
    const token = getToken();
    if (token) {
      onClick();
    } else {
      openModal();
    }
  };

  return (
    <div className={className + " cursor-pointer"} onClick={handleClick}>
      {children}
    </div>
  );
};
