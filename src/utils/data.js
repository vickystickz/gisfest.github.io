/// import team emoji

import logistics from '../media/icons/emoji/logistic.svg';
import tech from '../media/icons/emoji/tech.svg';
import media from '../media/icons/emoji/media.svg';
import inivitation from '../media/icons/emoji/invitation.svg';
import funds from '../media/icons/emoji/funds.svg';
import speaker from '../media/icons/emoji/speaker.svg';
import budget from '../media/icons/emoji/budget.svg';


/// import team pictures
import ademoyero from '../media/images/team/ademoyero_victor.webp';
import akintola_mercy from '../media/images/team/akintola_mercy.webp';
import akintola_omowonuola from '../media/images/team/akintola_omowonuola.webp';
import emmanuel_jolaiya from '../media/images/team/emmanuel_jolaiya.webp';
import fortune_emeka from '../media/images/team/fortune_emeka.webp';
import joseph_aro from '../media/images/team/joseph_aro.webp';
import juwon_ishola from '../media/images/team/juwon_ishola.webp';
import oladejo_olasunkanmi from '../media/images/team/oladejo_olasunkanmi.webp';
import justice_obaje from '../media/images/team/justice_obaje.webp';
import shehu_muhammed from '../media/images/team/shehu_muhammed.webp';
import oluwadamilola_salua from '../media/images/team/oluwadamilola_salau.webp';

/// import speakers pictures
import taslim_saludeen from '../media/images/speakers/Taslim_Saladueen.jpg';
import Cyhana_Williams from '../media/images/speakers/Cyhana_Williams.jpg';
import Boineelo_O from '../media/images/speakers/Boineelo_O.jpg';
import Dr_Clara_Mundia from '../media/images/speakers/Dr_Clara_Mundia.jpg';
import Rowe_Frasisco from '../media/images/speakers/Rowe_Frasisco.jpg';
import Linda_Ochwada from '../media/images/speakers/Linda_Ochwada.jpg';
import Matt_Forest from '../media/images/speakers/Matt_Forest.jpg';
import Somide_Olaoye from '../media/images/speakers/Somide_Olaoye.jpg';
import Michael_Manalili from '../media/images/speakers/Michael_Manalili.jpg';
import Esther_Onyekachi from '../media/images/speakers/Esther_Onyekachi.jpg';
import Marie_Makuate from '../media/images/speakers/Marie_Makuate.jfif';
import elham_soudy from '../media/images/speakers/Elham Soudy - WiG.jpg'
import timmera from '../media/images/speakers/Timera.jpg'
// Import Merchandise pictures

import Bottle from '../media/images/merchandise/Bottle.webp';
import StringBag from '../media/images/merchandise/String Bag.webp';
import Tshirt from '../media/images/merchandise/T-Shirt.webp';


// Merchandise data 
export const MerchandiseData=[ 
    {
        "name": "T-shirt",
        "price": "#5,000",
        "picture": Tshirt,
        "link": "https://paystack.com/pay/gis-fest-2022-t-shirt",
    },
    {
        "name": "String Bag",
        "price": "#4,500",
        "picture": StringBag,
        "link": "https://paystack.com/pay/gis-fest-conference-string-bag",
    },
    {
        "name": "Bottle",
        "price": "#7,500",
        "picture": Bottle,
        "link": "https://paystack.com/pay/gis-fest-bottle",
    }

]





// Social media data 

