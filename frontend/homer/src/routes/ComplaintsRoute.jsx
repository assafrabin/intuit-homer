import "./ComplaintsRoute.css"

import { useState, useEffect } from 'react';

import { fetchComplaints } from "../actions";
import Complaint from "../components/Complaint";
import { Collapse } from 'antd';
import moment from 'moment';
const { Panel } = Collapse;



const ComplaintsRoute = () => {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        fetchComplaints().then(complaints => {
            complaints.forEach((complaint, index) => {
                console.log(complaint.purchase.purchaseDate);
                complaint.purchase.purchaseDate =  moment(complaint.purchase.purchaseDate, 'YYYY-MM-DD');
            })
            setComplaints(complaints)
        })
    }, []);

    return (
        <Collapse>
            {complaints.map((complaint, index) => (
                <Panel header={complaint.complaint.subject} key={index} extra={complaint.purchase.purchaseDate.format("YYYY-MM-DD HH:mm")}>
                    <Complaint complaint={complaint}/>
                </Panel>
            ))}
        </Collapse>
    )
}
export default ComplaintsRoute;