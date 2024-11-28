import { AuthorizeLayout } from "@/component/authorize";
import { LoginForm } from "@/component/login";

export default function LoginOverivew() {
  return (
    <div>
      <AuthorizeLayout>
        <LoginForm />
      </AuthorizeLayout>
    </div>
  );
}
