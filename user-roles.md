---
layout: default
title: User Roles & Permissions
---

# 👥 User Roles & Permissions

LigiOpen uses a role-based access control system where different users have different permissions based on their responsibilities. Think of it like organizing a school event — you have the principal (overall control), teachers (managing their classes), class captains (managing their classmates), and students (participating).

---

## 🎯 The Role Hierarchy

<div class="card-grid">
  <div class="card">
    <span class="icon">👑</span>
    <h3>Super Admin</h3>
    <p><strong>The System Owner</strong></p>
    <p>Complete control over everything in LigiOpen. Usually the platform administrator or organization owner.</p>
  </div>

  <div class="card">
    <span class="icon">🏆</span>
    <h3>League Admin</h3>
    <p><strong>The Competition Manager</strong></p>
    <p>Manages a specific league or federation. Controls seasons, competitions, registrations, and match operations.</p>
  </div>

  <div class="card">
    <span class="icon">⚽</span>
    <h3>Club Admin</h3>
    <p><strong>The Team Manager</strong></p>
    <p>Manages their own club. Handles player registrations, team information, and interacts with match results.</p>
  </div>

  <div class="card">
    <span class="icon">📝</span>
    <h3>Content Admin</h3>
    <p><strong>The Information Manager</strong></p>
    <p>Manages venues, officials, and general system content. No access to sensitive competition or match data.</p>
  </div>

  <div class="card">
    <span class="icon">👨‍⚖️</span>
    <h3>Official/Referee</h3>
    <p><strong>The Match Authority</strong></p>
    <p>Can submit match results and reports for games they're assigned to officiate.</p>
  </div>

  <div class="card">
    <span class="icon">👤</span>
    <h3>Player</h3>
    <p><strong>The Athlete</strong></p>
    <p>Can view their own profile, registration status, and match history. Read-only access.</p>
  </div>
</div>

---

## 👑 Super Admin: The System Owner

<div class="scenario">
  <h3>🌟 Meet Sarah: The Super Admin</h3>
  <p><strong class="character">Sarah Kamau</strong> works for the national sports federation. She's the Super Admin of LigiOpen for all of Kenya. Her job is to maintain the platform and create new leagues.</p>
</div>

### What Super Admins Can Do

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Create New Leagues</h4>
      <p>Sarah can create new leagues in the system:</p>
      <ul>
        <li><strong>Football Kenya Federation (FKF)</strong> - National football body</li>
        <li><strong>Nairobi County FA</strong> - County-level football</li>
        <li><strong>Kenya Rugby Union</strong> - National rugby body</li>
        <li><strong>University Sports Association of Kenya (USAK)</strong> - University leagues</li>
      </ul>
      <p>Each league becomes an independent organization within LigiOpen with its own League Admins.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Assign League Admins</h4>
      <p>When Sarah creates a league, she assigns League Admin accounts to the people who will manage that league:</p>
      <ul>
        <li><strong>Peter Odhiambo</strong> → Nairobi County FA (League Admin)</li>
        <li><strong>John Mwangi</strong> → Mombasa County FA (League Admin)</li>
        <li><strong>Grace Wanjiru</strong> → Kisumu County FA (League Admin)</li>
      </ul>
      <p>These League Admins can now manage their respective leagues independently.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>System-Wide Settings</h4>
      <p>Sarah manages platform-wide settings:</p>
      <ul>
        <li>Default scoring rules (3 points for win, 1 for draw)</li>
        <li>System-wide player eligibility rules</li>
        <li>Platform maintenance and updates</li>
        <li>Security and access controls</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4>Monitor All Activities</h4>
      <p>Sarah can view activity across all leagues:</p>
      <ul>
        <li>How many matches have been played nationwide</li>
        <li>Which leagues are most active</li>
        <li>System health and performance</li>
        <li>Resolve disputes that escalate beyond league level</li>
      </ul>
    </div>
  </div>
</div>

<div class="tip-box">
  <strong>🎯 Real Kenyan Context</strong><br>
  In Kenya's sports structure, a Super Admin might be someone at the national federation level (like FKF headquarters) who sets up LigiOpen for use by all county FAs across Kenya. They don't manage day-to-day operations of each county league — that's delegated to League Admins in each county.
