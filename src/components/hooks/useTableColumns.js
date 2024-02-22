export default function useTableColumns() {
  const fieldNames = [
    "id",
    "employeeName",
    "employeeId",
    "email",
    "phone",
    "address",
    "loc",
    "history",
  ];

  const rowData = [
    {
      id: 1,
      employeeName: "test",
      employeeId: 100,
      email: "test@company.com",
      phone: "+92 69696969",
      address: "House no 1, street no 1, test, test",
      loc: "test",
      history: "test",
    },
    {
      id: 2,
      employeeName: "test1",
      employeeId: 101,
      email: "test1@company.com",
      phone: "+92 69696969",
      address: "House no 1, street no 1, test1, test1",
      loc: "test1",
      history: "test1",
    },
  ];

  return { fieldNames, rowData };
}
