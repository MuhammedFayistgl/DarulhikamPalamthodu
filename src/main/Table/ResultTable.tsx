// import { ArrowRightOutlined, EyeOutlined } from '@ant-design/icons';
// import { Button, Card } from 'antd';
// import type { FC } from 'react';
// import { STUDENTS_DATA } from '../server/studentsData';
// import { NavLink } from 'react-router';
// import { useEffect, useMemo, useState } from 'react';
// import {
//     type MRT_ColumnDef,
//     type MRT_Cell,
// } from 'material-react-table';
// import {
//     MaterialReactTable,
//     useMaterialReactTable,
//     type MRT_Row,
// } from 'material-react-table';
// import { Box } from '@mui/material';
// import FileDownloadIcon from '@mui/icons-material/FileDownload';
// import { jsPDF } from 'jspdf'; //or use your library of choice here
// import autoTable from 'jspdf-autotable';



// interface Result_TableProps {
//     tableData: any;
// }



// const Result_Table: FC<Result_TableProps> = ({ tableData }) => {
//     const [data, setData] = useState<typeof STUDENTS_DATA>([])

//     useEffect(() => {
//         setData(STUDENTS_DATA)
//     }, [])

//     const columns = useMemo<MRT_ColumnDef<any>[]>(
//         () => [
//             {
//                 accessorKey: 'No', //access nested data with dot notation
//                 header: 'No',
//                 size: 10,
//             },
//             {
//                 accessorKey: 'studentName',
//                 header: 'Student Name',
//                 size: 150,
//             },
//             {
//                 accessorKey: 'currentClass', //normal accessorKey
//                 header: 'Class',
//                 size: 10,
//                 Cell: ({ cell }: { cell: MRT_Cell<any> }) => <>  {cell.getValue()} <ArrowRightOutlined style={{ color: '#249b00' }} /></>,
//             },
//             {
//                 accessorKey: 'promotedTo',
//                 header: 'Promoted To',
//                 size: 10,
//             },
//             {
//                 accessorKey: 'certificate',
//                 header: 'Certificate',
//                 size: 10,
//                 Cell: () => <>
//                     <NavLink to="/">
//                         <Button>{"Certificate"}<EyeOutlined style={{ color: '#249b00' }} />
//                         </Button>
//                     </NavLink></>,
//             },
//         ],
//         [],
//     );
//     const handleExportRows = (rows: MRT_Row<any>[]) => {

//         const doc = new jsPDF();
//         const tableData = rows.map((row, index) => [String(index + 1), String(row.original.studentName), String(row.original.currentClass), String(row.original.promotedTo)]);
//         const tableHeaders = columns.map((c) => c.header);

//         autoTable(doc, {
//             head: [tableHeaders as string[]],
//             body: tableData as string[][],
//         });

//         doc.save('mrt-pdf-example.pdf');
//     };



//     const table = useMaterialReactTable({
//         columns: columns,
//         data: data.filter(student => student.currentClass === tableData[0]?.selectedClass).map((student, index) => ({ ...student, No: index + 1 })), //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)

//         renderTopToolbarCustomActions: ({ table }) => (
//             <Box
//                 sx={{
//                     display: 'flex',
//                     gap: '16px',
//                     padding: '8px',
//                     flexWrap: 'wrap',
//                 }}
//             >
//                 <Button
//                     disabled={table.getPrePaginationRowModel().rows.length === 0}
//                     //export all rows, including from the next page, (still respects filtering and sorting)
//                     onClick={() =>
//                         handleExportRows(table.getPrePaginationRowModel().rows)
//                     }
//                     icon={<FileDownloadIcon />}
//                 >
//                     Download All Results
//                 </Button>


//             </Box>
//         ),
//     });

//     return (<>
//         <Card>
//             <MaterialReactTable table={table} />
//         </Card>


//     </>);
// }

// export default Result_Table;

// // export const STUDENTcolumns = [{
// //     title: 'No',
// //     dataIndex: 'No',
// //     key: 'No',
// // },
// // {
// //     title: 'Student Name',
// //     dataIndex: 'studentName',
// //     key: 'studentName',
// // },
// // {
// //     header: 'Class',
// //     accessorKey: 'currentClass',
// //     // Cell: ({ cell }: { cell: MRT_Cell<any> }) => <>  {cell.getValue()} <ArrowRightOutlined style={{ color: '#249b00' }} /></>,
// // },
// // {
// //     title: 'Promoted To',
// //     dataIndex: 'promotedTo',
// //     key: 'promotedTo',
// // },
// // {
// //     header: 'Certificate',
// //     accessorKey: 'certificate',
// //     // Cell: () => <> <NavLink to="/certificate"><Button>{"Certificate"}<EyeOutlined style={{ color: '#249b00' }} /></Button>  </NavLink></>,
// // },
// // ];




// {/* {tableData.length === 0 ? <></> :
//             <Table bordered
//                 dataSource={
//                     STUDENTS_DATA.filter(student => student.currentClass === tableData[0]?.selectedClass).map((student, index) => ({ ...student, No: index + 1 }))}

//                 columns={STUDENTcolumns} />} */}


import React, { useRef } from "react";
import html2canvas from "html2canvas";

function Certificate() {
    const captureRef = useRef(null);

    const handleDownload = async () => {
        if (!captureRef.current) return;

        const canvas = await html2canvas(captureRef.current, {
            scale: 2,          // High quality
            useCORS: true
        });

        const image = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = image;
        link.download = "certificate.png";
        link.click();
    };

    return (
        <div style={{ textAlign: "center" }}>

            {/* Rendered DOM content */}
            <div
                ref={captureRef}
                style={{
                    position: "relative",
                    width: "600px",
                    margin: "auto"
                }}
            >
                <img
                    src="/certificate.jpg"
                    alt="certificate"
                    style={{ width: "100%" }}
                />

                <h2
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "#000"
                    }}
                >
                    Student Name
                </h2>
            </div>

            <br />

            <button onClick={handleDownload}>
                Download Image
            </button>

        </div>
    );
}

export default Certificate;