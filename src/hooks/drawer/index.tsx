import React, { createContext, useContext, useEffect } from 'react';
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type DrawerContextData = UseDisclosureReturn;

const DrawerContext = createContext<DrawerContextData>({} as DrawerContextData);

const DrawerProvider: React.FC = ({ children }) => {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  return (
    <DrawerContext.Provider value={disclosure}>
      {children}
    </DrawerContext.Provider>
  );
};

function useDrawer(): DrawerContextData {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error('useDrawer must be used within DrawerProvider');
  }

  return context;
}

export { DrawerProvider, useDrawer };
