import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'
import "./Style.css"
const Dashboard = () => {
    const navigate = useNavigate()
    // let datastore = JSON.parse(localStorage.getItem("signupdetail")) || [];
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/userData")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
            });
    }, []);

    const backtologin = () => {
        navigate("/login")
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='dashboard'>
                <h2>User Details</h2>
                <h4 onClick={backtologin} >LogOut</h4>
                <div className='tabledata'>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((e, key) => {
                                    return <tr>
                                        <td>{key + 1}</td>
                                        <td>{e.name}</td>
                                        <td>{e.email}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard