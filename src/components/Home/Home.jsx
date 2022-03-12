import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { Link, useNavigate } from 'react-router-dom'
import { Table} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import Heading from '../Header/Heading'
import Footer from '../Footer/Footer'
import './Home.css'
import 'antd/dist/antd.css'

const Home = () => {

  const { users, removeUser, removeAll } = useContext(GlobalContext);
  const navigate = useNavigate();

  const deleteStyle = {
    color: 'red',
    marginLeft: 14
  }

  const [dataSource, setDataSource] = useState( [] )

  useEffect(() => {
    setDataSource(users);
  }, [users]);

  const columns = [
    { 
      key: '1',
      title: 'ID',
      dataIndex: 'id',
      align: 'center'
    },
    { 
      key: '2',
      title: 'First Name',
      dataIndex: 'fname',
      align: 'center'
    },
    { 
      key: '3',
      title: 'Last Name',
      dataIndex: 'lname',
      align: 'center'
    },
    { 
      key: '4',
      title: 'Actions',
      align: 'center',
      render: (object) => {
        return(
          <div>
            <EditOutlined onClick={() => {
              navigate(`/edit/${object.id}`);
            }}/>
            <DeleteOutlined onClick={() => {
              removeUser(object.id);
            }} style={deleteStyle} />
          </div>
        )
      }
    },
  ];

  const removeAllUsers = () => {
    removeAll();
  }

  return (
    <div className="home-container">
      <Heading />
      <div className="d-flex flex-row-reverse mb-4 mt-4">
        <button className="btn btn-outline-danger ms-2" onClick={removeAllUsers}>Delete All</button>
        <Link to="/add" className="btn btn-outline-dark">Add a new Person</Link>
      </div>
      <Table
        columns = {columns}
        dataSource = {dataSource}
        >
      </Table>
      <Footer />
    </div>
  )
}

export default Home
