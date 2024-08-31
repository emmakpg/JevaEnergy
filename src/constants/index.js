//import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../public/assets/icons";
//import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import { FaHandsHelping } from "react-icons/fa";
import { GiMiniSubmarine } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { MdEngineering } from "react-icons/md";


export const navLinks = [
    { href: "/", label: "Home"},
    { href: "#about", label: "About Us", submenuAbout:[{ href: "/about/vision-&-mission", label: "Vision & Mission" },
        { href: "/about/core-values", label: "Core Values" },
        { href: "/", label: "Our Journey" },
        { href: "/management-team", label: "Our Management Team" },
        { href: "/", label: "Corporate Social Responsibilities" }] },
    { href: "#services", label: "Services", submenuServices:[{ href: "/services/marine-support", label: "Marine Support Services" },
        { href: "/services/consultancy-services/", label: "General Consultancy Services" },
        { href: "/services/equipment-supply-services", label: "Equipment/Material Supply Services" },
        { href: "/services/employee-recruitment-onboarding/", label: "Employee recruitment & onboarding" },
        { href: "/services/protocol-services/", label: "Protocol Services" },] },
    { href: "/contact-us", label: "Contact Us"},
];


export const ServicesHome =[
    {
    label:"Marine Support Services",
    icon:<GiMiniSubmarine size={55} className="text-white"/>,
    link:"/services/marine-support",
    bImage:"bg-pg_marine"
},
{
    label:"Equipment/Material Supply Services",
    icon:<FaTools size={55} className="text-white"/>,
    link:"/services/equipment-supply-services",
    bImage:"bg-pg_equipment"
},
{
    label:"General Consultancy Services",
    icon:<MdCastForEducation size={55} className="text-white"/>,
    link:"/services/consultancy-services",
    bImage:"bg-pg_consultancy"
},
{
    label:"Employee recruitment & onboarding",
    icon:<MdEngineering size={55} className="text-white"/>,
    link:"/services/employee-recruitment-onboarding",
    bImage:"bg-pg_onboarding"
},
{
    label:"Protocol Services",
    icon:<FaHandsHelping size={55} className="text-white"/>,
    link:"/services/protocol-services",
    bImage:"bg-pg_protocol"
},
]


export const miscLinks = [
    { href: "/about/core-values", label: "Core Values"},
    { href: "/about/management-team", label: "Our Team"}, 
        
    { href: "/", label: "Industries"}, 
      
    { href: "/", label: "Logistics Services" },
];


export const hero = [
    {
        title: "The Hub of Excellence",
        text: "Rooted in the oil and gas sector, Jeva Energy & Solutions excels across various industries, providing unparalleled value throughout Africa's flourishing markets. We offer solutions that unlock potential and drive success.",
        image: "happy_engineer",
    },
    {
        title: "Comprehensive Solutions, with Jeva",
        text: "Optimize operations with our comprehensive solutions, utilizing skilled teams and top-quality facilities. We offer the tools to unlock value and achieve success",
        image: "handshakes",
    },
    {
        title: "Multi-faceted",
        text: "Empowering clients in various industries with a full range of services offered by our subsidiary companies, we provide the solutions to create value and achieve success. ",
        image: "smiling_consultant",
    },
    {
        title: "Geographic Footprint",
        text: "Based in Accra, Ghana, Jeva is dedicated to expanding across regions and is actively seeking growth opportunities in Ivory Coast and other potential African countries. ",
        image: "global_locations",
    },
];

export const AboutContent = {
    about_content: `Jeva Energy & Solutions, established in 2023, is a trailblazer in Ghana’s oil and gas industry,
     dedicated to reshaping Africa’s energy sector. As a fully Ghanaian-owned enterprise, we provide a comprehensive range of services
      tailored to the dynamic needs of the oil and gas market. Our capabilities encompass both upstream and downstream operations, 
      delivering integrated solutions for a wide array of client requirements. From marine support and equipment supply to premium 
      petroleum products and strategic consultancy, we are committed to offering exceptional value and innovation. 
      At Jeva Energy & Solutions, we strive to elevate industry standards, utilizing our local insights and global expertise to promote
       sustainable growth and operational excellence throughout Africa.`,
    vision_title:"Jeva Energy and Solutions’ Vision Statement",
    vision_content: `To revolutionize the oil and gas industry in Africa by setting new standards of excellence, 
    innovation, and environmental responsibility. We aspire to be recognized as the epitome of reliability and sustainability in the sector,
     delivering top-notch products and services that enhance the quality of life and contribute to the growth and prosperity of our communities
      and the broader industry.`,
    mission_title:"Jeva Energy and Solutions’ Mission Statement",
    mission_content:`To be the leading provider of high-quality, specialized products and services in the oil and gas sector,
     driven by exceptional business ethics and a deep understanding of market dynamics. We are committed to optimizing value for our clients
      and stakeholders through innovative solutions, operational excellence, and a steadfast dedication to sustainability and community 
      development.`,

}

