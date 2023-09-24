// A mock function to mimic making an async request for data
export  function fetchAllProducts() {
  return new Promise(async(resolve) =>{
    //Here We Will not hardcode the server URL.
    const response =await fetch('http://localhost:8080/products')
    const data =response.json()
    resolve({data})}
  );
}