export const socialMediaLinks=[
    {
        "social":"Gmail",
        "url":"mailto:support@gisfest.org",
        "handle":"GIS Festival"
    },
    {
        "social":"Linkedin",
        "url":"https://www.linkedin.com/company/gis-fest",
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
    {
        "social":"Github",
        "url":"https://github.com/gisfest/gisfest.github.io",
    }

]

// Page Navigation links for Header

export const MenuItems=[
    {
       "title": "Home",
       "url": "/",
       "cName": "nav-link"
    },
    {
        "title": "Agenda",
        "url": "/schedule",
        "cName": "nav-link"
     },
    //  {
    //     "title": "Travel",
    //     "url": "/travel",
    //     "cName": "nav-link"
    //  },
    //  {
    //     "title": "Hackhathon",
    //     "url": "/hackathon",
    //     "cName": "nav-link"
    //  },
    
    //  {
    //     "title": "Gallery",
    //     "url": "/gallery",
    //     "cName": "nav-link"
    //  },
     {
        "title": "FAQS",
        "url": "/faqs",
        "cName": "nav-link"
     },
     {  
        "title": "Call for Speakers",
        "url": "/call-for-speakers",
        "cName": "nav-link"
     },
     {
        "title": "Team",
        "url": "/team",
        "cName": "nav-link"
     },
       
]

// Page Navigation links for Footer

export const footerMenuItems = [
  
    {
        "title": "Subscribe",
        "url": "/#email-subscription",
        "sign": "|"
     },
     {
        "title": "Organizing Team",
        "url": "/team",
        "sign": "|"
     },
     {
        "title": "Agenda",
        "url": "/schedule",
        "sign": "|"
     },
     {
        "title": "Call For Speakers",
        "url": "/call-for-speakers",
        "sign": "|"
     },
    //  {
    //     "title": "Hackathon",
    //     "url": "/hackathon",
    //     "sign": "|"
    //  },
    //  {
    //     "title": "Travel",
    //     "url": "/travel",
    //     "sign": "|"
    //  },
    //   {
    //     "title": "Gallery",
    //     "url": "/gallery",
    //     "sign": "|"
    //  },
     {
        "title": "FAQS",
        "url": "/faqs"
     },
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
                "img": akintola_omowonuola
            },{
                "name":"Emeka Igwe",
                "twitter":"http://twitter.com/",
                "linkedin":"http://linkedin.com/in/chukwuemeka-igwe-34819593",
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
                "img": emmanuel_jolaiya
            },{
                "name":"Victor Ademoyero ",
                "twitter":"http://twitter.com/vickystickz",
                "linkedin":"http://linkedin.com/in/victorademoyero/",
                "img": ademoyero
            },{
                "name":"Olasunkanmi Oladejo",
                "twitter":"http://twitter.com/Eaglekonnect",
                "linkedin":"http://linkedin.com/oladejoolasunkanmi",
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
                "img": juwon_ishola
            },{
                "name":"Shehu Muhammed",
                "twitter":"http://twitter.com/sanizy1",
                "linkedin":"linkedin.com/in/shehu-sani-49b327154",
                "img": shehu_muhammed 
            }
        ]
    }
]


export const FAQData = [
    {
        "id": 0,
        "Question":"When and where will GISfest take place?",
        "Answer":"GISfest 2022 will hold virtually on the 11-12th of November."
    },
    {
        "id": 1,
        "Question":"What is the ticket cost for GISfest?",
        "Answer":"The ticket cost is $5USD for students and $12 for Professionals. Transactions will be charged in your local currency."
    },
    {
        "id": 3,
        "Question":"What is the refund policy?",
        "Answer":"Tickets are non-refundable, but they are transferable. In case of emergencies, please email support@gisfest.org."
    },
    {
        "id": 4,
        "Question":"How do I become a Speaker?",
        "Answer":"Submit your session ideas to the Call for Speakers by October 15th, 2022."
    },
    {
        "id": 5,
        "Question":"How do I become a Sponsor?",
        "Answer":" If you have questions about sponsorship, please email sponsors@gisfest.org."
    },
    {
        "id": 6,
        "Question":"Will sessions be recorded?",
        "Answer":"All conference sessions at GISfest 2022 will be recorded and available to attendees after the event."
    },
    {
        "id": 8,
        "Question":"Who should I contact if I have questions?",
        "Answer":`Please email support@gisfest.org if you have questions.`
    },  

]



