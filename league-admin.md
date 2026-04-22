---
layout: default
title: League Admin Guide
---

# League Admin Guide 📋

As a **League Admin**, you run competitions on LigiOpen. You manage everything from setting up divisions and reviewing team registrations, to generating the full fixture schedule, assigning match officials, and approving final results.

---

## What Does a League Admin Do?

You are the competition manager. Your responsibilities include:

- Creating and managing **divisions** (tiers within your league)
- Reviewing and approving **team registrations** from clubs
- **Generating the fixture schedule** automatically
- **Publishing fixtures** so fans can see them
- Assigning **Content Admins** and **officials** to specific matches
- **Postponing or rescheduling** fixtures when needed
- **Approving match results** submitted by Content Admins
- Managing the **standings table**
- Creating and managing **venues**, including time slots and blackout dates

---

## How Do I Get the League Admin Role?

A **Super Admin** assigns you the League Admin role and links you to a specific league. You'll receive an email when this happens.

Switch to your League Admin role from **Profile tab → Switch Role → League Admin**.

---

## Your Tabs as a League Admin

| Tab | What it's for |
|---|---|
| 📊 **Dashboard** | Quick overview of your league |
| 🏟️ **Divisions** | Create and manage divisions |
| 📅 **Fixtures** | All fixtures across your divisions |
| 📝 **Registrations** | Team registration requests |
| 🏆 **Standings** | League tables |
| 📍 **Venues** | Manage match venues |
| 👤 **Profile** | Account settings |

---

## 📊 Dashboard Tab

The **Dashboard** is your command centre. At a glance, you can see:

- Upcoming fixtures across all your divisions
- Recently completed matches (and whether results have been approved)
- A summary of your divisions (how many teams, fixtures generated, etc.)
- Pending registration requests that need your attention

---

## 🏟️ Divisions Tab

Divisions are the building blocks of your league. A **division** is a tier within your league for a specific season — for example, "Premier Division 2025/26" or "Division 2 2025/26".

### Viewing Divisions

The Divisions tab lists all divisions you manage. Tap any division to open the **Division Detail** screen, which shows:

- All teams registered to this division
- The fixture list for this division
- Registration status summary

---

### Creating a Division

1. Tap the **+ button** in the Divisions tab.
2. Fill in the details:

| Field | Example |
|---|---|
| Division Name | "Premier Division 2025/26" |
| Tier / Order | 1 (1 = top tier, 2 = second tier, etc.) |
| League | Select from your leagues |
| Season | Select the active season |

3. Tap **Save**.

The division is created. Now clubs can start registering their teams for it, and you can generate fixtures once enough teams are registered.

---

### Generating Fixtures

Once you have enough teams registered and confirmed in a division, you can generate the complete fixture schedule automatically.

1. Go to **Division Detail** → tap **Generate Fixtures**.
2. Choose your settings:

| Setting | Options | Notes |
|---|---|---|
| **Round Type** | Single or Double | Single = each pair plays once. Double = each pair plays home AND away |
| **Start Date** | Pick a date | When the first round of matches begins |
| **Day Type** | Weekdays only / Weekends only / Both | When matches are scheduled |
| **Time Slots** | Morning (10am) / Afternoon (3pm) / Evening (7pm) | What time matches kick off |
| **Matches Per Day** | Number | How many matches to schedule per day |
| **Weeks Per Round** | Number | How many weeks between each round |

3. Tap **Generate**.

LigiOpen automatically creates all the fixtures!

> 💡 **Example:** If you have 8 teams and choose Double Round-Robin, that's 8 × 7 = 56 fixtures total. LigiOpen will schedule all 56 across the dates you specify, automatically avoiding blackout dates at venues.

> ⚠️ **Fixtures are in Draft status after generation** — fans can't see them yet. You need to publish them (see below).

---

### Publishing Fixtures

Fixtures start in **Draft** status. To make them visible to fans:

1. Inside a division → tap **Publish Fixtures**.
2. Select which fixtures to publish (you can publish all at once, or in batches by round).
3. Tap **Publish**.

The selected fixtures are now visible on the Fan app under the Fixtures tab and Standings tab.

---

## 📝 Registrations Tab

The **Registrations tab** shows all pending registration requests from clubs — across all your divisions.

### Reviewing a Registration

1. Tap any pending registration to open it.
2. You'll see:
   - Club name and team name
   - Division they're applying for
   - Roster count
   - Registration fee snapshot
3. Tap **Approve** to confirm the team (status changes to **Confirmed**).
4. Or tap **Reject** and enter a reason (e.g. "Incomplete squad", "Fee not paid").

You can also update the **payment status** for each registration:

| Payment Status | Meaning |
|---|---|
| **Unpaid** | No payment received |
| **Partial** | Partial payment received |
| **Paid** | Full payment confirmed |

> 💡 **Confirmed registrations** are visible to the club admin. The club admin can then see their team in the division.

---

## 📅 Fixtures Tab

The **Fixtures tab** shows every fixture across all your divisions — past, present, and future.

### Filtering Fixtures

Use the filter bar to narrow down:
- By **Division**
- By **Status** (Draft / Scheduled / In Progress / Completed / Postponed / Cancelled)
- By **Date**

### Fixture Detail Screen

Tap any fixture to open it. You'll see:

- Home team vs Away team
- Date, time, and venue
- Assigned Content Admin (if any)
- Assigned officials (if any)
- Current status
- Result (if submitted and/or approved)

---

### Assigning a Content Admin

The Content Admin is the person who records live events on match day. Assign one per fixture:

1. Open the **Fixture Detail** screen.
2. Tap **Assign Content Admin**.
3. Search for the user by name.
4. Tap their name → tap **Assign**.

