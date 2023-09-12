import NavBar from "../features/navBar/NavBar";
import ProductList from "../features/projectList/components/ProductList";





function Home() {
    return ( 
        <div>
        <NavBar>
          <ProductList></ProductList>
        </NavBar>

        </div>
     );
}

export default Home;