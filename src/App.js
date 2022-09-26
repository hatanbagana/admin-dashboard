import { useEffect, useState } from "react";
// Ustgah hereggvi. Firebase tohiruulsan heseg. Credentials can be in env file for security reasons
import { initializeApp } from "firebase/app";
import { Header } from "./components/Header";

import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  query,
  collection,
  deleteDoc,
  setDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { Table } from "./components/Table";
import Sidebar from "./components/Sidebar";

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
  const [userList, setUserList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [tableType, setTableType] = useState("users");

  const getData = async () => {
    if (tableType === "users") {
      const usersRef = query(collection(db, "users"));
      const usersSnapshot = await getDocs(usersRef);
      const userList = usersSnapshot.docs.map((doc) => {
        const id = doc.id;
        return {
          id,
          ...doc.data(),
        };
      });
      setUserList(userList);
      return;
    } else if (tableType === "products") {
      const productsRef = query(collection(db, "products"));
      const productsSnapshot = await getDocs(productsRef);
      const productList = productsSnapshot.docs.map((doc) => {
        const id = doc.id;
        return {
          id,
          ...doc.data(),
        };
      });
      setProductList(productList);
      return;
    }
  };

  const deleteData = async (id) => {
    const res = await deleteDoc(doc(db, "products", id));
    getData();
  };

  const createData = async (data) => {
    console.log(data);
    const docRef = await addDoc(collection(db, tableType), data);
    if (docRef.id) getData();
  };

  const updateData = async (data) => {
    const docRef = doc(db, tableType, data.id);
    console.log(tableType, data.id + "asdas");
    console.log(data);

    updateDoc(docRef, data)
      .then((docRef) => {
        console.log(
          "A New Document Field has been added to an existing document"
        );
      })
      .catch((error) => {
        console.log(error);
      });
    getData();
  };

  const handleTableType = (type) => {
    console.log(type);
    setTableType(type);
  };

  useEffect(() => {
    getData();
  }, [tableType]);

  return (
    <div className="w-full bg-slate-200 h-screen">
      <Header />
      <div className="flex flex-row">
        <Sidebar handleType={(type) => handleTableType(type)} />
        {tableType === "users" ? (
          <Table
            list={userList}
            delete={(id) => deleteData(id)}
            update={(id) => updateData(id)}
            tableType={tableType}
            create={(data) => createData(data)}
          />
        ) : (
          <Table
            list={productList}
            delete={(id) => deleteData(id)}
            update={(data) => updateData(data)}
            tableType={tableType}
            create={(data) => createData(data)}
          />
        )}
      </div>

      {/* <Modal /> */}
    </div>
  );
}

export default App;
