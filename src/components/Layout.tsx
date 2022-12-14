import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex flex-col items-center h-screen'>
      <main className='w-full max-w-3xl flex-grow'>
        <Header />
        <div className='p-4'>
          <div className='prose lg:prose-lg min-w-full'>{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
