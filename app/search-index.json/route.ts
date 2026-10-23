import { buildSearchIndex } from "@/lib/search-index";

export const dynamic = "force-static";

// The search box loads this once, the first time someone opens it.
export function GET() {
  return Response.json(buildSearchIndex());
}
