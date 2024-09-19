//import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../public/assets/icons";
//import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import { FaHandsHelping } from "react-icons/fa";
import { GiMiniSubmarine } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { MdEngineering } from "react-icons/md";


export const navLinks = [
    { href: "/", label: "Home"},
    { href: "/about", label: "About Us", submenuAbout:[{ href: "/about/vision-&-mission", label: "Vision & Mission" },
        { href: "/about/core-values", label: "Our Core Values" },
        { href: "/about", label: "Our Journey" },
        { href: "/about/management-team", label: "Our Management Team" },
        { href: "/about/corporate-social-responsibilities", label: "Corporate Social Responsibilities" }] },
    { href: "#services", label: "Services", submenuServices:[{ href: "/services//petroleum-supply-services", label: "Petroleum Supply Services" },
        { href: "/services/consultancy-services/", label: "General Consultancy Services" },
        { href: "/services/equipment-supply-services", label: "Equipment/Material Supply Services" },
        { href: "/services/employee-recruitment-onboarding/", label: "Employee Recruitment & Onboarding" },
        { href: "/services/protocol-services/", label: "Protocol & Logistics Services" },] },
        { href: "/industries", label: "Industries"},
    { href: "/contact-us", label: "Contact Us"},
];

export const mobileMenu = [
    { href: "/", label: "Home"},
    { href: "/about", label: "About Us"},
    { href: "/industries", label: "Industries"},
    { href: "/contact-us", label: "Contact Us"},
];

export const otherLinks = [
    { href: "/about/management-team", label: "Management Team"},
    { href: "/about/vision-&-mission", label: "Vision & Mission"},
    { href: "/about/core-values", label: "Core Values", },
    { href: "/about/corporate-social-responsibilities", label: "Corporate Social Responsibilities"},
];


export const ServicesHome =[
    {
    label:"Petroleum Products Supply Services",
    icon:"/assets/icons/petrol.png",
    link:"/services/petroleum-supply-services",
    bImage:"bg-petrolhead"
},
{
    label:"Equipment/Material Supply Services",
    icon:"/assets/icons/equipment.png",
    link:"/services/equipment-supply-services",
    bImage:"bg-equipment-hero"
},
{
    label:"General Consultancy Services",
    icon:"/assets/icons/consultancy.png",
    link:"/services/consultancy-services",
    bImage:"bg-pg_consultancy"
},
{
    label:"Employee recruitment & onboarding",
    icon:"/assets/icons/employee.png",
    link:"/services/employee-recruitment-onboarding",
    bImage:"bg-pg_onboarding"
},
{
    label:"Protocol & Logistic Services",
    icon:"/assets/icons/logistics.png",
    link:"/services/protocol-services",
    bImage:"bg-pg_protocol"
},
]


export const miscLinks = [
    { href: "/services/petroleum-supply-services", label: "Petroleum Supply"},
    { href: "/services/equipment-supply-services", label: "Equipment Supply "}, 
        
    { href: "/services/consultancy-services", label: "General Consultancy "}, 

    { href: "/services/employee-recruitment-onboarding", label: "Employee Recruitment"}, 
      
    { href: "/services/protocol-services", label: "Protocol & Logistics" },
];