</div>

---

## 🏆 League Admin: The Competition Manager

<div class="scenario">
  <h3>📋 Meet Peter: The League Admin</h3>
  <p><strong class="character">Peter Odhiambo</strong> is the Secretary of Nairobi County FA. As a League Admin, he runs all football competitions in Nairobi County — from grassroots leagues to county championships.</p>
</div>

### What League Admins Can Do

League Admins have broad powers within their league, but only their league. Peter can manage Nairobi County FA but cannot access Mombasa County FA's data.

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Manage Seasons</h4>
      <p>Peter creates and manages seasons for his league:</p>
      <ul>
        <li><strong>Create Season:</strong> "2025/26" with start and end dates</li>
        <li><strong>Multiple Seasons:</strong> Can have multiple active seasons (e.g., main league + mid-season tournament)</li>
        <li><strong>Archive Old Seasons:</strong> Historical data remains accessible but read-only</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Set Up Competitions</h4>
      <p>Within each season, Peter creates competitions:</p>
      <ul>
        <li><strong>Nairobi County Premier League</strong> (round-robin, 16 teams)</li>
        <li><strong>Nairobi County Division One</strong> (round-robin, 18 teams)</li>
        <li><strong>Nairobi County Cup</strong> (knockout tournament, 32 teams)</li>
      </ul>
      <p>For each competition, he sets:</p>
      <ul>
        <li>Competition type (league/round-robin, knockout, group stage + knockout)</li>
        <li>Number of teams</li>
        <li>Scoring rules (usually 3 for win, 1 for draw)</li>
        <li>Home and away legs (double round-robin or single)</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Review and Approve Club Registrations</h4>
      <p>When clubs apply to join a competition, Peter reviews each application:</p>
      <ul>
        <li>✅ Verify club documents (registration certificate, affiliation fees)</li>
        <li>✅ Check that the club meets eligibility requirements</li>
        <li>✅ Ensure no duplicate club names</li>
        <li>✅ <strong>CONFIRM</strong> or <strong>REJECT</strong> the registration</li>
      </ul>
      <p><em>Once confirmed, the club is officially in the competition and a standings row is created.</em></p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4>Review and Approve Player Registrations</h4>
      <p>After clubs register players, Peter reviews each player:</p>
      <ul>
        <li>✅ Check that players are not double-registered (playing for 2 clubs)</li>
        <li>✅ Verify age eligibility (using national ID numbers)</li>
        <li>✅ Ensure no banned players are trying to sneak in</li>
        <li>✅ <strong>APPROVE</strong> or <strong>REJECT</strong> each player</li>
      </ul>
      <p><em>Only approved players are eligible to play in matches.</em></p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">5</div>
    <div class="step-content">
      <h4>Generate Fixtures</h4>
      <p>Once all teams are registered, Peter generates the fixture list:</p>
      <ul>
        <li>Click <strong>"Generate Fixtures"</strong></li>
        <li>LigiOpen creates all matches automatically using round-robin algorithm</li>
        <li>Peter then assigns dates, times, and venues to each match</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">6</div>
    <div class="step-content">
      <h4>Assign Referees and Officials</h4>
      <p>For each match, Peter assigns match officials:</p>
      <ul>
        <li><strong>Referee:</strong> The main official who controls the game</li>
        <li><strong>Assistant Referees:</strong> (Optional) Linesmen</li>
        <li><strong>4th Official:</strong> (Optional) For higher-level matches</li>
      </ul>
      <p>Only registered and approved officials can be assigned.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">7</div>
    <div class="step-content">
      <h4>Monitor Match Results</h4>
      <p>After matches are played, Peter monitors result submissions:</p>
      <ul>
        <li>Referees submit results directly via the app</li>
        <li>Peter can review submitted results</li>
        <li>If something looks wrong, he can investigate and correct it</li>
        <li>Standings update automatically after each result</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">8</div>
    <div class="step-content">
      <h4>Handle Disputes</h4>
      <p>Sometimes match results are disputed. Peter manages the dispute resolution process:</p>
      <ul>
        <li>Club Admin flags a result as "disputed"</li>
        <li>Peter investigates (reviews referee report, talks to both clubs)</li>
        <li>Peter either <strong>confirms</strong> the original result or <strong>corrects</strong> it</li>
        <li>Standings recalculate based on the final decision</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">9</div>
    <div class="step-content">
      <h4>Approve Player Transfers</h4>
      <p>Mid-season, players sometimes want to change clubs:</p>
      <ul>
        <li>Club A requests to transfer a player to Club B</li>
        <li>Peter reviews the transfer request</li>
        <li>If valid (not just before playoffs, no violations), Peter approves</li>
        <li>Player is now registered with Club B and can play for them</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">10</div>
    <div class="step-content">
      <h4>Manage Disciplinary Actions</h4>
      <p>Red cards, suspensions, and bans are tracked automatically:</p>
      <ul>
        <li>Referee issues a red card during a match</li>
        <li>System automatically applies 1-match suspension</li>
        <li>For serious offenses, Peter can extend suspension manually</li>
        <li>Suspended players cannot be selected for matches</li>
      </ul>
    </div>
  </div>
