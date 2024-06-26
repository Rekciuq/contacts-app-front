import axios from 'axios';

const API_LINK = `https://contact-app-back-green-night-5834.fly.dev/api/v1/`;


export async function getAllContacts() {
  const response = await axios.get(API_LINK + 'contacts');
  return response.data;
}

export async function getOneContact(id) {
  const response = await axios.get(API_LINK + `contacts/${id}`);
  return response.data.data;
}

export async function createNewContact({name, phoneNumber = null, description = null, dateOfBirth = null}) {
  const response = await axios.post(API_LINK + `contacts`, {
    name,
    phoneNumber,
    description,
    dateOfBirth
  });
  return response.data;
}

export async function editOneContact(id, {name, phoneNumber, description, dateOfBirth}) {
  const response = await axios.put(API_LINK + `contacts/${id}`, {
    name,
    phoneNumber,
    description,
    dateOfBirth
  });
  return response.data;
}

export async function deleteContact(id) {
  const response = await axios.delete(API_LINK + `contacts/${id}`);
  return response;
}