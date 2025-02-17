import { Syringe, Users, UserCheck, Activity } from "lucide-react";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import VaccinationChart from "@/components/VaccinationChart";
import PatientList from "@/components/PatientList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 fade-in">
          <StatsCard
            title="Total Vaccinations"
            value="2,847"
            icon={<Syringe className="h-4 w-4 text-primary" />}
            description="+180 from last month"
          />
          <StatsCard
            title="Registered Patients"
            value="1,456"
            icon={<Users className="h-4 w-4 text-primary" />}
            description="Active patients in system"
          />
          <StatsCard
            title="Fully Vaccinated"
            value="1,234"
            icon={<UserCheck className="h-4 w-4 text-primary" />}
            description="85% of registered patients"
          />
          <StatsCard
            title="Today's Schedule"
            value="24"
            icon={<Activity className="h-4 w-4 text-primary" />}
            description="Appointments today"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-7 mt-6">
          <Card className="md:col-span-4 fade-in">
            <CardHeader>
              <CardTitle>Vaccination Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <VaccinationChart />
            </CardContent>
          </Card>
          
          <div className="md:col-span-3 space-y-4 fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Recent Patients</CardTitle>
              </CardHeader>
              <CardContent>
                <PatientList />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
