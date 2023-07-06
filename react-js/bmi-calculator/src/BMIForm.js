import React, { useState } from 'react';

const BMIForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [mobile, setMobile] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform BMI calculation and update state
    // You can make an API call to the backend here to calculate BMI

    // Example calculation:
    const heightInMeters = parseFloat(height) / 100; // Convert height to meters
    const weightInKg = parseFloat(weight);
    const bmiResult = weightInKg / (heightInMeters * heightInMeters);

    setBMI(bmiResult.toFixed(2));

    // Determine BMI category
    let bmiCategory = '';
    if (bmiResult < 18.5) {
      bmiCategory = 'Underweight';
    } else if (bmiResult < 24.9) {
      bmiCategory = 'Normal weight';
    } else if (bmiResult < 29.9) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obese';
    }
    setCategory(bmiCategory);
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <form onSubmit={handleSubmit}>
       <label htmlFor="name">Name: </label>
        <input type="text" id="name"  value={name} onChange={(e) => setName(e.target.value)} required/>
        <label htmlFor="age"><p></p>Age:</label>
        <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required/>
        <label htmlFor="height"><p></p>Height (in cm):</label>
        <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} required/>
        <label htmlFor="weight"><p></p>Weight (in kg):</label>
        <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} required/>
        <label htmlFor="mobile"><p></p>mobile:</label>
        <input type="number" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required/>
        <p></p><button type="submit">Submit </button>
      </form>

      {bmi && category && (
        <div>
          <h2>Result:</h2>
          <p>BMI: {bmi}</p>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
};

export default BMIForm;
