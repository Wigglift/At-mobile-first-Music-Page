import styles from "./Socials.module.scss";

export default function Socials() {
    return (
        <div className={styles.socials}>
            <a href="https://github.com/Wigglift" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="" target="_blank"><i class="fa-brands fa-discord"></i></a>
            <a href="https://linkedin.com/in/isaac-rodrigues-80246822b/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/isaacrodrigues_523/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        </div>
    );
}