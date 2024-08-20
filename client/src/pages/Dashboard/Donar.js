import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import API from '../../services/API';
import { formatDate } from '../../components/shared/utils';


const Donar = () => {
   const [donarData,  setDonarData] =  useState([]);

    const getDonars = async () => {
        try {
            const res = await API.get('/inventory/get-donars');
            console.log(res);
            setDonarData(res?.data?.donars);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDonars();
    }, []);


  return (
    <Layout>
        <h1 className='text-xl'>Donar's Details</h1>

        <table class="table">
              <thead>
                <tr>
                  <th scope="col">Blood Group</th>
                  <th scope="col">Inventory Type</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Donar Email</th>
                  <th scope="col">Time And Date</th>
                </tr>
              </thead>
              <tbody>
                {donarData && donarData.map((data)=>(
                <tr key={data._id}>
                  <td scope="row">{data.bloodGroup}</td>
                  <td>{data.inventoryType}</td>
                  <td>{data.quantity}</td>
                  <td>{data.email}</td>
                  <td>{formatDate(data.updatedAt)}</td>
                  
                </tr>

                ))
                }
                
              </tbody>
            </table>
    </Layout>
  )
}

export default Donar