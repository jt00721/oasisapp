import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-requests';

// const NewPost = () => {
//     return (
//         <div>
//             <h1>Create a Post</h1>
//         </div>
//     );
// };

export const NewPost = () => {
  const [message, setMessage] = useState('');
  let todayDate = new Date();
  let day = String(todayDate.getDate()).padStart(2, '0');
  let month = String(todayDate.getMonth() + 1).padStart(2, '0');
  let year = String(todayDate.getFullYear());
  let td = new Date().toLocaleDateString('en-GB')

  let todayDateString = day + '/' + month + '/' + year;
  let lol = "'" + todayDateString + "'";
  let date = todayDateString;

  const { doRequest, errors } = useRequest({
    url: '/api/posts',
    method: 'post',
    body: {
      message,
      date,
    },
    onSuccess: () => Router.push('/all-posts'),
  });

  const onSubmit = (event) => {
    event.preventDefault();
    doRequest();
  };

//   const onBlur = () => {
//     const value = parseFloat(date);

//     if (isNaN(value)) {
//       return;
//     }

//     setDate(value.toFixed(2));
//   };

  return (
    <div>
      <h1>Create a Post</h1>
      <h4>Share anything that is on your mind<br/>It will be anonymous so feel free<br/>Remember You Will Achieve More Together.<br/>Join The Oasis Student Community.</h4>
      <form onSubmit={onSubmit} style={{marginBottom: '350px'}}>
        <div className="form-group" style={{marginTop: '100px'}}>
          <label>Message</label>
          <input
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        {errors}
        <button className="btn btn-primary" style={{marginTop: '50px'}}>Submit</button>
      </form>

      <hr/>
    </div>
  );
};

export default NewPost;