</div>

<div class="tip-box">
  <strong>🎯 A Day in Peter's Life as League Admin</strong><br>
  Monday: Review 15 club registration requests, approve 12, reject 3 (missing documents)<br>
  Tuesday: Approve 200 player registrations from newly confirmed clubs<br>
  Wednesday: Generate fixtures for the upcoming season (3 seconds!)<br>
  Thursday: Assign referees to next weekend's 12 matches<br>
  Friday: Handle a dispute about a match result from last Sunday<br>
  Weekend: Monitor match results as they come in, ensure everything runs smoothly
</div>

---

## ⚽ Club Admin: The Team Manager

<div class="scenario">
  <h3>🎽 Meet Mary: The Club Admin</h3>
  <p><strong class="character">Mary Akinyi</strong> is the manager of <strong>Kisumu Hot Stars FC</strong>. As a Club Admin, her job is to manage everything about her club within LigiOpen — but she has no access to other clubs' data or league-wide settings.</p>
</div>

### What Club Admins Can Do

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Manage Club Profile</h4>
      <p>Mary maintains her club's information:</p>
      <ul>
        <li><strong>Club Name:</strong> Kisumu Hot Stars FC</li>
        <li><strong>Logo:</strong> Upload/update the team badge</li>
        <li><strong>Colors:</strong> Home kit (red and white), Away kit (blue)</li>
        <li><strong>Home Venue:</strong> Manyatta Sports Ground</li>
        <li><strong>Contact Information:</strong> Phone, email, address</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Register for Competitions</h4>
      <p>When a new season opens for registration, Mary submits her club's application:</p>
      <ul>
        <li>Select which competition to join (e.g., "Kisumu County Premier League")</li>
        <li>Upload required documents (club registration certificate, affiliation proof)</li>
        <li>Submit registration request</li>
        <li>Wait for League Admin approval</li>
      </ul>
      <p><em>Status updates: PENDING → APPROVED or REJECTED</em></p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Register Players</h4>
      <p>Once her club is approved for a competition, Mary can register players:</p>
      <ul>
        <li><strong>Player Details:</strong> Full name, date of birth, national ID</li>
        <li><strong>Photo:</strong> Recent player photo</li>
        <li><strong>Position:</strong> Goalkeeper, Defender, Midfielder, Forward</li>
        <li><strong>Jersey Number:</strong> Must be unique within the squad (1-99)</li>
      </ul>
      <p><em>Limits: Maximum 30 players per squad</em></p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4>View Match Schedule</h4>
      <p>Mary can see all her team's upcoming matches:</p>
      <ul>
        <li>Opponent, date, time, venue</li>
        <li>Home or away match</li>
        <li>Assigned referee</li>
        <li>Match status (scheduled, completed, disputed)</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">5</div>
    <div class="step-content">
      <h4>View Match Results and Standings</h4>
      <p>After matches are played, Mary can:</p>
      <ul>
        <li>See final scores and goal scorers</li>
        <li>View the updated league table</li>
        <li>Check her team's form (last 5 results)</li>
        <li>Review match reports from referees</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">6</div>
    <div class="step-content">
      <h4>Dispute Match Results (if necessary)</h4>
      <p>If Mary believes a result is incorrect, she can flag it:</p>
      <ul>
        <li>Click <strong>"Dispute Result"</strong> on a completed match</li>
        <li>Provide a reason (e.g., "Wrong score recorded", "Ineligible player used by opponent")</li>
        <li>Submit to League Admin for review</li>
      </ul>
      <p><em>The result stays in the standings while under dispute, but is marked as "disputed" for transparency.</em></p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">7</div>
    <div class="step-content">
      <h4>Request Player Transfers</h4>
      <p>If a player wants to move to another club mid-season:</p>
      <ul>
        <li>Mary initiates a transfer request</li>
        <li>Selects the player and destination club</li>
        <li>Submits to League Admin for approval</li>
      </ul>
      <p><em>Note: Most leagues have transfer windows (e.g., only allowed in first half of season).</em></p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">8</div>
    <div class="step-content">
      <h4>Monitor Player Eligibility</h4>
      <p>Mary can check which players are eligible to play:</p>
      <ul>
        <li>✅ <strong>Available:</strong> Approved, not suspended, no injuries</li>
        <li>⏳ <strong>Pending Approval:</strong> Registered but not yet approved by League Admin</li>
        <li>🚫 <strong>Suspended:</strong> Red card suspension or disciplinary action</li>
        <li>🏥 <strong>Injured:</strong> (If injury tracking is enabled)</li>
      </ul>
    </div>
  </div>
