/**
 * Job-title helpers for Smart Fill v2.
 *
 * Public API:
 *   - DECISION_MAKER_TITLES        (re-export)
 *   - FULL_JOB_TAXONOMY            (re-export, reserved)
 *   - isDecisionMakerTitle(title)  → match decision
 *   - normalizeWhitespace(title)   → utility
 *
 * The DM check is the single source of truth used by Smart Fill v2's
 * stakeholder validator. Kept here so it can be shared with future
 * persona/journey work without touching the engine.
 */

import {
  DECISION_MAKER_TITLES,
  DECISION_MAKER_TITLES_LC,
} from './decision-makers'
import { FULL_JOB_TAXONOMY, FULL_JOB_TAXONOMY_LC } from './full-taxonomy'

export {
  DECISION_MAKER_TITLES,
  DECISION_MAKER_TITLES_LC,
  FULL_JOB_TAXONOMY,
  FULL_JOB_TAXONOMY_LC,
}

/**
 * Outcome of matching an extracted title against the decision-maker whitelist.
 *
 *   - 'exact' — title is in `DECISION_MAKER_TITLES` (case-insensitive)
 *   - 'soft'  — title matches the `Chief X Officer` pattern but is not in
 *               the explicit list (e.g. "Chief Trust Officer"). Accepted
 *               with medium confidence so Smart Fill never silently drops
 *               legitimate executives Copilot finds.
 *   - 'none'  — title is not a decision-maker; should be dropped.
 */
export type DecisionMakerMatch =
  | { match: 'exact'; canonical: string }
  | { match: 'soft'; canonical: string }
  | { match: 'none' }

const SOFT_TIER_CHIEF_OFFICER_RE = /^chief\s+.+\s+officer$/i

const NORMALIZE_WS_RE = /\s+/g
const STRIP_TRAILING_PUNCT_RE = /[\s,;:.\-–—]+$/

/**
 * Collapse whitespace and trim trailing punctuation/separators that often
 * leak in from CRM paste artifacts.
 */
export function normalizeWhitespace(title: string): string {
  return title.replace(NORMALIZE_WS_RE, ' ').replace(STRIP_TRAILING_PUNCT_RE, '').trim()
}

/**
 * Validate a job title against the decision-maker whitelist with a soft
 * tier for unrecognized but plausible "Chief X Officer" titles.
 *
 * Bare "Manager" (with no qualifier) is explicitly rejected — it would
 * match too much middle management and pollute stakeholder extraction.
 */
export function isDecisionMakerTitle(title: string): DecisionMakerMatch {
  if (!title || typeof title !== 'string') return { match: 'none' }

  const normalized = normalizeWhitespace(title)
  if (normalized.length < 3) return { match: 'none' }

  const lc = normalized.toLowerCase()

  if (lc === 'manager') return { match: 'none' }

  if (DECISION_MAKER_TITLES_LC.has(lc)) {
    const canonical =
      DECISION_MAKER_TITLES.find((t) => t.toLowerCase() === lc) ?? normalized
    return { match: 'exact', canonical }
  }

  if (SOFT_TIER_CHIEF_OFFICER_RE.test(normalized)) {
    return { match: 'soft', canonical: normalized }
  }

  return { match: 'none' }
}
