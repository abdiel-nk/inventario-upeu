import { 
    useReactTable,

    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
} from "@tanstack/react-table";



import styled from "styled-components";
import { ContentAccionesTabla } from "../ContentAccionesTabla";
export function TablaMarca({data}){

    const columns= [
        {
        accessorKey: "descripcion",
        header:'Descripcion',
        cell:(info)=><span>{info.getValue()}</span>

        },
        {
        accesorKey:"acciones"  ,
        header: "Acciones",
        cell:()=>( <ContentAccionesTabla></ContentAccionesTabla>)
        }
    ];
    const table = useReactTable({
        data,
        columns,
        
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(), 
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),

    });
    return(
    
    <Container>
        <table>
            <thead>
                {table.getHeaderGroups().map((headerGroup)=>(
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header)=>(
                                <th key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))
                }
            </thead>
            <tbody>
                {table.getRowModel().rows.map((item )=>(
                <tr key={item.id}>
                    {
                        item.getVisibleCells().map((cell)=>(
                            <td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                </tr>
                ))}
            </tbody>
        </table>
    </Container>

    )
}

const Container = styled.div`

`