</div>

<div class="warning-box">
  <strong>⚠️ What Club Admins CANNOT Do</strong><br>
  Mary cannot:<br>
  - See other clubs' player rosters (confidential)<br>
  - Change league settings or competition formats<br>
  - Submit match results (only referees can do this)<br>
  - Approve her own club's registration or players (League Admin does this)<br>
  - Generate or modify fixtures
</div>

---

## 📝 Content Admin: The Information Manager

<div class="scenario">
  <h3>📍 Meet David: The Content Admin</h3>
  <p><strong class="character">David Kimani</strong> works for Nairobi County FA. His job is to manage venues, register officials, and maintain general system content — but he doesn't handle sensitive competition or match data.</p>
</div>

### What Content Admins Can Do

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Manage Venues</h4>
      <p>David registers and maintains all venues in the system:</p>
      <ul>
        <li><strong>Add Venue:</strong> Name, location, capacity, surface type (grass, turf, artificial)</li>
        <li><strong>Upload Photos:</strong> Stadium pictures for reference</li>
        <li><strong>Set Availability:</strong> Mark when venues are unavailable (maintenance, events)</li>
        <li><strong>Update Details:</strong> Address, contact person, facilities</li>
      </ul>
      <p><em>Example venues David manages:</em></p>
      <ul>
        <li>Nyayo National Stadium (20,000 capacity)</li>
        <li>Moi International Sports Centre Kasarani (60,000 capacity)</li>
        <li>City Stadium (10,000 capacity)</li>
        <li>Various community grounds across Nairobi</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Register Officials and Referees</h4>
      <p>David manages the referee database:</p>
      <ul>
        <li><strong>Register New Officials:</strong> Name, license number, qualifications</li>
        <li><strong>Set Referee Grades:</strong> County level, regional level, national level</li>
        <li><strong>Update Availability:</strong> Mark when referees are unavailable</li>
        <li><strong>Track Certifications:</strong> When licenses expire and need renewal</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Manage General Content</h4>
      <p>David handles non-sensitive data:</p>
      <ul>
        <li>News and announcements</li>
        <li>League rules and regulations (as documents)</li>
        <li>Contact directories</li>
        <li>FAQs and help content</li>
      </ul>
    </div>
  </div>
</div>

<div class="info-box">
  <strong>💡 Why Content Admin Role Exists</strong><br>
  Separating content management (venues, officials) from competition management (fixtures, results, standings) allows organizations to delegate work effectively. David can keep the venue database up-to-date without having access to sensitive match results or the ability to change standings.
</div>

---

## 👨‍⚖️ Official/Referee: The Match Authority

<div class="scenario">
  <h3>🟨 Meet James: The Referee</h3>
  <p><strong class="character">James Otieno</strong> is a licensed referee in Nairobi County. He officiates 2-3 matches every weekend. His LigiOpen account gives him exactly what he needs: the ability to submit match results.</p>
