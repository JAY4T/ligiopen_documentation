---
layout: default
title: Getting Started
---

# 🎬 Getting Started with LigiOpen

Welcome! This guide will help you understand how LigiOpen works, starting from the very basics. By the end of this page, you'll have a clear mental model of the entire system.

---

## 🧩 The Big Picture: How LigiOpen Works

Think of LigiOpen like organizing a neighborhood football league, but at any scale — from 4 teams in your village to 100 teams across multiple divisions.

### The Core Components

<div class="card-grid">
  <div class="card">
    <span class="icon">🏆</span>
    <h3>Leagues & Competitions</h3>
    <p>The top level. A league (like "Nairobi County FA") can run multiple competitions (like "Premier Division", "Division One").</p>
  </div>

  <div class="card">
    <span class="icon">⚽</span>
    <h3>Clubs & Teams</h3>
    <p>The participants. Clubs register, get verified, and join competitions. Each club has one team per competition.</p>
  </div>

  <div class="card">
    <span class="icon">👤</span>
    <h3>Players</h3>
    <p>The athletes. Players register with clubs, get approved, and become eligible to play in matches.</p>
  </div>

  <div class="card">
    <span class="icon">📅</span>
    <h3>Fixtures & Matches</h3>
    <p>The schedule. LigiOpen generates all matches automatically, ensuring every team plays every other team fairly.</p>
  </div>

  <div class="card">
    <span class="icon">📊</span>
    <h3>Standings</h3>
    <p>The league table. Automatically calculated after every match — wins, draws, losses, goals, points, and rankings.</p>
  </div>

  <div class="card">
    <span class="icon">👨‍⚖️</span>
    <h3>Officials & Venues</h3>
    <p>The infrastructure. Referees officiate matches, venues host games, and everything is tracked digitally.</p>
  </div>
</div>

---

## 📖 A Complete Season: From Start to Finish

Let's follow a complete season to understand how all the pieces fit together.

<div class="scenario">
  <h3>🏟️ The Story of Kisumu County Football League 2025/26</h3>
  
  <div class="scenario-icon">⚽</div>
  
  <p>Meet <strong class="character">Peter Odhiambo</strong>, the Secretary of Kisumu County Football Association. He's organizing the 2025/26 season with 12 teams. Here's how he does it with LigiOpen...</p>
</div>

### Stage 1: Setting Up the Season (June 2025)

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Create the Season</h4>
      <p>Peter logs into LigiOpen as a <strong>League Admin</strong> and creates a new season called "2025/26". He sets the start date as September 1st, 2025.</p>
      <p><em>Why this matters:</em> The season is the container for everything that follows. All competitions, matches, and standings will be linked to this season.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Set Up the Competition</h4>
      <p>Within the 2025/26 season, Peter creates a competition called "Kisumu County Premier League". He configures it as a <strong>round-robin league</strong> where every team plays every other team twice (home and away).</p>
      <p><em>Competition details:</em></p>
      <ul>
        <li><strong>Format:</strong> Round-robin (league)</li>
        <li><strong>Teams:</strong> 12 teams</li>
        <li><strong>Total matches:</strong> 132 (12 teams × 11 opponents × 2 legs)</li>
        <li><strong>Points system:</strong> 3 points for a win, 1 for a draw, 0 for a loss</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Create Divisions (if needed)</h4>
      <p>Since Peter has 12 teams all in one tier, he creates a single division called "Premier Division" under the competition.</p>
      <p><em>Note:</em> If he had more teams, he could create "Division One", "Division Two", etc. Each division would have its own standings.</p>
    </div>
  </div>
</div>

<div class="info-box">
  <strong>💡 Quick Concept Check:</strong><br>
  <strong>Season</strong> → <strong>Competition</strong> → <strong>Division</strong><br><br>
  Think of it like: Year → Tournament → Group<br>
  - <strong>Season:</strong> The time period (e.g., "2025/26")<br>
  - <strong>Competition:</strong> The tournament being run (e.g., "Premier League")<br>
  - <strong>Division:</strong> The specific group of teams competing for the same trophy (e.g., "Premier Division")
