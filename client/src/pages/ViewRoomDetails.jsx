import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

function ViewRoomDetails() {
  return (
    <>
      <Nav />

      <section className="py-10 w-5/6 mx-auto">
        <table>
          <thead className="space-x-10">
            <th className="p-5">Room ID</th>
            <th className="p-5">Room type</th>
            <th className="p-5">Room rate</th>
            <th className="p-5">Notes</th>
          </thead>
          <tbody>
            <tr className=" border border-blue-900  hover:bg-blue-100">
              <td>1</td>
              <td>AC</td>
              <td>1000 BDT</td>
              <td>Don't eat for 8 hours</td>
            </tr>
          </tbody>
        </table>
      </section>

      <Footer />
    </>
  );
}

export default ViewRoomDetails;
