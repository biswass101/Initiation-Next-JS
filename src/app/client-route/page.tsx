"use client";

import { ClientSideFuntion } from "@/utils/client-utils";
import { useTheme } from "@/components/theme-provider";

export default function ClientRoutePage() {
  const theme = useTheme();
  const result = ClientSideFuntion();
  return (
   <>
     <h1
      style={{
        color: theme.colors.b,
      }}
    >
      Client Route {result}
    </h1>
    <p>{result}</p>
   </>
  );
}
