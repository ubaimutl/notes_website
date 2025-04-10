import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Explanations = () => {
  const [explanations, setExplanations] = useState([]);
  const [newExplanation, setNewExplanation] = useState({ word_or_sentence: '', explanation: '' });

  useEffect(() => {
    fetchExplanations();
  }, []);

  const fetchExplanations = () => {
    axios.get('http://10.140.167.126:8000/api/explanations/explanations/')
      .then(response => setExplanations(response.data))
      .catch(error => console.error('Error fetching explanations:', error));
  };

  const handleAddExplanation = () => {
    axios.post('http://10.140.167.126:8000/api/explanations/explanations/', newExplanation)
      .then(() => {
        setNewExplanation({ word_or_sentence: '', explanation: '' });
        fetchExplanations();
      })
      .catch(error => console.error('Error adding explanation:', error));
  };

  return (
    <div>
      <h2>Explanations</h2>

      {/* Add Explanation Form */}
      <div>
        <h3>Add Explanation</h3>
        <input
          type="text"
          placeholder="Word or Sentence"
          value={newExplanation.word_or_sentence}
          onChange={(e) => setNewExplanation({ ...newExplanation, word_or_sentence: e.target.value })}
        />
        <input
          type="text"
          placeholder="Explanation"
          value={newExplanation.explanation}
          onChange={(e) => setNewExplanation({ ...newExplanation, explanation: e.target.value })}
        />
        <button onClick={handleAddExplanation}>Add</button>
      </div>

      {/* Display Explanations */}
      <ul>
        {explanations.map(explanation => (
          <li key={explanation.id}>
            <strong>{explanation.word_or_sentence}</strong>
            <p>{explanation.explanation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Explanations;