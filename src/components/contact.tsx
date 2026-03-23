"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Data transmitted:", formData);
    alert("TRANSMISSÃO CONCLUÍDA. AGUARDE RESPOSTA.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-[#0D0D0D] py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-[#00FF41] mb-4">04. CANAL_DE_COMUNICACAO</h2>
            <p className="text-[#00FF41]/60 font-mono text-xs uppercase tracking-widest">
              ESTABELECENDO CONEXÃO PONTO-A-PONTO
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#00FF41]/5 p-8 border border-[#00FF41]/20 glow-border">
              <h3 className="text-sm font-bold mb-8 text-[#00FF41] uppercase tracking-widest">
                > ENVIAR_PACOTE_DE_DADOS
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-mono mb-2 text-[#00FF41]/60 uppercase">
                    IDENTIFICAÇÃO_USUÁRIO
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-[#00FF41]/20 px-4 py-3 text-[#00FF41] font-mono text-sm focus:outline-none focus:border-[#00FF41] transition-all"
                    placeholder="NOME_COMPLETO"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono mb-2 text-[#00FF41]/60 uppercase">
                    ENDEREÇO_IP_EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-[#00FF41]/20 px-4 py-3 text-[#00FF41] font-mono text-sm focus:outline-none focus:border-[#00FF41] transition-all"
                    placeholder="EMAIL@HOST.COM"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono mb-2 text-[#00FF41]/60 uppercase">
                    CONTEÚDO_DA_MENSAGEM
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-black border border-[#00FF41]/20 px-4 py-3 text-[#00FF41] font-mono text-sm focus:outline-none focus:border-[#00FF41] transition-all resize-none"
                    placeholder="DESCREVA_O_PROJETO_OU_OPORTUNIDADE..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#00FF41] hover:bg-[#00FF41]/80 text-black font-bold rounded-none py-6 btn-scan"
                >
                  TRANSMITIR_DADOS
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 font-mono">
              <div>
                <h3 className="text-sm font-bold mb-8 text-[#00FF41] uppercase tracking-widest">
                  > PONTOS_DE_ACESSO
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="p-2 border border-[#00FF41]/20 text-[#00FF41] group-hover:border-[#00FF41] transition-all">
                      <Mail size={18} />
                    </div>
                    <a href="mailto:jason.tralli@example.com" className="text-xs text-slate-400 hover:text-[#00FF41] transition-colors">
                      jason.tralli@example.com
                    </a>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="p-2 border border-[#00FF41]/20 text-[#00FF41] group-hover:border-[#00FF41] transition-all">
                      <Linkedin size={18} />
                    </div>
                    <a href="#" className="text-xs text-slate-400 hover:text-[#00FF41] transition-colors">
                      linkedin.com/in/jasontralli
                    </a>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="p-2 border border-[#00FF41]/20 text-[#00FF41] group-hover:border-[#00FF41] transition-all">
                      <Github size={18} />
                    </div>
                    <a href="#" className="text-xs text-slate-400 hover:text-[#00FF41] transition-colors">
                      github.com/jasontralli
                    </a>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="p-2 border border-[#00FF41]/20 text-[#00FF41] group-hover:border-[#00FF41] transition-all">
                      <MapPin size={18} />
                    </div>
                    <span className="text-xs text-slate-400">
                      REMOTE_ACCESS_ONLY
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-[#00FF41]/10 bg-[#00FF41]/5">
                <h4 className="text-[10px] font-bold text-[#00FF41] mb-2 uppercase">
                  CURRICULUM_VITAE.PDF
                </h4>
                <p className="text-[10px] text-slate-500 mb-4">
                  DOWNLOAD_AVAILABLE_FOR_AUTHORIZED_PERSONNEL
                </p>
                <Button variant="outline" className="w-full border-[#00FF41]/30 text-[#00FF41] hover:bg-[#00FF41]/10 rounded-none text-[10px]">
                  GET_FILE_STREAM
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;