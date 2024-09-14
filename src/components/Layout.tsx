import { ReactNode } from "react";

interface LayoutPageProps {
  children: ReactNode;
}

const LayoutPage = ({ children }: LayoutPageProps) => {
  return <div style={{padding: 20}}>{children}</div>;
};

export default LayoutPage;