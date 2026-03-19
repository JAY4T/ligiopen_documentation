---
layout: default
title: Fixtures & Matches
---

# 📅 Fixtures & Matches

Fixtures are the heartbeat of any sports league — they determine when teams play, where they play, and against whom. In LigiOpen, fixture management combines intelligent automation (generating hundreds of matches in seconds) with manual control (scheduling specific dates, assigning venues, handling postponements). This page explains the complete fixture lifecycle from automatic generation to final result submission, using real Kenyan scenarios.

---

## 🎯 Understanding Fixtures vs Matches

<div class="info-box">
  <strong>🎯 What's the Difference?</strong><br><br>
  <strong>FIXTURE:</strong> The scheduled event — "AFC Leopards will play Gor Mahia on Saturday, Sept 15 at 3:00 PM at Nyayo Stadium"<br><br>
  <strong>MATCH:</strong> The actual game that happens — "AFC Leopards 2-1 Gor Mahia (Goals: Otieno 45', Wanjala 78' / Omala 67')"<br><br>
  In LigiOpen, we use the term <strong>"Match"</strong> to cover both the fixture (the scheduled event) and the match (the played game). The <strong>match status</strong> tells you which stage it's in.
</div>

### The Match Lifecycle

Every match in LigiOpen moves through a defined lifecycle:

```
DRAFT → SCHEDULED → IN_PROGRESS → COMPLETED
   ↓         ↓
CANCELLED  POSTPONED → (reschedule back to DRAFT)
              ↓
           DISPUTED → (resolution) → COMPLETED
```

<div class="card-grid">
  <div class="card">
    <span class="icon">📝</span>
    <h3>DRAFT</h3>
    <p><strong>Meaning:</strong> Match exists in the system but is not yet official<br>
    <strong>What's set:</strong> Home team, away team<br>
    <strong>What's missing:</strong> Date, time, venue (may be null)<br>
    <strong>Visible to:</strong> League admins only</p>
  </div>

  <div class="card">
    <span class="icon">📅</span>
    <h3>SCHEDULED</h3>
    <p><strong>Meaning:</strong> Match is official and on the calendar<br>
    <strong>What's set:</strong> Date, time, venue confirmed<br>
    <strong>Visible to:</strong> Everyone (public fixture list)<br>
    <strong>Next step:</strong> Match day arrives</p>
  </div>

  <div class="card">
    <span class="icon">▶️</span>
    <h3>IN_PROGRESS</h3>
    <p><strong>Meaning:</strong> Match is currently being played<br>
    <strong>What happens:</strong> Live updates (future feature)<br>
    <strong>Duration:</strong> 90+ minutes<br>
    <strong>Next step:</strong> Final whistle → COMPLETED</p>
  </div>

  <div class="card">
    <span class="icon">✅</span>
    <h3>COMPLETED</h3>
    <p><strong>Meaning:</strong> Match has been played, result submitted<br>
    <strong>What's recorded:</strong> Final score, goal scorers, cards<br>
    <strong>What happens:</strong> Standings updated automatically<br>
    <strong>Final:</strong> Result is official</p>
  </div>

  <div class="card">
    <span class="icon">⏸️</span>
    <h3>POSTPONED</h3>
    <p><strong>Meaning:</strong> Match cannot be played on scheduled date<br>
    <strong>Reasons:</strong> Weather, venue issues, security concerns<br>
    <strong>Next step:</strong> League admin reschedules to new date<br>
    <strong>Status after:</strong> Returns to SCHEDULED</p>
  </div>

  <div class="card">
    <span class="icon">⚠️</span>
    <h3>DISPUTED</h3>
    <p><strong>Meaning:</strong> Result is under formal dispute<br>
    <strong>Reasons:</strong> Ineligible player, referee error, misconduct<br>
    <strong>Process:</strong> League investigates<br>
    <strong>Resolution:</strong> Result confirmed, amended, or match replayed</p>
  </div>

  <div class="card">
    <span class="icon">❌</span>
    <h3>CANCELLED</h3>
    <p><strong>Meaning:</strong> Match will not be played<br>
    <strong>Reasons:</strong> Team withdrawal, league restructuring<br>
    <strong>Final:</strong> Match is removed from standings calculations<br>
    <strong>Rare:</strong> Only happens in exceptional circumstances</p>
  </div>
</div>

---

## 🤖 Automatic Fixture Generation: The Magic Behind the Scenes

