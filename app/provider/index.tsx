import ThemeProvider from './theme.provider';
import ModalProvider from './modal.provider';

type TProvider = {
    children: React.ReactNode
}

const Provider = ({ children }: TProvider) => {

    return (
        <ThemeProvider>
            <ModalProvider>
                {children}
            </ModalProvider>
        </ThemeProvider>
    )
}

export default Provider;