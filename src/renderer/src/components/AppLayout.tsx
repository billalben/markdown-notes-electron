import { forwardRef, HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

type AppLayoutProps = {
  className?: string;
  children: React.ReactNode;
};

export const RootLayout = ({ className, children, ...props }: AppLayoutProps) => (
  <main className={twMerge('flex flex-row h-screen', className)} {...props}>
    {children}
  </main>
);

export const Sidebar = ({ className, children, ...props }: AppLayoutProps) => {
  return (
    <aside className={twMerge('w-[250px] mt-5 h-[100vh + 10px] overflow-auto', className)} {...props}>
      {children}
    </aside>
  );
};

export const Content = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={twMerge('flex-1 h-full overflow-auto', className)} {...props}>
    {children}
  </div>
));

Content.displayName = 'Content';