<div class="scenario">
  <h3>📋 Meet Mary Njeri: Generating Fixtures for 16 Teams</h3>
  
  <p><strong class="character">Mary Njeri</strong> is the FKF Premier League administrator. It's July 2025, and she needs to create fixtures for the upcoming 2025/26 season. The league has <strong>16 teams</strong>. Each team must play every other team <strong>twice</strong> (once at home, once away) = <strong>30 matches per team</strong> × 16 teams ÷ 2 = <strong>240 total matches</strong>.</p>
  
  <p>Creating 240 fixtures by hand would take days. But with LigiOpen's automatic fixture generation, Mary can do it in <strong>30 seconds</strong>.</p>
</div>

### Step 1: Mary Opens the Fixture Generator

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Mary Navigates to the Division</h4>
      <p>Mary logs into LigiOpen and navigates to:</p>
      <p><strong>FKF Premier League</strong> → <strong>2025/26 Season</strong> → <strong>Premier Division</strong> → <strong>Fixtures</strong> → <strong>Generate Fixtures</strong></p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Mary Configures Fixture Generation Settings</h4>
      <p>Mary fills in the fixture generation form:</p>
      
      <p><strong>Round Type:</strong> DOUBLE (each team plays every other team twice — home and away)<br>
      <strong>Start Date:</strong> August 15, 2025 (first possible match date)<br>
      <strong>Allowed Days:</strong> Saturday, Sunday (weekend matches only)<br>
      <strong>Weeks Per Round:</strong> 1 (one round of matches per week)<br>
      <strong>Matches Per Day:</strong> 4 (maximum 4 matches on any single day to avoid venue conflicts)<br>
      <strong>Kick-Off Times:</strong> 3:00 PM (afternoon matches)</p>
      
      <p>Mary clicks <strong>"Generate Fixtures"</strong>.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>LigiOpen's Algorithm Runs</h4>
      <p><strong>What happens behind the scenes:</strong></p>
      <ol>
        <li><strong>Load Teams:</strong> System retrieves all 16 confirmed teams in Premier Division</li>
        <li><strong>Generate Pairings:</strong> Algorithm creates all possible match pairings (120 unique pairings for 16 teams)</li>
        <li><strong>Create Home/Away Split:</strong> Each pairing is duplicated (Team A vs Team B at home, then Team B vs Team A at home) = 240 total matches</li>
        <li><strong>Apply Round-Robin Algorithm:</strong> Matches are organized into rounds ensuring:
          <ul>
            <li>No team plays twice on the same day</li>
            <li>Home and away matches are balanced (no team has 5 home matches in a row)</li>
            <li>Derby matches (e.g., Gor Mahia vs AFC Leopards) are spread across the season</li>
          </ul>
        </li>
        <li><strong>Assign Dates:</strong> Starting from Aug 15, 2025, matches are distributed across Saturdays and Sundays, respecting the "4 matches per day" limit</li>
        <li><strong>Set Kick-Off Times:</strong> All matches default to 3:00 PM (can be adjusted later)</li>
      </ol>
      
      <p><strong>Processing time:</strong> 8 seconds (240 matches generated)</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4>Mary Reviews the Generated Fixtures</h4>
      <p>Mary sees a confirmation message:</p>
      <p><em>"✅ Successfully generated 240 fixtures for FKF Premier League 2025/26 — Premier Division."</em></p>
      
      <p>She clicks <strong>"View Fixtures"</strong> and sees:</p>
      
      <table style="font-size: 0.85rem; margin-top: 1rem;">
        <thead>
          <tr>
            <th>Round</th>
            <th>Date</th>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Kick-Off</th>
            <th>Venue</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sat, Aug 17</td>
            <td>Gor Mahia FC</td>
            <td>Tusker FC</td>
            <td>3:00 PM</td>
            <td><em>Not assigned</em></td>
            <td><span class="badge">DRAFT</span></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Sat, Aug 17</td>
            <td>AFC Leopards</td>
            <td>Kakamega Homeboyz</td>
            <td>3:00 PM</td>
            <td><em>Not assigned</em></td>
            <td><span class="badge">DRAFT</span></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Sun, Aug 18</td>
            <td>Bandari FC</td>
            <td>Posta Rangers</td>
            <td>3:00 PM</td>
            <td><em>Not assigned</em></td>
            <td><span class="badge">DRAFT</span></td>
          </tr>
          <tr>
            <td colspan="7" style="text-align: center; font-style: italic; color: #777;">... and 237 more fixtures</td>
          </tr>
        </tbody>
      </table>
      
      <p>All fixtures are in <span class="badge">DRAFT</span> status — they exist in the system but are not yet public.</p>
    </div>
  </div>
</div>

