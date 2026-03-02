import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

//Public Routes
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

//Private routes
const isOrgSelectionRoute = createRouteMatcher([
  "/org-selection(.*)",
  "/dashboard(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, orgId } = await auth();
  const isHomeRoute = req.nextUrl.pathname === "/";

  if (isHomeRoute) {
    if (userId && orgId) {
      const dashboard = new URL("/dashboard", req.url);
      return NextResponse.redirect(dashboard);
    }

    if (userId && !orgId) {
      const orgSelection = new URL("/org-selection", req.url);
      return NextResponse.redirect(orgSelection);
    }

    return NextResponse.next();
  }

  // Everyon go here
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  //Protect Non-Public Routes
  if (!userId) {
    await auth.protect();
  }

  //Allow org selection page
  if (isOrgSelectionRoute(req)) {
    return NextResponse.next();
  }

  // For all protected routes, ensure org is selected
  if (userId && !orgId) {
    const orgSelection = new URL("/org-selection", req.url);
    return NextResponse.redirect(orgSelection);
  }

  return NextResponse.next();
});

//❤️❤️❤️ Following code taken from Clerk Documetation when creating a app.
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
