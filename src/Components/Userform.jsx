import React, { useState } from 'react';
// import supabase from '../client';
import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://fcbyrfhpsxveworvwzep.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjYnlyZmhwc3h2ZXdvcnZ3emVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNjE0NTYsImV4cCI6MjAyNTkzNzQ1Nn0.vkxkszcZ8RJYz91qhIJ8oFi6W6gzhNDbCwp_t_S4Qbc");

function UserForm() {
  const [email, setEmail] = useState('');
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [formStatus, setFormStatus] = useState('');



  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('Submitting...');
  
    try {
      const { data, error } = await supabase
        .from('Socs')
        .insert([
          { email: email, enrollment_number: enrollmentNumber }
        ]);
  
      if (error) {
        console.error('Error inserting data:', error.message);
        setFormStatus('Failed to submit. Please try again.');
      } else {
        console.log('Data inserted successfully:', data);
        setEmail('');
        setEnrollmentNumber('');
        setFormStatus('Submitted successfully!');
      }
    } catch (err) {
      console.error('Exception caught:', err);
      setFormStatus('Failed to submit. Please check console for details.');
    }
  };
  


  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Your Details</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Enrollment Number:</label>
        <input
          type="text"
          value={enrollmentNumber}
          onChange={(e) => setEnrollmentNumber(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
      {formStatus && <p>{formStatus}</p>}
    </form>
  );
}

export default UserForm;
