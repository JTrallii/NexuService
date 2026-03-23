import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold mx-auto mb-4 text-xl">S</div>
          <h1 className="text-2xl font-bold text-slate-900">Bem-vindo de volta</h1>
          <p className="text-slate-500">Entre com suas credenciais para acessar</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="seu@email.com" required />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Senha</Label>
              <a href="#" className="text-xs text-indigo-600 hover:underline">Esqueceu a senha?</a>
            </div>
            <Input id="password" type="password" placeholder="••••••••" required />
          </div>
          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 py-6">
            Entrar no sistema
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-600">
          Não tem uma conta?{" "}
          <Link to="/register" className="text-indigo-600 font-semibold hover:underline">
            Cadastre-se agora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;