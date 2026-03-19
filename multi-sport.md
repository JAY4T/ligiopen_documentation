---
layout: default
title: Multi-Sport Support
---

# 🎾 Multi-Sport Support: Beyond Football

While LigiOpen was built with football in mind, its architecture supports **any sport with teams, competitions, and standings**. From rugby to basketball, volleyball to tennis, handball to cricket — LigiOpen adapts to your sport's unique requirements.

<div class="hero" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);">
  <h2 style="color: var(--primary-color);">One Platform, Every Sport</h2>
  <p style="font-size: 1.2rem;">The same powerful features that manage the Kenyan Premier League can handle the Kenya Cup, KBF Premier League, or your university volleyball tournament.</p>
</div>

---

## 🏉 How LigiOpen Adapts to Different Sports

The core concepts remain the same across all sports:
- **Teams** register for **competitions**
- **Fixtures** are generated or scheduled
- **Matches** are played and results are submitted
- **Standings** are calculated based on results
- **Championships** are crowned

What changes are the sport-specific details: scoring rules, team sizes, position names, and competition formats.

---

## ⚽ Football (Soccer) — The Foundation

Let's start with football, since it's LigiOpen's native sport:

<div class="card">
  <h3>Football Configuration</h3>
  <ul>
    <li><strong>Team Size:</strong> 11 players on field, squads of up to 30</li>
    <li><strong>Scoring:</strong> Goals (1 point per goal scored)</li>
    <li><strong>Match Result:</strong> Win (3 points), Draw (1 point), Loss (0 points)</li>
    <li><strong>Player Positions:</strong> Goalkeeper, Defender, Midfielder, Forward</li>
    <li><strong>Common Formats:</strong> Round-robin leagues, knockout cups, group stage + knockout</li>
    <li><strong>Match Duration:</strong> 90 minutes (2 x 45-minute halves)</li>
    <li><strong>Tiebreakers:</strong> Points → Goal Difference → Goals Scored</li>
  </ul>
</div>

<div class="scenario">
  <h3>🏆 Example: FKF Premier League</h3>
  <p><strong>18 teams</strong> compete in a <strong>double round-robin</strong> format (home and away). Total of <strong>306 matches</strong> over the season. Winner determined by points accumulated. Top team wins championship, bottom teams may face relegation.</p>
</div>

---

## 🏉 Rugby — Physicality Meets Strategy

Rugby has unique characteristics but fits perfectly into LigiOpen's structure.

<div class="card">
  <h3>Rugby Configuration</h3>
  <ul>
    <li><strong>Team Size:</strong> 15 players (Rugby Union) or 7 players (Rugby Sevens), squads of 23+</li>
    <li><strong>Scoring:</strong> 
      - Try: 5 points
      - Conversion: 2 points
      - Penalty Kick: 3 points
      - Drop Goal: 3 points
    </li>
    <li><strong>Match Result:</strong> Win (4 points), Draw (2 points), Loss (0 points), Bonus Points available</li>
    <li><strong>Player Positions:</strong> Forwards (Props, Hooker, Locks, Flankers, Number 8), Backs (Scrum-half, Fly-half, Centers, Wings, Fullback)</li>
    <li><strong>Common Formats:</strong> League tables with bonus points, knockout championships</li>
    <li><strong>Match Duration:</strong> 80 minutes (2 x 40-minute halves)</li>
    <li><strong>Tiebreakers:</strong> Points → Head-to-head → Points Difference → Tries Scored</li>
  </ul>
</div>

### Rugby-Specific Features in LigiOpen

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Bonus Points System</h4>
      <p>Rugby leagues often award bonus points:</p>
      <ul>
        <li><strong>Try Bonus:</strong> 1 point for scoring 4+ tries (even if you lose)</li>
        <li><strong>Losing Bonus:</strong> 1 point for losing by 7 points or less</li>
      </ul>
      <p><em>LigiOpen configuration:</em> League admins can enable bonus points and set the criteria. The standings engine automatically applies them when referees submit detailed match reports.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Detailed Score Breakdown</h4>
      <p>Unlike football's simple goal count, rugby matches have multiple scoring events. Referees can record:</p>
      <ul>
        <li>Number of tries, conversions, penalties, drop goals</li>
        <li>Final score calculated automatically (e.g., 3 tries + 2 conversions + 1 penalty = 19 points)</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Player Positions Adapted</h4>
      <p>Instead of GK/DEF/MID/FWD, rugby positions are registered as:</p>
      <ul>
        <li>Prop, Hooker, Lock, Flanker, Number 8 (forwards)</li>
        <li>Scrum-half, Fly-half, Center, Wing, Fullback (backs)</li>
      </ul>
    </div>
  </div>
