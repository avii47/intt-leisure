// utils/subscribe.js
import { getFirestore, addDoc, collection } from "firebase/firestore";
import emailjs from "emailjs-com";
import { createNewsletters } from "../api/newsletter";

export const subscribeToNewsletter = async (email, setShowModal) => {
  const db = getFirestore();

  try {
    // Save email to Firestore
    // await addDoc(collection(db, "NewsLetter_Collection"), {
    //   Email: email,
    //   Status: 'Pending'
    // });

    // Prepare booking details for emailjs
    const bookingDetails = { email };

    // Send confirmation email
    // await emailjs.send(
    //   "service_6of844u",
    //   "template_rik8m2j",
    //   bookingDetails,
    //   "gdzYpqkDHcPcrpQOw"
    // );

    const data = await createNewsletters(bookingDetails);

    console.log("Email sent successfully!");
    setShowModal(true);  // Show modal after successful email
  } catch (error) {
    console.error("Subscription failed:", error);
  }

};
