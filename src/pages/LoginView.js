import LoginForm from '../components/forms/login/LoginForm';
import imageBannerMobile from '../assets/woman-with-phone.png';
import imageBannerDesktop from '../assets/illustracion-banner-desktop.png';
import '../styles/LoginView.scss'

const LoginView = () => (
    <div className="container-fluid">
        <div className="row container--height">
            <div className="col-lg-5 p-0">
                <section className="d-lg-flex flex-lg-column justify-content-lg-center position-relative container-fluid container--padding banner">
                    <figure className="banner__content--padding banner__image-dektop d-none d-lg-block">
                        <img src={imageBannerDesktop}/>
                    </figure>
                    <div className="banner__content banner__content--padding">
                        <p className="mb-2 title--font title--color">¡Nuevo!</p>
                        <h1 className="mb-3 title--font title--color">
                            Seguro
                            <br />
                            <span className="title__text-desktop--highlighted">Vehicular</span>
                            <span className="title__text--highlighted"> Tracking</span>
                        </h1>
                        <p className="m-0 paragraph--color">
                            Cuentanos donde le harás
                            <br />                            
                            seguimiento a tu seguro
                        </p>
                    </div>
                    <figure className="banner__image-mobile d-lg-none">
                        <img src={imageBannerMobile}/>
                    </figure>
                </section>
            </div>
            <div className="col-lg-7 p-0">
                <LoginForm />
            </div>
        </div>
    </div>
);

export default LoginView;
