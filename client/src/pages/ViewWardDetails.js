import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const ViewWardDetails = () => {
  return (
    <>
      <Nav />

      <section className="py-10 w-5/6 mx-auto">
        <table>
          <thead className="space-x-10">
            <th className="p-5">Ward ID</th>
            <th className="p-5">Ward type</th>
            <th className="p-5">Ward rate</th>
            <th className="p-5">Notes</th>
          </thead>
          <tbody>
            <tr className=" border border-blue-900  hover:bg-blue-100">
              <td>1</td>
              <td>AC</td>
              <td>200 BDT</td>
              <td>Don't eat for 8 hours</td>
            </tr>
          </tbody>
        </table>
      </section>

      <Footer />
    </>
  );
};

export default ViewWardDetails;
