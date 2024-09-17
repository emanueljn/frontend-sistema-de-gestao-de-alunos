export default function Header() {
    return (
        <header style={headerStyles}>
            <a href=""><img
            style={imageStylesMenu}
            src="./images/menu_icon.png"
            alt="Menu Icon"
            />
            </a>
            <a href="/dashboard"><img
            style={imageStyles}
            src="./images/home_icon.png"
            alt="Home Icon"
            />
            </a>
            <img
            style={userImageStyles}
            src="./images/user_icon.png"
            alt="User Icon"
            />
        </header>
    );
}

const headerStyles = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
    backgroundColor: '#007BFF',
    color: 'white',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
};

const imageStyles = {
    height: '40px'
}

const userImageStyles = {
    height: '50px',
    marginRight: '.5rem'
}

const imageStylesMenu = {
    height: '.5rem',
    marginLeft: '.5rem'
}