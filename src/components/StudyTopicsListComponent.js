import listofAllGeneralTopics from '../shared/ListofAllGeneralTopics';
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom';

const StudyTopicsListComponent = () => {

    return (
        <ul className="generalstudytopicslist">
        {listofAllGeneralTopics.map((item) => {
            return (
            <li key={uuidv4()}><Link to={`${item.url}`}>{item.title}</Link></li>
            )
        })}
        </ul>
    );
}
 
export default StudyTopicsListComponent;