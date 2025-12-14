import styles from './Footer.module.scss';

export default function Footer() {
    return <div className={styles.footer}>
        <div className="container">
            <div className='row'>
            <div className={styles.footerMenu}>
                <nav>
                    <a href="">Contate-nos!</a>
                    <a href="">Trabalhe conosco</a>
                    <a href="">Direitos autorais</a>
                    <a href="https://uiverse.io/">Agradecimento ao Uiverse</a>
                </nav>
            </div>
            <div className={styles.footerSocials}>
                <div className={styles.socials}>
                    <a href="https://github.com/Wigglift" target="_blank"><i class="fa-brands fa-github"></i><span> Github</span></a>
                    <a href="" target="_blank"><i class="fa-brands fa-discord"></i> <span> Discord</span></a>
                    <a href="https://linkedin.com/in/isaac-rodrigues-80246822b/" target="_blank"><i class="fa-brands fa-linkedin"></i><span> LinkedIn</span></a>
                    <a href="https://www.instagram.com/isaacrodrigues_523/" target="_blank"><i class="fa-brands fa-instagram"></i> <span> Instagram</span></a>
                </div>
            </div>
            </div>
        </div>
    </div>
};
