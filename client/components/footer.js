import Link from 'next/link';

export default ({ currentUser }) => {
  const links = [
    currentUser && { label: 'Home', href: '/mainpage' },
    currentUser && { label: 'About Us', href: '/aboutus' }
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
                    <nav className="navbar navbar-light">
                        <Link href="/">
                            <a className="navbar-brand"><h1>OASIS</h1></a>
                        </Link>

                        <div className="d-flex justify-content-end">
                            <ul className="nav d-flex align-items-center">{links}</ul>
                        </div>
                    </nav>

                    <div class="footer-icon">
                        <a href="https://www.instagram.com/oasisstudygroup/">
                            <img src="/Icon-metro-instagram@2x.png"/>
                        </a>
                    </div>

                    <center>
                        Oasis Study Group 2021
                    </center>
                </div>
            </div>
        </div>

    );
};