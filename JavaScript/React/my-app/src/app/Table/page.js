"use client";  //声明使用客户端模式

import { useState } from 'react';
import * as XLSX from 'xlsx';
import EditableTable from '../components/EditableTable';

const Home = () => {
    const [tableData, setTableData] = useState([]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(worksheet);
            setTableData(json);
        };
        reader.readAsArrayBuffer(file);
    };

    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
            <EditableTable data={tableData} />
        </div>
    );
};

export default Home;
