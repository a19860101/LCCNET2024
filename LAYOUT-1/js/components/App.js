import Navigation from "./Navigation.js"
import AppHeader from "./Header.js"
import About from "./About.js"
import Folio from "./Folio.js"
import Contact from "./Contact.js"
import AppFooter from "./Footer.js"
export default {
    components:{Navigation,AppHeader,About,Folio,Contact,AppFooter},
    template:`
        <navigation></navigation>
        <app-header></app-header>
        <about></about>
        <folio></folio>
        <contact></contact>
        <app-footer></app-footer>
    `,

}