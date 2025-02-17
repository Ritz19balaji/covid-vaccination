import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const patients = [
  {
    id: 1,
    name: "John Doe",
    age: 35,
    vaccineType: "Pfizer",
    status: "Fully Vaccinated",
    date: "2024-04-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    vaccineType: "Moderna",
    status: "First Dose",
    date: "2024-04-14",
  },
  {
    id: 3,
    name: "Robert Johnson",
    age: 45,
    vaccineType: "Johnson & Johnson",
    status: "Fully Vaccinated",
    date: "2024-04-13",
  },
];

const PatientList = () => {
  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Vaccine Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.id} className="hover:bg-muted/50">
              <TableCell className="font-medium">{patient.name}</TableCell>
              <TableCell>{patient.age}</TableCell>
              <TableCell>{patient.vaccineType}</TableCell>
              <TableCell>
                <Badge variant={patient.status === "Fully Vaccinated" ? "default" : "secondary"}>
                  {patient.status}
                </Badge>
              </TableCell>
              <TableCell>{patient.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PatientList;
