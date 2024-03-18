import DogDialog from "./DogDialog";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <DogDialog />
      {children}
    </>
  );
};

export default Layout;