export const hero = [
    {
        title: "The Hub of Excellence",
        text: "Rooted in the oil and gas sector, Jeva Energy & Solutions excels across various industries, providing unparalleled value throughout Africa's flourishing markets. We offer solutions that unlock potential and drive success.",
        image: "happy_engineer",
    },
    {
        title: "Comprehensive Solutions",
        text: "Optimize operations with our comprehensive solutions, utilizing skilled teams and top-quality facilities. We offer the tools to unlock value and achieve success",
        image: "handshakes",
    },
    {
        title: "Multi-faceted",
        text: "Empowering clients in various industries with a full range of services offered by our subsidiary companies, we provide the solutions to create value and achieve success. ",
        image: "smiling_consultant",
    },

    {
        title: "Global Reach",
        text: "Based in Accra, Ghana, Jeva is dedicated to expanding across regions and actively seeking growth opportunities in Ivory Coast, other potential African countries, and the world through sustainable partnerships and joint ventures.",
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

export const equipment_supply=[
    {
        title:"Hydraulic Hoses",
        value:`Engineered for high-pressure hydraulic fluids, ideal for machinery and equipment.`,
        imageURL:"/assets/images/hoses.webp",
        link:"/services/equipment-supply-services/hydraulic-hoses"
    },
    {
        title:"Bolt & Fittings",
        value:"Precision-engineered bolt-on fittings guarantee the integrity and secure operation of your high-pressure systems, including pressure vessels and pipelines.",
        imageURL:"/assets/images/bolt.webp",
        link:"/services/equipment-supply-services/bolt-fittings"
    },
    {
        title:"Advanced System & On-Site Workshop Services",
        value:"Fully equipped mobile workshops for repair and maintenance tasks, minimizing operational disruptions."
        ,imageURL:"/assets/images/workshop.webp",
        link:"/services/equipment-supply-services/advanced-system-onsite-workshop-services"
    },
    {
        title:"Office Supplies",
        value:`A comprehensive range of essential items to support efficient office operations,
         including stationery, printing materials, and organizational tools.`
        ,imageURL:"/assets/images/office.webp",
        link:"/services/equipment-supply-services/office-supplies",
    },
    
]


export const protocol_logistics=[
    {
        title:"Transportation and Protocol Services",
        value:`At Jeva Energies & Solutions, we offer a full suite of protocol and logistics services designed to meet the diverse needs of our clients across various industries. Our services ensure seamless transportation, efficient supply chain management, and tailored support to enhance operational efficiency and reduce costs.`,
        imageURL:"/assets/images/transportation.webp",
        link:"/services/protocol-services/transportation-services"
    },
    {
        title:"Logistics Services",
        value:"Jeva Energies & Solutions offers comprehensive logistics services to support industries operating in remote locations. From the transport of personnel and bulky equipment to hazardous materials, our solutions are designe to keep your projects on track from initial planning to final delivery.",
        imageURL:"/assets/images/logistics1.webp",
        link:"/services/protocol-services/logistics-services"
    },
]

export const petroleum_supply=[
    {
        title:"Bulk Supply",
        value:`a. Providing large-scale petroleum product deliveries to meet the high demands of industrial clients.
b. Ensuring a reliable and consistent supply chain to support continuous operations and prevent downtime.`,
        imageURL:"/assets/images/bulk.webp",
        
    },
    {
        title:"Filling Stations",
        value:`a. Operating state-of-the-art filling stations to supply petroleum products directly to individual consumers and businesses.
b. Offering high-quality fuels and efficient customer service to ensure a seamless fueling experience.`,
        imageURL:"/assets/images/filling.webp",
    },
    {
        title:"Mining Industries",
        value:`a. Delivering specialized petroleum products tailored to the unique requirements of the mining sector.
b. Ensuring timely and reliable fuel supply to support the uninterrupted operation of mining equipment and activities.`
        ,imageURL:"/assets/images/mining.webp",
     
    },
    {
        title:"Other Industrial Sectors",
        value:`a. Serving a wide range of industries including construction, manufacturing, and transportation with customized petroleum solutions.
b. Providing tailored fuel delivery services to meet the specific operational needs of each sector, ensuring efficiency and reliability.`
        ,imageURL:"/assets/images/otherindus.webp",
     
    },
    
]

export const logistics_sub=[
    {
        title:"Global Freight Forwarding",
        value:`Custom-tailored solutions for domestic and international logistics via air, sea, road, and rail.`,
        imageURL:"/assets/icons/freight.png",
        
    },
    {
        title:"Customs Brokerage and Clearance",
        value:`Expertise in smooth and compliant cross-border movement of goods, minimizing delays.`,
        imageURL:"/assets/icons/clearance.png",
    },
    {
        title:"Trucking and Haulage",
        value:`Reliable scheduling and advanced technology for efficient freight delivery throughout West Africa.`
        ,imageURL:"/assets/icons/haulage.png",
     
    },
    {
        title:"Ship Agency and Husbandry",
        value:`Comprehensive support for vessel operations during port calls, safeguarding your interests.`
        ,imageURL:"/assets/icons/ship.png",
     
    },
    {
        title:"Project Cargo Logistics",
        value:`Specialized transport of large, high-value, or critical equipment for energy, mining, and construction industries.`
        ,imageURL:"/assets/icons/cargo.png",
     
    },
    {
        title:"Specialized Oil and Gas Logistics",
        value:`Expertise in handling complex project cargo for the oil and gas sector, ensuring safe and timely delivery.`
        ,imageURL:"/assets/icons/oilngas.png",
     
    },
    {
        title:"Consolidation and Groupage",
        value:`Cost-effective shipping solutions by consolidating smaller consignments into a single marine container.`
        ,imageURL:"/assets/icons/consolidate.png",
     
    },
    {
        title:"Warehousing",
        value:`Strategic warehousing solutions to store raw materials and finished products closer to business locations for on-demand access.`
        ,imageURL:"/assets/icons/warehouse.png",
     
    },
]


export const transportation_sub=[
    {
        title:"Extensive Fleet Selection",
        value:`Choose from a wide range of vehicles using our secure online portal for easy reservation and management.`,
        imageURL:"/assets/icons/cargo.png",
        
    },
    {
        title:"Flexible Leasing Options",
        value:`Tailor your lease duration to meet specific needs with both long-term and short-term rentals.`,
        imageURL:"/assets/icons/deal.png",
    },
    {
        title:"Advanced Vehicle Tracking",
        value:`Benefit from real-time monitoring and data analytics for optimized routes and maintenance.`
        ,imageURL:"/assets/icons/tracking.png",
     
    },
    {
        title:"Streamlined Protocol Services",
        value:`Receive prompt assistance with visas, work permits, police clearance, and more.`
        ,imageURL:"/assets/icons/system.png",
     
    },
    {
        title:"Customized Accommodation Solutions",
        value:`Centralized booking system with negotiated rates and exclusive deals across Ghana and West Africa.`
        ,imageURL:"/assets/icons/cogwheel.png",
     
    },

]

export const csr=[
    {
        title:"Education for All",
        value:`We support education through scholarships, mentorship programs, and infrastructure development, particularly for young learners in underserved regions. These initiatives aim to empower students with the knowledge and skills to succeed in various fields.`,
        imageURL:"/assets/images/education.webp",
        
    },
    {
        title:"Health Screenings",
        value:`We provide free medical check-ups, diagnostic tests, and health education, helping communities in need access early disease detection and preventive care.`,
        imageURL:"/assets/images/health.webp",
    },
    {
        title:"Sanitation and Hygiene",
        value:`Our sanitation projects focus on improving access to clean water, building sanitation facilities, and educating communities on hygiene practices to prevent waterborne diseases.`
        ,imageURL:"/assets/images/sanitation.webp",
     
    },
    {
        title:"Environmental Stewardship",
        value:`We promote sustainable practices like waste management and resource conservation, working with communities to raise awareness about protecting the environment.`
        ,imageURL:"/assets/images/stewardship.webp",
     
    },
    
]


export const manpower_supply=[
    {
        title:"Skilled Personnel",
        value:`We source and supply top-tier professionals from across Africa, Western nations, and Eastern regions, ensuring that you have access to a broad spectrum of expertise.`,
        imageURL:"/assets/icons/skilled.png",
        
    },
    {
        title:"Extensive Database",
        value:`Our expansive resume database is rich with experienced, talented, and skilled individuals who are ready to meet the specific needs of your industry.`,
        imageURL:"/assets/icons/database.png",
    },
    {
        title:"Foreign Worker and Expatriate Document Management",
        value:`We expertly manage all aspects of documentation for foreign workers and expatriates, including work permits, residence permits, and other essential legal requirements.`
        ,imageURL:"/assets/icons/work.png",
     
    },
    {
        title:"Airport Assistance",
        value:`Our meet-and-greet services provide seamless support for arrivals, departures, and transit passengers, ensuring a smooth transition for your workforce`
        ,imageURL:"/assets/icons/airport.png",
     
    },
    {
        title:"Visa Support",
        value:`We handle a wide range of visa requirements, including multiple-entry, single-entry, visa-on-arrival, and visa extensions, making the process hassle-free for both employers and employees.`
        ,imageURL:"/assets/icons/symbols.png",
     
    },
    
]


export const consultancy_services=[
    {
        title:"Regulatory Compliance & Safety",
        value:`Our training emphasizes regulatory compliance, helping your team not only meet but exceed industry standards. By reducing risks and fostering a culture of safety, we contribute to creating a more secure and productive workplace.`,
        imageURL:"/assets/icons/regulatory.png",
        
    },
    {
        title:"Strategic Consultancy and Expert Guidance",
        value:`Optimizing Operations for Success - Our consultancy services go beyond training by offering strategic planning and expert advice tailored to the complexities of the oil and gas sector. We collaborate closely with our clients to optimize operations, improve efficiency, and drive profitability.`,
        imageURL:"/assets/icons/operation.png",
    },
    {
        title:"Bespoke Solutions",
        value:`Understanding that each client’s needs are unique, we craft bespoke solutions that help you navigate the ever-evolving industry landscape, ensuring your business remains competitive, compliant, and resilient.`
        ,imageURL:"/assets/icons/solutions.png",
     
    },
    {
        title:"Workforce Development and Upskilling",
        value:`Building a Future-Ready Team - We recognize the importance of continuous learning and development in the oil and gas industry. Our workforce development programs focus on upskilling your team, ensuring they are prepared to meet current and future industry challenges. Whether it’s technical skills, leadership development, or safety protocols, we provide comprehensive training that aligns with your strategic goals.`
        ,imageURL:"/assets/icons/workflow.png",
     
    },
    {
        title:"Operational Efficiency and Risk Mitigation",
        value:`Streamlining Processes - Jeva Energies & Solutions is dedicated to enhancing your operational efficiency. We assess your current processes and identify areas for improvement, implementing strategies that streamline operations and reduce costs. Our approach is proactive, focusing on risk mitigation to prevent disruptions and ensure smooth, uninterrupted operations.`
        ,imageURL:"/assets/icons/shortage.png",
     
    },
    
]


export const industries=[
    {
        title:"Oil and Gas",
        value:`Optimize costs, improve safety, and enhance operations in remote locations through efficient workforce development, fleet management, logistics, and specialized equipment maintenance. These solutions help drive productivity and ensure smooth operations in the oil and gas sector.`,
        imageURL:"/assets/icons/oil.png",
        
    },
    {
        title:"Mining Industry",
        value:`Tailored solutions address challenges in mining such as infrastructure limitations and skilled labor shortages. With services like fleet management, logistics, and workforce development, mining operations in remote areas can run smoothly and efficiently.`,
        imageURL:"/assets/icons/mining.png",
    },
    {
        title:"Food and Beverage Industry",
        value:`Streamline logistics, improve operational efficiency, and navigate customs with comprehensive support for the food and beverage sector. Optimized supply chains and specialized equipment maintenance help companies meet industry demands and regulatory requirements.`
        ,imageURL:"/assets/icons/food.png",
     
    },
    {
        title:"Power Industry",
        value:`Support for both traditional and renewable power facilities is crucial to ensure operational success. Efficient logistics, workforce training, and fleet management services help keep energy production running smoothly, regardless of location or energy type.`
        ,imageURL:"/assets/icons/power.png",
     
    },
    {
        title:"Marine Industry",
        value:`Reduce costs and streamline operations in the marine sector through efficient inland transportation, maintenance services, and workforce development. Simplified logistics and specialized equipment solutions help companies meet regulatory challenges and minimize downtime.`
        ,imageURL:"/assets/icons/marine.png",
     
    },
    {
        title:"Construction Industry",
        value:`Overcome supply chain disruptions, ensure safety compliance, and drive infrastructure development with comprehensive support. Specialized equipment, workforce development, and efficient logistics solutions help construction projects remain on track and meet safety standards.`
        ,imageURL:"/assets/icons/construction.png",
     
    },
    {
        title:"Petrochemical Industry",
        value:`Maximize efficiency in petrochemical operations by addressing labor needs, optimizing supply chains, and ensuring equipment reliability. Tailored solutions in workforce development, logistics, and equipment maintenance ensure safe and efficient operations.`
        ,imageURL:"/assets/icons/petrochemical.png",
     
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
        image:"/assets/images/Francis.jpg",
    },
    {
        name: "Alex Menage",
        position:"Non-Executive Director",
        about: `Alex Menage is a distinguished Non-Executive Director at Jeva Energy and Solutions, renowned for his expertise in entrepreneurial deal-making and relationship-building. With a strategic focus on Emerging Markets, Alex excels in developing and nurturing businesses, leveraging his extensive experience to drive growth and expand business horizons.

Alex’s career is marked by his adeptness at building and managing high-performing teams, crafting effective go-to-market strategies, and spearheading business development initiatives. His proficiency in sales and relationship management has been instrumental in fostering valuable connections and securing strategic opportunities.

As an accomplished corporate professional, Alex Menage brings a wealth of knowledge and a proven track record of success to Jeva Energy and Solutions. His innovative approach and strategic vision contribute significantly to the company's growth and success in diverse and dynamic markets.
`,
        image:"/assets/images/Alex.jpg",
    },
    {
        name: "Francis Amediku",
        position:"Project Director",
        about: `Francis Amediku is a seasoned Business and Technology Executive with over 26 years of diverse experience in IT, Project Management, Business Transformation, Strategy and Execution, Sales, and Marketing. He has consistently delivered exceptional results across industries such as Consulting, Mining, and Telecommunications.

Francis excels in leading large-scale projects and driving business transformation with strategic vision and innovative solutions. His IT expertise has optimized processes and enhanced operational efficiency, while his project management skills ensure timely and budget-conscious project delivery.
In Sales and Marketing, Francis's strategies have significantly boosted revenue and market presence. Known for his collaborative leadership, he inspires and mentor teams, fostering a culture of innovation and continuous improvement.

As Project Director, Francis leverages his extensive background to deliver transformative solutions and drive the organization's strategic vision, solidifying his reputation as a forward-thinking leader dedicated to achieving sustainable growth and success.
`,
        image:"/assets/images/Francis.jpg",
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
        image:"/assets/images/Alex.jpg"
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