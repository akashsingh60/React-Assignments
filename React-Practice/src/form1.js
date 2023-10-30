import React, { useState } from 'react';

function Form1() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    Gender: '',
    phoneNumber: '',
  });

  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (!formData.firstName || !formData.lastName || !formData.Gender || !formData.phoneNumber) {
      alert('Please fill in all fields.');
      return;
    }

    const id = Math.random().toString(36).substr(2, 9);
    const newPerson = { ...formData, id };
    setPeople([...people, newPerson]);

    // Clear the form
    setFormData({
      firstName: '',
      lastName: '',
      Gender: '',
      phoneNumber: '',
    });
  };

  const handleDelete = (id) => {
    const updatedPeople = people.filter((person) => person.id !== id);
    setPeople(updatedPeople);
  };

  return (
    <div>
      <h2>Person Details</h2>
      <form>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <select
          name="Gender"
          value={formData.Gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      <h2>Person Data</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.Gender}</td>
              <td>{person.phoneNumber}</td>
              <td>
                <button onClick={() => handleDelete(person.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Form1;
