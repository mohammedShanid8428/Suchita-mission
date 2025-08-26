import { Stethoscope, GraduationCap, Hotel, Building2 } from "lucide-react";

const categories = [
  { id: 1, label: "Healthcare", count: "2,000+", icon: <Stethoscope className="h-8 w-8 text-gray-800" /> },
  { id: 2, label: "Educational", count: "1,000+", icon: <GraduationCap className="h-8 w-8 text-gray-800" /> },
  { id: 3, label: "Hospitality", count: "5,000+", icon: <Hotel className="h-8 w-8 text-gray-800" /> },
  { id: 4, label: "Common Establishments", count: "4,000+", icon: <Building2 className="h-8 w-8 text-gray-800" /> },
];

export default function CertificationSteps() {
  return (
    <div className="grid grid-cols-4 gap-6 mt-6">
      {categories.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center bg-white shadow rounded-xl px-6 py-6 w-full h-32"
        >
          <div className="flex justify-center">{item.icon}</div>
          <div className="mt-2  font-semibold text-gray-800">{item.label}</div>
          <div className="text-green-600 font-bold">{item.count}</div>
        </div>
      ))}
    </div>
  );
}
