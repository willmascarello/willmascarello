import Link from "next/link";
import Music  from "./Music";

import styles from "../styles/components/Menu.module.css"
import ActiveLink from "./ActiveLink";
import LogoSvg from "../../public/svgs/LogoSvg";
import BlogSvg from "../../public/svgs/BlogSvg";
import LinkedinSvg from "../../public/svgs/LinkedinSvg ";
import InstagramSvg from "../../public/svgs/InstagramSvg";
import WhatsAppSvg from "../../public/svgs/WhatsappSvg";
import EmailSvg from "../../public/svgs/EmailSvg";
import GitSvg from "../../public/svgs/GitSvg";

export function Menu() {

    return (
        <div className={styles.menu}>

            <Link href="/" >
                <a className={styles.logo}><LogoSvg /> </a>
            </Link>
            <Link href="/blog" >
                <a className={styles.blog}>
                    <BlogSvg /> 
                    <p>Em breve</p>
                </a>
            </Link>

            <div className={styles.menu__icon}>
                <a href="https://www.linkedin.com/in/willmascarello/" target="blank">
                    <LinkedinSvg />
                </a>
                <a href="https://www.instagram.com/willmascarello/" target="blank">
                    <InstagramSvg />
                </a>
                <a href="https://wa.me/5554996457557" target="blank">
                    <WhatsAppSvg />
                </a>
                <a href="mailto:ola@willmascarello.com" target="blank">
                    <EmailSvg />
                </a>
                <a href="https://github.com/willmascarello" target="blank">
                    <GitSvg />
                </a>
            </div>

            <div className={styles.menu__page}>
                <ActiveLink href="/resume" activeStyle={styles.menu__page__active}>
                    <a className={styles.menu__page__link}>Sou</a>
                </ActiveLink>
            </div>

            <Music url={[ './music/melodia_v1.mp3' ]} />

        </div>
    )
}