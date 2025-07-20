import SearchView from "@/features/search";
export default function Home() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <SearchView />
      </div>
    </div>
  );
}
