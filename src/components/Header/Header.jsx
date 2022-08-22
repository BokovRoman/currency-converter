import style from './Header.module.css';
import Container from '../Container/Container';

const Header = ({options, usd, eur}) => {

    return (
        <div className={style.wrapper}>
            <Container>
                <div className={style.header_content}>
                    <a href="/" className={style.logo_link}>
                        <div className={style.logo_wrapper}>
                            <span className={style.logo_description}>
                                Currency сonverter
                            </span>
                        </div>
                    </a>
                    <ul className={style.list}>
                        <li className={style.list_item}>
                            <p className={style.price}>USD:{usd.toFixed(2)}</p>
                        </li>
                        <li className={style.list_item}>
                            <p className={style.price}>EUR:{eur.toFixed(2)}</p>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}

export default Header;