</div>

<div class="scenario">
  <h3>🏉 Example: Kenya Cup Rugby</h3>
  <p><strong class="character">Daniel Ochieng</strong> is the League Admin for Kenya Rugby Union. He's organizing the <strong>Kenya Cup 2025/26</strong> season with 12 teams.</p>
  
  <p><strong>Configuration:</strong></p>
  <ul>
    <li><strong>Competition Type:</strong> Round-robin league with bonus points</li>
    <li><strong>Scoring System:</strong> 4 points for win, 2 for draw, 0 for loss, +1 for try bonus, +1 for losing bonus</li>
    <li><strong>Teams:</strong> KCB Rugby, Kabras Sugar RFC, Strathmore Leos, Menengai Oilers, Kenya Harlequin FC, etc.</li>
    <li><strong>Season Format:</strong> Single round-robin (11 matches per team), then top 4 playoffs</li>
  </ul>

  <p><strong>How it works in LigiOpen:</strong></p>
  <ol>
    <li>Daniel creates the season and competition, setting rugby-specific rules</li>
    <li>Clubs register (same process as football)</li>
    <li>Fixtures generated automatically (11 rounds of 6 matches)</li>
    <li>Each Saturday, matches are played at various venues across Kenya</li>
    <li>Referees submit scores: "KCB 32 - 21 Strathmore" with breakdown (5 tries, 3 conversions, 1 penalty for KCB)</li>
    <li>System awards: KCB 4 points (win), Strathmore 1 point (losing bonus - lost by 11, not 7... no bonus), KCB +1 (try bonus for 5 tries)</li>
    <li>Standings update with bonus points included</li>
  </ol>

  <p><strong>Final Standings (after 11 rounds):</strong></p>
  <table style="font-size: 0.9rem;">
    <thead>
      <tr>
        <th>Pos</th>
        <th>Team</th>
        <th>P</th>
        <th>W</th>
        <th>D</th>
        <th>L</th>
        <th>Pts</th>
        <th>BP</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: #d4edda;">
        <td>1</td>
        <td>KCB Rugby</td>
        <td>11</td>
        <td>9</td>
        <td>0</td>
        <td>2</td>
        <td>36</td>
        <td>7</td>
        <td><strong>43</strong></td>
      </tr>
      <tr style="background: #d4edda;">
        <td>2</td>
        <td>Kabras Sugar RFC</td>
        <td>11</td>
        <td>8</td>
        <td>1</td>
        <td>2</td>
        <td>34</td>
        <td>6</td>
        <td><strong>40</strong></td>
      </tr>
      <tr style="background: #d4edda;">
        <td>3</td>
        <td>Strathmore Leos</td>
        <td>11</td>
        <td>8</td>
        <td>0</td>
        <td>3</td>
        <td>32</td>
        <td>5</td>
        <td><strong>37</strong></td>
      </tr>
      <tr style="background: #d4edda;">
        <td>4</td>
        <td>Menengai Oilers</td>
        <td>11</td>
        <td>7</td>
        <td>0</td>
        <td>4</td>
        <td>28</td>
        <td>4</td>
        <td><strong>32</strong></td>
      </tr>
      <tr>
        <td>...</td>
        <td colspan="8"><em>(Teams 5-12)</em></td>
      </tr>
    </tbody>
  </table>
  
  <p>Top 4 teams advance to semi-finals (knockout format). LigiOpen handles both the league phase and playoff phase seamlessly.</p>
</div>

---

## 🏀 Basketball — Fast-Paced Action

Basketball leagues work beautifully in LigiOpen with some sport-specific adjustments.

<div class="card">
  <h3>Basketball Configuration</h3>
  <ul>
    <li><strong>Team Size:</strong> 5 players on court, squads of 12-15</li>
    <li><strong>Scoring:</strong> Points scored (field goals, 3-pointers, free throws)</li>
    <li><strong>Match Result:</strong> Win (2 points), Loss (0 points) — no draws in basketball</li>
    <li><strong>Player Positions:</strong> Point Guard, Shooting Guard, Small Forward, Power Forward, Center</li>
    <li><strong>Common Formats:</strong> Conference system, round-robin, playoffs</li>
    <li><strong>Match Duration:</strong> 40 minutes (4 x 10-minute quarters) or 48 minutes (4 x 12 for professional)</li>
    <li><strong>Tiebreakers:</strong> Points → Head-to-head → Points Scored</li>
  </ul>
