import { ClientSideFuntion } from "@/utils/client-utils";
import { serverSideFuntion } from "@/utils/server-utils";

export default function ServerRoutePage() {
    const result = serverSideFuntion();
    const clientResult = ClientSideFuntion();
  return (
    <div>Server Route {result} {clientResult}</div>
  )
}
