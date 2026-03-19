---
layout: default
title: Leagues & Competitions
---

# 🏆 Leagues & Competitions

Understanding how LigiOpen structures leagues, seasons, competitions, and divisions is fundamental to using the platform effectively. This page explains the complete hierarchy from top to bottom, using real Kenyan examples and comprehensive scenarios.

---

## 📐 The Structure: How Everything Fits Together

<div class="info-box">
  <strong>🎯 The Four-Level Hierarchy</strong><br><br>
  <strong>1. LEAGUE</strong> → The permanent organization (e.g., "Football Kenya Federation")<br>
  <strong>2. SEASON</strong> → The time period (e.g., "2025/26")<br>
  <strong>3. COMPETITION</strong> → The tournament format (e.g., "FKF Premier League")<br>
  <strong>4. DIVISION</strong> → The specific group of teams competing (e.g., "Premier Division")
</div>

Think of it like organizing a school:
- **League** = The School itself (permanent, exists for years)
- **Season** = The Academic Year (2024/2025)
- **Competition** = The Sports Day Events (football tournament, athletics championship)
- **Division** = The specific age groups (Under-15, Under-17, Under-19)

<div class="card-grid">
  <div class="card">
    <span class="icon">🏢</span>
    <h3>League (Organization)</h3>
    <p>The permanent governing body that runs football competitions year after year. Examples: FKF, Nairobi County FA, Kenya Rugby Union.</p>
  </div>

  <div class="card">
    <span class="icon">📅</span>
    <h3>Season (Time Period)</h3>
    <p>Defines WHEN competitions happen. Usually runs for 9-10 months (e.g., August 2025 to May 2026).</p>
  </div>

  <div class="card">
    <span class="icon">🏆</span>
    <h3>Competition (Tournament)</h3>
    <p>Defines HOW teams compete: round-robin league, knockout tournament, or hybrid formats.</p>
  </div>

  <div class="card">
    <span class="icon">⚽</span>
    <h3>Division (Team Group)</h3>
    <p>The actual group of teams competing for the same trophy with their own standings table.</p>
  </div>
</div>

---

## 🏟️ Real-World Example: FKF Premier League 2025/26

Let's walk through how Kenya's top football league is structured in LigiOpen:

<div class="scenario">
  <h3>⚽ The Complete FKF Premier League Structure</h3>
  
  <div class="workflow">
    <div class="workflow-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <h4>LEAGUE: Football Kenya Federation (FKF)</h4>
        <p><strong>Permanent organization</strong> established in 1960. FKF governs all football in Kenya.</p>
        <p><strong>What's stored at League level:</strong></p>
        <ul>
          <li>League name: "Football Kenya Federation"</li>
          <li>Short name: "FKF"</li>
          <li>Sport type: "Football"</li>
          <li>Tier level: "Top-flight"</li>
          <li>FKF logo</li>
          <li>Points system: 3 for win, 1 for draw, 0 for loss</li>
          <li>Visibility: PUBLIC (anyone can view)</li>
        </ul>
      </div>
    </div>

    <div class="workflow-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <h4>SEASON: 2025/26</h4>
        <p><strong>The time period</strong> when competitions run.</p>
        <p><strong>What's stored at Season level:</strong></p>
        <ul>
          <li>Season name: "2025/26"</li>
          <li>Start date: August 15, 2025</li>
          <li>End date: May 31, 2026</li>
          <li>Status: ACTIVE (currently running)</li>
          <li>Is Current: TRUE (this is the main season right now)</li>
        </ul>
        <p><em>Note: Multiple seasons can exist simultaneously (e.g., main league + mid-season cup), but only ONE can be marked as "current" at any time.</em></p>
      </div>
    </div>

    <div class="workflow-step">
      <div class="step-number">3</div>
      <div class="step-content">
        <h4>COMPETITION: FKF Premier League</h4>
        <p><strong>The tournament format</strong> that defines how teams compete.</p>
        <p><strong>What's stored at Competition level:</strong></p>
        <ul>
          <li>Competition name: "FKF Premier League"</li>
          <li>Format type: ROUND_ROBIN (league format)</li>
          <li>Number of rounds: 2 (home and away)</li>
          <li>Linked to: League (FKF) + Season (2025/26)</li>
        </ul>
      </div>
    </div>

    <div class="workflow-step">
      <div class="step-number">4</div>
      <div class="step-content">
        <h4>DIVISION: Premier Division</h4>
        <p><strong>The actual teams competing</strong> with their own standings table.</p>
        <p><strong>What's stored at Division level:</strong></p>
        <ul>
          <li>Division name: "Premier Division 2025/26"</li>
          <li>Teams: 18 clubs (Gor Mahia, AFC Leopards, Tusker FC, etc.)</li>
          <li>Order/Rank: 1 (highest tier)</li>
          <li>Total matches: 306 (18 teams × 17 opponents × 2 legs)</li>
          <li>Standings table: 18 rows, one per team</li>
        </ul>
      </div>
    </div>
  </div>
