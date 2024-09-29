import { LoginComponent } from '@/pages/Login/LoginComponent';
import { MyContextProvider } from '@/store/Context';

export default function Login() {
  return (
    <MyContextProvider>
      <LoginComponent />
    </MyContextProvider>
  );
}
