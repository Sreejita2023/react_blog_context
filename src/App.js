import Context from "./components/Context";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AppContext } from "./context/AppContext";
import { useContext, useEffect } from "react";

export default function App() {
  const {fetchData,posts}=useContext(AppContext)
   
  useEffect(()=>{
    fetchData()
  },[])
  console.log(posts)
  return <div>
    <Header/>
    <Context/>
    <Footer/>
  </div>;
}
