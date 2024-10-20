import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig.js";

const storage = getStorage();
const db = getFirestore();

// Helper Function to Clear and Display Items
const clearAndDisplayItems = (container, items, renderFunc) => {
  container.innerHTML = ''; // Clear the current container
  items.forEach(renderFunc); // Render each item using a given function
};

// Generic Display Function to Fetch and Render from Firestore
const displayFromFirestore = (collectionName, container, renderFunc) => {
  getDocs(collection(db, collectionName)).then((snapshot) => {
    clearAndDisplayItems(container, snapshot.docs, (doc) => {
      renderFunc(doc.data(), container);
    });
  }).catch((error) => console.error(`Error fetching ${collectionName}:`, error));
};

// Helper to Render List Items
const renderListItem = (data, container, innerHTML) => {
  const li = document.createElement('li');
  li.innerHTML = innerHTML;
  container.appendChild(li);
};

// Display Functions (For Specific Sections)
const displayContacts = () => {
  displayFromFirestore('contacts', document.getElementById('contacts'), (contact) => {
    renderListItem(contact, document.getElementById('contacts'), `
      <strong>${contact.name}</strong> (${contact.department})<br>
      <em>Phone:</em> ${contact.phone} | <em>Email:</em> ${contact.email}<br>
      <em>Address:</em> ${contact.address}
    `);
  });
};

const displayTickets = () => {
  displayFromFirestore('tickets', document.getElementById('tickets'), (ticket) => {
    renderListItem(ticket, document.getElementById('tickets'), `
      <strong>${ticket.caseBy}</strong>: ${ticket.firstName} ${ticket.lastName} 
      (${ticket.department}) <br>
      <em>ID:</em> ${ticket.idNumber}, <em>Address:</em> ${ticket.address} <br>
      <strong>Status:</strong> ${ticket.status} <br>
      <small>${ticket.notes}</small>
    `);
  });
};

// Repeat similar display functions for other sections (agendas, newspapers, mail, tasks)...

// Initialize On Load
window.onload = () => {
  displayContacts();
  displayTickets();
  // Include similar calls for other sections...
};