</div>

<div class="scenario">
  <h3>🏀 Example: Kenya Basketball Federation Premier League</h3>
  <p><strong class="character">Grace Njeri</strong> manages the <strong>KBF Premier League</strong> using LigiOpen. She's organizing a season with 12 teams split into 2 conferences (Nairobi Conference, Rift Valley Conference).</p>

  <p><strong>Setup in LigiOpen:</strong></p>
  <ul>
    <li><strong>Season:</strong> 2025/26</li>
    <li><strong>Competition:</strong> KBF Premier League</li>
    <li><strong>Divisions:</strong> 2 divisions (Nairobi Conference = Division 1, Rift Valley Conference = Division 2)</li>
    <li><strong>Format:</strong> 
      - Phase 1: Teams play within conference (double round-robin)
      - Phase 2: Top 4 from each conference cross-play
      - Phase 3: Top 4 overall to playoffs (knockout)
    </li>
  </ul>

  <p><strong>Key Differences from Football:</strong></p>
  <ul>
    <li><strong>No Draws:</strong> Every match has a winner (overtime if tied at end of regulation)</li>
    <li><strong>High Scores:</strong> Final scores like "87-72" instead of "2-1"</li>
    <li><strong>Conference System:</strong> Multiple divisions with separate standings, then merge for playoffs</li>
  </ul>

  <p>LigiOpen handles this by:</p>
  <ol>
    <li>Creating 2 divisions (conferences) under one competition</li>
    <li>Each division has its own standings table</li>
    <li>Generating fixtures within conference first, then cross-conference later</li>
    <li>Tracking points scored for tiebreaker purposes (not just wins/losses)</li>
  </ol>
</div>

---

## 🏐 Volleyball — Sets and Serves

Volleyball has a unique scoring system (sets and points) but still fits LigiOpen's structure.

<div class="card">
  <h3>Volleyball Configuration</h3>
  <ul>
    <li><strong>Team Size:</strong> 6 players on court, squads of 12-15</li>
    <li><strong>Scoring:</strong> Best of 5 sets, first to 25 points (win by 2)</li>
    <li><strong>Match Result:</strong> 
      - Win 3-0 or 3-1: 3 points
      - Win 3-2: 2 points
      - Loss 2-3: 1 point
      - Loss 0-3 or 1-3: 0 points
    </li>
    <li><strong>Player Positions:</strong> Setter, Outside Hitter, Middle Blocker, Opposite, Libero</li>
    <li><strong>Common Formats:</strong> Round-robin leagues, tournament pools</li>
    <li><strong>Match Duration:</strong> Variable (usually 60-90 minutes)</li>
    <li><strong>Tiebreakers:</strong> Points → Set Ratio → Points Ratio</li>
  </ul>
</div>

<div class="scenario">
  <h3>🏐 Example: Kenya Volleyball Federation National League</h3>
  <p>Volleyball uses a sophisticated points system where the closeness of the match matters:</p>
  
  <ul>
    <li><strong>Dominant Win (3-0 or 3-1):</strong> 3 points to winner, 0 to loser</li>
    <li><strong>Close Win (3-2):</strong> 2 points to winner, 1 to loser (recognizing competitive match)</li>
  </ul>

  <p>When a referee submits a volleyball result, they enter: <strong>"Kenya Prisons 3-1 Kenya Pipeline"</strong> (sets won).</p>
  <p>LigiOpen automatically awards: Kenya Prisons 3 points, Kenya Pipeline 0 points.</p>
  <p>If it had been 3-2, it would be: Winner 2 points, Loser 1 point.</p>
</div>

---

## 🎾 Tennis — Individual and Team Formats

Tennis is unique because it can be both individual (player vs player) and team-based (Davis Cup style).

<div class="card">
  <h3>Tennis Configuration</h3>
  <ul>
    <li><strong>Team Size:</strong> Variable (individual singles, doubles pairs, or team competition)</li>
    <li><strong>Scoring:</strong> Sets and games (6 games per set, best of 3 or 5 sets)</li>
    <li><strong>Match Result:</strong> Win/Loss (no draws)</li>
    <li><strong>Competition Types:</strong>
      - Individual tournament (bracket/knockout)
      - Team league (multiple singles + doubles matches per tie)
      - Round-robin groups leading to knockout
    </li>
    <li><strong>Common Formats:</strong> Single-elimination brackets, round-robin groups</li>
  </ul>
