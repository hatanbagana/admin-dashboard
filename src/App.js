import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react'
// Ustgah hereggvi. Firebase tohiruulsan heseg. Credentials can be in env file for security reasons
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, getDocs,query,collection } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAp98ZLrNuaGzMWv53xewmGTsRrNVybp_g",
  authDomain: "admin-dashboard-525c0.firebaseapp.com",
  projectId: "admin-dashboard-525c0",
  storageBucket: "admin-dashboard-525c0.appspot.com",
  messagingSenderId: "458518491279",
  appId: "1:458518491279:web:83546c3f3f1c54d9ea00fa",
  measurementId: "G-1ZXG3J2GF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const db = getFirestore();

function App() {
  const [list, setList] = useState([]);
  const [newData, setNewData] = useState()


  const getData = async ()=>{
    const testRef = query(collection(db, "test"));
    const testSnapshot = await getDocs(testRef)
    const testList =  testSnapshot.docs.map((doc) => {
      return {
        ...doc.data()
      }
    })
    setList(testList)
    console.log(testList)

    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }
  }

  const handleCreate=()=>{
    console.log(newData)
  }
  useEffect( () => {
    getData()
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button>
          mockId data awah
        </button>
        <button>
          mur 2 data awah
        </button>
        <div>
        <label>
          Name:
          <input type="text" name="name" value={newData} onChange={(e)=>setNewData(e.target.value)} />
        </label>
          <button onClick={handleCreate}>
            utga nemeh
          </button>
        </div>
        <div>
            {list?.map((item, index)=>{
              return <div key={index}>
                <pre>
                  {item.nvd}
                  {item.test || 'hooson'}
                </pre>
              </div>
            })}
        </div>

      </header>
    </div>
  );
}

export default App;