</div>

---

## 🎓 Why This Structure Matters

### Flexibility Across Different Scales

This four-level hierarchy works for ANY size of competition:

<div class="card-grid">
  <div class="card">
    <h3>🏆 National Professional League</h3>
    <p><strong>League:</strong> Football Kenya Federation<br>
    <strong>Season:</strong> 2025/26<br>
    <strong>Competition:</strong> FKF Premier League<br>
    <strong>Division:</strong> Premier Division (18 teams)</p>
  </div>

  <div class="card">
    <h3>🏘️ County Multi-Tier League</h3>
    <p><strong>League:</strong> Nairobi County FA<br>
    <strong>Season:</strong> 2025/26<br>
    <strong>Competition:</strong> Nairobi County League<br>
    <strong>Divisions:</strong> Premier (16 teams), Division One (18 teams), Division Two (20 teams)</p>
  </div>

  <div class="card">
    <h3>⚽ Village Weekend Tournament</h3>
    <p><strong>League:</strong> Kibera Community Football<br>
    <strong>Season:</strong> 2025<br>
    <strong>Competition:</strong> Kibera Weekend League<br>
    <strong>Division:</strong> Open Division (8 teams)</p>
  </div>

  <div class="card">
    <h3>🎓 University Sports League</h3>
    <p><strong>League:</strong> Kenya University Sports Association (KUSA)<br>
    <strong>Season:</strong> 2025/26<br>
    <strong>Competition:</strong> Men's Football Championship<br>
    <strong>Division:</strong> National Division (24 universities)</p>
  </div>
</div>

---

## 📖 Complete Scenario: Setting Up a County League

<div class="scenario">
  <h3>🏟️ Meet Peter: Setting Up Kisumu County Football League</h3>
  
  <p><strong class="character">Peter Odhiambo</strong> is the Secretary of Kisumu County Football Association. It's June 2025, and he needs to set up the entire 2025/26 season with three divisions. Here's how he does it with LigiOpen, step by step...</p>
</div>