</div>

<div class="scenario">
  <h3>🎾 Example: Kenya National Tennis League (Team Format)</h3>
  <p><strong>Format:</strong> Each "match" is actually a tie between 2 clubs, consisting of:</p>
  <ul>
    <li>4 singles matches</li>
    <li>2 doubles matches</li>
    <li>Total: 6 rubbers per tie</li>
  </ul>

  <p><strong>In LigiOpen:</strong></p>
  <ul>
    <li>The "match" is the overall tie between two clubs</li>
    <li>Result: "Nairobi Club 4-2 Karen Club" (4 rubbers won to 2)</li>
    <li>League standings calculated based on ties won, not individual rubbers</li>
  </ul>

  <p><strong>Alternative: Individual Tournament</strong></p>
  <p>For individual tournaments (like Kenya Open), LigiOpen can run knockout brackets:</p>
  <ul>
    <li>64 players enter (Round of 64)</li>
    <li>Single-elimination format</li>
    <li>Winners advance, losers eliminated</li>
    <li>Final: 2 players remain</li>
  </ul>
  <p>LigiOpen's knockout tournament feature handles bracket generation and progression automatically.</p>
</div>

---

## 🤾 Handball — Fast and Furious

Handball is popular in Kenyan schools and clubs, combining elements of football and basketball.

<div class="card">
  <h3>Handball Configuration</h3>
  <ul>
    <li><strong>Team Size:</strong> 7 players on court (6 + goalkeeper), squads of 14-16</li>
    <li><strong>Scoring:</strong> Goals (1 point per goal, like football)</li>
    <li><strong>Match Result:</strong> Win (2 points), Draw (1 point), Loss (0 points)</li>
    <li><strong>Player Positions:</strong> Goalkeeper, Left/Right Wing, Left/Right Back, Center Back, Pivot</li>
    <li><strong>Common Formats:</strong> League tables, group stage + knockout</li>
    <li><strong>Match Duration:</strong> 60 minutes (2 x 30-minute halves)</li>
    <li><strong>Tiebreakers:</strong> Points → Goal Difference → Goals Scored</li>
  </ul>
</div>

<div class="scenario">
  <h3>🤾 Example: Kenya Handball Federation Schools Championship</h3>
  <p>A national schools handball tournament with <strong>32 teams</strong> split into <strong>8 groups of 4</strong>.</p>

  <p><strong>Competition Structure in LigiOpen:</strong></p>
  <ol>
    <li><strong>Phase 1: Group Stage</strong>
      - 8 groups (created as 8 divisions in LigiOpen)
      - Round-robin within each group (each team plays 3 matches)
      - Top 2 from each group advance (16 teams total)
    </li>
    <li><strong>Phase 2: Knockout</strong>
      - Round of 16: 16 teams → 8 teams
      - Quarter-finals: 8 teams → 4 teams
      - Semi-finals: 4 teams → 2 teams
      - Final: 2 teams → 1 champion
    </li>
  </ol>

  <p>LigiOpen handles both phases seamlessly. The group stage uses the league standings system, while the knockout phase uses the tournament bracket system.</p>
</div>

---

## ⚾ Cricket — Overs and Innings

Cricket is complex with different formats, but LigiOpen adapts well.

<div class="card">
  <h3>Cricket Configuration</h3>
  <ul>
    <li><strong>Team Size:</strong> 11 players, squads of 15-17</li>
    <li><strong>Scoring:</strong> Runs scored over overs (complex scoring with wickets, extras, etc.)</li>
    <li><strong>Match Result:</strong> Win/Loss/Draw/Tie (yes, both draw and tie exist in cricket)</li>
    <li><strong>Player Positions:</strong> Batsmen, Bowlers, All-rounders, Wicket-keeper</li>
    <li><strong>Common Formats:</strong>
      - Test Cricket: 4-5 days, 2 innings per team
      - ODI (One-Day International): 50 overs per side
      - T20: 20 overs per side (most popular in Kenya)
    </li>
    <li><strong>Tiebreakers:</strong> Points → Net Run Rate → Head-to-head</li>
  </ul>
</div>

