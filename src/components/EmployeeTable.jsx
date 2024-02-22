import {
  Table,
  TableContainer,
  Tag,
  TagLabel,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

function EmployeeTable({ fieldNames, rowData }) {
  return (
    <>
      <TableContainer overflowX="auto">
        <Table size="sm">
          <Thead>
            <Tr>
              {fieldNames.map((fieldHead, index) => {
                return (
                  <Th key={index} textAlign={"center"}>
                    {fieldHead}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {rowData.map((row, index) => {
              return (
                <Tr key={index}>
                  <Td textAlign={"center"}>{row.id}</Td>
                  <Td textAlign={"center"}>{row.employeeName}</Td>
                  <Td textAlign={"center"}>
                    <Tag key={index} variant="solid" colorScheme="teal">
                      <TagLabel>{row.employeeId}</TagLabel>
                    </Tag>
                  </Td>
                  <Td textAlign={"center"}>{row.email}</Td>
                  <Td textAlign={"center"}>{row.phone}</Td>
                  <Td textAlign={"center"}>{row.address}</Td>
                  <Td textAlign={"center"}>{row.loc}</Td>
                  <Td textAlign={"center"}>{row.history}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default EmployeeTable;
