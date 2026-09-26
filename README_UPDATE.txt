STANKO BARBELL CLUB — WEEK 15 SET-LOGGING UPDATE

Replace in GitHub:
- index.html
- sw.js

What changed
- The existing Week 15 website/PWA format is preserved.
- A set-by-set logging system has been added for lifting movements.
- Every tracked lift now includes:
  - 2 warm-up sets
  - editable Reps / Weight / RPE inputs for each prescribed working set
- Notes, timers, videos, bodyweight, PRs, and progress photo tabs are preserved.
- Existing logs remain intact.

Details
- Set logging is applied to non-conditioning / non-recovery exercises.
- Previous single-field logs remain readable and are preserved in storage.
- Each person's last logged version of the same lift is shown when available.
- Week 15 remains the current week; Weeks 1–14 stay archived.
- No changes were made to Weeks 1–14 program content.

Storage
- New set logs are stored alongside the old per-exercise localStorage entries so prior data is not lost.
- Older entries without set logs can still show legacy weight history.
