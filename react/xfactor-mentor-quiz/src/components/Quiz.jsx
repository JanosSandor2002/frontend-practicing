import React, { useState } from 'react';
import { pics } from '../datas';
import Result from './Result'; // Feltételezzük, hogy te írod

const Quiz = () => {
  const [answers, setAnswers] = useState([]); // választott betűk
  const [selectedLetter, setSelectedLetter] = useState(''); // a legtöbbször választott betű
  const [showResult, setShowResult] = useState(false); // eredmény megjelenítés

  const choiceLetters = {
    1: ['g', 'a', 'l', 'e'],
    2: ['t', 'm', 'v', 'a'],
    3: ['g', 't', 'm', 'l'],
    4: ['e', 'v', 'a', 't'],
    5: ['l', 'g', 'm', 'a'],
    6: ['v', 'e', 't', 'g'],
    7: ['m', 'l', 'g', 't'],
    8: ['a', 'v', 'm', 'e'],
    9: ['t', 'g', 'a', 'v'],
    10: ['m', 'e', 'l', 't'],
    11: ['g', 'm', 't', 'a'],
    12: ['l', 'e', 'a', 'v'],
    13: ['v', 't', 'g', 'l'],
    14: ['a', 'm', 'v', 't'],
    15: ['g', 'e', 'l', 'a'],
    16: ['m', 'v', 't', 'g'],
    17: ['l', 'g', 'm', 'e'],
    18: ['t', 'v', 'g', 'l'],
    19: ['a', 'm', 'l', 't'],
    20: ['g', 'v', 'a', 'm'],
    21: ['l', 't', 'e', 'g'],
    22: ['v', 'm', 'g', 'a'],
    23: ['a', 'l', 't', 'm'],
    24: ['g', 'v', 'm', 'e'],
    25: ['l', 'g', 'a', 't'],
    26: ['e', 'a', 'm', 'l'],
    27: ['m', 't', 'g', 'v'],
    28: ['l', 'e', 'a', 'm'],
    29: ['g', 'a', 'v', 't'],
    30: ['m', 'l', 'g', 'e'],
  };

  const handleRadioChange = (letter, questionId) => {
    setAnswers((prev) => {
      const filtered = prev.filter((item) => item.questionId !== questionId);
      return [...filtered, { questionId, letter }];
    });
  };

  const handleSubmit = () => {
    // Számoljuk a betűket
    const counts = {};
    answers.forEach(({ letter }) => {
      counts[letter] = (counts[letter] || 0) + 1;
    });

    // Legtöbbször előforduló betű
    let maxCount = 0;
    let topLetter = '';
    for (let letter in counts) {
      if (counts[letter] > maxCount) {
        maxCount = counts[letter];
        topLetter = letter;
      }
    }

    setSelectedLetter(topLetter);
    setShowResult(true); // Mutassuk a Result komponenst
  };

  return (
    <div className='quiz'>
      {pics.map(
        ({ id, question, image, choice1, choice2, choice3, choice4 }) => (
          <div className='container' key={id}>
            <h1>{question}</h1>
            <div className='imgtext'>
              <div>
                <img src={image} alt='img' />
              </div>
              <div className='checkboxes'>
                {[choice1, choice2, choice3, choice4].map((choice, index) => {
                  const letter = choiceLetters[id][index];
                  return (
                    <label key={index} className='label'>
                      <input
                        type='radio'
                        name={`question-${id}`}
                        checked={answers.some(
                          (a) => a.questionId === id && a.letter === letter
                        )}
                        onChange={() => handleRadioChange(letter, id)}
                      />
                      <span className='checkmark'></span>
                      {choice}
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        )
      )}

      <div style={{ textAlign: 'center', margin: '30px' }}>
        <button onClick={handleSubmit} id='submitbutton'>
          Results
        </button>
      </div>

      {showResult && <Result selectedLetter={selectedLetter} />}
    </div>
  );
};

export default Quiz;
