import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
import { db } from "../firebase.config";
import { UserAuth } from "../context/AuthContext";


const AuthContext = createContext();

export const addPosts = () => {
    const [data, setData] = useState([]);
    const { userIn } = UserAuth();

    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();
    var ref = database.ref("posts");
    ref.on("value", (snap) => {
        console.log(snap.val());
        setData({ data: snap.val() });
    });
    };

export default addPosts;
