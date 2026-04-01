const GovHeader = () => {
  return (
    <header className="bg-gov-bar text-gov-bar-foreground">
      <div className="container flex items-center justify-between h-10 text-sm">
        <span className="font-bold tracking-wide">gov.br</span>
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium uppercase tracking-wider">
          <span className="cursor-pointer hover:underline">Comunica BR</span>
          <span className="cursor-pointer hover:underline">Acesso à Informação</span>
          <span className="cursor-pointer hover:underline">Participe</span>
          <span className="cursor-pointer hover:underline">Legislação</span>
          <span className="cursor-pointer hover:underline">Órgãos do Governo</span>
        </nav>
      </div>
    </header>
  );
};

export default GovHeader;
