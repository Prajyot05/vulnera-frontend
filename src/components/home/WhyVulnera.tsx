import { ShieldCheckIcon } from "lucide-react";

export default function WhyVulnera() {
  const features = [
    {
      title: "Transparency",
      desc: "All bounty submissions and reviews are recorded on the blockchain, ensuring tamper-proof history and traceability.",
    },
    {
      title: "Smart Contracts",
      desc: "Payments are automated and instant via smart contracts — no delays, no intermediaries, no disputes.",
    },
    {
      title: "Fair Review",
      desc: "A decentralized review process guarantees fairness, accuracy, and recognition for every researcher.",
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          Why Choose <span className="text-purple-500">Vulnera</span>?
        </h2>
        <p className="text-lg text-muted-foreground">
          A suite of features to enhance the bug bounty experience for both
          researchers and organizations.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-1 md:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-gray-300 dark:border-gray-700 bg-background shadow-md hover:shadow-purple-500/20 transition"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-500 text-white">
                <ShieldCheckIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
            </div>
            <p className="text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
