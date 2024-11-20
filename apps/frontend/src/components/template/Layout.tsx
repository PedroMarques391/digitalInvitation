import Logo from "./Logo";

export interface ILayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: ILayoutProps): React.JSX.Element {
  return (
    <div
      className="
        flex flex-col items-center py-10 min-h-screen
        bg-[url('/background.png')] bg-cover
      "
    >
      <Logo />
      <main
        className={`
            flex-1 flex flex-col justify-center py-10
            container ${className}
        `}
      >
        {children}
      </main>
    </div>
  );
}
