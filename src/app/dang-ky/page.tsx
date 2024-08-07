import { FormRegister } from "@/component/register/form-register";
import { HeaderRegiser } from "@/component/register/header-register";

export default function Register() {
  return (
    <div>
      <HeaderRegiser />
      <FormRegister />
    </div>
  );
}

export const revalidate = 100;
