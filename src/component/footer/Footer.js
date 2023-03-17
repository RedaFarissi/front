import { FooterContactUs , FooterExtraLinks , FooterFollowUs , FooterQuickLinks } from '../index.js'

export default function Footer(props){
    return(
    <footer className="footer">
        <section className="grid">
            <FooterQuickLinks />
            <FooterExtraLinks />
            <FooterContactUs />
            <FooterFollowUs />
        </section>
    </footer>
    )
}