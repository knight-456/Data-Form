import ThemeProvider from './theme.provider';
import ModalProvider from './modal.provider';
import StoreProvider from './store.provider';

type TProvider = {
    children: React.ReactNode
}

const Provider = ({ children }: TProvider) => {

    return (
        <ThemeProvider>
            <StoreProvider>
                <ModalProvider>
                    {children}
                </ModalProvider>
            </StoreProvider>
        </ThemeProvider>
    )
}

export default Provider;