import axios from 'axios';


export async function getAllContacts() { // WORKING
  const response = await axios.get('http://localhost:8000/api/v1/contacts');
  console.log(response);
} //GET ()
export async function getOneContact(id) { // WORKING
  const response = await axios.get(`http://localhost:8000/api/v1/contacts/${id}`);
  console.log(response);
} //GET (id)
export async function createNewContact() {} //POST (OBJ)
export async function editOneContact() {} //PUT or PATCH (OBJ or string?)
export async function deleteContact(id) { // WORKING
  const response = await axios.delete(`http://localhost:8000/api/v1/contacts/${id}`);
  console.log(response);
} //DELETE (id)