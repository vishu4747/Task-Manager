import React, { useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { useNavigate } from 'react-router-dom';

const ManageTask = () => {
  const [allTasks, setAllTasks] = useState([]);

  const [tabs, setTabs] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  const navigate = useNavigate();

  const getAllTasks = async () => {

  };

  const handleClick = () => {};

  return (
    <DashboardLayout activeMenu="Manage Tasks">
      <div className='my-5'></div>
    </DashboardLayout>
  )
}

export default ManageTask