export const agendaData = [
    {
        "day": "DAY 1: November 11th",
        "timeContent": [
            {
                "time": "9:20 - 9:30am",
                "title": "Opening Remark",
                "Speaker": "GISfest 2022",
                "sessionTitle": "Opening Remark",
                "sessionContent": "Opening Remark"
            },
            {
                "time": "9:30 - 9:50am",
                "title": "Keynote",
                "Speaker": "GISfest 2022",
                "sessionTitle": "Keynote session",
                "sessionContent": "Keynote session"
            },
            {
                "time": "9:55 - 10:15am",
                "title": "Geo Talk/Geo-innovation",
                "Speaker": "Kumbirai Nicholas, Zimbabwe National Point of Contact, Space Generation Advisory Council",
                "sessionTitle": "An Integrated Medical Sample Transportation System (IMSTS)",
                "sessionContent": "Effective sample collection and transportation are key in disease diagnosis and in monitoring the success or failure of treatment, as well as in supporting diagnosis and management of any attendant adverse effects of treatment. The current system for moving samples is not harmonized and has brought about quite a several challenges which include but are not limited to a lack of ineffective coordination between the collection and receiving ends for samples, and a lack of timely transition of results to facilities resulting in a longer turn-around time. The goal of the integrated medical sample transportation system is to ensure that the existing health structures in Zimbabwe (the Ministry of Health and Child Care of Zimbabwe) have a strong, sustainable, and well-coordinated IMSTS for use by both partner and non-partner-funded health institutions which is well managed for improved health service delivery in Zimbabwe."
            },
            {
                "time": "10:15 - 10:35am",
                "title": "Geo Talk/Geo-innovation",
                "Speaker": "Antidius Kawamala, Geospatial Researcher, RootGIS",
                "sessionTitle": "Tanga Mapping with Participatory GIS",
                "sessionContent": `Promoting a data-driven decision making culture in Tanga under living lab initiative, we are complementing the global objective i.e. Creating a free editable 
                geographic database of the world by various mapping activities around the region. The initiative uses local member by building capacity and University Students. 
                These mappings have been putting the missing pieces of the community on the map and addressing challenges they face so far. The usage of GIS data as a tool 
                for community as a decision-making data tool can help in timely action and on-time problem-solving.`
            },

            {
                "time": "10:35 - 10:55am",
                "title": "Geo Talk/Geo-innovation",
                "Speaker": "Priscilla Mbasi, GIS Analyst, Zipline",
                "sessionTitle": "Flying to save lives with GIS (Transportation and Logistics/Health)",
                "sessionContent": `I never thought I could use GIS to save lives. I thought saving lives was limited to Doctors, nurses and health professionals only. But working at Zipline has afforded me the opportunity to save lives by using geospatial analysis skills. Zipline is the largest medical drone delivery Company in the world now. With over 25 million miles flown, we deliver blood, vaccines and other medical products to health facilities (in deprived areas) in countries such as Rwanda, Ghana, Japan, some states in the USA and Nigeria and expanding quickly 
                to other parts of Africa. When the covid-19 pandemic was at its peak, we were instrumental in the delivery of vaccines and PPEs in Ghana and USA.Zipline has been able to achieve this through the hard work of teams such as the fulfillment and flight operations teams, health systems integrations,  Go to market and most importantly the GIS team. The GIS Team at Zipline, basically helps the company to make important 
                decisions regarding where to place a distribution center (DC). The site selection process takes into consideration the countries' keep out areas,  population coverage, number of health facilities, access to basic amenities among other things. 
                The team comprises engineers, developers and analysts who build tools and also manage all geospatial data necessary to make the drone’s flight from the DCs to the health facilities or delivery locations safe and successful. Some of the GIS processes the team handles includes spatial analysis, UAV data capture and processing, database management, 3D spatial modeling, spatial programming etc. 
                My talk will introduce Zipline as a successful medical drone logistics company and a deep but quick dive into how GIS is used to save lives at Zipline. I am hopeful that in the end, the audience will see another side of GIS that I absolutely love and come to know that there is more to GIS than just giving answers to a “where” question.`
            },
            {
                "time": "11:00 - 12:00PM",
                "title": "Career Panel Session (Non-Technical)",
                "Speaker": "Michael Manalili, Esther Moore and Taslim Salaudeen",
                "sessionTitle": "Career Panel Session (Non-Technical)",
                "sessionContent": `Learning about what it takes to prepare and be successful for a career in the industry. This would also include new technical career paths.`
            },
            {
                "time": "12:00 - 1:00pm",
                "title": "Workshop(Room1)",
                "Speaker": "Emmanuel Jolaiya",
                "sessionTitle": "Building a Custom Geocoding Service using Open Source Tools",
                "sessionContent": `
                A lot of products are powered by geocoding services either forward geocoding or reverse geocoding. For example, when you search for an address on google maps, 
                Facebook Maps, Bolt or anywhere on the web, it is powered by an underlying geocoding service to give you the results. Unfortunately, this service costs thousands of 
                dollars yearly to integrate in your products especially using geocoding services from commercial organization.
                
                To optimize cost especially for startups with product(s) that is powered by geocoding service, it is therefore important to explore some open-source alternatives and 
                deploy an in-house solution using open-source tools, and this will be the focus of this workshop -- to guide participants on how to deploy a custom geocoding service 
                using open source tools.
                
                At the end of this workshop, participants will be confident in deploying their custom geocoding service for the whole of Nigeria, Africa, World, State or
                 any location of their choice, for use in their organizations, research or even as a potential startup-- Geocoding As A Service.
                
                Requirements:
                -  Docker 
                - Command line
                - Willingness to learn
                - Basic technical skills`
            },
            {
                "time": "12:00 - 1:00pm",
                "title": "Workshop(Room2)",
                "Speaker": "Krishna Lodha",
                "sessionTitle": "Getting started with GeoServer + Geoserver Styling Guide",
                "sessionContent": `
                Geoserver is one of the most widely used geospatial data sharing tool in open source realm. This software is built using JAVA and has good community back up. 

                In this workshop we'll dive deep into geoserver covering following topics 
                1. Installation of Geoserver on various systems
                2. Introduction to Interface and REST face of Geoserver
                3. Publishing Vector and raster layers from various sources (e.g. File, Database, Cloud, etc.) 
                4. Styling Data based on Conditions, zoom levels, etc.
                5. Accessing Data using OGC standards (WMS, WFS, GWC, etc.) 
                6. Securing Data ( Users, roles, etc.) 
                7. Optimising Performance (logs, stress, etc.) 
                8. Adding extensions to Geoserver
                9. Filtering Data in geoserver`
            },
            {
                "time": "1:00 - 2:30pm",
                "title": "Lunch Break/Networking"
            },
            {
                "time": "2:30 - 02:50pm",
                "title": "Geo Talk/Geo-innovation",
                "Speaker": "Franscisco Rowe, Lead, Geographic Data Science Lab & Senior Lecturer, University of Liverpool",
                "sessionTitle": "Use of new forms of data for human mobility",
                "sessionContent": `This talk presents a case study of championing and delivering better outcomes in rural and off-grid electrification using geospatial tools, applications and 
                methodology in the international development cooperation context. 
                
                
                This talk will showcase the innovative work being done by the Electrification Planning Unit of the Nigeria Energy Support Programme, NESP, A technical assistance 
                programme by the republic of Germany to Nigeria funded by Germany and the European Union. The programme developed activity tracks on Data collection, 
                Data management, Analytics and Dissemination which are all integrated into an all-in-one platform – The Nigeria SE4ALL Portal (https://nigeriase4all.gov.ng/),
                
                The platform comprises a website, thematic web apps, a data manager, and a minigrid monitor. The thematic web apps are for three specific market segments 
                targeting rural and off-grid electrification: Mini-Grids, Power Sector, and Solar Home Systems.
                
                The tool now enables the government to objectively craft policies regarding rural and off-grid electrification. Furthermore, the key enablers of electrification, 
                private off-grid power project developers now have a potent tool to empirically prospect factually for suitable locations for different electricity access 
                solutions right from their various bases of operation thereby reducing the upfront effort and costs associated with site prospecting and pipelining.`
            },
            {
                "time": "2:50 - 03:10pm",
                "title": "Geo Talk/Geo-innovation",
                "Speaker": "Temitope Omowumi, Electrification Planning Advisor, NESP",
                "sessionTitle": "Data-Driven Geospatial Eletrification Planning",
                "sessionContent": `This talk presents a case study of championing and delivering better outcomes in rural and off-grid electrification using geospatial tools, applications and 
                methodology in the international development cooperation context. 
                
                
                This talk will showcase the innovative work being done by the Electrification Planning Unit of the Nigeria Energy Support Programme, NESP, A technical assistance 
                programme by the republic of Germany to Nigeria funded by Germany and the European Union. The programme developed activity tracks on Data collection, 
                Data management, Analytics and Dissemination which are all integrated into an all-in-one platform – The Nigeria SE4ALL Portal (https://nigeriase4all.gov.ng/),
                
                The platform comprises a website, thematic web apps, a data manager, and a minigrid monitor. The thematic web apps are for three specific market segments 
                targeting rural and off-grid electrification: Mini-Grids, Power Sector, and Solar Home Systems.
                
                The tool now enables the government to objectively craft policies regarding rural and off-grid electrification. Furthermore, the key enablers of electrification, 
                private off-grid power project developers now have a potent tool to empirically prospect factually for suitable locations for different electricity access 
                solutions right from their various bases of operation thereby reducing the upfront effort and costs associated with site prospecting and pipelining.`
            },

            {
                "time": "2:50 - 03:10pm",
                "title": "Industry Opportunities",
                "Speaker": "Geospatially Podcast",
                "sessionTitle": "Geocommunities and Volunteering",
                "sessionContent": `Geocommunities and Volunteering`
            },{
                "time": "3:30 - 04:20pm",
                "title": "Geocommunities and Volunteering",
                "Speaker": "AWiGIS",
                "sessionTitle": "Geocommunities and Volunteering",
                "sessionContent": `Geocommunities and Volunteering`
            },{
                "time": "3:30 - 04:20pm",
                "title": "Closing remark",
                "Speaker": "GISfest 2022",
                "sessionTitle": "Closing remark",
                "sessionContent": `Closing remark`
            },
           
            
        ]
    },
]





