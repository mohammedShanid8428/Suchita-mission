import { ClipboardList, LayoutGrid, ShieldCheck, BadgeCheck } from "lucide-react";

const steps = [
  { id: 1, label: "Self Assessment", icon: <ClipboardList className="h-6 w-6 text-green-600" /> },
  { id: 2, label: "Review", icon: <LayoutGrid className="h-6 w-6 text-green-600" /> },
  { id: 3, label: "Approval", icon: <ShieldCheck className="h-6 w-6 text-green-600" /> },
  { id: 4, label: "Certification", icon: <BadgeCheck className="h-6 w-6 text-green-600" /> },
];

export default function Hero() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
      {steps.map((item) => (
        <div key={item.id} className="flex flex-col items-center text-center">
          

          <div className="bg-green-100 rounded-full p-4 mt-2">
            {item.icon}
          </div>
          <p className="mt-2 text-sm font-medium text-gray-700">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
