import DataStructures from "../shared/DataStructures";
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom';

const DataStructuresPage = () => {

    return (
            <div>
                <h1>{DataStructures.title}</h1>
                <ul>
                {DataStructures.subjects.map((item) => {
                    return (
                    <li key={uuidv4()}><Link to={`${DataStructures.url}/${item.title}`}>{item.title}</Link></li>
                    )
                })}
                </ul>
            </div>
          );
}
 
export default DataStructuresPage;