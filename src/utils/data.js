/// import team emoji

import logistics from '../media/icons/emoji/logistic.svg';
import tech from '../media/icons/emoji/tech.svg';
import media from '../media/icons/emoji/media.svg';
import inivitation from '../media/icons/emoji/invitation.svg';
import funds from '../media/icons/emoji/funds.svg';
import speaker from '../media/icons/emoji/speaker.svg';
import budget from '../media/icons/emoji/budget.svg';


/// import team pictures
import ademoyero from '../media/images/team/ademoyero_victor.jpg';
import akintola_mercy from '../media/images/team/akintola_mercy.jpg';
import akintola_omowonuola from '../media/images/team/akintola_omowonuola.jpg';
import emmanuel_jolaiya from '../media/images/team/emmanuel_jolaiya.jpg';
import fortune_emeka from '../media/images/team/fortune_emeka.jpg';
import joseph_aro from '../media/images/team/joseph_aro.jpeg';
import juwon_ishola from '../media/images/team/juwon_ishola.jpg';
import oladejo_olasunkanmi from '../media/images/team/oladejo_olasunkanmi.jpg';
import justice_obaje from '../media/images/team/justice_obaje.jpg';
import shehu_muhammed from '../media/images/team/shehu_muhammed.jpg';
import oluwadamilola_salua from '../media/images/team/oluwadamilola_salau.jpg';



// Social media data 

export const socialMediaLinks=[
    {
        "social":"Gmail",
        "url":"mailto:gisfestival@gmail.com",
        "handle":"GIS Festival"
    },
    {
        "social":"Youtube",
        "url":"#",
        "handle":"GIS Festival"
    },
    {
        "social":"Linkedin",
        "url":"https://www.linkedin.com/in/gis-fest-352a3323b/",
        "handle":"GIS Festival"
    },
    {
        "social":"Instagram",
        "url":"https://instagram.com/gisfest",
        "handle":"gisfest"
    },
    {
        "social":"Twitter",
        "url":"https://twitter.com/gis_fest",
        "handle":"gis_fest"
    },

]

// Page Navigation links for Header

export const MenuItems=[
    {
       "title": "Home",
       "url": "/",
       "cName": "nav-link"
    },
    {
        "title": "Team",
        "url": "/team",
        "cName": "nav-link"
     }
     
]

// Page Navigation links for Footer

export const footerMenuItems = [
    {
        "title": "Home",
        "url": "/",
        "sign": "|"
    },  
    {
        "title": "Organizing Team",
        "url": "/team",
        "sign": "|"
     },
    {
        "title": "Subscribe",
        "url": "#",
    }
]

// All Team's data 

export const teamData = [
     // Logistics Team - (1 member)
        {
        "team":"Logistics",
        "emoji":logistics,
        "members":[
            {
                "name":"Mercy Akintola",
                "twitter":"http://twitter.com/Mercixs20",
                "linkedin":"http://linkedin.com/in/akintola-mercy/",
                "frame": "var(--brand-yellow)",
                "img": akintola_mercy
            }
        ]
    }, 
     // Speakers engagement Team - (2 member)
    {
        "team":"Speakers engagement",
        "emoji":speaker,
        "members":[
            {
                "name":"Omowonuola Akintola",
                "twitter":"http://twitter.com/Svelte_mo",
                "linkedin":"http://linkedin.com/in/omowonuolaakintola/",
                "frame": "var(--background-black)",
                "img": akintola_omowonuola
            },{
                "name":"Emeka Igwe",
                "twitter":"http://twitter.com/",
                "linkedin":"http://linkedin.com/in/chukwuemeka-igwe-34819593",
                "frame": "var(--brand-purple)",
                "img": fortune_emeka
            }
        ]
    },
     // Invitation   Team - (1 member)
    {
        "team":"Invitation & Registration",
        "emoji":inivitation,
        "members":[
            {
                "name":"Justice Obaje",
                "twitter":"http://twitter.com/Joaiservices",
                "linkedin":"http://linkedin.com/in/justice-obaje-81781023b",
                "frame": "var(--brand-green)",
                "img": justice_obaje
            }
        ]
    },
     // Fundraising and Sponsorship  Team - (1 member)
    {
        "team":"Fundraising & Sponsorship",
        "emoji":funds,
        "members":[
            {
                "name":"Joseph Aro ",
                "twitter":"http://twitter.com/joceemycin",
                "linkedin":"http://linkedin.com/in/joseph-aro-923ab453/",
                "frame": "var(--brand-yellow)",
                "img": joseph_aro
            } 
        ]
    },
       // Design and Tech. Team - (3 members)
    {
        "team":"Design and Tech",
        "emoji":tech,
        "members":[
            {
                "name":"Emmanuel Jolaiya",
                "twitter":"http://twitter.com/jeafreezy",
                "linkedin":"http://linkedin.com/in/emmanueljolaiya/",
                "frame": "var(--brand-red)",
                "img": emmanuel_jolaiya
            },{
                "name":"Victor Ademoyero ",
                "twitter":"http://twitter.com/vickystickz",
                "linkedin":"http://linkedin.com/in/victorademoyero/",
                "frame": "var(--background-black)",
                "img": ademoyero
            },{
                "name":"Olasunkanmi Oladejo",
                "twitter":"http://twitter.com/Eaglekonnect",
                "linkedin":"http://linkedin.com/oladejoolasunkanmi",
                "frame": "var(--brand-purple)",
                "img": oladejo_olasunkanmi
            }
        ]
    },
       // Budget Team - (1 member)
    {
        "team":"Budget",
        "emoji":budget,
        "members":[
            {
                "name":"Oluwadamilola Salau",
                "twitter":"http://twitter.com/Damixlove/",
                "linkedin":"http://linkedin.com/in/oluwadamilola-salau/",
                "frame": "var(--brand-green)",
                "img": oluwadamilola_salua
            }
        ]
    },
    // Media Team - (2 members)
    {
        "team":"Media",
        "emoji":media,
        "members":[
            {
                "name":"Juwon Ishola",
                "twitter":"http://twitter.com/Thajadens_",
                "linkedin":"http://linkedin.com/in/juwon-ishola-556471184/",
                "frame":"var(--brand-red)",
                "img": juwon_ishola
            },{
                "name":"Shehu Muhammed",
                "twitter":"http://twitter.com/sanizy1",
                "linkedin":"linkedin.com/in/shehu-sani-49b327154",
                "frame":"var(--brand-purple)",
                "img": shehu_muhammed 
            }
        ]
    }
]