</div>

### What Officials Can Do

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>View Assigned Matches</h4>
      <p>James logs into LigiOpen and sees his upcoming assignments:</p>
      <ul>
        <li>Sunday, 3:00 PM: Kisumu Hot Stars vs Lakeside Warriors (Manyatta Sports Ground)</li>
        <li>Sunday, 5:15 PM: Dunga Beach FC vs Nyanza United (Dunga Beach)</li>
      </ul>
      <p>For each match, he can see:</p>
      <ul>
        <li>Team names and colors</li>
        <li>Venue location and directions</li>
        <li>Registered players for both teams (so he can verify IDs)</li>
        <li>Assistant referees and 4th official assigned with him</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Submit Match Results</h4>
      <p>After the match ends, James submits the result right from the field:</p>
      <ul>
        <li><strong>Final Score:</strong> Kisumu Hot Stars 2 - 1 Lakeside Warriors</li>
        <li><strong>Goal Scorers:</strong> Brian Ouma 23', Dennis Otieno 78' (Hot Stars), Victor Wanjala 45' (Warriors)</li>
        <li><strong>Yellow Cards:</strong> 2 players cautioned</li>
        <li><strong>Red Cards:</strong> None</li>
        <li><strong>Match Report:</strong> Brief notes about the game</li>
      </ul>
      <p>He clicks <strong>"Submit Result"</strong> and the match is marked as COMPLETED. Standings update automatically.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Add Match Events (Optional)</h4>
      <p>For more detailed tracking, James can record:</p>
      <ul>
        <li>Substitutions (who came on/off, what minute)</li>
        <li>Injuries</li>
        <li>Time added for stoppages</li>
        <li>Any incidents or notable events</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4>View Match History</h4>
      <p>James can see all matches he's officiated:</p>
      <ul>
        <li>Past assignments and results</li>
        <li>Performance record (helpful for promotions)</li>
        <li>Any feedback or ratings from league admins</li>
      </ul>
    </div>
  </div>
</div>

<div class="tip-box">
  <strong>🎯 Why Digital Result Submission Matters</strong><br>
  Before LigiOpen, James would:<br>
  1. Write results on paper match sheets<br>
  2. Keep one copy, give one to each club<br>
  3. Send a copy to the league secretary via WhatsApp or physical delivery<br>
  4. Hope the data is entered correctly into Excel<br><br>
  
  Now:<br>
  ✅ Submit results in 2 minutes from his phone<br>
  ✅ No paper, no lost match sheets<br>
  ✅ Standings update instantly<br>
  ✅ Complete digital trail for dispute resolution
</div>

---

## 👤 Player: The Athlete

<div class="scenario">
  <h3>⚽ Meet Brian: The Player</h3>
  <p><strong class="character">Brian Ouma</strong> is a striker for Kisumu Hot Stars FC. He has a basic player account in LigiOpen that lets him track his own career.</p>
</div>

### What Players Can Do

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>View Own Profile</h4>
      <p>Brian can see his player profile:</p>
      <ul>
        <li>Name, photo, position, jersey number</li>
        <li>Current club (Kisumu Hot Stars FC)</li>
        <li>Registration status (approved/pending)</li>
        <li>Eligibility status (available/suspended)</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>View Match History</h4>
      <p>Brian can see all matches he's played in:</p>
      <ul>
        <li>Matches played this season</li>
        <li>Goals scored</li>
        <li>Assists (if tracked)</li>
        <li>Cards received</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>View Team Schedule</h4>
      <p>Brian can see his team's upcoming matches:</p>
      <ul>
        <li>Next opponent, date, venue</li>
        <li>Recent results</li>
        <li>Current standings position</li>
      </ul>
    </div>
  </div>
</div>

<div class="info-box">
  <strong>💡 Player Accounts are Optional</strong><br>
  Players don't need their own LigiOpen accounts to participate — Club Admins register players on their behalf. But giving players read-only accounts provides transparency and allows them to track their own careers. Think of it like having a digital player card that updates automatically.
</div>

---

## 🔐 Permission Summary Table