<div class="tip-box">
  <strong>💡 How the Round-Robin Algorithm Works</strong><br>
  LigiOpen uses a <strong>circle method algorithm</strong> to generate fixtures:<br><br>
  1. Teams are arranged in a circle (one team stays fixed, others rotate)<br>
  2. Each rotation produces one round of matches<br>
  3. For DOUBLE round-robin, the process is repeated with home/away reversed<br><br>
  This ensures <strong>fairness:</strong> No team has an advantage in scheduling. Every team gets an equal number of home and away matches, and no team faces an unfair sequence (e.g., 5 away matches in a row).
</div>

---

## 📍 Assigning Venues to Fixtures

After fixtures are generated, venues must be assigned manually.

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Mary Assigns Venues One by One</h4>
      <p>Mary goes through the fixture list and assigns venues based on each team's home stadium:</p>
      
      <p><strong>Example assignments:</strong></p>
      <ul>
        <li><strong>Gor Mahia FC (home) vs Tusker FC</strong> → <strong>Kasarani Stadium</strong> (Gor Mahia's home ground)</li>
        <li><strong>AFC Leopards (home) vs Kakamega Homeboyz</strong> → <strong>Nyayo National Stadium</strong> (AFC Leopards' home ground)</li>
        <li><strong>Bandari FC (home) vs Posta Rangers</strong> → <strong>Mbaraki Sports Club</strong> (Bandari's home ground in Mombasa)</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Same-Day Venue Conflict Detection</h4>
      <p>Mary tries to assign <strong>Kasarani Stadium</strong> to two matches on the same day:</p>
      
      <ul>
        <li><strong>Match 1:</strong> Gor Mahia vs Tusker — Sat, Aug 17, 3:00 PM</li>
        <li><strong>Match 2:</strong> Harambee Stars vs Ulinzi Stars — Sat, Aug 17, 5:00 PM</li>
      </ul>
      
      <p>LigiOpen blocks the second assignment:</p>
      <p><em>"⚠️ Venue conflict: Kasarani Stadium is already assigned to another match on Aug 17 (Gor Mahia vs Tusker)."</em></p>
      
      <p>Mary must either:</p>
      <ul>
        <li>Choose a different venue for Match 2 (e.g., Nyayo Stadium)</li>
        <li>Reschedule Match 2 to a different day</li>
      </ul>
    </div>
  </div>
</div>

<div class="info-box">
  <strong>📌 Why Manual Venue Assignment?</strong><br><br>
  Venues have complexities that are difficult to automate fully:<br>
  • Some teams share the same home stadium (e.g., multiple clubs use Nyayo Stadium)<br>
  • Venue availability changes week-to-week (events, maintenance, weather)<br>
  • Political or security considerations may require neutral venues<br><br>
  Manual assignment gives league administrators full control while LigiOpen provides <strong>conflict detection</strong> to prevent double-bookings.
</div>

---

## 🎉 Publishing Fixtures (DRAFT → SCHEDULED)

Once venues are assigned and dates confirmed, Mary publishes the fixtures to make them official and public.

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Mary Selects Fixtures to Publish</h4>
      <p>Mary reviews the first 3 rounds of fixtures (48 matches). All have venues assigned and dates confirmed.</p>
      
      <p>She selects all 48 matches and clicks <strong>"Publish Selected Fixtures"</strong>.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Fixtures Change from DRAFT → SCHEDULED</h4>
      <p><strong>What happens immediately:</strong></p>
      <ul>
        <li>All 48 fixtures change status from <span class="badge">DRAFT</span> → <span class="badge">SCHEDULED</span></li>
        <li>The fixtures become <strong>publicly visible</strong> on LigiOpen (anyone can view them)</li>
        <li>Teams receive email notifications:
          <ul>
            <li><em>"Your upcoming fixtures have been published. AFC Leopards plays Kakamega Homeboyz on Aug 17 at Nyayo Stadium."</em></li>
          </ul>
        </li>
        <li>Players can now view their match schedule and declare availability</li>
        <li>Fans can see the fixtures and plan to attend matches</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Public Fixture Calendar Is Live</h4>
      <p>Anyone visiting LigiOpen can now browse the <strong>FKF Premier League 2025/26</strong> fixture list:</p>
      
      <table style="font-size: 0.85rem; margin-top: 1rem;">
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Venue</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: #e8f5e9;">
            <td>Sat, Aug 17<br>3:00 PM</td>
            <td><strong>Gor Mahia FC</strong></td>
            <td>Tusker FC</td>
            <td>Kasarani Stadium</td>
            <td><span class="badge" style="background: #4caf50;">SCHEDULED</span></td>
          </tr>
          <tr style="background: #e8f5e9;">
            <td>Sat, Aug 17<br>3:00 PM</td>
            <td><strong>AFC Leopards</strong></td>
            <td>Kakamega Homeboyz</td>
            <td>Nyayo National Stadium</td>
            <td><span class="badge" style="background: #4caf50;">SCHEDULED</span></td>
          </tr>
          <tr>
            <td>Sun, Aug 18<br>3:00 PM</td>
            <td>Bandari FC</td>
            <td>Posta Rangers</td>
            <td>Mbaraki Sports Club</td>
            <td><span class="badge" style="background: #4caf50;">SCHEDULED</span></td>
          </tr>
        </tbody>
      </table>
      
      <p>Fans can click on any match to see more details (referee assignment, ticket information, directions to venue).</p>
    </div>
  </div>
</div>

---

## ⚽ Match Day: From Kick-Off to Final Whistle

<div class="scenario">
  <h3>🏟️ Match Day: AFC Leopards vs Gor Mahia FC</h3>
  
  <p>It's Saturday, September 21, 2025. The Nairobi Derby — <strong>AFC Leopards vs Gor Mahia FC</strong> — is scheduled for 3:00 PM at Nyayo National Stadium. Let's follow the match from the referee's perspective.</p>
</div>

### Step 1: Pre-Match Preparation

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Referee John Kamau Arrives at the Stadium</h4>
      <p><strong>Time:</strong> 1:30 PM (90 minutes before kick-off)</p>
      
      <p>John logs into LigiOpen on his tablet and opens the match:</p>
      <ul>
        <li><strong>Match:</strong> AFC Leopards vs Gor Mahia FC</li>
        <li><strong>Venue:</strong> Nyayo National Stadium</li>
        <li><strong>Status:</strong> <span class="badge">SCHEDULED</span></li>
        <li><strong>Referee:</strong> John Kamau (assigned)</li>
        <li><strong>Assistant Referees:</strong> Peter Njoroge (AR1), David Waweru (AR2)</li>
        <li><strong>Fourth Official:</strong> Grace Mwangi</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Teams Submit Team Sheets</h4>
      <p>Both coaches submit their starting lineups via LigiOpen:</p>
      
      <p><strong>AFC Leopards Starting XI:</strong></p>
      <ul style="columns: 2; font-size: 0.9rem;">
        <li>1. Brian Mboya (GK)</li>
        <li>2. Caleb Omondi (RB)</li>
        <li>5. Eugene Asike (CB)</li>
        <li>4. Isaac Oduro (CB)</li>
        <li>3. Austin Odhiambo (LB)</li>
        <li>6. Robert Mudenyu (CDM)</li>
        <li>8. Boniface Muchiri (CM)</li>
        <li>10. Luke Namanda (CAM)</li>
        <li>7. Victor Otieno (RW)</li>
        <li>9. Michael Otieno (ST)</li>
        <li>11. Jaffari Owiti (LW)</li>
      </ul>
      
      <p><strong>Gor Mahia FC Starting XI:</strong> (similar format)</p>
      
      <p>John reviews both team sheets to ensure all players are eligible (no suspensions, correctly registered).</p>
    </div>
  </div>
</div>

---

### Step 2: Kick-Off and Live Match

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>John Starts the Match</h4>
      <p><strong>Time:</strong> 3:00 PM</p>
      
      <p>John blows the whistle. The match begins!</p>
      
      <p>In LigiOpen, John (or his assistant) changes the match status:</p>
      <p><span class="badge">SCHEDULED</span> → <span class="badge">IN_PROGRESS</span></p>
      
      <p>This signals to everyone that the match is currently being played.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>First Half Events</h4>
      <p><strong>12th minute:</strong> Boniface Muchiri (AFC Leopards) commits a tactical foul on a Gor Mahia player. John shows a <strong>yellow card</strong>.</p>
      
      <p><strong>28th minute:</strong> Corner kick for AFC Leopards. The ball is swung in, and <strong>Eugene Asike</strong> heads it into the net. <strong>GOAL!</strong> AFC Leopards 1-0 Gor Mahia.</p>
      
      <p><strong>45th minute:</strong> John blows the whistle for half-time. AFC Leopards lead 1-0.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Second Half Events</h4>
      <p><strong>58th minute:</strong> Gor Mahia equalizes! <strong>Benson Omala</strong> scores from outside the box. AFC Leopards 1-1 Gor Mahia.</p>
      
      <p><strong>67th minute:</strong> AFC Leopards' striker <strong>Michael Otieno</strong> is brought down in the penalty area. John points to the spot — <strong>PENALTY!</strong></p>
      
      <p><strong>68th minute:</strong> Michael Otieno steps up and converts the penalty. AFC Leopards 2-1 Gor Mahia.</p>
      
      <p><strong>82nd minute:</strong> Tempers flare. A Gor Mahia defender commits a reckless challenge on Victor Otieno. John shows a <strong>red card</strong>. Gor Mahia is down to 10 men.</p>
      
      <p><strong>90+4 minutes:</strong> John blows the final whistle. <strong>Final Score: AFC Leopards 2-1 Gor Mahia FC</strong></p>
    </div>
  </div>
</div>

---

### Step 3: Post-Match Result Submission

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>John Submits the Match Result</h4>
      <p><strong>Time:</strong> 5:15 PM (15 minutes after final whistle)</p>
      
      <p>John opens LigiOpen on his tablet and navigates to <strong>Match Result Submission</strong>.</p>
      
      <p>He enters:</p>
      <ul>
        <li><strong>Final Score:</strong> AFC Leopards 2 - 1 Gor Mahia FC</li>
        <li><strong>Goal Scorers:</strong>
          <ul>
            <li>28' Eugene Asike (AFC Leopards)</li>
            <li>58' Benson Omala (Gor Mahia FC)</li>
            <li>68' Michael Otieno (AFC Leopards) — Penalty</li>
          </ul>
        </li>
        <li><strong>Yellow Cards:</strong>
          <ul>
            <li>12' Boniface Muchiri (AFC Leopards) — Tactical foul</li>
          </ul>
        </li>
        <li><strong>Red Cards:</strong>
          <ul>
            <li>82' Collins Shichenje (Gor Mahia FC) — Serious foul play</li>
          </ul>
        </li>
        <li><strong>Attendance:</strong> 28,500 spectators</li>
        <li><strong>Referee Notes:</strong> "Match was well-contested. Red card decision reviewed via VAR and confirmed. No major incidents."</li>
      </ul>
      
      <p>John clicks <strong>"Submit Result"</strong>.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>LigiOpen Processes the Result</h4>
      <p><strong>What happens immediately:</strong></p>
      <ul>
        <li>Match status changes: <span class="badge">IN_PROGRESS</span> → <span class="badge">COMPLETED</span></li>
        <li><strong>Standings are updated:</strong>
          <ul>
            <li>AFC Leopards: +3 points, GF +2, GA +1</li>
            <li>Gor Mahia FC: +0 points, GF +1, GA +2</li>
          </ul>
        </li>
        <li><strong>Player stats are updated:</strong>
          <ul>
            <li>Eugene Asike: Goals +1</li>
            <li>Michael Otieno: Goals +1</li>
            <li>Benson Omala: Goals +1</li>
            <li>Boniface Muchiri: Yellow Cards +1</li>
            <li>Collins Shichenje: Red Cards +1, suspended for next match</li>
          </ul>
        </li>
        <li><strong>Form strings are updated:</strong>
          <ul>
            <li>AFC Leopards: Form = "WWDLW" → "WWDLWW" (added 'W' for Win)</li>
            <li>Gor Mahia FC: Form = "WDWWL" → "DWWLL" (added 'L' for Loss)</li>
          </ul>
        </li>
        <li><strong>League table is recalculated</strong> (positions may change)</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Notifications Sent</h4>
      <p>LigiOpen automatically sends notifications:</p>
      
      <ul>
        <li><strong>To AFC Leopards:</strong> <em>"Congratulations! You defeated Gor Mahia FC 2-1. You've moved up to 2nd place in the standings."</em></li>
        <li><strong>To Gor Mahia FC:</strong> <em>"Match result recorded: AFC Leopards 2-1 Gor Mahia FC. Collins Shichenje is suspended for your next match."</em></li>
        <li><strong>To fans:</strong> Result appears on the public fixture list and league table</li>
      </ul>
    </div>
  </div>
</div>

<div class="tip-box">
  <strong>⚽ Result Submission Best Practices</strong><br>
  <strong>Accuracy:</strong> Double-check goal scorers and card recipients before submitting<br>
  <strong>Timeliness:</strong> Submit results within 24 hours of the match (league rules typically require this)<br>
  <strong>Detail:</strong> Include referee notes for any unusual incidents (injuries, abandoned matches, crowd issues)<br>
  <strong>Evidence:</strong> Upload match sheet photos or PDFs for official record-keeping
</div>

---

## ⏸️ Handling Postponed Matches

Sometimes matches cannot be played on the scheduled date due to weather, venue issues, or other circumstances.

<div class="scenario">
  <h3>🌧️ Scenario: Match Postponed Due to Heavy Rain</h3>
  
  <p><strong>Match:</strong> Bandari FC vs Kakamega Homeboyz<br>
  <strong>Scheduled:</strong> Saturday, October 5, 2025, 3:00 PM<br>
  <strong>Venue:</strong> Mbaraki Sports Club, Mombasa</p>
  
  <p>On Friday evening (Oct 4), heavy rains flood the Mbaraki pitch. The venue is unplayable. The match must be postponed.</p>
</div>

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Mary Njeri (League Admin) Postpones the Match</h4>
      <p>Mary logs into LigiOpen, opens the match, and clicks <strong>"Postpone Match"</strong>.</p>
      
      <p>She enters:</p>
      <ul>
        <li><strong>Reason:</strong> "Heavy rain has flooded the pitch. Venue is unplayable."</li>
      </ul>
      
      <p>Mary clicks <strong>"Confirm Postponement"</strong>.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Match Status Changes to POSTPONED</h4>
      <p><strong>What happens immediately:</strong></p>
      <ul>
        <li>Match status: <span class="badge">SCHEDULED</span> → <span class="badge">POSTPONED</span></li>
        <li>The match date is <strong>cleared</strong> (set to null)</li>
        <li>The match disappears from the public fixture calendar (until rescheduled)</li>
        <li><strong>Both teams are notified:</strong> <em>"Your match on Oct 5 has been postponed due to heavy rain. A new date will be announced soon."</em></li>
        <li>Fans who viewed the fixture see: <em>"⏸️ POSTPONED — Heavy rain has flooded the pitch"</em></li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Mary Reschedules the Match</h4>
      <p>A week later (Oct 12), the pitch has dried. Mary reschedules the match:</p>
      
      <p><strong>New Date:</strong> Wednesday, October 16, 2025<br>
      <strong>New Time:</strong> 7:00 PM (evening match to avoid conflicting with other fixtures)<br>
      <strong>Venue:</strong> Mbaraki Sports Club (same venue)</p>
      
      <p>Mary clicks <strong>"Reschedule Match"</strong> and enters the new details.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4>Match Returns to SCHEDULED Status</h4>
      <p><strong>What happens:</strong></p>
      <ul>
        <li>Match status: <span class="badge">POSTPONED</span> → <span class="badge">SCHEDULED</span></li>
        <li>The match reappears on the public fixture calendar with the new date (Oct 16, 7:00 PM)</li>
        <li><strong>Both teams are notified:</strong> <em>"Your postponed match has been rescheduled for Oct 16 at 7:00 PM at Mbaraki Sports Club."</em></li>
        <li>The match is now ready to be played on the new date</li>
      </ul>
    </div>
  </div>
</div>

<div class="info-box">
  <strong>📌 Common Reasons for Postponement</strong><br><br>
  <strong>Weather:</strong> Heavy rain, flooding, extreme heat<br>
  <strong>Venue Issues:</strong> Pitch unplayable, power outage, facility damage<br>
  <strong>Security Concerns:</strong> Political unrest, safety threats<br>
  <strong>Force Majeure:</strong> National emergencies, pandemics<br>
  <strong>Team Issues:</strong> Insufficient players (injuries, suspensions), travel delays
</div>

---

## ⚠️ Disputed Match Results

Rarely, a team may dispute a match result due to an ineligible player, referee error, or misconduct.

<div class="scenario">
  <h3>⚖️ Scenario: Tusker FC Disputes Result Due to Ineligible Player</h3>
  
  <p><strong>Match:</strong> Tusker FC 1-2 Posta Rangers (played on Nov 3, 2025)<br>
  <strong>Result submitted by referee:</strong> Posta Rangers won 2-1<br>
  <strong>Issue:</strong> Tusker FC claims Posta Rangers fielded a suspended player</p>
</div>

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Tusker FC Files a Formal Dispute</h4>
      <p>Tusker FC's club admin logs into LigiOpen and navigates to the match result.</p>
      
      <p>They click <strong>"Dispute Result"</strong> and submit:</p>
      <ul>
        <li><strong>Reason:</strong> "Posta Rangers fielded Brian Mwangi (#7), who was suspended for accumulating 5 yellow cards. He should not have been eligible to play."</li>
        <li><strong>Evidence:</strong> Screenshot of Brian Mwangi's disciplinary record showing 5 yellow cards before the match</li>
      </ul>
      
      <p>Tusker clicks <strong>"Submit Dispute"</strong>.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Match Status Changes to DISPUTED</h4>
      <p><strong>What happens immediately:</strong></p>
      <ul>
        <li>Match status: <span class="badge">COMPLETED</span> → <span class="badge">DISPUTED</span></li>
        <li>The result is <strong>frozen</strong> — standings are not recalculated until the dispute is resolved</li>
        <li>A notification is sent to Mary Njeri (League Admin): <em>"Tusker FC has disputed the result of Tusker vs Posta Rangers."</em></li>
        <li>The match appears on Mary's <strong>Pending Disputes</strong> queue</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Mary Investigates the Dispute</h4>
      <p>Mary reviews the evidence:</p>
      
      <p><strong>Tusker's claim:</strong> Brian Mwangi (#7) played while suspended<br>
      <strong>Posta Rangers' team sheet:</strong> Confirms Brian Mwangi was in the starting lineup<br>
      <strong>Brian Mwangi's player record:</strong> Shows 5 yellow cards on Oct 28 (automatic 1-match suspension for next match)<br>
      <strong>Suspension status:</strong> Brian was suspended for the Nov 3 match but played anyway</p>
      
      <p><strong>Conclusion:</strong> Tusker FC is correct. Posta Rangers fielded an ineligible player.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4>Mary Resolves the Dispute</h4>
      <p>According to FKF rules, fielding an ineligible player results in a <strong>3-0 forfeit win</strong> for the opposing team, regardless of the actual score.</p>
      
      <p>Mary clicks <strong>"Resolve Dispute"</strong> and selects:</p>
      <ul>
        <li><strong>Resolution:</strong> Award 3-0 win to Tusker FC</li>
        <li><strong>Reason:</strong> "Posta Rangers fielded a suspended player (Brian Mwangi). The match is awarded to Tusker FC as a 3-0 forfeit win per FKF regulations."</li>
      </ul>
      
      <p>Mary clicks <strong>"Confirm Resolution"</strong>.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">5</div>
    <div class="step-content">
      <h4>Result Is Amended</h4>
      <p><strong>What happens:</strong></p>
      <ul>
        <li>Match status: <span class="badge">DISPUTED</span> → <span class="badge">COMPLETED</span></li>
        <li>The original result (Tusker 1-2 Posta) is <strong>overturned</strong></li>
        <li>The new official result is: <strong>Tusker FC 3-0 Posta Rangers (Forfeit)</strong></li>
        <li><strong>Standings are recalculated:</strong>
          <ul>
            <li>Tusker FC: Gain 3 points (previously had 0 for the loss)</li>
            <li>Posta Rangers: Lose 3 points (previously had 3 for the win)</li>
          </ul>
        </li>
        <li><strong>Both teams are notified:</strong>
          <ul>
            <li>Tusker FC: <em>"Your dispute has been upheld. You have been awarded a 3-0 forfeit win."</em></li>
            <li>Posta Rangers: <em>"The match result has been overturned. You fielded an ineligible player and the match is now a 3-0 forfeit loss."</em></li>
          </ul>
        </li>
        <li><strong>Additional penalty:</strong> Posta Rangers may face fines or point deductions for the violation (handled separately by the league)</li>
      </ul>
    </div>
  </div>
</div>

<div class="warning-box">
  <strong>⚠️ Dispute Resolution Timeline</strong><br>
  <strong>Filing deadline:</strong> Teams must file disputes within 48 hours of the match ending<br>
  <strong>Investigation:</strong> League has 7 days to investigate and resolve the dispute<br>
  <strong>Final decision:</strong> League admin's decision is binding and cannot be appealed within LigiOpen (appeals go to the federation's disciplinary committee)
</div>

---

## 🏉 Multi-Sport: How Fixtures Work Across Different Sports

Fixture generation and management work consistently across all sports, with sport-specific adaptations.

### Rugby Fixtures

<div class="scenario">
  <h3>🏉 Kenya Cup (Rugby)</h3>
  
  <p><strong>Teams:</strong> 12 teams<br>
  <strong>Format:</strong> Single round-robin (each team plays every other team once) = 11 matches per team<br>
  <strong>Match duration:</strong> 80 minutes (vs 90 for football)<br>
  <strong>Fixture preferences:</strong> Saturday afternoons (rugby tradition)</p>
  
  <p><strong>Fixture generation settings:</strong></p>
  <ul>
    <li>Round Type: SINGLE (one match per pairing)</li>
    <li>Allowed Days: Saturday only</li>
    <li>Kick-Off Times: 3:00 PM, 5:15 PM (staggered to allow two matches at the same venue)</li>
  </ul>
</div>

### Basketball Fixtures

<div class="scenario">
  <h3>🏀 KBF Premier League (Basketball)</h3>
  
  <p><strong>Teams:</strong> 10 teams<br>
  <strong>Format:</strong> Double round-robin (home and away)<br>
  <strong>Match duration:</strong> ~2 hours (including halftime and timeouts)<br>
  <strong>Venue:</strong> Indoor courts (limited availability)</p>
  
  <p><strong>Fixture generation settings:</strong></p>
  <ul>
    <li>Round Type: DOUBLE</li>
    <li>Allowed Days: Friday, Saturday, Sunday (weekends only)</li>
    <li>Kick-Off Times: 5:00 PM, 7:30 PM (evening matches)</li>
    <li>Matches Per Day: 2 (due to limited indoor courts)</li>
  </ul>
</div>

### Volleyball Fixtures

<div class="scenario">
  <h3>🏐 Kenya Volleyball Federation (KVF) League</h3>
  
  <p><strong>Teams:</strong> 8 teams<br>
  <strong>Format:</strong> Single round-robin<br>
  <strong>Match duration:</strong> Best of 5 sets (~90 minutes)<br>
  <strong>Venue:</strong> Indoor courts</p>
  
  <p><strong>Fixture generation settings:</strong></p>
  <ul>
    <li>Round Type: SINGLE</li>
    <li>Allowed Days: Saturday, Sunday</li>
    <li>Kick-Off Times: 10:00 AM, 1:00 PM, 4:00 PM (multiple matches per day)</li>
  </ul>
</div>

---

## ✅ Fixture Management Best Practices

<div class="tip-box">
  <strong>💡 Generate Fixtures Early</strong><br>
  Create fixtures at least 4-6 weeks before the season starts. This gives teams time to plan travel, book accommodation, and prepare their squads.
</div>

<div class="tip-box">
  <strong>💡 Assign Venues Strategically</strong><br>
  Consider travel distance (avoid back-to-back away matches in distant cities), venue availability, and local derbies (assign larger stadiums for high-demand matches).
</div>

<div class="tip-box">
  <strong>💡 Publish in Batches</strong><br>
  Don't publish all 240 fixtures at once. Publish the first 3-5 rounds initially, then release more as the season progresses. This allows flexibility for rescheduling without affecting too many matches.
</div>

<div class="tip-box">
  <strong>💡 Communicate Postponements Quickly</strong><br>
  If a match must be postponed, notify teams and fans as early as possible (ideally 24-48 hours before the scheduled kick-off). Update the fixture status in LigiOpen immediately.
</div>

<div class="tip-box">
  <strong>💡 Track Disputed Matches</strong><br>
  Keep detailed records of disputes, evidence, and resolutions. This creates a transparent audit trail and helps prevent future violations.
</div>

<div class="tip-box">
  <strong>💡 Monitor Same-Day Venue Usage</strong><br>
  Use LigiOpen's conflict detection to avoid double-booking venues. If multiple matches must happen at the same venue on the same day, stagger kick-off times by at least 3 hours (to allow for match duration, crowd dispersal, and pitch preparation).
</div>

---

## 🔗 Related Documentation

<div class="card-grid">
  <div class="card">
    <h3><a href="leagues-competitions.html">🏆 Leagues & Competitions</a></h3>
    <p>Understand how divisions and competitions are structured before generating fixtures.</p>
    <a href="leagues-competitions.html" class="btn">Read More →</a>
  </div>

  <div class="card">
    <h3><a href="clubs-teams.html">⚽ Clubs & Teams</a></h3>
    <p>Learn how teams must be registered and confirmed before fixtures can be generated for them.</p>
    <a href="clubs-teams.html" class="btn">Read More →</a>
  </div>

  <div class="card">
    <h3><a href="standings.html">📊 Standings & Rankings</a></h3>
    <p>See how match results automatically update league standings and team positions.</p>
    <a href="standings.html" class="btn">Read More →</a>
  </div>

  <div class="card">
    <h3><a href="officials.html">👨‍⚖️ Officials & Referees</a></h3>
    <p>Learn how referees are assigned to matches and how they submit results after the final whistle.</p>
    <a href="officials.html" class="btn">Read More →</a>
  </div>

  <div class="card">
    <h3><a href="venues.html">🏟️ Venues & Stadiums</a></h3>
    <p>Understand venue management and availability before assigning venues to fixtures.</p>
    <a href="venues.html" class="btn">Read More →</a>
  </div>

  <div class="card">
    <h3><a href="players.html">👤 Player Management</a></h3>
    <p>Discover how player stats (goals, cards, appearances) are recorded during matches.</p>
    <a href="players.html" class="btn">Read More →</a>
  </div>
</div>

---

<div style="text-align: center; margin-top: 3rem; padding: 2rem; background: #f8f9fa; border-radius: 8px;">
  <h2 style="color: var(--primary-color); margin-bottom: 1rem;">⚽ Every Match Tells a Story</h2>
  <p style="font-size: 1.1rem; color: #555;">
    From the algorithm that generates 240 fixtures in 8 seconds<br>
    to the referee submitting the result after a dramatic derby win,<br>
    LigiOpen handles every detail with precision, fairness, and transparency.
  </p>
  <p style="margin-top: 1rem;">
    <strong>Let the games begin!</strong> ⚽🏉🏀
  </p>
</div>
