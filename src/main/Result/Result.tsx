import { List, ListItem, ListItemText } from '@mui/material';
import type { FC } from 'react';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { FontColor } from '../../CONTENT/Constent';
import { Button, Cascader, Divider, Input, Typography } from 'antd';
const { Title } = Typography;
import { Card, } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import React from 'react';
import { Select } from 'antd';
import { upperCase } from "text-upper-case";
import { romanize } from "@charmingdc/romanify";

import { ArrowRightOutlined, EyeOutlined } from '@ant-design/icons';


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




interface ResultProps { }

const Result: FC<ResultProps> = () => {
    const [selectedClass, setSelectedClass] = React.useState<string>('');
    const [loading, setLoading] = React.useState(false);
    const [tableData, setTableData] = React.useState<any>();


    const data = [{
        value: '1',
        label: 'Class 1',
        'aria-label': 'Class 1',
        'data-title': 'Class 1',
    }, {
        value: '2',
        label: 'Class 2',
        'aria-label': 'Class 2',
        'data-title': 'Class 2',
    }, {
        value: '3',
        label: 'Class 3',
        'aria-label': 'Class 3',
        'data-title': 'Class 3',
    }, {
        value: '4',
        label: 'Class 4',
        'aria-label': 'Class 4',
        'data-title': 'Class 4',
    }, {
        value: '5',
        label: 'Class 5',
        'aria-label': 'Class 5',
        'data-title': 'Class 5',
    }, {
        value: '6',
        label: 'Class 6',
        'aria-label': 'Class 6',
        'data-title': 'Class 6',
    }, {
        value: '7',
        label: 'Class 7',
        'aria-label': 'Class 7',
        'data-title': 'Class 7',
    }, {
        value: '8',
        label: 'Class 8',
        'aria-label': 'Class 8',
        'data-title': 'Class 8',
    }, {
        value: '9',
        label: 'Class 9',
        'aria-label': 'Class 9',
        'data-title': 'Class 9',
    }, {
        value: '10',
        label: 'Class 10',
        'aria-label': 'Class 10',
        'data-title': 'Class 10',
    }, {
        value: '11',
        label: 'Class 11',
        'aria-label': 'Class 11',
        'data-title': 'Class 11',
    }, {
        value: '12',
        label: 'Class 12',
        'aria-label': 'Class 12',
        'data-title': 'Class 12',
    }]
    const year = [{
        value: '2026',
        label: '2026',
    }]
    const onSubmit = () => {
        setLoading(true);
        // Then in onSubmit:
        const timeoutId = setTimeout(() => {
            selectedClass
                ? setTableData(selectedClass)
                : setTableData([]);
            setLoading(false);
            clearTimeout(timeoutId);
        }, 2000);



    }

    const columns = useMemo<MRT_ColumnDef<any>[]>(
        () => [
            {
                accessorKey: 'No', //access nested data with dot notation
                header: 'No',
                size: 0,
            },
            {
                accessorKey: 'studentName',
                header: 'Student Name',
                size: 150,
                Cell: ({ cell }) => <Title level={5} >{upperCase(cell.getValue() as string)}</Title>,
            },
            {
                accessorKey: 'currentClass', //normal accessorKey
                header: 'Class',
                size: 10,
                Cell: ({ cell }: { cell: MRT_Cell<any> }) => <>  {romanize(cell.getValue() as number)}    <ArrowRightOutlined style={{ color: '#249b00' }} /></>,
            },
            {
                accessorKey: 'promotedTo',
                header: 'Promoted To',
                size: 10,
                Cell: ({ cell }: { cell: MRT_Cell<any> }) => <>  {romanize(cell.getValue() as number)} </>,

            },
            {
                accessorKey: 'Status',
                header: 'Status',
                size: 10,
                Cell: () => <> <NavLink to="/Status"><Button>{"Status"}<EyeOutlined style={{ color: '#249b00' }} /></Button>  </NavLink></>,
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
        // enableRowSelection: true,
        initialState: {
            pagination: { pageSize: 50, pageIndex: 0 },
            showGlobalFilter: false,



        },
        // enableKeyboardShortcuts: false,
        enableColumnActions: false,
        // enableColumnFilters: false,
        enablePagination: false,
        enableSorting: false,
        // muiPaginationProps: {
        //     rowsPerPageOptions: [50],
        //     variant: 'outlined',
        // },
        // paginationDisplayMode: 'pages',
        data: STUDENTS_DATA.filter(student => student.currentClass === tableData?.[0]).map((student, index) => ({ ...student, No: index + 1 })), //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)

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


        <Card id='2' style={{ marginTop: 100, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>

            <List >
                <ListItem>
                    <MilitaryTechIcon fontSize={'large'} />
                    <ListItemText primary="Latest Result Portal " secondary="Choose your class and check your result instantly" primaryTypographyProps={{ fontWeight: 900, variant: 'h6', color: FontColor }} />
                </ListItem>
            </List>
            <Input placeholder="Enter Your Name " />
            <Divider style={{ margin: "5px 0" }} />
            <Cascader placeholder="Select Year " options={year} style={{ width: "40%", marginRight: 5 }} />
            <Select style={{ width: '', }}
                options={data.map((item) => ({
                    value: item.value,
                    label: item.label,
                }))}
                onChange={(value) => setSelectedClass(value)}
                value={selectedClass ? selectedClass : undefined}
                placeholder="Select Your Class">

            </Select>

            <Divider style={{ margin: "9px 0" }} />
            <Button type="primary"
                loading={loading ? { icon: <SyncOutlined spin /> } : false}
                style={{ background: "#000000", color: "white" }}
                onClick={onSubmit}

            >
                View Latest Result
            </Button>

        </Card>

        <Divider style={{ margin: "6px 0" }} />
        {/* <Result_Table /> */}
        {/* <Result_Table tableData={tableData} /> */}
        {tableData &&

            <Card>
                <MaterialReactTable table={table} />
            </Card>
        }
    </>);
}

export default Result;
