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
import { FaCheck, FaTrash, FaTimes } from "react-icons/fa"; 

const Inquiries = () => {
  const [allInquiries, setAllInquiries] = useState([]);
  const [pendingInquiries, setPendingInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState(null); 
  const [isPendingModalOpen, setIsPendingModalOpen] = useState(false); 
  const [isAllInquiriesModalOpen, setIsAllInquiriesModalOpen] = useState(false); 

  useEffect(() => {
    const fetchInquiries = () => {
      const q1 = query(
        collection(db, "Inquiry_Collection"),
        where("Status", "==", "Pending")
      );
      const unsubscribePending = onSnapshot(q1, (querySnapshot) => {
        const pendingInquiryList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPendingInquiries(pendingInquiryList);
      });

      const q2 = query(
        collection(db, "Inquiry_Collection"),
        where("Status", "==", "Done")
      );
      const unsubscribeAll = onSnapshot(q2, (querySnapshot) => {
        const allInquiryList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllInquiries(allInquiryList);
      });

      return () => {
        unsubscribePending();
        unsubscribeAll();
      };
    };

    fetchInquiries();
  }, []);

  const handleDone = async (id) => {
    try {
      const inquiryRef = doc(db, "Inquiry_Collection", id);
      await updateDoc(inquiryRef, { Status: "Done" });
      alert("Successfully Accepted");
      setIsPendingModalOpen(false); 
    } catch (error) {
      console.error("Error marking inquiry as done:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "Inquiry_Collection", id));
      alert("Successfully Deleted");
      setIsPendingModalOpen(false); 
      setIsAllInquiriesModalOpen(false);
    } catch (error) {
      console.error("Error deleting inquiry:", error);
    }
  };

  const handlePendingInquiryClick = (inquiry) => {
    setSelectedInquiry(inquiry);
    setIsPendingModalOpen(true); 
  };

  const handleAllInquiryClick = (inquiry) => {
    setSelectedInquiry(inquiry);
    setIsAllInquiriesModalOpen(true); 
  };

  const closeModal = () => {
    setIsPendingModalOpen(false);
    setIsAllInquiriesModalOpen(false);
    setSelectedInquiry(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Booking Inquiries</h2>
      <hr />
      <div className="col-md-12 d-flex" style={{ marginTop: "50px" }}>
        <div className="col-md-6">
          <h4 style={{ marginBottom: "30px" }}>New Inquiries (Pending)</h4>
          {pendingInquiries.length > 0 ? (
            <ul>
              {pendingInquiries.map((inq) => (
                <li
                  key={inq.id}
                  className="subscribtions-li"
                  onClick={() => handlePendingInquiryClick(inq)} 
                  style={{ cursor: "pointer" }}
                >
                  <span style={{ flexGrow: 1 }}>{inq.Name}</span>
                  <FaCheck
                    style={{
                      cursor: "pointer",
                      marginRight: "10px",
                      color: "green",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDone(inq.id);
                    }}
                    title="Accept"
                  />
                  <FaTrash
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(inq.id);
                    }}
                    title="Delete"
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>No pending inquiries found.</p>
          )}
        </div>

        <div className="col-md-6">
          <h4 style={{ marginBottom: "30px" }}>All Inquiries</h4>
          {allInquiries.length > 0 ? (
            <ul>
              {allInquiries.map((inq) => (
                <li
                  key={inq.id}
                  className="subscribtions-li"
                  onClick={() => handleAllInquiryClick(inq)} 
                  style={{ cursor: "pointer" }}
                >
                  <span style={{ flexGrow: 1 }}>{inq.Name}</span>
                  <FaTrash
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(inq.id);
                    }}
                    title="Delete email"
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>No inquiries found.</p>
          )}
        </div>
      </div>

      {isPendingModalOpen && selectedInquiry && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FaTimes className="modal-close-icon" onClick={closeModal} />
            <h3>Inquiry Details</h3>
            <div className="d-flex">
              <p style={{width:'100px'}}><strong>Name:</strong></p>
              <p>{selectedInquiry.Name}</p>
            </div>
            <div className="d-flex">
              <p style={{width:'100px'}}><strong>Email:</strong></p>
              <p>{selectedInquiry.Email}</p>
            </div>
            <div className="d-flex">
              <p style={{width:'100px'}}><strong>Mobile:</strong></p>
              <p>{selectedInquiry.Mobile}</p>
            </div>
            {/* <div className="d-flex">
              <p style={{width:'100px'}}><strong>Checkin Date:</strong></p>
              <p>{selectedInquiry.Checkin_Date}</p>
            </div>
            <div className="d-flex">
              <p style={{width:'100px'}}><strong>Checkout Date:</strong></p>
              <p>{selectedInquiry.Checkout_Date}</p>
            </div> */}
            <p><strong>Name:</strong> {selectedInquiry.Name}</p>
            <p><strong>Email:</strong> {selectedInquiry.Email}</p>
            <p><strong>Message:</strong> {selectedInquiry.Message}</p>
            <button onClick={() => handleDone(selectedInquiry.id)}>Mark as Done</button>
            <button onClick={() => handleDelete(selectedInquiry.id)}>Delete Inquiry</button>
          </div>
        </div>
      )}

      {isAllInquiriesModalOpen && selectedInquiry && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FaTimes className="modal-close-icon" onClick={closeModal} />
            <h3>All Inquiry Details</h3>
            <p><strong>Name:</strong> {selectedInquiry.Name}</p>
            <p><strong>Email:</strong> {selectedInquiry.Email}</p>
            <p><strong>Message:</strong> {selectedInquiry.Message}</p>
            <button onClick={() => handleDelete(selectedInquiry.id)}>Delete Inquiry</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inquiries;