<div class="scenario">
  <h3>⚾ Example: Kenya Cricket Premier League (T20 Format)</h3>
  <p><strong>Format:</strong> T20 league with 8 teams, double round-robin (14 matches per team), top 4 to playoffs.</p>

  <p><strong>In LigiOpen:</strong></p>
  <ul>
    <li><strong>Match Result Entry:</strong> "Nairobi Gymkhana 156/7 (20 overs) def. Kongonis 142/9 (20 overs)"</li>
    <li><strong>Key Stats Tracked:</strong>
      - Runs scored
      - Wickets lost
      - Overs faced
      - Result margin (runs or wickets)
    </li>
    <li><strong>Standings Calculation:</strong>
      - Win: 2 points
      - No Result (rain, etc.): 1 point each
      - Loss: 0 points
      - <strong>Net Run Rate:</strong> (Total runs scored / Total overs faced) - (Total runs conceded / Total overs bowled)
    </li>
  </ul>

  <p><strong>Net Run Rate in LigiOpen:</strong></p>
  <p>This is cricket's most complex tiebreaker. LigiOpen calculates it automatically based on match data:</p>
  <ul>
    <li>Accumulates all runs scored and overs faced across all matches</li>
    <li>Accumulates all runs conceded and overs bowled</li>
    <li>Calculates NRR formula after each match</li>
    <li>Used to break ties in standings</li>
  </ul>

  <p><strong>Sample Standings:</strong></p>
  <table style="font-size: 0.85rem;">
    <thead>
      <tr>
        <th>Pos</th>
        <th>Team</th>
        <th>P</th>
        <th>W</th>
        <th>L</th>
        <th>NR</th>
        <th>Pts</th>
        <th>NRR</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: #d4edda;">
        <td>1</td>
        <td>Nairobi Gymkhana</td>
        <td>14</td>
        <td>10</td>
        <td>4</td>
        <td>0</td>
        <td>20</td>
        <td>+1.234</td>
      </tr>
      <tr style="background: #d4edda;">
        <td>2</td>
        <td>Kongonis</td>
        <td>14</td>
        <td>9</td>
        <td>5</td>
        <td>0</td>
        <td>18</td>
        <td>+0.876</td>
      </tr>
      <tr>
        <td>...</td>
        <td colspan="7"><em>(Teams 3-8)</em></td>
      </tr>
    </tbody>
  </table>
</div>

---

## 🎯 Key Adaptations: What Changes Per Sport

<div class="card-grid">
  <div class="card">
    <h3>1. Scoring Rules</h3>
    <p><strong>What changes:</strong> How points are awarded for wins/draws/losses</p>
    <p><strong>Examples:</strong></p>
    <ul>
      <li>Football: 3-1-0 (W-D-L)</li>
      <li>Rugby: 4-2-0 + bonus points</li>
      <li>Basketball: 2-0 (no draws)</li>
      <li>Volleyball: 3-2-1-0 (based on set score)</li>
    </ul>
    <p><strong>LigiOpen handles:</strong> Configurable points systems per competition</p>
  </div>

  <div class="card">
    <h3>2. Match Results Format</h3>
    <p><strong>What changes:</strong> How scores are recorded</p>
    <p><strong>Examples:</strong></p>
    <ul>
      <li>Football: "2-1" (goals)</li>
      <li>Rugby: "32-21" (points) with try/conversion breakdown</li>
      <li>Basketball: "87-72" (points)</li>
      <li>Volleyball: "3-1" (sets)</li>
      <li>Tennis: "4-2" (rubbers in team format)</li>
      <li>Cricket: "156/7 vs 142/9" (runs/wickets)</li>
    </ul>
    <p><strong>LigiOpen handles:</strong> Flexible result entry forms adapted per sport</p>
  </div>

  <div class="card">
    <h3>3. Player Positions</h3>
    <p><strong>What changes:</strong> Position terminology</p>
    <p><strong>Examples:</strong></p>
    <ul>
      <li>Football: GK, DEF, MID, FWD</li>
      <li>Rugby: Prop, Hooker, Fly-half, Wing, etc.</li>
      <li>Basketball: PG, SG, SF, PF, C</li>
      <li>Volleyball: Setter, Libero, Hitter, etc.</li>
    </ul>
    <p><strong>LigiOpen handles:</strong> Customizable position labels per sport/league</p>
  </div>

  <div class="card">
    <h3>4. Team Sizes & Squad Limits</h3>
    <p><strong>What changes:</strong> How many players per team/squad</p>
    <p><strong>Examples:</strong></p>
    <ul>
      <li>Football: 11 on field, 30 in squad</li>
      <li>Rugby: 15 on field, 23 in squad (Union)</li>
      <li>Basketball: 5 on court, 12-15 in squad</li>
      <li>Volleyball: 6 on court, 12 in squad</li>
    </ul>
    <p><strong>LigiOpen handles:</strong> Configurable squad limits per competition</p>
  </div>

  <div class="card">
    <h3>5. Tiebreaker Rules</h3>
    <p><strong>What changes:</strong> How tied teams are ranked</p>
    <p><strong>Examples:</strong></p>
    <ul>
      <li>Football: Pts → GD → GF</li>
      <li>Rugby: Pts → H2H → PD → Tries</li>
      <li>Cricket: Pts → NRR → H2H</li>
      <li>Basketball: Pts → H2H → Points Scored</li>
    </ul>
    <p><strong>LigiOpen handles:</strong> Configurable tiebreaker hierarchies</p>
  </div>

  <div class="card">
    <h3>6. Competition Formats</h3>
    <p><strong>What changes:</strong> League structures</p>
    <p><strong>Examples:</strong></p>
    <ul>
      <li>Football: Usually pure round-robin leagues</li>
      <li>Rugby: League + top 4 playoffs</li>
      <li>Basketball: Conference system + playoffs</li>
      <li>Handball: Group stage + knockout</li>
    </ul>
    <p><strong>LigiOpen handles:</strong> Multiple divisions, phased competitions, hybrid formats</p>
  </div>
