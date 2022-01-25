import studyTopics from '../shared/StudyTopics';

const HomePage = () => {

    const generalStudyTopics = Object.keys(studyTopics)
    return (
        <div>
            <h1 className="homepage_title">Veronica's Study Guide</h1>
            <ul>
            {generalStudyTopics.map((item) => {
                return (
                <li>{item}</li>
                )
            })}
            </ul>
        </div>
      );
}
 
export default HomePage;