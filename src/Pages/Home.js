import NavBar from "../features/navBar/NavBar";
import ProductList from "../features/project/components/ProductList";





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