</div>

---

### Stage 2: Team Registration (July - August 2025)

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4>Clubs Submit Registration Requests</h4>
      <p>12 clubs from around Kisumu County want to participate:</p>
      <ul style="columns: 2;">
        <li>Kisumu Hot Stars FC</li>
        <li>Lakeside Warriors</li>
        <li>Nyanza United</li>
        <li>Dunga Beach FC</li>
        <li>Kibos FC</li>
        <li>Mamboleo Strikers</li>
        <li>Kondele FC</li>
        <li>Milimani United</li>
        <li>Manyatta FC</li>
        <li>Tom Mboya FC</li>
        <li>Ahero FC</li>
        <li>Muhoroni Youth FC</li>
      </ul>
      <p>Each club's administrator logs in and submits a registration request with:</p>
      <ul>
        <li>Club name and logo</li>
        <li>Official documents (registration certificate)</li>
        <li>Contact information</li>
        <li>Home venue preference</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">5</div>
    <div class="step-content">
      <h4>Peter Reviews and Approves Registrations</h4>
      <p>Peter receives 12 registration requests in his dashboard. He reviews each one:</p>
      <ul>
        <li>✅ Verifies the club's documents are valid</li>
        <li>✅ Confirms they've paid registration fees (tracked outside LigiOpen)</li>
        <li>✅ Ensures no duplicate club names</li>
        <li>✅ Clicks "CONFIRM" on each registration</li>
      </ul>
      <p><em>What happens when Peter clicks CONFIRM:</em></p>
      <ul>
        <li>The club is officially added to the division</li>
        <li>A standings row is created for the club (with all zeros)</li>
        <li>The club can now register players</li>
      </ul>
    </div>
  </div>
</div>

<div class="tip-box">
  <strong>🎯 Real Kenyan Context:</strong><br>
  Registration periods are crucial in Kenyan football. Most county leagues run registration in June-August for seasons starting in September. LigiOpen's digital registration system replaces the old method of collecting paper forms, making verification faster and preventing last-minute disputes about who registered on time.
</div>

---

### Stage 3: Player Registration (August 2025)

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">6</div>
    <div class="step-content">
      <h4>Club Admins Register Their Players</h4>
      <p>Now that clubs are confirmed, each club's administrator can register players. Let's follow <strong class="character">Mary Akinyi</strong>, the admin of <strong>Kisumu Hot Stars FC</strong>.</p>
      <p>Mary registers 25 players for her squad:</p>
      <ul>
        <li>Player names and photos</li>
        <li>National ID numbers (for age verification)</li>
        <li>Positions (goalkeeper, defender, midfielder, forward)</li>
        <li>Jersey numbers</li>
      </ul>
      <p><em>Registration rules:</em></p>
      <ul>
        <li>Maximum 30 players per squad</li>
        <li>Once registered, players are "locked" to that club for the season (unless transferred)</li>
        <li>Players must be approved by league admin before they're eligible to play</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">7</div>
    <div class="step-content">
      <h4>Peter Approves Players</h4>
      <p>Peter reviews player registrations from all 12 clubs. He checks:</p>
      <ul>
        <li>✅ No player is registered with multiple clubs</li>
        <li>✅ Age eligibility (using ID numbers)</li>
        <li>✅ No banned players trying to sneak in</li>
      </ul>
      <p>Once approved, players are eligible to play in matches.</p>
    </div>
  </div>
</div>

<div class="warning-box">
  <strong>⚠️ Important Rule:</strong> Player Eligibility<br>
  A player can only be registered with ONE club per season in a given league. This prevents clubs from "borrowing" players from other teams. If a player wants to switch clubs mid-season, a formal transfer request must be approved — just like in professional football.
