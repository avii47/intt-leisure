import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import { FaCheck, FaTrash } from "react-icons/fa";

const Newsletter = () => {
  const [allSubscribtions, setAllSubscribtions] = useState([]);
  const [pendingSubscribtions, setPendingSubscribtions] = useState([]);

  useEffect(() => {
    const fetchSubscribtions = () => {
      const q1 = query(
        collection(db, "NewsLetter_Collection"),
        where("Status", "==", "Pending")
      );
      const unsubscribePending = onSnapshot(q1, (querySnapshot) => {
        const pendingSubscribtionList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPendingSubscribtions(pendingSubscribtionList);
      });

      const q2 = query(
        collection(db, "NewsLetter_Collection"),
        where("Status", "==", "Done")
      );
      const unsubscribeAll = onSnapshot(q2, (querySnapshot) => {
        const allSubscribtionList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllSubscribtions(allSubscribtionList);
      });

      return () => {
        unsubscribePending();
        unsubscribeAll();
      };
    };

    fetchSubscribtions();
  }, []);

  const handleDone = async (id) => {
    try {
      const newsLetterRef = doc(db, "NewsLetter_Collection", id);
      await updateDoc(newsLetterRef, { Status: "Done" });
      alert("Successfully Accepted");
    } catch (error) {
      console.error("Error marking email as done:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "NewsLetter_Collection", id));
      alert("Successfully Deleted");
    } catch (error) {
      console.error("Error deleting email:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Newsletter Subscribtions</h2>
      <hr />
      <div className="col-md-12 d-flex" style={{ marginTop: "50px" }}>
        <div className="col-md-6">
          <h4 style={{ marginBottom: "30px" }}>New Subscribtions (Pending)</h4>
          {pendingSubscribtions.length > 0 ? (
            <ul>
              {pendingSubscribtions.map((email) => (
                <li key={email.id} className="subscribtions-li">
                  <span style={{ flexGrow: 1 }}>{email.Email}</span>
                  <FaCheck
                    style={{
                      cursor: "pointer",
                      marginRight: "10px",
                      color: "green",
                    }}
                    onClick={() => handleDone(email.id)}
                    title="Accept"
                  />
                  <FaTrash
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => handleDelete(email.id)}
                    title="Delete"
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>No pending emails found.</p>
          )}
        </div>

        <div className="col-md-6">
          <h4 style={{ marginBottom: "30px" }}>All Subscribtions</h4>
          {allSubscribtions.length > 0 ? (
            <ul>
              {allSubscribtions.map((email) => (
                <li key={email.id} className="subscribtions-li">
                  <span style={{ flexGrow: 1 }}>{email.Email}</span>
                  <FaTrash
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => handleDelete(email.id)}
                    title="Delete email"
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>No emails found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
