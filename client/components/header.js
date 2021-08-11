import Link from 'next/link';

const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Register', href: '/auth/register' },
    !currentUser && { label: 'Login', href: '/auth/login' },
    currentUser && { label: 'Home', href: '/mainpage' },
    currentUser && { label: 'Create Post', href: '/posts/new' },
    currentUser && { label: 'View Posts', href: '/all-posts' },
    currentUser && { label: 'About Us', href: '/aboutus' },
    currentUser && { label: 'Logout', href: '/auth/logout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link href={href}>
            <a className="nav-link">{label}</a>
          </Link>
        </li>
      );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-light" style={{backgroundColor: '#F9A03F'}}>
                        <Link href="/">
                            <a className="navbar-brand"><h1>OASIS</h1></a>
                        </Link>

                        <div className="d-flex justify-content-end">
                            <ul className="nav d-flex align-items-center">{links}</ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    );
};

export default Header;