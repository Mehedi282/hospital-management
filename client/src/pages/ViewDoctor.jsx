import React from 'react';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import axios from 'axios';
import { useState } from 'react';

function ViewDoctor() {
    const [posts, setPosts] = useState([]);

    const API_URL = 'http://localhost:5000/api/fetchDoctor';

    const fetchData = async () => {
      const { data } = await axios.get(API_URL);
      setPosts(data);
      console.log(data);
    };

    useEffect(() => {
      fetchData();
    }, []); 
    

  return (
    <>
      <Nav />

      <section className="py-10 w-5/6 mx-auto">
        <table>
          <thead className="space-x-10">
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Gender</th>
            <th>Home phone</th>
            <th>Personal Phone</th>
            <th>NIC</th>
            <th>Qualifications</th>
            <th>Specialization</th>
            <th>Address</th>
            <th>Doctor type</th>
            <th>Visiting charge</th>
            <th>Chaneling charge</th>
            <th>Salary</th>
            <th>Note</th>
          </thead>

          {
            posts.map((data)=>{
              return(
                <tbody>
            <tr className=" border border-blue-900  hover:bg-blue-100 ">
              <td className=" ">{data._id}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.gender}</td>
              <td>{data.homeTelephone}</td>
              <td>{data.mobile}</td>
              <td>{data.nicNumber}</td>
              <td>{data.qualifiqation}</td>
              <td>{data.specialization}</td>
              <td>{data.address}</td>
              <td>{data.doctorType}</td>
              <td>{data.charge}</td>
              <td>{data.chanelingCharge}</td>
              <td>{data.salery}</td>
              <td>{data.note}</td>
            </tr>
          </tbody>
              )
            })
          }
        </table>
      </section>

      <Footer />

     
    </>
  );
}

export default ViewDoctor;
