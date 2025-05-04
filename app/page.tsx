import { SessionCard } from "@/components/session-card";
import { SessionGuard } from "@/components/session-guard";

const RootPage = () => {
  return (
    <SessionGuard>
      <div className="h-svh flex items-center justify-center">
        <SessionCard />
      </div>
    </SessionGuard>
  );
};

export default RootPage;
