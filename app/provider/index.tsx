import { Toaster } from '@/components/ui/toaster';

import ThemeProvider from './theme.provider';
import ModalProvider from './modal.provider';
import StoreProvider from './store.provider';

type TProvider = {
    children: React.ReactNode
}

const Provider = ({ children }: TProvider) => {

    return (
        <StoreProvider>
            <ThemeProvider>
                <ModalProvider>
                    <Toaster />
                    {children}
                </ModalProvider>
            </ThemeProvider>
        </StoreProvider>
    )
}

export default Provider;