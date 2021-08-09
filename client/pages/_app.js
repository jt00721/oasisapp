import buildClient from '../api/build-client';
import Header from '../components/header';
import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/oasis.app.css';
import '../css/oasis.studyrooms.css';
import '../css/oasis.studytools.css';
import '../css/oasis.resources.css';
import '../css/oasis.studyroom.css';
import '../css/oasis.aboutus.css';
// import '../css/oasis.pomodoro.css';

const AppComponent = ({ Component, pageProps, currentUser }) => {

  return (
        <div>
            <Header currentUser={currentUser} />
            <div className="container">
              <Component currentUser={currentUser} {...pageProps} />
            </div>
            <Footer currentUser={currentUser} />
        </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, data.currentUser);
  }

  return {
    pageProps,
    ...data
  };
};

export default AppComponent;