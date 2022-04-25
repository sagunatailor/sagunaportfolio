import React from 'react';
import useFetch from 'react-fetch-hook';

function Contact() {
  const { isLoading, data, error } = useFetch(
    'https://www.boredapi.com/api/activity?participants=1'
  );
  return (
    <section id='contact'>
      <br />
      <br />
      <h2>Contact</h2>
      <div className='contact'>
        <p>
          You can email me at{' '}
          <a href='mailto:sagunas@gmail.com'>sagunas@gmail.com</a>
        </p>
        {isLoading && <p>A moment please...</p>}
        {error && (
          <p>{`There is a problem fetching the post data - ${error}`}</p>
        )}
        {data && <p>Bored? {data.activity}</p>}
      </div>
    </section>
  );
}
export default Contact;
