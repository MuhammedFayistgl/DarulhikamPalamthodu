import { ArrowRightOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import type { FC } from 'react';
import { STUDENTS_DATA } from '../server/studentsData';
import { NavLink } from 'react-router';
import { useMemo } from 'react';
import {
    type MRT_ColumnDef,
    type MRT_Cell,
} from 'material-react-table';
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_Row,
} from 'material-react-table';
import { Box } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { jsPDF } from 'jspdf'; //or use your library of choice here
import autoTable from 'jspdf-autotable';


interface Result_TableProps {
    tableData: any;
}



const Result_Table: FC<Result_TableProps> = ({ tableData }) => {



    const columns = useMemo<MRT_ColumnDef<any>[]>(
        () => [
            {
                accessorKey: 'No', //access nested data with dot notation
                header: 'No',
                size: 10,
            },
            {
                accessorKey: 'studentName',
                header: 'Student Name',
                size: 150,
            },
            {
                accessorKey: 'currentClass', //normal accessorKey
                header: 'Class',
                size: 10,
                Cell: ({ cell }: { cell: MRT_Cell<any> }) => <>  {cell.getValue()} <ArrowRightOutlined style={{ color: '#249b00' }} /></>,
            },
            {
                accessorKey: 'promotedTo',
                header: 'Promoted To',
                size: 10,
            },
            {
                accessorKey: 'certificate',
                header: 'Certificate',
                size: 10,
                Cell: () => <> <NavLink to="/"><Button>{"Certificate"}<EyeOutlined style={{ color: '#249b00' }} /></Button>  </NavLink></>,
            },
        ],
        [],
    );
    const handleExportRows = (rows: MRT_Row<any>[]) => {

        const doc = new jsPDF();
        const tableData = rows.map((row, index) => [String(index + 1), String(row.original.studentName), String(row.original.currentClass), String(row.original.promotedTo)]);
        const tableHeaders = columns.map((c) => c.header);

        autoTable(doc, {
            head: [tableHeaders as string[]],
            body: tableData as string[][],
        });

        doc.save('mrt-pdf-example.pdf');
    };



    const table = useMaterialReactTable({
        columns: columns,
        data: STUDENTS_DATA.filter(student => student.currentClass === tableData[0]?.selectedClass).map((student, index) => ({ ...student, No: index + 1 })), //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)

        renderTopToolbarCustomActions: ({ table }) => (
            <Box
                sx={{
                    display: 'flex',
                    gap: '16px',
                    padding: '8px',
                    flexWrap: 'wrap',
                }}
            >
                <Button
                    disabled={table.getPrePaginationRowModel().rows.length === 0}
                    //export all rows, including from the next page, (still respects filtering and sorting)
                    onClick={() =>
                        handleExportRows(table.getPrePaginationRowModel().rows)
                    }
                    icon={<FileDownloadIcon />}
                >
                    Download All Results
                </Button>


            </Box>
        ),
    });

    return (<>
        <Card>
            <MaterialReactTable table={table} />
        </Card>


    </>);
}

export default Result_Table;

// export const STUDENTcolumns = [{
//     title: 'No',
//     dataIndex: 'No',
//     key: 'No',
// },
// {
//     title: 'Student Name',
//     dataIndex: 'studentName',
//     key: 'studentName',
// },
// {
//     header: 'Class',
//     accessorKey: 'currentClass',
//     // Cell: ({ cell }: { cell: MRT_Cell<any> }) => <>  {cell.getValue()} <ArrowRightOutlined style={{ color: '#249b00' }} /></>,
// },
// {
//     title: 'Promoted To',
//     dataIndex: 'promotedTo',
//     key: 'promotedTo',
// },
// {
//     header: 'Certificate',
//     accessorKey: 'certificate',
//     // Cell: () => <> <NavLink to="/certificate"><Button>{"Certificate"}<EyeOutlined style={{ color: '#249b00' }} /></Button>  </NavLink></>,
// },
// ];




{/* {tableData.length === 0 ? <></> :
            <Table bordered
                dataSource={
                    STUDENTS_DATA.filter(student => student.currentClass === tableData[0]?.selectedClass).map((student, index) => ({ ...student, No: index + 1 }))}

                columns={STUDENTcolumns} />} */}