</div>

---

## 🔧 How League Admins Configure for Different Sports

When a League Admin creates a new competition in LigiOpen, they configure sport-specific settings:

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Select Sport Type</h4>
      <p>Choose: Football, Rugby, Basketball, Volleyball, Handball, Cricket, Tennis, Other</p>
      <p><em>This pre-loads appropriate defaults for that sport</em></p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Configure Scoring Rules</h4>
      <p>Set points awarded for:</p>
      <ul>
        <li>Win</li>
        <li>Draw (if applicable)</li>
        <li>Loss</li>
        <li>Bonus points (if applicable, e.g., rugby)</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Set Squad Limits</h4>
      <p>Define:</p>
      <ul>
        <li>Maximum players per squad (e.g., 30 for football, 23 for rugby)</li>
        <li>Minimum players required (e.g., 16 to field a team)</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4>Configure Tiebreakers</h4>
      <p>Set the order of tiebreaker criteria:</p>
      <ul>
        <li>1st: Points (always first)</li>
        <li>2nd: Goal difference / Points difference / Net run rate / Set ratio</li>
        <li>3rd: Goals scored / Points scored / Tries scored</li>
        <li>4th: Head-to-head (optional)</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">5</div>
    <div class="step-content">
      <h4>Set Player Position Labels</h4>
      <p>Customize position names for player registration:</p>
      <ul>
        <li>Football: Goalkeeper, Defender, Midfielder, Forward</li>
        <li>Rugby: Prop, Hooker, Lock, Flanker, etc.</li>
        <li>Basketball: Point Guard, Shooting Guard, etc.</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">6</div>
    <div class="step-content">
      <h4>Choose Competition Format</h4>
      <p>Select:</p>
      <ul>
        <li><strong>Round-robin:</strong> Everyone plays everyone</li>
        <li><strong>Knockout:</strong> Single or double elimination</li>
        <li><strong>Hybrid:</strong> Group stage then knockout</li>
        <li><strong>Conference:</strong> Multiple divisions with cross-play</li>
      </ul>
    </div>
  </div>
</div>

---

## 🌟 Universal Features Across All Sports

While sports differ in details, these LigiOpen features work universally:

<div class="card-grid">
  <div class="card">
    <span class="icon">📝</span>
    <h3>Registration</h3>
    <p>Clubs register, admins approve, players register, admins approve — same process for all sports.</p>
  </div>

  <div class="card">
    <span class="icon">📅</span>
    <h3>Fixture Generation</h3>
    <p>Round-robin algorithms work identically whether it's football, rugby, or basketball teams.</p>
  </div>

  <div class="card">
    <span class="icon">🏟️</span>
    <h3>Venue Management</h3>
    <p>Track stadiums, courts, pitches, pools — any facility where matches happen.</p>
  </div>

  <div class="card">
    <span class="icon">👨‍⚖️</span>
    <h3>Officials</h3>
    <p>Referees, umpires, judges — same registration, assignment, and result submission workflow.</p>
  </div>

  <div class="card">
    <span class="icon">📊</span>
    <h3>Standings</h3>
    <p>Automatic league table calculation based on configured rules — applies to any sport.</p>
  </div>

  <div class="card">
    <span class="icon">🔄</span>
    <h3>Transfers & Suspensions</h3>
    <p>Player movement and disciplinary tracking work the same way across all sports.</p>
  </div>
