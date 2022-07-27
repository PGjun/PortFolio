import AddTraceTable from "./AddTraceTable";

export default function TraceTable() {
  const arr = [1, 2, 3, 4, 5];

  return (
    <>
      {arr.map((item, idx) => (
        <>
          <AddTraceTable key={idx}>{item}</AddTraceTable>
        </>
      ))}
    </>
  );
}
