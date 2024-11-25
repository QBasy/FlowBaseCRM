import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../components/Table';
import Modal from '../components/Modal';

const CustomersPage = () => {
    const [customers, setCustomers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/customers');
                setCustomers(response.data);
            } catch (error) {
                console.error('Error fetching customers', error);
            }
        };
        fetchCustomers();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/api/customers/${id}`);
            setCustomers(customers.filter(customer => customer.id !== id));
        } catch (error) {
            console.error('Error deleting customer', error);
        }
        setShowModal(false);
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl mb-4">Customers</h1>
            <Table data={customers} />
            <button
                onClick={() => setShowModal(true)}
                className="p-2 bg-blue-600 text-white rounded"
            >
                Add Customer
            </button>

            <Modal
                show={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={() => handleDelete(selectedCustomer?.id)}
            >
                <p>Are you sure you want to delete this customer?</p>
            </Modal>
        </div>
    );
};

export default CustomersPage;