export const core_values=[
    {
        title:"Integrity & Ethics",
        value:`Our dedication to ethical practices builds a solid base of trust and confidence with our clients, 
        partners, and employees, ensuring that all interactions are rooted in reliability and fairness.`,
        imageURL:"/assets/svg/integrity.svg"
    },
    {
        title:"Competency, Innovation & Excellence",
        value:"Our demonstrated expertise, innovative methods, and dedication to excellence enable us to display our skills across various industries.",
        imageURL:"/assets/svg/innovation.svg"
    },
    {
        title:"Quality, Safety & Trust",
        value:"With a demonstrated history of success with our clients, we ensure that our processes and systems meet quality and safety standards. This dedication helps us build a reputation as a reliable and respected service provider"
        ,imageURL:"/assets/svg/safety.svg"
    },
    {
        title:"Cost-Effective",
        value:"By incorporating over 90% local content, we are able to provide competitive and cost-effective solutions."
        ,imageURL:"/assets/svg/money.svg"
    },
    {
        title:"Global Company",
        value:"We have broadened our operational sites and logistics network to guarantee prompt and efficient support for clients across different areas, delivering the appropriate solutions precisely when and where they are required."
        ,imageURL:"/assets/svg/responsibility.svg"
    },
    {
        title:"Promptness To Market",
        value:"Utilizing our internal capabilities, resources, and experience, we are well-prepared to address and manage challenges while fulfilling our clients' expectations."
        ,imageURL:"/assets/svg/focus.svg"
    },
]


export const team = [
    {
        name: "Emily Attito-Sam ",
        position:"Managing Director",
        about: `Emily Attito-Sam is the dynamic Managing Director of Jeva Energy and Solutions, driving the company's success with her exceptional leadership and strategic vision. With a distinguished career in the fuel and bulk distribution industry, Emily brings a wealth of experience to her role.
Her professional journey spans six years in international business banking and finance, where she honed her expertise in managing financial operations and investment strategies on a global scale. This foundation in finance has provided her with a solid understanding of the economic drivers affecting the oil and gas industry.
Emily has also accumulated eight years of experience as a marketing and trade/business consultant. During this time, she developed and implemented successful strategies for business growth and market expansion, working with diverse clients to enhance their competitive edge. Her consultancy experience has been instrumental in shaping Jeva Oil’s market positioning and strategic direction.
In addition to her extensive background in finance and consultancy, Emily has spent the past year focusing on strategic management. This role has further refined her skills in organizational leadership, planning, and execution, contributing to the company's continued growth and operational excellence.
Her comprehensive expertise, combined with her forward-thinking approach, has been pivotal in positioning Jeva Energy and Solutions as a leader in the industry, committed to innovation, quality, and community impact.
`,
        image:"Emily",
    },
    {
        name: "Alex Menage",
        position:"Non-Executive Director",
        about: `Alex Menage is a distinguished Non-Executive Director at Jeva Energy and Solutions, renowned for his expertise in entrepreneurial deal-making and relationship-building. With a strategic focus on Emerging Markets, Alex excels in developing and nurturing businesses, leveraging his extensive experience to drive growth and expand business horizons.
Alex’s career is marked by his adeptness at building and managing high-performing teams, crafting effective go-to-market strategies, and spearheading business development initiatives. His proficiency in sales and relationship management has been instrumental in fostering valuable connections and securing strategic opportunities.
As an accomplished corporate professional, Alex Menage brings a wealth of knowledge and a proven track record of success to Jeva Energy and Solutions. His innovative approach and strategic vision contribute significantly to the company's growth and success in diverse and dynamic markets.
`,
        image:"Alex",
    },
    {
        name: "Francis Amediku",
        position:"Project Director",
        about: `Francis Amediku is a seasoned Business and Technology Executive with over 26 years of diverse experience in IT, Project Management, Business Transformation, Strategy and Execution, Sales, and Marketing. He has consistently delivered exceptional results across industries such as Consulting, Mining, and Telecommunications.
Francis excels in leading large-scale projects and driving business transformation with strategic vision and innovative solutions. His IT expertise has optimized processes and enhanced operational efficiency, while his project management skills ensure timely and budget-conscious project delivery.
In Sales and Marketing, Francis's strategies have significantly boosted revenue and market presence. Known for his collaborative leadership, he inspires and mentor teams, fostering a culture of innovation and continuous improvement.
As Project Director, Francis leverages his extensive background to deliver transformative solutions and drive the organization's strategic vision, solidifying his reputation as a forward-thinking leader dedicated to achieving sustainable growth and success.
`,
        image:"Francis",
    },
    {
        name: "John Amaning",
        position:"Account Director",
        about: `John Amaning, Account Director at Jeva Energy and Solutions, is a distinguished finance professional with extensive experience in the oil and gas industry. With a robust background in accounting and financial management, John brings a wealth of expertise to his role, underscoring his commitment to excellence and precision in financial operations.
Over his career, John has cultivated a deep understanding of the financial intricacies within the oil and gas sector. His proficiency extends across various key areas, including financial planning and analysis, regulatory compliance, and operational optimization. He has consistently demonstrated his ability to navigate complex financial landscapes, ensuring that businesses adhere to industry regulations and standards while optimizing their financial performance.
John's career highlights include spearheading financial strategies that have led to significant cost reductions and efficiency improvements for multiple organizations. His strategic insights and meticulous approach to financial management have been instrumental in enhancing profitability and sustaining growth in the competitive oil and gas market.
In his role at Jeva Energy and Solutions, John is responsible for overseeing the financial health of the company, ensuring accurate financial reporting, and implementing robust internal controls. His leadership in financial operations has contributed to the company’s stability and success, reinforcing Jeva Energy and Solutions' reputation for reliability and fiscal discipline.
John’s dedication to his profession is matched by his commitment to the broader industry, where he actively engages in best practices and continuous professional development. His expertise not only drives the financial success of Jeva Energy and Solutions but also supports the company's strategic objectives and long-term growth.
`,
        image:"John"
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];



export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

// export const socialMedia = [
//     { src: facebook, alt: "facebook logo" },
//     { src: twitter, alt: "twitter logo" },
//     { src: instagram, alt: "instagram logo" },
// ];