</div>

---

## 🎓 Choosing LigiOpen for Your Sport

<div class="scenario">
  <h3>❓ Is LigiOpen Right for My Sport?</h3>
  <p>Ask yourself these questions:</p>
</div>

<div class="info-box">
  <strong>✅ LigiOpen is PERFECT for your sport if:</strong>
  <ul>
    <li>You have <strong>teams</strong> (clubs, schools, organizations) competing</li>
    <li>You run <strong>competitions</strong> (leagues, tournaments, championships)</li>
    <li>You need to <strong>schedule matches</strong> fairly and efficiently</li>
    <li>You need to <strong>track standings</strong> automatically</li>
    <li>You want <strong>transparency</strong> in results and rankings</li>
    <li>You need <strong>player registration</strong> and eligibility tracking</li>
  </ul>
</div>

<div class="warning-box">
  <strong>⚠️ LigiOpen may need customization if:</strong>
  <ul>
    <li>Your sport has <strong>extremely complex scoring</strong> that doesn't fit standard formats</li>
    <li>You need <strong>real-time live scoring</strong> updates during matches (LigiOpen focuses on result submission after matches)</li>
    <li>You have <strong>individual competitors</strong> rather than teams (though tennis shows it can be adapted)</li>
    <li>You need <strong>race timing</strong> or other specialized features (track and field, swimming)</li>
  </ul>
</div>

---

## 🇰🇪 Sports in Kenya That Work Beautifully with LigiOpen

<div class="card-grid">
  <div class="card">
    <h3>⚽ Football</h3>
    <p><strong>Perfect fit.</strong> LigiOpen was built for football.</p>
    <p><em>Examples:</em> FKF Premier League, National Super League, County FAs, School championships</p>
  </div>

  <div class="card">
    <h3>🏉 Rugby</h3>
    <p><strong>Excellent fit.</strong> Bonus points system fully supported.</p>
    <p><em>Examples:</em> Kenya Cup, Championship, Sevens tournaments</p>
  </div>

  <div class="card">
    <h3>🏀 Basketball</h3>
    <p><strong>Great fit.</strong> Conference systems supported.</p>
    <p><em>Examples:</em> KBF Premier League, School leagues</p>
  </div>

  <div class="card">
    <h3>🏐 Volleyball</h3>
    <p><strong>Great fit.</strong> Set-based scoring supported.</p>
    <p><em>Examples:</em> KVF National League, University championships</p>
  </div>

  <div class="card">
    <h3>🤾 Handball</h3>
    <p><strong>Excellent fit.</strong> Similar to football structure.</p>
    <p><em>Examples:</em> School championships, Club leagues</p>
  </div>

  <div class="card">
    <h3>⚾ Cricket</h3>
    <p><strong>Good fit.</strong> Net run rate calculations supported.</p>
    <p><em>Examples:</em> T20 leagues, ODI tournaments</p>
  </div>

  <div class="card">
    <h3>🎾 Tennis</h3>
    <p><strong>Adaptable.</strong> Team leagues and individual tournaments.</p>
    <p><em>Examples:</em> Club leagues, University competitions</p>
  </div>

  <div class="card">
    <h3>🏇 Netball</h3>
    <p><strong>Perfect fit.</strong> Similar to basketball structure.</p>
    <p><em>Examples:</em> Kenya Netball Federation leagues</p>
  </div>

  <div class="card">
    <h3>�� Hockey (Field)</h3>
    <p><strong>Excellent fit.</strong> Identical to football structure.</p>
    <p><em>Examples:</em> KHU Premier League</p>
  </div>
</div>

---

## 🚀 Getting Started with a New Sport

