STANKO BARBELL CLUB: WEEK 16 WEBSITE CORRECTION

Upload these two replacement files to the SAME folder as the existing website:
  index.html
  sw.js

Use the exact filenames above. Keep the existing manifest and image/icon files.
This is a website update; no iOS app update is required.

AFTER UPLOADING
1. Wait for your website host to finish publishing the changes.
2. Open the website in the regular browser where your workout logs were saved.
3. Reload once, allow a few seconds for the cache updater to install, then close
   and reopen the website. A second reload may be needed for the old cached page.
4. Look for "Week 16 · Set logging" above the workout. Select John, Mike, or Greg.
   Back squat should have three working-set rows, each with Reps, Weight, RPE,
   and a Done checkbox.

There is no need to clear website data or reinstall the home-screen shortcut.
Keep the same website address and browser to retain existing local entries.

WHAT IS CORRECTED
- Reps, weight, RPE, and completion are saved separately for every working set.
- John, Mike, and Greg have independent set logs. Switch athletes above the day.
- Entries save as you type. Extra working sets can be added.
- Older weights and notes remain available. An unambiguous earlier numeric
  weight appears in set 1, and the original entry is retained below the table.
  Reps and RPE are left blank when the old entry did not record them.
- Existing supported structured per-set entries are read without replacing
  their original fields. Unknown saved fields are also kept when editing.
- Exercise completion can be marked set by set or with the lift checkbox.
- PRs, bodyweight, photos, video links, rest timers, and archived workouts remain.
- Warm-ups, running, and recovery entries keep their simpler logging layout.
- Week 16 retains the heavier 6-8-rep main lifts at RPE 8-9 and Friday's
  eight direct biceps sets, eight direct triceps sets, and push-up finisher.
- Weeks 1-15 retain their original program contents and workout-log indices.

CACHE UPDATES
Workout pages load from the server when connected and fall back to the saved
page offline. The new cache is versioned, replaces only this workout site's old
page caches, and leaves workout data and photo storage alone. Missing icons no
longer prevent the update from installing. "Check for updates" is available
above the workout; a Reload website button appears when a new build is found.

VERIFICATION
Checked in Chromium: per-set saving and reloads; athlete isolation; extra sets;
PR recording; layouts at 320px, 390px, and desktop widths; offline page loading;
update checks; and a real upgrade from the Week 15 service-worker cache while
retaining older entries, unknown fields, bodyweight, PRs, photos, and unrelated
browser caches. Also checked that structured legacy sets remain intact on edit
and that unreadable saved entries are not overwritten.

Build: week16-sets-20261005
