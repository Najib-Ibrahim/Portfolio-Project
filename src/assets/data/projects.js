import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.jpg';
import FridgerImg from '../images/fridgerImg.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import AccessImg from '../images/accessImg.jpg';
import TrackerImg from '../images/trackerImg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Fridger',
    desc: 'A fullstack application that creates a receipe based on the items in your fridge developed in React Native with a MongoDB Atlas cloud database',
    img: FridgerImg,
  },
  {
    id: uuidv4(),
    name: 'Tracker Sniffer',
    desc: 'A web browser extension that exposes tracking algorithms used by websites visited by end user.',
    img: TrackerImg,
  },
  {
    id: uuidv4(),
    name: 'AI Sorting',
    desc: 'An AI machine learning algorithm that efficiently and intelligently sorted through an extremely large data set.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'Accessibility design',
    desc: 'Wireframe design of web application with accessibility features in mind',
    img: AccessImg,
  },
  {
    id: uuidv4(),
    name: 'Recipes',
    desc: 'A mobile app that recommends popular recipes develpoed in Java and using an external API.',
    img: GreenCtgImg,
  },
];

export default projects;