If you're managing a non-football sport in Kenya and want to use LigiOpen:

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Identify Your Sport's Unique Needs</h4>
      <p>Document:</p>
      <ul>
        <li>How scoring works (points for win/draw/loss, any bonuses)</li>
        <li>What a match result looks like (3-1 goals? 87-72 points? 3-2 sets?)</li>
        <li>How standings should be calculated</li>
        <li>What tiebreakers to use when teams are level on points</li>
        <li>Squad sizes and player positions</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Contact LigiOpen Support</h4>
      <p>Reach out with your sport's requirements. The LigiOpen team can:</p>
      <ul>
        <li>Confirm if your sport is already supported</li>
        <li>Configure custom settings for your league</li>
        <li>Add new sport-specific features if needed</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Set Up a Test Season</h4>
      <p>Before going live, run a test competition with a few teams to ensure:</p>
      <ul>
        <li>Fixture generation works correctly</li>
        <li>Result submission captures all necessary data</li>
        <li>Standings calculate as expected</li>
        <li>Tiebreakers apply correctly</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4>Train Your Users</h4>
      <p>Ensure your league admins, club admins, and officials understand:</p>
      <ul>
        <li>How to register clubs and players</li>
        <li>How to submit results correctly (sport-specific formats)</li>
        <li>How to interpret standings</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">5</div>
    <div class="step-content">
      <h4>Launch Your First Real Season</h4>
      <p>Go live! Start with a smaller competition if possible, then scale up as you get comfortable with the system.</p>
    </div>
  </div>
</div>

---

## 💡 Success Stories: Multi-Sport in Action

<div class="scenario">
  <h3>🏫 University Sports Association of Kenya (USAK)</h3>
  <p><strong class="character">Dr. Kamau Muthoni</strong> manages USAK, which organizes competitions in <strong>12 different sports</strong> across 50+ Kenyan universities.</p>

  <p><strong>Before LigiOpen:</strong></p>
  <ul>
    <li>Each sport managed separately with Excel spreadsheets</li>
    <li>Different people using different formats</li>
    <li>Constant confusion about standings</li>
    <li>Difficult to track cross-sport participation</li>
  </ul>

  <p><strong>With LigiOpen:</strong></p>
  <ul>
    <li>All 12 sports managed in one platform</li>
    <li>Football, rugby, basketball, volleyball, athletics, swimming, etc.</li>
    <li>Each sport has its own configured rules, but unified administration</li>
    <li>Can track which universities excel across multiple sports</li>
    <li>Overall USAK Games championship calculated automatically (points from all sports combined)</li>
  </ul>

  <p><strong>Result:</strong> USAK reduced administrative time by 70% and eliminated standing calculation errors entirely.</p>
</div>

---

## 🎯 Key Takeaways: One Platform, Every Sport

<div class="card-grid">
  <div class="card">
    <h3>Universal Principles</h3>
    <p>Teams compete, matches are played, standings are calculated. These principles work for any sport.</p>
  </div>

  <div class="card">
    <h3>Flexible Configuration</h3>
    <p>LigiOpen adapts to sport-specific scoring rules, positions, squad sizes, and tiebreakers.</p>
  </div>

  <div class="card">
    <h3>Proven Across Sports</h3>
    <p>From football's simplicity to rugby's bonus points to cricket's net run rate — LigiOpen handles it all.</p>
  </div>

  <div class="card">
    <h3>Kenya's Multi-Sport Platform</h3>
    <p>Whether you're FKF, KRU, KBF, KVF, or a school sports coordinator — LigiOpen serves your needs.</p>
  </div>
</div>

---

<div class="kenyan-accent" style="text-align: center; padding: 3rem;">
  <h2 style="color: var(--primary-color); margin-bottom: 1rem;">🇰🇪 One Kenya, Every Sport</h2>
  <p style="font-size: 1.2rem; color: #555;">
    From the football pitches of Nairobi to the rugby fields of Kakamega,<br>
    from the basketball courts of Mombasa to the volleyball halls of Kisumu,<br>
    LigiOpen brings professionalism and transparency to every sport in Kenya.
  </p>
</div>

---

<div style="text-align: center; margin: 3rem 0;">
  <p style="font-size: 1.1rem; color: #555; margin-bottom: 1.5rem;">
    <strong>Ready to bring your sport onto LigiOpen?</strong><br>
    Explore the detailed module documentation to understand the full system.
  </p>
  <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
    <a href="leagues-competitions.html" class="btn">Leagues & Competitions →</a>
    <a href="fixtures-matches.html" class="btn btn-secondary">Fixtures & Matches →</a>
    <a href="standings.html" class="btn">Standings →</a>
  </div>
</div>