<table>
  <thead>
    <tr>
      <th>Action</th>
      <th>Super Admin</th>
      <th>League Admin</th>
      <th>Club Admin</th>
      <th>Content Admin</th>
      <th>Official</th>
      <th>Player</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Create leagues</td>
      <td>✅</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Create seasons/competitions</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Approve club registrations</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Register own club</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Register players</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅ (own club)</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Approve players</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Generate fixtures</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Assign referees</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Submit match results</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
      <td>❌</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Dispute results</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅ (own matches)</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Manage venues</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
      <td>✅</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Register officials</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
      <td>✅</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>View standings</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
  </tbody>
</table>

---

## 🎓 Real-World Scenario: Everyone Working Together

Let's see how all these roles work together in a typical weekend:

<div class="scenario">
  <h3>🏟️ Saturday to Sunday: A Weekend in Nairobi County Football</h3>
</div>

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">Sat AM</div>
    <div class="step-content">
      <h4>David (Content Admin) Checks Venues</h4>
      <p>David receives a call that City Stadium's main pitch is waterlogged after heavy rains. He logs into LigiOpen and marks it as temporarily unavailable.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">Sat PM</div>
    <div class="step-content">
      <h4>Peter (League Admin) Reschedules Matches</h4>
      <p>Peter sees David's venue alert. He reschedules 2 matches from City Stadium to alternative venues and notifies the clubs and referees.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">Sun AM</div>
    <div class="step-content">
      <h4>Mary (Club Admin) Checks Player Eligibility</h4>
      <p>Mary prepares for her team's match. She checks LigiOpen and sees that one of her key players is suspended due to yellow card accumulation. She adjusts her lineup accordingly.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">Sun 3PM</div>
    <div class="step-content">
      <h4>James (Referee) Officiates Match</h4>
      <p>James arrives at the venue, verifies player IDs using LigiOpen, and officiates the match. Kisumu Hot Stars win 2-1.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">Sun 5PM</div>
    <div class="step-content">
      <h4>James Submits Result</h4>
      <p>James submits the match result from his phone. Standings update instantly.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">Sun 6PM</div>
    <div class="step-content">
      <h4>Brian (Player) Checks His Stats</h4>
      <p>Brian, who scored the winning goal, logs in to see his updated statistics: 12 goals this season, team in 2nd place.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">Sun 8PM</div>
    <div class="step-content">
      <h4>Mary Reviews the Loss</h4>
      <p>Mary logs in to review the match report and standings. She sees her team dropped to 3rd place but still in contention for the title.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">Mon AM</div>
    <div class="step-content">
      <h4>Peter Reviews Weekend Results</h4>
      <p>Peter checks all 12 matches from the weekend. All results submitted cleanly, no disputes, standings look correct. Another successful weekend managed.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">Mon PM</div>
    <div class="step-content">
      <h4>Sarah (Super Admin) Checks Platform Health</h4>
      <p>Sarah reviews system-wide statistics: 47 leagues active across Kenya, 1,200+ matches played this weekend, all results submitted within 2 hours of match end. Platform running smoothly.</p>
    </div>
  </div>
</div>

---

## 🎯 Key Takeaways

<div class="card-grid">
  <div class="card">
    <h3>Clear Hierarchy</h3>
    <p>Super Admins create leagues, League Admins run competitions, Club Admins manage teams. Everyone knows their lane.</p>
  </div>

  <div class="card">
    <h3>Appropriate Access</h3>
    <p>You can only do what your role needs. Referees submit results but can't change fixtures. Club Admins manage players but can't approve themselves.</p>
  </div>

  <div class="card">
    <h3>Separation of Concerns</h3>
    <p>Content Admin role separates infrastructure management (venues, officials) from competition management (matches, standings).</p>
  </div>

  <div class="card">
    <h3>Transparency for All</h3>
    <p>Everyone can view standings, fixtures, and results — even players and the public. But only authorized roles can make changes.</p>
  </div>
</div>

---

<div style="text-align: center; margin: 3rem 0;">
  <p style="font-size: 1.2rem; color: #555;">Ready to learn how leagues and competitions are structured?</p>
  <a href="leagues-competitions.html" class="btn" style="font-size: 1.1rem; padding: 1rem 2rem;">Explore Leagues & Competitions →</a>
</div>