### Stage 1: Creating the Season

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Peter Logs into LigiOpen</h4>
      <p>Peter's account is registered as a <strong>League Admin</strong> for Kisumu County FA. This gives him permission to create seasons, competitions, and divisions within his league only (he cannot access other county FAs).</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Creates the New Season</h4>
      <p>Peter navigates to <strong>Seasons → Create New Season</strong></p>
      <p><strong>He fills in:</strong></p>
      <ul>
        <li><strong>Season Name:</strong> "2025/26"</li>
        <li><strong>Start Date:</strong> September 1, 2025</li>
        <li><strong>End Date:</strong> May 31, 2026</li>
      </ul>
      <p>The system automatically sets the season status as <strong>UPCOMING</strong> and <strong>isCurrent = FALSE</strong> (he'll activate it later).</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Understanding Season Status</h4>
      <p>Seasons go through a lifecycle:</p>
      <ul>
        <li><strong>UPCOMING:</strong> Created but not yet started (registration phase)</li>
        <li><strong>ACTIVE:</strong> Currently running with matches being played</li>
        <li><strong>COMPLETED:</strong> Season finished, historical data only</li>
        <li><strong>CANCELLED:</strong> Season was abandoned (rare)</li>
      </ul>
      <p>Peter will change the status to <strong>ACTIVE</strong> when registration closes and the first match kicks off in September.</p>
    </div>
  </div>
</div>

<div class="tip-box">
  <strong>💡 Why "isCurrent" Matters</strong><br>
  A league can have multiple seasons in the system (2023/24 for history, 2024/25 completed, 2025/26 active, 2026/27 planning). The "isCurrent" flag tells the system which season should be the default when someone visits the league. Only ONE season can be "current" at a time.
</div>

---

### Stage 2: Creating the Competition

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4>Creates the League Competition</h4>
      <p>Within the 2025/26 season, Peter creates a new competition:</p>
      <ul>
        <li><strong>Competition Name:</strong> "Kisumu County Football League"</li>
        <li><strong>Competition Type:</strong> ROUND_ROBIN (league format)</li>
        <li><strong>Linked Season:</strong> 2025/26</li>
      </ul>
      <p>This competition will contain multiple divisions (Premier, Division One, Division Two).</p>
    </div>
  </div>
</div>

<div class="info-box">
  <strong>🎯 Competition Types Explained</strong><br><br>
  LigiOpen supports multiple competition formats:<br><br>
  <strong>1. ROUND_ROBIN (League Format):</strong><br>
  Every team plays every other team at least once. Most common format for season-long leagues.<br><br>
  <strong>2. KNOCKOUT (Cup Format):</strong><br>
  Single-elimination tournament. Lose once, you're out. Used for cups like FKF Shield.<br><br>
  <strong>3. GROUP_STAGE_PLUS_KNOCKOUT:</strong><br>
  Teams are divided into groups (round-robin within groups), then top teams advance to knockout rounds. Like World Cup format.<br><br>
  <strong>4. HYBRID:</strong><br>
  Custom combinations of formats for specialized tournaments.
</div>

---

### Stage 3: Creating Divisions

Now comes the crucial part — creating the actual divisions where teams will compete.

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">5</div>
    <div class="step-content">
      <h4>Division 1: Premier Division</h4>
      <p>Peter creates the top-tier division:</p>
      <ul>
        <li><strong>Division Name:</strong> "Premier Division"</li>
        <li><strong>Order/Tier:</strong> 1 (highest tier)</li>
        <li><strong>Expected Teams:</strong> 12</li>
        <li><strong>Linked to:</strong> Competition (Kisumu County League) + Season (2025/26)</li>
      </ul>
      <p><strong>Why "Order" matters:</strong> If the league has promotion/relegation, the system uses the "order" field to know which divisions are above/below each other. Order 1 = top tier, Order 2 = second tier, etc.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">6</div>
    <div class="step-content">
      <h4>Division 2: Division One</h4>
      <p>Peter creates the second tier:</p>
      <ul>
        <li><strong>Division Name:</strong> "Division One"</li>
        <li><strong>Order/Tier:</strong> 2</li>
        <li><strong>Expected Teams:</strong> 14</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">7</div>
    <div class="step-content">
      <h4>Division 3: Division Two</h4>
      <p>Peter creates the third tier:</p>
      <ul>
        <li><strong>Division Name:</strong> "Division Two"</li>
        <li><strong>Order/Tier:</strong> 3</li>
        <li><strong>Expected Teams:</strong> 16</li>
      </ul>
      <p><strong>Total structure:</strong> 42 teams across three divisions, all competing in the same season but with separate standings tables.</p>
    </div>
  </div>
</div>

<div class="card-grid">
  <div class="card">
    <h3>🥇 Premier Division</h3>
    <p><strong>12 teams</strong><br>
    Order: 1 (top tier)<br>
    Total matches: 132 (12×11×2)<br>
    Champions get promoted to... (no league above)<br>
    Bottom 2 relegated to Division One</p>
  </div>

  <div class="card">
    <h3>🥈 Division One</h3>
    <p><strong>14 teams</strong><br>
    Order: 2 (middle tier)<br>
    Total matches: 182 (14×13×2)<br>
    Top 2 promoted to Premier<br>
    Bottom 2 relegated to Division Two</p>
  </div>

  <div class="card">
    <h3>🥉 Division Two</h3>
    <p><strong>16 teams</strong><br>
    Order: 3 (entry tier)<br>
    Total matches: 240 (16×15×2)<br>
    Top 2 promoted to Division One<br>
    No relegation (lowest tier)</p>
  </div>
</div>

---

### Stage 4: Team Registration Opens

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">8</div>
    <div class="step-content">
      <h4>Peter Announces Registration</h4>
      <p>With all three divisions created, Peter announces on WhatsApp groups, local radio, and posters around Kisumu:</p>
      <p><em>"Kisumu County Football League 2025/26 registration is now OPEN. Register your club on LigiOpen by July 31st. Registration fee: 10,000 KES for Premier, 5,000 KES for Division One and Two."</em></p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">9</div>
    <div class="step-content">
      <h4>Clubs Start Registering</h4>
      <p>Club administrators from across Kisumu County log into LigiOpen and submit registration requests:</p>
      <ul>
        <li><strong>Kisumu Hot Stars FC</strong> → Applying for Premier Division</li>
        <li><strong>Nyanza United</strong> → Applying for Premier Division</li>
        <li><strong>Dunga Beach FC</strong> → Applying for Division One</li>
        <li><strong>Ahero FC</strong> → Applying for Division Two</li>
        <li>...and 38 more clubs</li>
      </ul>
      <p>Each registration includes club logo, registration documents, home venue preference, and contact details.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">10</div>
    <div class="step-content">
      <h4>Peter Reviews and Confirms Registrations</h4>
      <p>Throughout July, Peter reviews each registration:</p>
      <ul>
        <li>✅ Verifies club documents are valid</li>
        <li>✅ Confirms payment received (tracked outside LigiOpen)</li>
        <li>✅ Checks no duplicate club names</li>
        <li>✅ Ensures clubs apply to appropriate division based on last season's performance</li>
      </ul>
      <p>For each approved club, Peter clicks <strong>"CONFIRM"</strong>, which triggers two automatic actions:</p>
      <ol>
        <li>The team is officially assigned to the division</li>
        <li>An empty standings row is created (all stats at zero)</li>
      </ol>
    </div>
  </div>
</div>

<div class="warning-box">
  <strong>⚠️ Critical Rule: Registration Must Be CONFIRMED</strong><br>
  When a club submits a registration, the status is <strong>PENDING</strong>. The club is NOT yet in the competition. Only when the League Admin clicks <strong>CONFIRM</strong> does the club officially join the division. This prevents clubs from showing up in fixtures before they're fully verified and approved.
</div>

---

### Stage 5: Fixture Generation

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">11</div>
    <div class="step-content">
      <h4>August 15: Registration Closes</h4>
      <p>Final tally:</p>
      <ul>
        <li>Premier Division: 12 teams confirmed ✅</li>
        <li>Division One: 14 teams confirmed ✅</li>
        <li>Division Two: 16 teams confirmed ✅</li>
      </ul>
      <p>Peter is ready to generate fixtures.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">12</div>
    <div class="step-content">
      <h4>Peter Generates Fixtures for All Divisions</h4>
      <p>For each division, Peter clicks <strong>"Generate Fixtures"</strong>:</p>
      
      <p><strong>Premier Division:</strong></p>
      <ul>
        <li>LigiOpen creates 132 matches using round-robin algorithm</li>
        <li>Every team plays every other team twice (home and away)</li>
        <li>Ensures balanced schedule (each team has 11 home, 11 away games)</li>
        <li>No team plays back-to-back home or away more than necessary</li>
        <li>Matches are created with status: DRAFT (not yet scheduled)</li>
      </ul>

      <p><strong>Division One:</strong> 182 matches generated</p>
      <p><strong>Division Two:</strong> 240 matches generated</p>
      
      <p><strong>Total: 554 matches created across all divisions in seconds!</strong></p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">13</div>
    <div class="step-content">
      <h4>How the Round-Robin Algorithm Works</h4>
      <p>LigiOpen uses a sophisticated algorithm to ensure fairness:</p>
      
      <p><strong>Step 1: Pair Teams for Round 1</strong></p>
      <p>For 12 teams, create 6 matches:</p>
      <ul>
        <li>Team 1 vs Team 12</li>
        <li>Team 2 vs Team 11</li>
        <li>Team 3 vs Team 10</li>
        <li>Team 4 vs Team 9</li>
        <li>Team 5 vs Team 8</li>
        <li>Team 6 vs Team 7</li>
      </ul>

      <p><strong>Step 2: Rotate for Round 2</strong></p>
      <p>Keep Team 1 fixed, rotate all other teams clockwise:</p>
      <ul>
        <li>Team 1 vs Team 11</li>
        <li>Team 12 vs Team 10</li>
        <li>Team 2 vs Team 9</li>
        <li>...and so on</li>
      </ul>

      <p><strong>Step 3: Continue for 11 Rounds</strong></p>
      <p>After 11 rounds, every team has played every other team once.</p>

      <p><strong>Step 4: Reverse for Return Leg</strong></p>
      <p>Repeat the same 11 rounds but swap home/away teams.</p>

      <p><em>Result: Perfect balance. Every team plays 22 matches (11 home, 11 away). No team is advantaged or disadvantaged.</em></p>
    </div>
  </div>
</div>

<div class="info-box">
  <strong>💡 Why Automatic Fixture Generation Is Revolutionary</strong><br><br>
  Before LigiOpen, creating a balanced fixture list for even 12 teams took DAYS of manual work with pen, paper, and Excel. You had to:<br>
  • Ensure every team plays every other team<br>
  • Balance home and away games<br>
  • Avoid scheduling conflicts<br>
  • Manually check for mistakes<br><br>
  With LigiOpen, it happens in 3 seconds with mathematical perfection. This is one of the platform's most powerful features.
</div>

---

### Stage 6: Scheduling Dates and Venues

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">14</div>
    <div class="step-content">
      <h4>Peter Assigns Match Dates</h4>
      <p>The fixtures are created, but they have no dates yet. Peter now schedules them:</p>
      <p><strong>Schedule strategy:</strong></p>
      <ul>
        <li><strong>Premier Division:</strong> Saturdays at 3:00 PM</li>
        <li><strong>Division One:</strong> Sundays at 2:00 PM</li>
        <li><strong>Division Two:</strong> Sundays at 10:00 AM</li>
      </ul>
      <p>Peter works through each division, assigning dates to all matches. He can:</p>
      <ul>
        <li>Schedule one round at a time (6 matches for Premier)</li>
        <li>Schedule multiple rounds in advance</li>
        <li>Leave some matches unscheduled (for later in the season)</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">15</div>
    <div class="step-content">
      <h4>Peter Assigns Venues</h4>
      <p>Each match needs a venue. LigiOpen has a database of all registered venues in Kisumu County:</p>
      <ul>
        <li>Moi Stadium, Kisumu (capacity: 10,000)</li>
        <li>Kisumu Sports Club Ground (capacity: 2,000)</li>
        <li>Dunga Beach Community Ground (capacity: 500)</li>
        <li>...and 15 more venues</li>
      </ul>
      <p>For home matches, Peter typically assigns the home team's registered home ground. For neutral venues (like cup finals), he can choose any venue.</p>
      <p><strong>The system checks:</strong></p>
      <ul>
        <li>✅ No two matches at the same venue on the same day</li>
        <li>✅ Venue is not blacked out on that date (due to maintenance, other events)</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">16</div>
    <div class="step-content">
      <h4>Matches Change from DRAFT to SCHEDULED</h4>
      <p>Once a match has a date, time, and venue assigned, its status changes from <strong>DRAFT</strong> to <strong>SCHEDULED</strong>. This means:</p>
      <ul>
        <li>✅ The match appears on the public fixture list</li>
        <li>✅ Teams can see when and where they're playing</li>
        <li>✅ Officials can be assigned to referee the match</li>
        <li>✅ Fans know when to show up</li>
      </ul>
    </div>
  </div>
</div>

---

### Stage 7: Season Begins!

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">17</div>
    <div class="step-content">
      <h4>September 1, 2025: Kickoff Weekend</h4>
      <p>The Kisumu County Football League 2025/26 season officially begins!</p>
      
      <p><strong>Premier Division - Round 1 (Saturday, September 1):</strong></p>
      <ul>
        <li>3:00 PM: Kisumu Hot Stars vs Lakeside Warriors (Moi Stadium)</li>
        <li>3:00 PM: Nyanza United vs Dunga Beach FC (Kisumu Sports Club)</li>
        <li>3:00 PM: Kibos FC vs Mamboleo Strikers (Kibos Ground)</li>
        <li>...6 matches total</li>
      </ul>

      <p><strong>Division One - Round 1 (Sunday, September 2):</strong></p>
      <ul>
        <li>2:00 PM: 7 matches across different venues</li>
      </ul>

      <p><strong>Division Two - Round 1 (Sunday, September 2):</strong></p>
      <ul>
        <li>10:00 AM: 8 matches across different venues</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">18</div>
    <div class="step-content">
      <h4>Peter Changes Season Status to ACTIVE</h4>
      <p>With the first matches kicking off, Peter changes the season status from <strong>UPCOMING</strong> to <strong>ACTIVE</strong>. He also marks it as the <strong>current season</strong>.</p>
      <p>This automatically unmarks the previous season (2024/25) as current, keeping the system organized.</p>
    </div>
  </div>
</div>

---

## 🌍 Multi-Sport: How This Works Beyond Football

The League → Season → Competition → Division structure works for ANY team sport with competitions and standings.

<div class="card-grid">
  <div class="card">
    <h3>🏉 Rugby: Kenya Cup</h3>
    <p><strong>League:</strong> Kenya Rugby Union<br>
    <strong>Season:</strong> 2025/26<br>
    <strong>Competition:</strong> Kenya Cup<br>
    <strong>Division:</strong> Premier Division (12 clubs)<br>
    <strong>Format:</strong> Round-robin + playoff finals</p>
  </div>

  <div class="card">
    <h3>🏀 Basketball: KBF Premier League</h3>
    <p><strong>League:</strong> Kenya Basketball Federation<br>
    <strong>Season:</strong> 2025<br>
    <strong>Competition:</strong> KBF Premier League<br>
    <strong>Divisions:</strong> Men's (14 teams), Women's (10 teams)<br>
    <strong>Format:</strong> Round-robin league</p>
  </div>

  <div class="card">
    <h3>🏐 Volleyball: National League</h3>
    <p><strong>League:</strong> Kenya Volleyball Federation<br>
    <strong>Season:</strong> 2025<br>
    <strong>Competition:</strong> National Volleyball League<br>
    <strong>Divisions:</strong> Men's, Women's, Youth<br>
    <strong>Format:</strong> Round-robin with regional groups</p>
  </div>

  <div class="card">
    <h3>🎾 Tennis: University Championships</h3>
    <p><strong>League:</strong> Kenya University Sports Association<br>
    <strong>Season:</strong> 2025/26<br>
    <strong>Competition:</strong> Tennis Championships<br>
    <strong>Division:</strong> Individual Singles, Doubles, Team Events<br>
    <strong>Format:</strong> Knockout tournament</p>
  </div>
</div>

---

## 📊 Different Competition Formats Explained

### 1. Round-Robin (League Format)

The most common format for season-long competitions.

<div class="info-box">
  <strong>How it works:</strong><br>
  Every team plays every other team at least once. Points are awarded for wins and draws. The team with the most points at the end wins the league.<br><br>
  <strong>Variations:</strong><br>
  • <strong>Single round-robin:</strong> Each team plays every other team once (22 matches for 12 teams)<br>
  • <strong>Double round-robin:</strong> Each team plays every other team twice - home and away (44 matches for 12 teams)<br><br>
  <strong>Best for:</strong> Season-long leagues where consistency over time determines the champion<br><br>
  <strong>Examples:</strong> FKF Premier League, English Premier League, La Liga, NBA regular season
</div>

<div class="scenario">
  <h3>📖 Example: Nairobi County Premier League (12 Teams, Double Round-Robin)</h3>
  
  <p><strong>Structure:</strong></p>
  <ul>
    <li>12 teams compete</li>
    <li>Each team plays every other team twice (home and away)</li>
    <li>Total matches: 12 × 11 × 2 ÷ 2 = 132 matches</li>
    <li>Each team plays 22 matches (11 home, 11 away)</li>
  </ul>

  <p><strong>Season length:</strong> 22 rounds × 1 week per round = 22 weeks (about 6 months)</p>

  <p><strong>Points system:</strong></p>
  <ul>
    <li>Win: 3 points</li>
    <li>Draw: 1 point</li>
    <li>Loss: 0 points</li>
  </ul>

  <p><strong>Champion:</strong> Team with most points at the end. If tied, use tiebreakers (goal difference, goals scored, head-to-head).</p>
</div>

---

### 2. Knockout (Cup Format)

Single-elimination tournament — lose once, you're out.

<div class="info-box">
  <strong>How it works:</strong><br>
  Teams are paired in knockout matches. Winner advances, loser is eliminated. Continue until one team remains.<br><br>
  <strong>Best for:</strong> Shorter tournaments, cup competitions, where every match is do-or-die<br><br>
  <strong>Examples:</strong> FKF Shield Cup, FA Cup (England), Champions League knockout rounds
</div>

<div class="scenario">
  <h3>📖 Example: Kisumu County Cup (16 Teams, Knockout)</h3>
  
  <p><strong>Structure:</strong></p>
  <ul>
    <li>16 teams enter</li>
    <li>Round of 16: 8 matches → 8 teams advance</li>
    <li>Quarter-finals: 4 matches → 4 teams advance</li>
    <li>Semi-finals: 2 matches → 2 teams advance</li>
    <li>Final: 1 match → 1 champion</li>
  </ul>

  <p><strong>Total matches:</strong> 15 matches (8 + 4 + 2 + 1)</p>

  <p><strong>Duration:</strong> 4 weeks (one round per week)</p>

  <p><strong>Excitement factor:</strong> HIGH! Every match is critical. No second chances.</p>
</div>

---

### 3. Group Stage + Knockout (Hybrid Format)

Combines the reliability of group stage with the drama of knockout rounds.

<div class="info-box">
  <strong>How it works:</strong><br>
  Teams are divided into groups. Within each group, teams play round-robin. Top teams from each group advance to knockout rounds.<br><br>
  <strong>Best for:</strong> Large tournaments where you want to give teams multiple chances in the group stage, then create drama in knockout rounds<br><br>
  <strong>Examples:</strong> FIFA World Cup, UEFA Champions League (group stage + knockouts), African Cup of Nations
</div>

<div class="scenario">
  <h3>📖 Example: County Inter-Division Cup (32 Teams, 8 Groups of 4 + Knockouts)</h3>
  
  <p><strong>Group Stage:</strong></p>
  <ul>
    <li>32 teams divided into 8 groups of 4</li>
    <li>Within each group: round-robin (each team plays 3 matches)</li>
    <li>Total group stage matches: 8 groups × 6 matches per group = 48 matches</li>
    <li>Top 2 from each group advance to knockout rounds (16 teams total)</li>
  </ul>

  <p><strong>Knockout Stage:</strong></p>
  <ul>
    <li>Round of 16: 8 matches → 8 teams advance</li>
    <li>Quarter-finals: 4 matches → 4 teams advance</li>
    <li>Semi-finals: 2 matches → 2 teams advance</li>
    <li>Final: 1 match → 1 champion</li>
  </ul>

  <p><strong>Total matches:</strong> 48 (group stage) + 15 (knockout) = 63 matches</p>

  <p><strong>Duration:</strong> 3 weeks (group stage) + 4 weeks (knockout) = 7 weeks</p>
</div>

---

## 🔄 Season Lifecycle: From Creation to Completion

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>UPCOMING (Planning Phase)</h4>
      <p><strong>Status:</strong> Created but not yet started</p>
      <p><strong>What happens:</strong></p>
      <ul>
        <li>League Admin creates the season</li>
        <li>Competitions and divisions are set up</li>
        <li>Clubs register and get confirmed</li>
        <li>Fixtures are generated and scheduled</li>
      </ul>
      <p><strong>Duration:</strong> Typically 2-3 months before season starts</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>ACTIVE (Competition Phase)</h4>
      <p><strong>Status:</strong> Currently running</p>
      <p><strong>What happens:</strong></p>
      <ul>
        <li>Matches are played every week</li>
        <li>Results are submitted by referees</li>
        <li>Standings update automatically after each match</li>
        <li>Players can be transferred between clubs (during transfer windows)</li>
        <li>Match disputes are handled by League Admin</li>
      </ul>
      <p><strong>Duration:</strong> Typically 6-9 months</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>COMPLETED (Historical Phase)</h4>
      <p><strong>Status:</strong> Season finished</p>
      <p><strong>What happens:</strong></p>
      <ul>
        <li>Final match has been played</li>
        <li>Champions are crowned</li>
        <li>All data becomes read-only (no more changes)</li>
        <li>Historical statistics are preserved forever</li>
        <li>Next season can be created</li>
      </ul>
      <p><strong>Cannot be changed back to ACTIVE</strong></p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4>CANCELLED (Rare)</h4>
      <p><strong>Status:</strong> Season was abandoned</p>
      <p><strong>Why this happens:</strong></p>
      <ul>
        <li>Global pandemic (like COVID-19 in 2020)</li>
        <li>Major security issues</li>
        <li>Federation disputes or governance problems</li>
        <li>Insufficient funding to continue</li>
      </ul>
      <p><strong>Data is preserved but marked as incomplete</strong></p>
    </div>
  </div>
</div>

---

## 🎯 Advanced Concepts

### Promotion and Relegation

For multi-division leagues, teams can move between divisions based on performance.

<div class="scenario">
  <h3>📊 How Promotion/Relegation Works in Nairobi County League</h3>
  
  <p>Nairobi County has three divisions: Premier (Order 1), Division One (Order 2), Division Two (Order 3).</p>

  <p><strong>End of 2024/25 Season Results:</strong></p>

  <p><strong>Premier Division (16 teams):</strong></p>
  <ul>
    <li>Position 1-14: Remain in Premier Division for 2025/26</li>
    <li>Position 15-16: <strong>RELEGATED</strong> to Division One for 2025/26</li>
  </ul>

  <p><strong>Division One (18 teams):</strong></p>
  <ul>
    <li>Position 1-2: <strong>PROMOTED</strong> to Premier Division for 2025/26</li>
    <li>Position 3-16: Remain in Division One for 2025/26</li>
    <li>Position 17-18: <strong>RELEGATED</strong> to Division Two for 2025/26</li>
  </ul>

  <p><strong>Division Two (20 teams):</strong></p>
  <ul>
    <li>Position 1-2: <strong>PROMOTED</strong> to Division One for 2025/26</li>
    <li>Position 3-20: Remain in Division Two for 2025/26</li>
  </ul>

  <p><strong>How LigiOpen handles this:</strong></p>
  <p>When setting up the 2025/26 season, the League Admin:</p>
  <ol>
    <li>Creates new divisions for the new season</li>
    <li>Reviews last season's final standings</li>
    <li>When clubs register, assigns them to the appropriate division based on their finish</li>
    <li>Clubs that were relegated must register for the lower division</li>
    <li>Clubs that were promoted register for the higher division</li>
  </ol>
</div>

<div class="warning-box">
  <strong>⚠️ Important: Promotion/Relegation is NOT Automatic</strong><br>
  LigiOpen does not automatically move teams between divisions. This is intentional — the League Admin must manually assign teams to divisions when they register for the new season. This gives flexibility for cases where:<br>
  • A relegated club appeals and is allowed to stay<br>
  • A promoted club declines to move up (financial reasons)<br>
  • New clubs enter at any division level<br>
  • Divisions are restructured (number of teams changes)
</div>

---

### Running Multiple Competitions Simultaneously

A league can run multiple competitions at the same time during one season.

<div class="scenario">
  <h3>🏆 Example: FKF Running Three Competitions in 2025/26</h3>
  
  <p><strong>League:</strong> Football Kenya Federation</p>
  <p><strong>Season:</strong> 2025/26</p>

  <p><strong>Competition 1: FKF Premier League (Main League)</strong></p>
  <ul>
    <li>Format: Double round-robin</li>
    <li>Teams: 18 clubs</li>
    <li>Duration: August 2025 to May 2026 (9 months)</li>
    <li>Matches: Weekends</li>
  </ul>

  <p><strong>Competition 2: FKF Shield Cup (Knockout Tournament)</strong></p>
  <ul>
    <li>Format: Single elimination knockout</li>
    <li>Teams: 32 clubs (from Premier + National Super League)</li>
    <li>Duration: September 2025 to March 2026 (mid-season)</li>
    <li>Matches: Midweek</li>
  </ul>

  <p><strong>Competition 3: FKF Top 8 Cup (Mini-League)</strong></p>
  <ul>
    <li>Format: Top 8 teams from Premier League at mid-season</li>
    <li>Duration: December 2025 to January 2026 (break period)</li>
    <li>Matches: Special tournament during Christmas break</li>
  </ul>

  <p><strong>Why this works:</strong></p>
  <ul>
    <li>Each competition has its own fixtures and schedule</li>
    <li>Teams can be in multiple competitions simultaneously</li>
    <li>LigiOpen prevents scheduling conflicts (same team playing twice on same day)</li>
    <li>Separate standings for each competition</li>
  </ul>
</div>

---

## 💡 Best Practices for League Administrators

<div class="tip-box">
  <strong>✅ DO:</strong><br>
  • Create the season 2-3 months before it starts<br>
  • Set clear registration deadlines and communicate them widely<br>
  • Generate fixtures only after ALL teams are confirmed<br>
  • Schedule matches with realistic gaps (avoid back-to-back matches for same team)<br>
  • Mark season as ACTIVE only when first matches kick off<br>
  • Keep historical seasons in the system (never delete)<br><br>

  <strong>❌ DON'T:</strong><br>
  • Don't generate fixtures before registration closes (you'll have to regenerate)<br>
  • Don't change competition format after fixtures are generated<br>
  • Don't remove teams from a division after fixtures exist (causes orphaned matches)<br>
  • Don't delete seasons — mark them as COMPLETED instead<br>
  • Don't have multiple seasons marked as "current" (system prevents this anyway)