The Content Admin will immediately see this fixture in their Dashboard. ✅

---

### Assigning Officials (Referees)

1. Open the **Fixture Detail** screen.
2. Scroll to the **Officials section** → tap **+**.
3. Select an official from the list.
4. Choose their role for this match:
   - Center Referee
   - Assistant Referee 1 (AR1)
   - Assistant Referee 2 (AR2)
   - Fourth Official
5. Tap **Assign**.

Repeat for each official role.

> ⚠️ **An official can only be assigned to one match per day.** If they're already assigned elsewhere that day, you'll see a warning.

---

### Postponing a Fixture

When a match can't go ahead as planned (bad weather, pitch issues, security concerns):

1. Open the **Fixture Detail** screen.
2. Tap **Postpone**.
3. Enter a **reason** (e.g. "Pitch waterlogged after heavy rainfall").
4. Tap **Confirm**.

The fixture status changes to **Postponed**. Fans see the updated status immediately. The fixture stays in the system for rescheduling.

---

### Rescheduling a Postponed Fixture

1. Find the postponed fixture (you can filter by status = Postponed).
2. Open the **Fixture Detail** screen.
3. Tap **Reschedule**.
4. Select a **new date**.
5. Select a **venue** (can be the same or different).
6. Tap **Confirm**.

The fixture status changes back to **Scheduled** with the new date.

---

### Approving a Match Result

After a Content Admin submits the final score, you'll receive a notification. The fixture shows a "Result Pending Approval" badge.

**To approve:**
1. Open the **Fixture Detail** screen.
2. Review the submitted score and match events.
3. Tap **Approve Result**.
4. Standings update automatically. ✅

**To dispute (if something is wrong):**
1. Tap **Dispute Result**.
2. Enter the reason (e.g. "Ineligible player used by home team", "Score does not match match report").
3. Tap **Confirm**.

The result is flagged. The Content Admin and relevant parties are notified. Resolve the dispute before approving.

---

## 🏆 Standings Tab

The **Standings tab** shows the full league table for any of your divisions.

1. Select a **Division** from the dropdown.
2. The league table loads.

**To force-refresh standings** (in case something looks off):

Tap **Recalculate** at the top of the standings screen. LigiOpen recalculates all points, goal differences, and positions from scratch based on all approved results.

---

## 📍 Venues Tab

The **Venues tab** lists all match venues available to your league.

### Venue Detail Screen

Tap any venue to see:
- Name, county, address
- Capacity
- Photo (if uploaded)
- Time slots (which days and times matches can be scheduled here)
- Blackout dates (dates when the venue is unavailable)
- Accessibility information
- Partners or sponsors associated with the venue

---

### Creating a Venue

1. Tap the **+ button** in the Venues tab.
2. Enter:
   - **Venue Name** (e.g. "Nyayo National Stadium")
   - **County** (e.g. "Nairobi")
   - **Address**
   - **Capacity** (e.g. 30000)
   - **Photo** (optional — tap the image area to upload)
3. Tap **Save**.

---

### Adding Time Slots

Time slots tell the fixture generator when matches can be scheduled at this venue.

1. Go to **Venue Detail → Slots section** → tap **+**.
2. Select the **day of the week** (e.g. Saturday).
3. Set the **start time** (e.g. 3:00 PM).
4. Set the **end time** (e.g. 6:00 PM).
5. Tap **Save**.

Repeat for each day and time you want to allow.

---

### Adding Blackout Dates

Blackout dates are periods when the venue is unavailable (national holidays, other events, maintenance):

1. Go to **Venue Detail → Blackouts section** → tap **+**.
2. Enter the **start date** and **end date** of the blackout period.
3. Enter a **reason** (e.g. "National holiday", "Rugby 7s tournament at this venue").
4. Tap **Save**.

> 💡 **Fixtures will never be scheduled on blackout dates.** The generator automatically skips them.

---

## Real Scenarios

### Scenario 1: Setting Up the KPL Season from Scratch

> The **Kenya Premier League 2025/26** season is about to start. The League Admin opens LigiOpen.
>
> **Step 1 — Create the division:** Divisions tab → + → "KPL Premier Division 2025/26", Tier 1, Season "2025/26". Save.
>
> **Step 2 — Wait for registrations:** Club admins from Gor Mahia, AFC Leopards, Tusker FC, Sofapaka, Bandari, and 13 other clubs submit their team registrations. The League Admin reviews each one in the Registrations tab, checks the roster counts and fees, and approves all 18.
>
> **Step 3 — Generate fixtures:** Division Detail → Generate Fixtures → Double Round-Robin, Start Date: August 3 2025, Weekends only, Afternoon (3pm), 3 matches per day. Generate. LigiOpen creates all 306 fixtures (18 teams × 17 opponents × 2 = 306). Done in seconds. 🎉
>
> **Step 4 — Publish:** Publish all fixtures. Fans can now browse the full KPL 2025/26 calendar.

---

### Scenario 2: Handling a Waterlogged Pitch

> It's Friday evening. Heavy rains in Mombasa mean **Bandari FC vs Tusker FC** (scheduled for Saturday 3pm at Mbaraki Sports Ground) cannot go ahead.
>
> The League Admin opens the fixture, taps **Postpone**, enters "Pitch waterlogged due to heavy rainfall — Mombasa county advisory", and confirms.
>
> Fans see the fixture status update to **Postponed** immediately.
>
> Two weeks later, the League Admin opens the fixture again, taps **Reschedule**, selects the new date (November 15, 3pm) and confirms Mbaraki as the venue again. ✅

---

👉 **Related:** [Super Admin Guide →]({{ '/super-admin' | relative_url }}) — the Super Admin creates the leagues and seasons you manage.
