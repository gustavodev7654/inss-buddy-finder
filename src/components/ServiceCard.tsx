import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  label: string;
}

const ServiceCard = ({ icon: Icon, label }: ServiceCardProps) => {
  return (
    <button className="flex items-center gap-3 bg-card text-card-foreground rounded-lg border border-border px-5 py-4 hover:shadow-md hover:border-primary/30 transition-all duration-200 text-left w-full">
      <Icon className="h-6 w-6 text-primary shrink-0" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

export default ServiceCard;
