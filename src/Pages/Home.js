import NavBar from "../features/navBar/NavBar";
import ProjectList from "../features/projectList/projectList";




function Home() {
    return ( 
        <div>
        <NavBar>
          <ProjectList></ProjectList>
        </NavBar>

        </div>
     );
}

export default Home;