</div>

---

### Stage 4: Fixture Generation (Late August 2025)

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">8</div>
    <div class="step-content">
      <h4>LigiOpen Generates All Fixtures Automatically</h4>
      <p>With all 12 teams confirmed, Peter clicks <strong>"Generate Fixtures"</strong>. In seconds, LigiOpen creates the complete match schedule:</p>
      <ul>
        <li><strong>132 matches total</strong> (12 teams × 11 opponents × 2 legs)</li>
        <li><strong>22 match rounds</strong> (each team plays once per round)</li>
        <li><strong>Home and away balance</strong> (every team gets 11 home games, 11 away games)</li>
        <li><strong>No impossible schedules</strong> (teams don't play back-to-back on the same day)</li>
      </ul>
      <p><em>How it works:</em></p>
      <p>LigiOpen uses a <strong>round-robin algorithm</strong> that ensures fairness:</p>
      <ol>
        <li>Round 1: Kisumu Hot Stars vs Lakeside Warriors, Nyanza United vs Dunga Beach FC, etc.</li>
        <li>Round 2: Different matchups, rotating opponents</li>
        <li>...continues for 22 rounds</li>
        <li>Then repeats with home/away reversed (return leg)</li>
      </ol>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">9</div>
    <div class="step-content">
      <h4>Peter Assigns Dates and Venues</h4>
      <p>The fixtures are created, but they need dates and venues. Peter goes through and schedules:</p>
      <ul>
        <li><strong>Match dates:</strong> Sundays at 3:00 PM (typical for grassroots football)</li>
        <li><strong>Venues:</strong> Each team's home ground (already registered in the system)</li>
        <li><strong>Officials:</strong> Assigns referees to each match (more on this later)</li>
      </ul>
      <p>Peter can schedule all matches at once or do it round by round. The system is flexible.</p>
    </div>
  </div>
</div>

<div class="info-box">
  <strong>💡 Why Automatic Fixture Generation Matters</strong><br>
  Before LigiOpen, creating a balanced fixture list for 12 teams was a nightmare. You'd spend days with pen and paper, trying to ensure fairness, avoiding conflicts, and making sure every team played home and away. With LigiOpen, it happens in 3 seconds, and it's mathematically perfect every time.
</div>

---

### Stage 5: The Season Begins (September 2025)

<div class="scenario">
  <h3>⚽ Match Day: Kisumu Hot Stars vs Lakeside Warriors</h3>
  
  <p>It's Sunday, September 7th, 2025. The opening match of the season: <strong>Kisumu Hot Stars vs Lakeside Warriors</strong> at Kisumu Hot Stars' home ground in Manyatta.</p>
</div>

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">10</div>
    <div class="step-content">
      <h4>Match Preparation</h4>
      <p><strong class="character">James Otieno</strong>, the assigned referee, arrives at the venue. He has the match details on his phone via LigiOpen:</p>
      <ul>
        <li>Teams playing</li>
        <li>Registered players (so he can verify IDs)</li>
        <li>Venue information</li>
        <li>Match officials (assistant referees, 4th official)</li>
      </ul>
      <p>Both teams submit their starting lineups to James before kickoff.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">11</div>
    <div class="step-content">
      <h4>The Match is Played</h4>
      <p>Kickoff! It's an exciting match. Final score: <strong>Kisumu Hot Stars 2 - 1 Lakeside Warriors</strong></p>
      <p>During the match:</p>
      <ul>
        <li>⚽ Goals: Brian Ouma (Hot Stars, 23'), Victor Wanjala (Warriors, 45'), Dennis Otieno (Hot Stars, 78')</li>
        <li>🟨 Yellow cards: 2 players cautioned for rough play</li>
        <li>🔴 Red cards: None</li>
        <li>🔄 Substitutions: Both teams make their allowed substitutions</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">12</div>
    <div class="step-content">
      <h4>Referee Submits the Result</h4>
      <p>After the match, James logs into LigiOpen on his phone and submits:</p>
      <ul>
        <li><strong>Final score:</strong> 2-1</li>
        <li><strong>Goal scorers:</strong> Brian Ouma, Dennis Otieno (Hot Stars), Victor Wanjala (Warriors)</li>
        <li><strong>Cards:</strong> Yellow cards issued</li>
        <li><strong>Match report:</strong> Brief notes about the game</li>
      </ul>
      <p>He clicks <strong>"Submit Result"</strong>.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">13</div>
    <div class="step-content">
      <h4>Standings Update Automatically</h4>
      <p><em>The magic happens here.</em> As soon as James submits the result:</p>
      <ul>
        <li>✅ Kisumu Hot Stars' record updates: <strong>Played: 1, Won: 1, Points: 3, Goals For: 2, Goals Against: 1</strong></li>
        <li>❌ Lakeside Warriors' record updates: <strong>Played: 1, Lost: 1, Points: 0, Goals For: 1, Goals Against: 2</strong></li>
        <li>📊 The league table recalculates automatically</li>
        <li>📱 Both clubs receive notifications of the result</li>
      </ul>
      <p><strong>Current Standings (after match 1):</strong></p>
      <table style="font-size: 0.9rem;">
        <thead>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: #d4edda;">
            <td>1</td>
            <td>Kisumu Hot Stars</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>2</td>
            <td>1</td>
            <td>+1</td>
            <td><strong>3</strong></td>
          </tr>
          <tr>
            <td>2-11</td>
            <td><em>(Other teams haven't played yet)</em></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr style="background: #f8d7da;">
            <td>12</td>
            <td>Lakeside Warriors</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>2</td>
            <td>-1</td>
            <td><strong>0</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<div class="tip-box">
  <strong>🎯 Why This Is Revolutionary for Kenyan Football</strong><br>
  In traditional setups, match results would be:<br>
  1. Written on paper by the referee<br>
  2. Sent via WhatsApp to the league secretary<br>
  3. Manually entered into an Excel spreadsheet<br>
  4. Standings calculated by hand (with frequent errors)<br>
  5. Posted days later on a notice board or Facebook<br><br>
  
  With LigiOpen:<br>
  ✅ Results submitted instantly from the field<br>
  ✅ Standings update automatically in real-time<br>
  ✅ Everyone sees the same information immediately<br>
  ✅ Zero calculation errors<br>
  ✅ Complete transparency
</div>

---

### Stage 6: The Season Continues (September - December 2025)

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">14</div>
    <div class="step-content">
      <h4>More Matches, More Drama</h4>
      <p>The season continues over the next several months. Every Sunday, 6 matches are played (12 teams = 6 matches per round). After each match:</p>
      <ul>
        <li>Referee submits result</li>
        <li>Standings update automatically</li>
        <li>Fans check the table on their phones</li>
      </ul>
      <p>By December, we're at the halfway point (Round 11 of 22). <strong>The standings are heating up:</strong></p>
      <table style="font-size: 0.85rem;">
        <thead>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: #d4edda;">
            <td>1</td>
            <td>Dunga Beach FC</td>
            <td>11</td>
            <td>8</td>
            <td>2</td>
            <td>1</td>
            <td><strong>26</strong></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Kisumu Hot Stars</td>
            <td>11</td>
            <td>7</td>
            <td>3</td>
            <td>1</td>
            <td><strong>24</strong></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Lakeside Warriors</td>
            <td>11</td>
            <td>6</td>
            <td>4</td>
            <td>1</td>
            <td><strong>22</strong></td>
          </tr>
          <tr>
            <td>...</td>
            <td colspan="6"><em>(Teams 4-9)</em></td>
          </tr>
          <tr style="background: #f8d7da;">
            <td>12</td>
            <td>Muhoroni Youth FC</td>
            <td>11</td>
            <td>1</td>
            <td>2</td>
            <td>8</td>
            <td><strong>5</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">15</div>
    <div class="step-content">
      <h4>Handling Special Situations</h4>
      <p>Not everything goes smoothly. During the season, Peter has to handle:</p>
      <ul>
        <li><strong>⏱️ Postponed matches:</strong> Heavy rains flood a pitch. Peter reschedules the match to the following weekend.</li>
        <li><strong>❌ Disputed results:</strong> A club claims the referee made errors. Peter reviews the dispute, investigates, and either confirms or corrects the result.</li>
        <li><strong>🔄 Player transfers:</strong> A star player wants to move from one club to another mid-season. Peter approves the transfer after ensuring proper procedures are followed.</li>
        <li><strong>🚫 Disciplinary actions:</strong> A player gets a red card and receives an automatic 1-match suspension. The system prevents that player from being selected for the next match.</li>
      </ul>
      <p>LigiOpen handles all of these scenarios with built-in workflows.</p>
    </div>
  </div>
</div>

---

### Stage 7: Season Climax (March 2026)

<div class="scenario">
  <h3>🏆 The Final Round: Championship Decided</h3>
  
  <p>It's March 30th, 2026. The final round of matches. Three teams are in contention for the title:</p>
  <ul>
    <li><strong>Dunga Beach FC:</strong> 57 points (leading by 2 points)</li>
    <li><strong>Kisumu Hot Stars:</strong> 55 points</li>
    <li><strong>Lakeside Warriors:</strong> 54 points</li>
  </ul>
  
  <p>All three teams play their final matches simultaneously. The tension is incredible!</p>
</div>

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">16</div>
    <div class="step-content">
      <h4>Final Matches Played</h4>
      <p>All 6 matches of Round 22 are played at 3:00 PM on the same day:</p>
      <ul>
        <li><strong>Dunga Beach FC 1-1 Kondele FC</strong> (draw)</li>
        <li><strong>Kisumu Hot Stars 3-0 Muhoroni Youth FC</strong> (win!)</li>
        <li><strong>Lakeside Warriors 2-2 Mamboleo Strikers</strong> (draw)</li>
        <li><em>(Other 3 matches)</em></li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">17</div>
    <div class="step-content">
      <h4>Referees Submit Results</h4>
      <p>Within minutes of full-time, all 6 referees submit their match results via LigiOpen.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">18</div>
    <div class="step-content">
      <h4>The Champion is Crowned</h4>
      <p><strong>Final Standings (after all 132 matches):</strong></p>
      <table style="font-size: 0.85rem;">
        <thead>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: #ffd700;">
            <td>🏆 1</td>
            <td><strong>Kisumu Hot Stars FC</strong></td>
            <td>22</td>
            <td>17</td>
            <td>4</td>
            <td>1</td>
            <td>48</td>
            <td>15</td>
            <td>+33</td>
            <td><strong>58</strong></td>
          </tr>
          <tr style="background: #d4edda;">
            <td>2</td>
            <td>Dunga Beach FC</td>
            <td>22</td>
            <td>17</td>
            <td>4</td>
            <td>1</td>
            <td>45</td>
            <td>12</td>
            <td>+33</td>
            <td><strong>58</strong></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Lakeside Warriors</td>
            <td>22</td>
            <td>16</td>
            <td>5</td>
            <td>1</td>
            <td>44</td>
            <td>14</td>
            <td>+30</td>
            <td><strong>53</strong></td>
          </tr>
          <tr>
            <td>...</td>
            <td colspan="9"><em>(Teams 4-12)</em></td>
          </tr>
        </tbody>
      </table>
      
      <p><strong>🎉 Kisumu Hot Stars FC are champions!</strong> Both Hot Stars and Dunga Beach finished on 58 points, but Hot Stars win on goal difference (48-15 vs 45-12).</p>
      <p>The tiebreaker rules worked automatically — no manual intervention needed.</p>
    </div>
  </div>
</div>

<div class="tip-box">
  <strong>🎯 The Power of Automated Tiebreakers</strong><br>
  LigiOpen's standings engine applies tiebreaker rules in this order:<br>
  1. <strong>Points</strong> (most important)<br>
  2. <strong>Goal Difference</strong> (if points are tied)<br>
  3. <strong>Goals Scored</strong> (if goal difference is tied)<br><br>
  
  In this case, both teams had 58 points and +33 goal difference, so it came down to goals scored. Hot Stars (48 goals) beat Dunga Beach (45 goals). All calculated instantly, with full transparency.
</div>

---

## 🎓 Key Concepts You've Learned

After following Peter's journey through a complete season, you now understand:

<div class="card-grid">
  <div class="card">
    <h3>1. Hierarchy</h3>
    <p><strong>Season → Competition → Division → Teams</strong></p>
    <p>Everything is organized in a clear hierarchy. Seasons contain competitions, competitions contain divisions, divisions contain teams.</p>
  </div>

  <div class="card">
    <h3>2. Registration Flow</h3>
    <p><strong>Request → Review → Confirm</strong></p>
    <p>Clubs and players don't just "join" — they submit requests that league admins review and approve. This ensures quality control.</p>
  </div>

  <div class="card">
    <h3>3. Automatic Fixtures</h3>
    <p><strong>Fair, balanced, instant</strong></p>
    <p>Round-robin algorithms ensure every team plays every other team fairly. What used to take days now takes seconds.</p>
  </div>

  <div class="card">
    <h3>4. Real-Time Standings</h3>
    <p><strong>Submit result → Update instantly</strong></p>
    <p>No manual calculations. Referees submit scores, standings update automatically, everyone sees the same data immediately.</p>
  </div>

  <div class="card">
    <h3>5. Role-Based Access</h3>
    <p><strong>Right person, right permissions</strong></p>
    <p>League admins manage the season, club admins manage their teams, referees submit results. Everyone has exactly the access they need.</p>
  </div>

  <div class="card">
    <h3>6. Transparency</h3>
    <p><strong>One source of truth</strong></p>
    <p>Everyone — admins, clubs, players, fans — sees the same information. No hidden changes, no disputes about "who said what."</p>
  </div>
</div>

---

## 🚀 What's Next?

Now that you understand the big picture, you're ready to dive deeper into specific areas:

<div class="card-grid">
  <div class="card">
    <h3><a href="user-roles.html">👥 User Roles</a></h3>
    <p>Learn about Super Admins, League Admins, Club Admins, and what each role can do.</p>
    <a href="user-roles.html" class="btn">Learn About Roles →</a>
  </div>

  <div class="card">
    <h3><a href="leagues-competitions.html">🏆 Leagues & Competitions</a></h3>
    <p>Deep dive into how leagues are structured, seasons work, and competition formats are configured.</p>
    <a href="leagues-competitions.html" class="btn">Explore Leagues →</a>
  </div>

  <div class="card">
    <h3><a href="fixtures-matches.html">📅 Fixtures & Matches</a></h3>
    <p>Understand fixture generation algorithms, match scheduling, and result submission workflows.</p>
    <a href="fixtures-matches.html" class="btn">See Fixtures →</a>
  </div>

  <div class="card">
    <h3><a href="standings.html">📊 Standings</a></h3>
    <p>Learn how league tables are calculated, tiebreaker rules work, and rankings are determined.</p>
    <a href="standings.html" class="btn">Understand Standings →</a>
  </div>
</div>

---

<div class="kenyan-accent" style="text-align: center; padding: 2rem;">
  <p style="font-size: 1.3rem; color: #555; font-style: italic;">
    "The beautiful game deserves beautiful management."
  </p>
  <p style="margin-top: 1rem; color: #2C5F2D; font-weight: 600;">
    Welcome to LigiOpen 🇰🇪⚽
  </p>
</div>
