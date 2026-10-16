import { useState, useEffect } from "react";
import Loader from "./Pages/Loader";
import Routing from "./Route/Routing";



function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>

      <Routing />

    </>
  )
}
export default App;