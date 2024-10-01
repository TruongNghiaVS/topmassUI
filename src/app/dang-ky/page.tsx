import { AuthorizeLayout } from "@/component/authorize";
import { FormRegister } from "@/component/register/form-register";

export default function Register() {
  return (
    <div className="bg-white ">
      <AuthorizeLayout>
        <FormRegister />
      </AuthorizeLayout>
    </div>
  );
}

export const revalidate = 100;
