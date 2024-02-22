import { Text } from "@chakra-ui/react";
import React from "react";
import EmployeeTable from "../EmployeeTable.jsx";
import useTableColumns from "../hooks/useTableColumns.js";
import DragableNotes from "../DragableNotes.jsx";

export default function Content() {
  const { fieldNames, rowData } = useTableColumns();
  return (
    <>
      <Text fontSize={"4xl"}>Content</Text>
      <EmployeeTable fieldNames={fieldNames} rowData={rowData} />
      <DragableNotes />
    </>
  );
}
