import { useEffect, useState } from "react";
// Ustgah hereggvi. Firebase tohiruulsan heseg. Credentials can be in env file for security reasons
import { initializeApp } from "firebase/app";
import { Modal } from "./components/Modal";
import { Header } from "./components/Header";

import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  query,
  collection,
} from "firebase/firestore";
import { Table } from "./components/Table";

const firebaseConfig = {
  apiKey: "AIzaSyAp98ZLrNuaGzMWv53xewmGTsRrNVybp_g",
  authDomain: "admin-dashboard-525c0.firebaseapp.com",
  projectId: "admin-dashboard-525c0",
  storageBucket: "admin-dashboard-525c0.appspot.com",
  messagingSenderId: "458518491279",
  appId: "1:458518491279:web:83546c3f3f1c54d9ea00fa",
  measurementId: "G-1ZXG3J2GF8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const db = getFirestore();

function App() {
  const [list, setList] = useState([]);
  const [newData, setNewData] = useState();

  const getData = async () => {
    const testRef = query(collection(db, "test"));
    const testSnapshot = await getDocs(testRef);
    const testList = testSnapshot.docs.map((doc) => {
      const id = doc.id;
      return {
        id,
        ...doc.data(),
      };
    });
    setList(testList);
  };

  const handleCreate = () => {
    console.log(newData);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full bg-slate-200 h-screen">
      <Header />
      <Table list={list} />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
