import './App.css'
import Title from "./Title.jsx";
import Product from './product.jsx';
import ProductTab from './producttab.jsx';
// function Description(){
//     return <h3>i am a description</h3>;
// }
// function App() {
// return  (  
// <div> {/* /* agr gap dena he element ko next line m likhna to parenthesis reuired ni to same line me likho */} 
// <Title/>
//     <Description/>
//     <Title/>
//     <Description/>
    
// </div>
// );
// }
function App() {
    let name="ayush";
return  (  

    <>  {/* react fragment */}
    <Title/>
    <Title/>
    <Title/>
    <p>2*2={2*2}</p>
    <p>hi,{name.toUpperCase()}</p>
    <ProductTab/>

    </>
);
}

export default App
