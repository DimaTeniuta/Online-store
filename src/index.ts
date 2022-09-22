import './style.css';
import App from './components/app/app';
import score, { myMark } from './components/score/score';

const page: App = new App();
const work: App = new App();

page.unloadPage();
work.workPage();

const mark: string = score(myMark);
console.log(mark);
