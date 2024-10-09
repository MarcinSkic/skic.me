import posthog from "posthog-js";
import { browser } from "$app/environment";

export const prerender = true;

export const load = async () => {
  if (browser) {
    posthog.init("phc_iyI1iWEuZOLBnyJ26H7GDUGBWS6Fa1nkrArdPAkfQyr", {
      api_host: "https://eu.i.posthog.com",
      person_profiles: "never",
      capture_pageview: false,
      capture_pageleave: false,
    });
  }
  return;
};
