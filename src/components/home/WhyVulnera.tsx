import { ShieldCheckIcon } from "lucide-react";

export default function WhyVulnera() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Choose <span className="text-purple-500">Vulnera</span> ?
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Vulnera offers a suite of features designed to enhance the bug bounty experience for both researchers and
              organizations
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-3 lg:gap-10">
          <div className="grid gap-1 p-6 border border-gray-700 rounded-lg bg-gray-900">
            <div className="flex items-center space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white">
                <ShieldCheckIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Transparency</h3>
            </div>
            <p className="text-gray-400 h-50">
              All bounty submissions and reviews are recorded on the blockchain, creating a a secure, transparent, and
              tamper-proof history. This ensures every contribution is verifiable, decisions are traceable, and the
              process remains open and accountable .
            </p>
          </div>
          <div className="grid gap-1 p-6 border border-gray-700 rounded-lg bg-gray-900">
            <div className="flex items-center space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white">
                <ShieldCheckIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Smart Contracts</h3>
            </div>
            <p className="text-gray-400 h-50">
              Payments are automated via smart contracts, removing intermediaries and minimizing delays or disputes.
              Researchers are rewarded instantly and fairly upon successful review, enabling a more efficient and
              trustworthy incentive system .
            </p>
          </div>
          <div className="grid gap-1 p-6 border border-gray-700 rounded-lg bg-gray-900">
            <div className="flex items-center space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white">
                <ShieldCheckIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Fair Review</h3>
            </div>
            <p className="text-gray-400 h-50">
              Our decentralized review process guarantees transparency, fairness, and accuracy in evaluating bug
              submissions, ensuring that every researcher's work is recognized and rewarded appropriately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
