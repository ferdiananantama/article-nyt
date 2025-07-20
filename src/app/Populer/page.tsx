import MostPopulerCardView from "@/features/most-populer";

export default function index() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <main className="px-36 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 gap-4">
            <div title="Featured Articles">
              <h2 className="text-[#0c151d] text-xl font-semibold leading-tight tracking-[-0.015em] mb-4">
                Populer View Articles
              </h2>
              <div>
                <MostPopulerCardView />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
