import GovHeader from "@/components/GovHeader";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import {
  PlusCircle,
  Percent,
  Accessibility,
  CalendarDays,
  Building2,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import { useState, useEffect } from "react";

const bannerMessages = [
  "Recebeu notificação de desconto associativo não autorizado? Solicite análise.",
  "Salas multissensoriais nas agências do INSS.",
  "Informe todos os dados para agilizar seu pedido de aposentadoria.",
  "Esqueceu a senha? Aprenda a recuperar.",
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerMessages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <GovHeader />

      {/* Hero */}
      <section className="bg-card border-b border-border">
        <div className="container py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">INSS</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Meu INSS</h1>
              <p className="text-muted-foreground text-sm">Conheça e acesse os serviços do INSS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Carousel */}
      <section className="container py-6">
        <div className="relative bg-primary/5 rounded-xl overflow-hidden h-24 flex items-center">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + bannerMessages.length) % bannerMessages.length)}
            className="absolute left-2 z-10 text-primary hover:text-primary/70 transition"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="px-12 text-center w-full">
            <p className="text-sm text-foreground font-medium">{bannerMessages[currentSlide]}</p>
          </div>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % bannerMessages.length)}
            className="absolute right-2 z-10 text-primary hover:text-primary/70 transition"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-3">
          {bannerMessages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                i === currentSlide ? "bg-primary w-4" : "bg-border"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Download Button */}
      <section className="container py-16 flex flex-col items-center gap-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center">
          BAIXE AGORA E CADASTRE-SE
        </h2>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-3xl px-48 py-24 text-6xl font-bold shadow-2xl">
          Download
        </Button>
      </section>

      {/* Serviços sem senha */}
      <section className="container pb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">Serviços sem senha</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <ServiceCard icon={PlusCircle} label="Novo Pedido" />
          <ServiceCard icon={Percent} label="Taxas de Empréstimo Consignado" />
          <ServiceCard icon={Accessibility} label="Sala Multissensorial" />
          <ServiceCard icon={CalendarDays} label="Calendário de Pagamento" />
          <ServiceCard icon={Building2} label="Encontre uma Agência" />
          <ServiceCard icon={MoreHorizontal} label="Mais Serviços" />
        </div>
      </section>

      {/* Precisa de ajuda */}
      <section className="container pb-12">
        <h2 className="text-lg font-semibold text-foreground mb-4">Precisa de ajuda?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card rounded-xl border border-border p-6 flex items-start gap-4">
            <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
              <MessageCircle className="h-7 w-7 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Converse com a Helô</h3>
              <p className="text-sm text-muted-foreground mt-1">Olá, sou a assistente virtual do INSS</p>
              <button className="text-primary text-sm font-medium mt-3 flex items-center gap-1 hover:underline">
                Iniciar Atendimento <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="bg-card rounded-xl border border-border p-6 flex items-start gap-4 cursor-pointer hover:shadow-md transition">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <HelpCircle className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Outros canais de Ajuda</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Encontre uma agência, Perguntas frequentes, Ouvidoria
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gov-bar text-gov-bar-foreground py-10">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-bold mb-3 uppercase text-xs tracking-wider">Serviços</h4>
            <ul className="space-y-2 text-gov-bar-foreground/80">
              <li className="hover:underline cursor-pointer">Emitir Guia de Pagamento (GPS)</li>
              <li className="hover:underline cursor-pointer">Comunicação de Acidente (CAT)</li>
              <li className="hover:underline cursor-pointer">Calendário de Pagamento</li>
              <li className="hover:underline cursor-pointer">Encontre uma Agência</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 uppercase text-xs tracking-wider">Inscrição</h4>
            <ul className="space-y-2 text-gov-bar-foreground/80">
              <li className="hover:underline cursor-pointer">Informações sobre Inscrição</li>
              <li className="hover:underline cursor-pointer">Como preencher a GPS</li>
              <li className="hover:underline cursor-pointer">Tipos de Filiação</li>
              <li className="hover:underline cursor-pointer">Formas de Pagar</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 uppercase text-xs tracking-wider">Aplicativo</h4>
            <ul className="space-y-2 text-gov-bar-foreground/80">
              <li className="hover:underline cursor-pointer">Baixar na Play Store</li>
              <li className="hover:underline cursor-pointer">Baixar na Apple Store</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 uppercase text-xs tracking-wider">Suporte</h4>
            <ul className="space-y-2 text-gov-bar-foreground/80">
              <li className="hover:underline cursor-pointer">Perguntas Frequentes</li>
              <li className="hover:underline cursor-pointer">Ouvidoria</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
