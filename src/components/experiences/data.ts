import { Company } from "./company.model";
import TWLogo from "../../assets/images/thoughtworks-logo.svg";
import IbmLogo from "../../assets/images/ibm-logo.png";
import CDacLogo from "../../assets/images/c-dac-logo.png";
import AmazonLogo from "../../assets/images/amazon.png";

import IbmLogoWebp from "../../assets/images/ibm-logo.webp";
import CDacLogoWebp from "../../assets/images/c-dac-logo.webp";
import AmazonLogoWebp from "../../assets/images/amazon.webp";

const companies: Company[] = [
  {
    logo: AmazonLogo,
    logoWeb: AmazonLogoWebp,
    name: "Amazon",
    position: "Software Dev Engineer",
    location: "Bangalore, IN",
    description:
      "Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Meta, and Microsoft.",
    accomplishments: [
      "Working at Amazon Device OS Team for building new frontend framework for Amazon devices by extending React Native to support Amazon Devices operating system like Amazon Alexa Echo, Echo Show, FireTV etc.",
      "Building core and complex common React Native components library for 2P and 3P developers for Amazon Devices operating system.",
      "Build a SVG rendering library from Scratch like react-native-svg for Amazon Devices operating system using React Native and C++."
    ],
    duration: "Jan 2022 - Present",
  },
  {
    logo: TWLogo,
    logoWeb: "",
    name: "Thoughtworks",
    position: "Full Stack Developer",
    location: "Bangalore, IN",
    description:
      "Thoughtworks is a leading global technology consultancy that integrates strategy, design and software engineering to enable enterprises and technology disruptors across the globe to thrive as modern digital businesses.",
    accomplishments: [
      "Building a e-commerce website from scratch using ReactJS, Spring Boot, Microservices, Material Design etc with a team of 15 members",
      "Done initial setup of UI repo as Mono repo using yarn workspace with eslint, stylelint, prettier, husky pre-commit hook, lint-staged and jest for testing",
      "Created Backend API for product details page with basic product details, quanitity, prices, dealers etc",
    ],
    duration: "Oct 2021 - Jan 2022",
  },
  {
    logo: IbmLogo,
    logoWeb: IbmLogoWebp,
    name: "IBM",
    position: "Full Stack Developer",
    location: "Bangalore, IN",
    description:
      "International Business Machines Corporation is an American multinational technology company headquartered in Armonk, New York, with operations in over 170 countries.",
    accomplishments: [
      "Working as a full stack developer on a large-scale, cloud-native, and distributed crew logistics solution with tools & technologies like Spring Boot, React.Js, Groovy, Micro-services, Redis, Cassandra, Kafka, Kibana, Grafana, Portainer in an agile team.",
      "Improved live tracking speed by 15% by optimising code",
      "Improved scalability, fault tolerance, and reliability by designing micro-service architecture after event storming with stakeholders.",
      "Completed 400+ user stories and implemented 15+ new features.",
    ],
    duration: "Jun 2019 - Oct 2021",
  },
  {
    logo: CDacLogo,
    logoWeb: CDacLogoWebp,
    name: "C-DAC",
    position: "Machine Learning Trainee",
    location: "Jaipur, IN",
    description:
      "The Centre for Development of Advanced Computing is an Indian autonomous scientific society, operating under the Ministry of Electronics and Information Technology.",
    accomplishments: [
      "Gained experience in machine learning using python by working on a project of weather prediction android app which shows weather forecast",
      "Used multi-dimension linear regression model for prediction using 100 years of historical data set using information retrieval",
    ],
    duration: "May 2018 - Jul 2018",
  },
];

export default companies;
