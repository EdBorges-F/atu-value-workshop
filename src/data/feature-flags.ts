/**
 * Feature flags for in-progress, paused, or staged work.
 *
 * Flags are flipped via a code change (not runtime config) so that disabled
 * paths are still type-checked by `tsc --noEmit` and exercised by `npm run build`.
 *
 * To re-enable a feature: flip the flag to `true`, run the project checks,
 * and ship. Hidden code is intentionally preserved — do NOT delete it without
 * an explicit removal commit.
 */
export const FEATURE_FLAGS = {
  /**
   * Discovery Companion panel on Step 3 (Challenges & Use Cases).
   *
   * When `false`:
   *   • The Discovery Companion accordion is not rendered on Step 3.
   *   • Any `data.discoveryNotes` already persisted in localStorage is
   *     ignored by challenge scoring (`allText`, `priorityScores`) and by
   *     all Cowork prompts (`discoveryBlock` in valueStoryGenerator.ts).
   *   • Stored notes are not cleared — they will reappear if the flag is
   *     ever flipped back to `true`.
   */
  SHOW_DISCOVERY_COMPANION: false,

  /**
   * Full Value Story content on Step 4 (Action Center).
   *
   * When `false`:
   *   • Step 4 renders only the compact gradient header (with the
   *     "customer stories" stat suppressed), the Cowork Prompts section,
   *     the Feedback button, and the wizard Navigation footer.
   *   • Pillars, Section Jump Nav, Customer Stories, Next Steps, Customer
   *     Zero, and the in-app Disclaimer are hidden.
   *   • Cowork-generated deliverables still embed their own compliance
   *     footers via the `complianceBlock` in valueStoryGenerator.ts, so
   *     hiding the in-app Disclaimer does not weaken customer-facing
   *     compliance posture.
   */
  SHOW_FULL_VALUE_STORY: false,
} as const
