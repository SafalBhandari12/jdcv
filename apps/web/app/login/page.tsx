import AuthForm from "@/components/AuthForm";
import Navbar from "@/components/Navbar";

export default function LoginPage() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-200'>
      <AuthForm />
    </div>
  );
}