export const speakerData = [
    {
        "name": "Cyhana Williams",
        "JDC": "User Experience Researcher @ Microsoft",
        "picture": Cyhana_Williams,
        "color": "#c91f64"
    },
     {
        "name": "Bioneelo Moyo",
        "JDC": "Geospatial Data Scientist and Certified Environmental Specialist",
        "picture": Boineelo_O,
        "color": "#c91f64"
    },
    {
        "name": "Taslim Saladueen",
        "JDC": "Census Field Technology Consultant @ National Population Commission",
        "picture": taslim_saludeen,
        "color": "#c91f64"

    },
    {
        "name": "Dr. Clara Mundia",
        "JDC": "Director of Location Analytics @ Dalberg Research Limited",
        "picture": Dr_Clara_Mundia,
        "color": "#c91f64"

    },
    {
        "name": "Rowe Francisco",
        "JDC": "Lead Geographic Data Science lab & Senior Lecturer, Univerisity of Liverpool",
        "picture": Rowe_Frasisco,
        "color": "#f49c0f"

    },
     {
        "name": "Michael Manalili",
        "JDC": "Development and Innovation lead @ UN World Food Programme (WFP) Emergencies",
        "picture": Michael_Manalili,
        "color": "#f49c0f"

    },
    {
        "name": "Linda Ochawada",
        "JDC": "Product Evangelist @ Dealcode",
        "picture": Linda_Ochwada,
        "color": "#f49c0f"

    },
    {
        "name": "Matt Forest",
        "JDC": "Solutions Engineering @ CARTO",
        "picture": Matt_Forest,
        "color": "#f49c0f"

    },
    {
        "name": "Esther Onyekachi",
        "JDC": "Project Manager @ Esri UK",
        "picture": Esther_Onyekachi,
        "color": "#c91f64"

    },
    {
        "name": "Somide Olaoye",
        "JDC": "Innovation Software Developer - GIS (Consultant) @ UN World Food Programme",
        "picture": Somide_Olaoye,
        "color": "#c91f64"

    },
    {
        "name": "Marie_Makuate",
        "JDC": "Researcher and Geospatial Analyst",
        "picture": Marie_Makuate,
        "color": "#c91f64"

        
    },
    {
        "name": "Elham Ahmed Soudy",
        "JDC": "GIS Instructor @ Esri North Africa",
        "picture": elham_soudy,
        "color": "#c91f64"

    },{
        "name": "Timmera Whaley Omidire",
        "JDC": "GIS & Map Quality Analyst @ Meta",
        "picture": timmera,
        "color": "#c91f64"

    },
]


