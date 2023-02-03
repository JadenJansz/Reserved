import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReportViewer from '../pages/ReportViewer';
import generatePDF from '../data/generatePDF';
import { useStateContext } from '../contextProviders/ContextProvider';
import { Link } from 'react-router-dom';

const ReportSelector = () => {

  const { sidebarActive, setSidebarActive ,setRestaurantSidebar, setSession } = useStateContext();
  
  useEffect(() => {
    setSidebarActive(true);
    setRestaurantSidebar(false)
  }, [])
  
  const [data, setData] = useState([]);
  const [report, setReport] = useState(false);
  const [criteria, setCriteria] = useState({
    name: 'admin_income_report',
    year: '2022',
    month: '1'
  })
  
  const handleChange = (e) => {
    setCriteria(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/${criteria.name}`, { params: criteria });
        console.log(criteria.name)
        setData(response.data);
        console.log(response.data)
      } catch (err) {
        console.log("error");
      }
    };
    getAllData();
  }, [criteria]);

  
  return (
    <div>
      <select onChange={handleChange} name='name'>
        <option disabled={true}>Select Report</option>
        <option selected value='admin_income_report'>Monthly Income Revenue Report</option>
        <option value='admin_restaurant_registration_report'>Monthly Restaurant Registration Report</option>
      </select>
  
      <select onChange={handleChange} name='year'>
        <option disabled={true}>Select Year</option>
        <option selected value='2022'>2022</option>
        <option value='2023'>2023</option>
      </select>
  
      <select onChange={handleChange} name='month'>
        <option disabled={true}>Select Month</option>
        <option selected value='1'>January</option>
        <option value='2'>February</option>
        <option value='3'>March</option>
        <option value='4'>April</option>
        <option value='5'>May</option>
        <option value='6'>June</option>
        <option value='7'>July</option>
        <option value='8'>August</option>
        <option value='9'>September</option>
        <option value='10'>October</option>
        <option value='11'>November</option>
        <option value='12'>December</option>
      </select>
  
      <Link to='/admin_view_reports' state={{ data: data, criteria: criteria }} >
        <button>View Report</button>
      </Link>
    </div>
  )
}

export default ReportSelector