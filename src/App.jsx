
import Navbar from "./navbar/Navbar";
import Pages from './Pages';
import './App.css';

function App() {
/*  const [jewelryData, setJewelryData] = useState([]);

  useEffect(() => {
    fetch("https://euphoria-git-main-michelle-aminas-projects.vercel.app/Jewelery")
      .then(resp => resp.json())
      .then((data) => {
        setJewelryData(data);
        console.log("Fetched jewelry data:", data); // Log the fetched data
      })
      .catch(error => {
        console.error('Error fetching jewelry data:', error);
      });
  }, []);

  console.log("Jewelry data in state:", jewelryData); // Log the jewelryData state */

  return (
    <div className="main">
       <Navbar/>
       <Pages/>
    </div>
  );
}

export default App;