export const workshopTypes = [
    {
        title:'Geodev - WebGIS / Python/JavaScript etc.',
        description:'As our spatially enabled society grows, so does the need to create functional and usable webmaps, visualizations and expand coding capabilities. The geospatial development workshop is designed to teach and expose conference participants to different techniques for geospatial development by utilizing different tools such as Python, JavaScript etc.'
    },
    {
        title:'Spatial Analytics - Methodologies / UAV data processing etc.',
        description:'Spatial Analytics remains the backbone of all decision-making. In order to fully reach an appropriate conclusion, we utilize location as the connective thread to uncover hidden patterns, improve predictive modeling, and create a competitive edge. For the Spatial Analytics section, participants will get to interact with case studies that evoke critical spatial cognition thinking to create appropriate geo visualization that is backed by solid geostatistical theory. '
    },
    {
        title:'Geo AI - Machine learning, Deep learning etc.',
        description:'The science and technology of Geo AI have come a long way. Today’s executives are thinking about areas including market planning, site selection, product selection, price optimization, where they want to use Geo AI to better anticipate outcomes for their business and make better decisions based on these insights. For the Geo AI session, participants will get to learn different Geo AI techniques and tools that can be useful to them as an individual or corporate entity. '
    },
    {
        title:'Cloud Computing -  GEE / Cloud platform etc.',
        description:'With the growth of data in every sphere of our life. Data can be mined and stored by virtually all sensors around us making the amount of data for processing too much to handle by a standalone computer. To mitigate these issues and provide scalability, cloud computing has become an on-demand tool for data storage and processing. In the geospatial industry,  this comes as a collection of geospatial datasets and satellite imageries with on-the-go scale analysis tools. In this section, participants will get to learn,  interact and utilise the most popular cloud computing platforms and resources.'
    },
]

export const talkTypes = [
    'Transportation and Logistics',
    'Fintech and Blockchain technology',
    'Ocean conservation and Management',
    'Security and Defense',
    'Utility Distribution',
    'Retail and e-commerce',
    'Health',
    'Emergency Management',
    'Climate change and Green transitioning',
    'Urban planning and Smart City',
    'Oil, Gas, and Solid Minerals',
    'Resource Allocation (Population and Social Safety Net Initiatives)',
    'Food Security, Forestry, and Agriculture',
    'Telecommunication',
    'Waste Management',

]