</div>

---

## 🔗 Related Documentation

<div class="card-grid">
  <div class="card">
    <h3><a href="clubs-teams.html">⚽ Clubs & Teams</a></h3>
    <p>Learn how clubs register for competitions and get confirmed into divisions.</p>
    <a href="clubs-teams.html" class="btn">Read More →</a>
  </div>

  <div class="card">
    <h3><a href="fixtures-matches.html">📅 Fixtures & Matches</a></h3>
    <p>Deep dive into fixture generation, scheduling, and match management.</p>
    <a href="fixtures-matches.html" class="btn">Read More →</a>
  </div>

  <div class="card">
    <h3><a href="standings.html">📊 Standings & Rankings</a></h3>
    <p>How league tables are calculated automatically after every match.</p>
    <a href="standings.html" class="btn">Read More →</a>
  </div>

  <div class="card">
    <h3><a href="user-roles.html">👥 User Roles</a></h3>
    <p>Understand what League Admins, Club Admins, and other roles can do in the system.</p>
    <a href="user-roles.html" class="btn">Read More →</a>
  </div>
</div>

---

<div style="text-align: center; padding: 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px; margin: 3rem 0;">
  <h2 style="color: white; margin-bottom: 1rem;">🏆 Ready to Organize Your League?</h2>
  <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">
    From village tournaments to national championships,<br>
    LigiOpen makes league management simple, fair, and transparent.
  </p>
  <a href="getting-started.html" class="btn" style="background: white; color: #667eea; padding: 1rem 2rem; font-size: 1.1rem;">Start Learning →</a>
</div>
