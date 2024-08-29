import { ReactNode } from 'react';
import { DokumentInfoBanner } from 'components/dokumentinfobanner/DokumentInfoBanner';
import styles from './layout.module.css'

interface LayoutProps {
  children: ReactNode;
  params: { id: string };
}

const Layout = async ({ children, params }: LayoutProps) => {
  // TODO: Høre med designer om vi trenger en 'saksinfo' komponent

  return (
    <div className={styles.idLayoutWrapper}>
      <DokumentInfoBanner />
      {children}
    </div>
  );
};

export default Layout;
