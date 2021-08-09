import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <div style={{margin: '350px 0px'}}>
      <h1>Welcome to Oasis</h1>
      <h4>Click on Home above to see our services</h4>
    </div>
  ) : (
    <div style={{margin: '350px 0px'}}>
      <h1>You have been logged out</h1>
      <h4>Login to access our services again</h4>
    </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
    return {};
};

export default LandingPage;

// import Link from 'next/link';

// const LandingPage = ({ currentUser, tickets }) => {
//   const ticketList = tickets.map((ticket) => {
//     return (
//       <tr key={ticket.id}>
//         <td>{ticket.title}</td>
//         <td>{ticket.price}</td>
//         <td>
//           <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
//             <a>View</a>
//           </Link>
//         </td>
//       </tr>
//     );
//   });

//   return (
//     <div>
//       <h1>Tickets</h1>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Price</th>
//             <th>Link</th>
//           </tr>
//         </thead>
//         <tbody>{ticketList}</tbody>
//       </table>
//     </div>
//   );
// };

// LandingPage.getInitialProps = async (context, client, currentUser) => {
//   const { data } = await client.get('/api/tickets');

//   return { tickets: data };
// };

// export default LandingPage;