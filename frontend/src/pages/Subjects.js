import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState({ name: '', description: '' });
  const [newSubSubject, setNewSubSubject] = useState({ main_subject: '', name: '', description: '' });

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = () => {
    axios.get('http://10.140.167.126:8000/api/subjects/main-subjects/')
      .then(response => setSubjects(response.data))
      .catch(error => console.error('Error fetching subjects:', error));
  };

  const handleAddMainSubject = () => {
    axios.post('http://10.140.167.126:8000/api/subjects/main-subjects/', newSubject)
      .then(() => {
        setNewSubject({ name: '', description: '' });
        fetchSubjects();
      })
      .catch(error => console.error('Error adding main subject:', error));
  };

  const handleAddSubSubject = () => {
    axios.post('http://10.140.167.126:8000/api/subjects/sub-subjects/', newSubSubject)
      .then(() => {
        setNewSubSubject({ main_subject: '', name: '', description: '' });
        fetchSubjects();
      })
      .catch(error => console.error('Error adding sub-subject:', error));
  };

  return (
    <div>
      <h2>Main Subjects</h2>

      {/* Add Main Subject Form */}
      <div>
        <h3>Add Main Subject</h3>
        <input
          type="text"
          placeholder="Name"
          value={newSubject.name}
          onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newSubject.description}
          onChange={(e) => setNewSubject({ ...newSubject, description: e.target.value })}
        />
        <button onClick={handleAddMainSubject}>Add</button>
      </div>

      {/* Add Sub-Subject Form */}
      <div>
        <h3>Add Sub-Subject</h3>
        <select
          value={newSubSubject.main_subject}
          onChange={(e) => setNewSubSubject({ ...newSubSubject, main_subject: e.target.value })}
        >
          <option value="">Select Main Subject</option>
          {subjects.map(subject => (
            <option key={subject.id} value={subject.id}>{subject.name}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Name"
          value={newSubSubject.name}
          onChange={(e) => setNewSubSubject({ ...newSubSubject, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newSubSubject.description}
          onChange={(e) => setNewSubSubject({ ...newSubSubject, description: e.target.value })}
        />
        <button onClick={handleAddSubSubject}>Add</button>
      </div>

      {/* Display Subjects */}
      <ul>
        {subjects.map(subject => (
          <li key={subject.id}>
            <strong>{subject.name}</strong>
            <p>{subject.description}</p>
            <ul>
              {subject.sub_subjects.map(sub => (
                <li key={sub.id}>{sub.name} - {sub.description}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subjects;