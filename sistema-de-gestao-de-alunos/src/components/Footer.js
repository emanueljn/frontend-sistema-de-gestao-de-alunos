export default function Footer() {
    return (
        <footer style={footerStyles}>
            <div style={footerStyleDiv}>
                <p>Termos de Uso</p>
                <p>Termos de Privacidade</p>
            </div>
            <p>© 2024 Escola ECEEJA de Miracatu. Todos os direitos reservados.</p>
        </footer>
    );
}

const footerStyles = {
    backgroundColor: '#003f7f',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
    width: '100%',
    bottom: 0,
};

const footerStyleDiv = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    margin: '1rem'
};