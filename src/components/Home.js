
import Notes from "./Notes";

function Home(props) {
  return (
    <div>
      <Notes showAlert={props.showAlert}/>
    </div>
    
  );
}

export default Home;
