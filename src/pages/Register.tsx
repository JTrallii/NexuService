import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold mx-auto mb-4 text-xl">S</div>
          <h1 className="text-2xl font-bold text-slate-900">Crie sua conta</h1>
          <p className="text-slate-500">Comece a gerenciar seus serviços hoje</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo</Label>
            <Input id="name" placeholder="João Silva" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail Profissional</Label>
            <Input id="email" type="email" placeholder="joao@empresa.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" placeholder="Mínimo 8 caracteres" required />
          </div>
          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 py-6 mt-4">
            Criar minha conta
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-600">
          Já possui uma conta?{" "}
          <Link to="/login" className="text-indigo-600 font-semibold hover:underline">
            Fazer login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;