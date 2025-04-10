import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Practices = () => {
  const [practices, setPractices] = useState([]);
  const [subSubjects, setSubSubjects] = useState([]);
  const [newPractice, setNewPractice] = useState({ question: '', answer: '', sub_subject: '' });

  useEffect(() => {
    fetchPractices();
    fetchSubSubjects();
  }, []);

  const fetchPractices = () => {
    axios.get('http://10.140.167.126:8000/api/practices/practices/')
      .then(response => setPractices(response.data))
      .catch(error => console.error('Error fetching practices:', error));
  };

  const fetchSubSubjects = () => {
    axios.get('http://10.140.167.126:8000/api/subjects/sub-subjects/')
      .then(response => setSubSubjects(response.data))
      .catch(error => console.error('Error fetching sub-subjects:', error));
  };

  const handleAddPractice = () => {
    axios.post('http://10.140.167.126:8000/api/practices/practices/', newPractice)
      .then(() => {
        setNewPractice({ question: '', answer: '', sub_subject: '' });
        fetchPractices();
      })
      .catch(error => console.error('Error adding practice:', error));
  };

  return (
    <div>
      <h2>Practices</h2>

      {/* Add Practice Form */}
      <div>
        <h3>Add Practice</h3>
        <select
          value={newPractice.sub_subject}
          onChange={(e) => setNewPractice({ ...newPractice, sub_subject: e.target.value })}
        >
          <option value="">Select Sub-Subject</option>
          {subSubjects.map(sub => (
            <option key={sub.id} value={sub.id}>{sub.name}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Question"
          value={newPractice.question}
          onChange={(e) => setNewPractice({ ...newPractice, question: e.target.value })}
        />
        <input
          type="text"
          placeholder="Answer"
          value={newPractice.answer}
          onChange={(e) => setNewPractice({ ...newPractice, answer: e.target.value })}
        />
        <button onClick={handleAddPractice}>Add</button>
      </div>

      {/* Display Practices */}
      <ul>
        {practices.map(practice => (
          <li key={practice.id}>
            <strong>{practice.question}</strong>
            <p>Answer: {practice.answer}</p>
            <p>Linked to Sub-Subject: {practice.sub_subject?.name || 'None'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Practices;