---
layout: default
title: Player Management
---

# 👤 Player Management

Players are the heart of every sports competition. In LigiOpen, player management covers everything from initial registration through eligibility verification, squad assignment, jersey numbers, transfers, suspensions, and match-day availability. This page walks through the complete player lifecycle using real Kenyan scenarios and comprehensive examples.

---

## 🎯 Understanding Player Records in LigiOpen

<div class="info-box">
  <strong>🎯 Two Types of Player Records</strong><br><br>
  <strong>SHADOW PLAYER:</strong> A player registered by a coach <em>before</em> the player has created their own LigiOpen account. Their name, email, and phone are stored in the system, but they haven't logged in yet.<br><br>
  <strong>LINKED PLAYER:</strong> A player who has a LigiOpen user account and has claimed their profile. They can log in, view their stats, confirm match availability, and manage their own information.
</div>

### Why Shadow Players Exist

Imagine this: **Coach David** of **Tusker FC** needs to register his entire 25-player squad for the upcoming FKF Premier League season. But only 10 of his players have LigiOpen accounts. The other 15 haven't signed up yet.

**Without shadow players:** David would have to wait for all 15 players to create accounts before he could complete the squad registration. This could take weeks. The season might start before his squad is ready.

**With shadow players:** David can register all 25 players immediately:
- The 10 players with accounts are registered as **linked players** (tied to their user accounts)
- The 15 players without accounts are registered as **shadow players** (stored with name, email, phone)
- David sends invitation emails to the 15 shadow players
- As players claim their accounts, their records convert from shadow → linked

This system ensures **clubs can complete squad registration quickly** without waiting for every player to sign up first.

<div class="card-grid">
  <div class="card">
    <span class="icon">👤</span>
    <h3>Shadow Player</h3>
    <p><strong>Status:</strong> isShadow = true<br>
    <strong>Account:</strong> None yet<br>
    <strong>Access:</strong> Cannot log into LigiOpen<br>
    <strong>Managed by:</strong> Club admin (coach)<br>
    <strong>Next step:</strong> Receive invitation → create account → claim profile</p>
  </div>

  <div class="card">
    <span class="icon">👤✅</span>
    <h3>Linked Player</h3>
    <p><strong>Status:</strong> isShadow = false<br>
    <strong>Account:</strong> Has LigiOpen user account<br>
    <strong>Access:</strong> Can log in, view stats, confirm availability<br>
    <strong>Managed by:</strong> Themselves + club admin<br>
    <strong>Next step:</strong> Ready to play</p>
  </div>

  <div class="card">
    <span class="icon">📧</span>
    <h3>Invitation</h3>
    <p>A unique token sent via email to a shadow player. Contains a link to create an account and claim their player profile. Expires in 7 days.</p>
  </div>

  <div class="card">
    <span class="icon">🔄</span>
    <h3>Claim Process</h3>
    <p>When a shadow player clicks the invitation link, creates an account, and logs in for the first time, their shadow player record is automatically linked to their new user account.</p>
  </div>
</div>

---

## 📋 The Complete Player Registration Journey

<div class="scenario">
  <h3>⚽ Meet Michael Otieno: From Registration to First Match</h3>
  
  <p><strong class="character">Michael Otieno</strong> is a 23-year-old striker who just signed with <strong>AFC Leopards</strong> for the 2025/26 FKF Premier League season. Let's follow his complete journey through LigiOpen — from the moment his coach registers him as a shadow player to his first goal being recorded in the system.</p>
</div>

### Step 1: Coach Registers Michael as a Shadow Player

**Peter Kimani**, AFC Leopards' administrator, begins registering the squad for the new season.

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Peter Opens the Player Registration Form</h4>
      <p>Peter navigates to <strong>AFC Leopards First Team</strong> → <strong>Squad</strong> → <strong>Register New Player</strong>.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Peter Enters Michael's Details</h4>
      <p><strong>Full Name:</strong> Michael Odhiambo Otieno<br>
      <strong>Preferred Name:</strong> Mike<br>
      <strong>Email:</strong> michael.otieno@gmail.com<br>
      <strong>Phone:</strong> +254 722 345678<br>
      <strong>Age:</strong> 23<br>
      <strong>Position:</strong> Striker (ST)<br>
      <strong>Jersey Number:</strong> 9<br>
      <strong>Gender:</strong> Male<br>
      <strong>Height:</strong> 178cm<br>
      <strong>Weight:</strong> 75kg<br>
      <strong>Preferred Foot:</strong> Right<br>
      <strong>Nationality:</strong> Kenyan<br>
      <strong>Team:</strong> AFC Leopards First Team</p>
      
      <p>Peter clicks <strong>"Register Player"</strong>.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Michael Is Created as a Shadow Player</h4>
      <p><strong>What happens in LigiOpen:</strong></p>
      <ul>
        <li>A player record is created with ID: <code>1045</code></li>
        <li>Status: <code>isShadow = true</code> (no linked user account yet)</li>
        <li>Jersey number 9 is reserved for Michael in AFC Leopards First Team</li>
        <li>Michael appears on the squad roster with a 👤 shadow icon</li>
      </ul>
      
      <p><strong>What Peter sees:</strong></p>
      <p><em>"Michael Otieno has been registered as a shadow player. Send him an invitation to claim his profile."</em></p>
    </div>
  </div>
</div>

<div class="tip-box">
  <strong>💡 Required vs Optional Fields</strong><br>
  <strong>Required:</strong> Full name, age<br>
  <strong>Strongly recommended:</strong> Email (for invitations), position, jersey number, team<br>
  <strong>Optional:</strong> Phone, height, weight, preferred foot, bio, market value<br><br>
  You can register a player with just their name and age, then fill in other details later.
</div>

---

### Step 2: Peter Sends Michael an Invitation

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Peter Clicks "Send Invitation"</h4>
      <p>From Michael's shadow player profile, Peter clicks <strong>"Send Invitation"</strong>.</p>
      
      <p>LigiOpen generates a unique invitation token (e.g., <code>a7b3c9d2-e4f6-...</code>) and sends an email to <code>michael.otieno@gmail.com</code>.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Michael Receives the Invitation Email</h4>
      <p><strong>Subject:</strong> You've been invited to join AFC Leopards on LigiOpen</p>
      
      <p><strong>Email content:</strong></p>
      <blockquote style="background: #f8f9fa; padding: 1rem; border-left: 4px solid #007bff; margin: 1rem 0;">
        <p>Hi Michael,</p>
        <p><strong>Peter Kimani</strong> has registered you as a player for <strong>AFC Leopards First Team</strong> in the <strong>FKF Premier League 2025/26</strong> season.</p>
        <p>To claim your player profile, view your stats, and confirm your availability for matches, click the link below to create your LigiOpen account:</p>
        <p><a href="#">https://ligiopen.com/claim?token=a7b3c9d2-e4f6-...</a></p>
        <p><em>This invitation expires in 7 days.</em></p>
        <p>— The LigiOpen Team</p>
      </blockquote>
    </div>
  </div>
</div>

---

### Step 3: Michael Claims His Profile

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Michael Clicks the Invitation Link</h4>
      <p>Michael opens the email on his phone and clicks the invitation link.</p>
      
      <p>He's taken to LigiOpen's <strong>Create Account</strong> page, which is pre-filled with his details:</p>
      <ul>
        <li>Email: michael.otieno@gmail.com (pre-filled, cannot change)</li>
        <li>Full Name: Michael Odhiambo Otieno (pre-filled)</li>
        <li>Phone: +254 722 345678 (pre-filled)</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Michael Creates His Password</h4>
      <p>Michael enters:</p>
      <ul>
        <li><strong>Password:</strong> ••••••••••</li>
        <li><strong>Confirm Password:</strong> ••••••••••</li>
      </ul>
      
      <p>He clicks <strong>"Create Account & Claim Profile"</strong>.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Michael's Account Is Created and Linked</h4>
      <p><strong>What happens in LigiOpen:</strong></p>
      <ul>
        <li>A new user account is created for Michael</li>
        <li>His shadow player record (ID: 1045) is automatically linked to his new user account</li>
        <li><code>isShadow</code> changes from <code>true</code> → <code>false</code></li>
        <li>The invitation token is marked as <code>ACCEPTED</code> and can no longer be used</li>
      </ul>
      
      <p><strong>What Michael sees:</strong></p>
      <p><em>"Welcome to LigiOpen, Michael! Your player profile has been successfully claimed."</em></p>
      
      <p>Michael is logged in and taken to his player dashboard.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">4</div>
    <div class="step-content">
      <h4>Michael Explores His Dashboard</h4>
      <p>Michael can now see:</p>
      <ul>
        <li><strong>Personal Stats:</strong> Matches played: 0, Goals: 0, Assists: 0, Cards: 0</li>
        <li><strong>Team:</strong> AFC Leopards First Team (FKF Premier League)</li>
        <li><strong>Jersey Number:</strong> 9</li>
        <li><strong>Upcoming Fixtures:</strong> (fixtures will appear once generated)</li>
        <li><strong>Profile Settings:</strong> He can update his bio, upload a profile photo, add emergency contacts</li>
      </ul>
    </div>
  </div>
</div>

<div class="tip-box">
  <strong>🎉 Profile Claimed Successfully!</strong><br>
  Michael is now a <strong>linked player</strong>. He has full control over his LigiOpen account, can view his match history and stats, and will receive notifications about upcoming matches. Peter (the club admin) can still update administrative fields like jersey number and team assignment.
</div>

---

### Step 4: Michael Plays His First Match

Two weeks later, AFC Leopards plays their opening match against Gor Mahia FC. Michael starts as the striker wearing number 9.

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Match Day: AFC Leopards 2-1 Gor Mahia FC</h4>
      <p><strong>Venue:</strong> Nyayo National Stadium<br>
      <strong>Date:</strong> Saturday, August 17, 2025<br>
      <strong>Kick-off:</strong> 3:00 PM</p>
      
      <p><strong>45th minute:</strong> Michael scores! He receives a through ball from his teammate and slots it past the goalkeeper. The stadium erupts!</p>
      
      <p><strong>What the referee does:</strong></p>
      <p>After the match, the referee submits the match result via LigiOpen:</p>
      <ul>
        <li>Final Score: AFC Leopards 2, Gor Mahia 1</li>
        <li>Goal scorers: Michael Otieno (45'), James Wanjala (78')</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Michael's Stats Are Automatically Updated</h4>
      <p><strong>What happens in LigiOpen:</strong></p>
      <ul>
        <li>Michael's player stats for the 2025/26 season are updated:
          <ul>
            <li>Matches Played: 0 → 1</li>
            <li>Goals: 0 → 1</li>
            <li>Minutes Played: 0 → 90</li>
          </ul>
        </li>
        <li>AFC Leopards' team stats are updated (GF +2)</li>
        <li>The standings table is recalculated (AFC Leopards moves to 1st place with 3 points)</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Michael Checks His Profile</h4>
      <p>That evening, Michael logs into LigiOpen on his phone.</p>
      
      <p><strong>His updated stats:</strong></p>
      <table style="font-size: 0.9rem; margin-top: 1rem;">
        <thead>
          <tr>
            <th>Season</th>
            <th>Matches</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Yellow Cards</th>
            <th>Red Cards</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025/26</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      
      <p><strong>Recent Matches:</strong></p>
      <ul>
        <li>✅ <strong>AFC Leopards 2-1 Gor Mahia</strong> (Aug 17, 2025)<br>
        <em>⚽ Scored in 45'</em></li>
      </ul>
      
      <p>Michael shares his stats on social media. His friends congratulate him on his debut goal!</p>
    </div>
  </div>
</div>

---

## 🔒 Player Eligibility Rules

LigiOpen enforces strict eligibility rules to maintain fairness and prevent clubs from "poaching" players mid-season.

<div class="info-box">
  <strong>🔒 The Golden Rule</strong><br><br>
  A player can only be registered to <strong>ONE CLUB per LEAGUE per SEASON</strong>.<br><br>
  Once registered, a player cannot switch to another club in the same league during that season (except during designated transfer windows).
</div>

### What This Means in Practice

<div class="card-grid">
  <div class="card">
    <span class="icon">✅</span>
    <h3>Allowed</h3>
    <p>Michael Otieno is registered to <strong>AFC Leopards</strong> in <strong>FKF Premier League</strong> for <strong>2025/26 season</strong>.<br><br>
    He <strong>cannot</strong> also play for Gor Mahia in FKF Premier League this season.</p>
  </div>

  <div class="card">
    <span class="icon">✅</span>
    <h3>Allowed</h3>
    <p>Michael is registered to <strong>AFC Leopards</strong> in <strong>FKF Premier League</strong>.<br><br>
    He <strong>can also</strong> play for <strong>Harambee Stars</strong> (national team) since that's a different competition entirely.</p>
  </div>

  <div class="card">
    <span class="icon">✅</span>
    <h3>Allowed</h3>
    <p>Michael was registered to <strong>Tusker FC</strong> in the <strong>2024/25 season</strong>.<br><br>
    He transferred to <strong>AFC Leopards</strong> for the <strong>2025/26 season</strong>. This is allowed because it's a new season.</p>
  </div>

  <div class="card">
    <span class="icon">❌</span>
    <h3>Not Allowed</h3>
    <p>Michael is registered to <strong>AFC Leopards First Team</strong>.<br><br>
    He <strong>cannot</strong> also be registered to <strong>AFC Leopards Reserves</strong> in the same season (same club, but different teams in the same league).</p>
  </div>
</div>

---

## 👕 Jersey Numbers and Squad Limits

### Jersey Number Rules

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Jersey Numbers Must Be Unique Per Team</h4>
      <p>No two players on the same team can wear the same jersey number.</p>
      
      <p><strong>Example:</strong></p>
      <ul>
        <li>Michael Otieno wears #9 for AFC Leopards First Team</li>
        <li>Peter tries to register another striker and assign them #9</li>
        <li>LigiOpen rejects this: <em>"Jersey number 9 is already taken by Michael Otieno"</em></li>
        <li>Peter assigns the new striker #11 instead</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Jersey Numbers Can Be Changed</h4>
      <p>Club admins can change a player's jersey number at any time during the season (e.g., if a new signing wants a specific number).</p>
      
      <p><strong>Example:</strong></p>
      <ul>
        <li>Michael currently wears #9</li>
        <li>AFC Leopards signs a legendary striker who wants #9</li>
        <li>Peter changes Michael's number from #9 → #19</li>
        <li>Peter assigns the new player #9</li>
        <li>Both players are happy</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Jersey Number Range</h4>
      <p>LigiOpen allows jersey numbers from <strong>1 to 99</strong>.</p>
      
      <p>Common conventions (not enforced, but traditional):</p>
      <ul>
        <li><strong>1:</strong> Goalkeeper</li>
        <li><strong>2-5:</strong> Defenders</li>
        <li><strong>6-8:</strong> Midfielders</li>
        <li><strong>9-11:</strong> Forwards</li>
        <li><strong>12+:</strong> Squad players</li>
      </ul>
    </div>
  </div>
</div>

### Squad Size Limits

Most leagues impose a **maximum squad size** to ensure competitive balance.

<div class="info-box">
  <strong>📊 Typical Squad Limits</strong><br><br>
  <strong>Football (FKF Premier League):</strong> Maximum 30 players per team<br>
  <strong>Rugby (Kenya Cup):</strong> Maximum 35 players per team<br>
  <strong>Basketball (KBF Premier):</strong> Maximum 15 players per team<br><br>
  Clubs can register fewer players than the maximum, but <strong>cannot exceed</strong> the limit set by the league.
</div>

<div class="warning-box">
  <strong>⚠️ What Happens If a Club Exceeds Squad Limit?</strong><br>
  If Peter tries to register a 31st player to AFC Leopards (which has a 30-player limit in FKF Premier League), LigiOpen rejects the registration:<br><br>
  <em>"Cannot register player. AFC Leopards First Team has reached the maximum squad size of 30 players."</em><br><br>
  Peter must either:<br>
  • Release an existing player, or<br>
  • Wait for the next season to register additional players
</div>

---

## 🔄 Player Transfers Mid-Season

Sometimes a player needs to move to a different club during the season — for career advancement, personal reasons, or financial opportunities.

<div class="scenario">
  <h3>🔄 Scenario: James Wanjala Transfers from AFC Leopards to Tusker FC</h3>
  
  <p><strong class="character">James Wanjala</strong> is a midfielder currently playing for AFC Leopards. In December 2025 (halfway through the season), Tusker FC offers to sign him. James accepts.</p>
  
  <p>Let's see how the transfer process works in LigiOpen.</p>
</div>

### Step 1: Transfer Window Check

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Are Transfer Windows Open?</h4>
      <p>Most leagues have designated <strong>transfer windows</strong> — specific periods during the season when players can move between clubs.</p>
      
      <p><strong>FKF Premier League Transfer Windows (Example):</strong></p>
      <ul>
        <li><strong>Pre-Season Window:</strong> June 1 – July 31 (before season starts)</li>
        <li><strong>Mid-Season Window:</strong> December 1 – December 31 (winter break)</li>
      </ul>
      
      <p>James' transfer happens in <strong>December 2025</strong> — the mid-season window is open. ✅</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>What If Transfer Windows Are Closed?</h4>
      <p>If James tried to transfer in October (outside the transfer window), LigiOpen would block the transfer:</p>
      
      <p><em>"Player transfers are only allowed during designated transfer windows: June 1-31 and December 1-31."</em></p>
      
      <p>Transfers outside the window require <strong>special approval</strong> from the league (e.g., emergency medical situations, club bankruptcy).</p>
    </div>
  </div>
</div>

---

### Step 2: AFC Leopards Releases James

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Peter (AFC Leopards Admin) Initiates the Release</h4>
      <p>Peter navigates to <strong>James Wanjala's player profile</strong> → <strong>Transfer Options</strong> → <strong>Release Player</strong>.</p>
      
      <p>Peter confirms: <em>"Release James Wanjala from AFC Leopards First Team."</em></p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>James Is Released</h4>
      <p><strong>What happens in LigiOpen:</strong></p>
      <ul>
        <li>James' team assignment changes from <code>AFC Leopards First Team</code> → <code>null</code> (no team)</li>
        <li>His jersey number (#8) is freed up for AFC Leopards to assign to another player</li>
        <li>His match history and stats with AFC Leopards are <strong>preserved</strong> (he played 15 matches, scored 3 goals — this remains on record)</li>
        <li>James' player status changes to <code>FREE AGENT</code></li>
      </ul>
      
      <p><strong>What James sees:</strong></p>
      <p><em>"You have been released from AFC Leopards First Team. You are now a free agent and can sign with another club."</em></p>
    </div>
  </div>
</div>

---

### Step 3: Tusker FC Registers James

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Grace (Tusker FC Admin) Registers James</h4>
      <p>Grace navigates to <strong>Tusker FC First Team</strong> → <strong>Squad</strong> → <strong>Register Existing Player</strong>.</p>
      
      <p>She searches for James Wanjala by email or name.</p>
      
      <p>LigiOpen finds James' existing player profile (ID: 1052) and shows:</p>
      <ul>
        <li><strong>Name:</strong> James Wanjala</li>
        <li><strong>Previous Team:</strong> AFC Leopards First Team (released)</li>
        <li><strong>Season Stats:</strong> 15 matches, 3 goals (with AFC Leopards)</li>
        <li><strong>Status:</strong> FREE AGENT (eligible to sign)</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Grace Assigns James to Tusker FC</h4>
      <p>Grace assigns:</p>
      <ul>
        <li><strong>Team:</strong> Tusker FC First Team</li>
        <li><strong>Jersey Number:</strong> 10 (his preferred number, available at Tusker)</li>
      </ul>
      
      <p>Grace clicks <strong>"Register Player"</strong>.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>James Is Now a Tusker FC Player</h4>
      <p><strong>What happens in LigiOpen:</strong></p>
      <ul>
        <li>James' team assignment changes from <code>null</code> → <code>Tusker FC First Team</code></li>
        <li>His jersey number is set to #10 for Tusker FC</li>
        <li>He appears on Tusker FC's squad roster</li>
        <li>His eligibility status changes to <code>ELIGIBLE</code> (can play for Tusker in the next match)</li>
        <li><strong>Important:</strong> His season stats are <strong>cumulative</strong> across both clubs:
          <ul>
            <li>Matches: 15 (AFC) + future matches (Tusker)</li>
            <li>Goals: 3 (AFC) + future goals (Tusker)</li>
          </ul>
        </li>
      </ul>
      
      <p><strong>What James sees:</strong></p>
      <p><em>"Welcome to Tusker FC! You are now registered to play for Tusker FC First Team in FKF Premier League 2025/26."</em></p>
    </div>
  </div>
</div>

<div class="info-box">
  <strong>📌 Transfer Completion</strong><br><br>
  <strong>Release:</strong> AFC Leopards removes James from their squad<br>
  <strong>Register:</strong> Tusker FC adds James to their squad<br>
  <strong>Result:</strong> James can now play for Tusker FC. His stats are preserved but continue to accumulate under Tusker's banner.<br><br>
  The transfer is <strong>instant</strong> and <strong>recorded permanently</strong> in LigiOpen's database.
</div>

---

## 🛑 Player Suspensions and Disciplinary Actions

Players can be suspended from matches due to red cards, accumulation of yellow cards, or disciplinary violations.

<div class="scenario">
  <h3>🟥 Scenario: Brian Omondi Receives a Red Card</h3>
  
  <p><strong class="character">Brian Omondi</strong> plays for <strong>Kakamega Homeboyz</strong>. In a heated match against Bandari FC, Brian commits a serious foul in the 67th minute. The referee shows him a <strong>red card</strong> and sends him off the pitch.</p>
  
  <p>What happens next in LigiOpen?</p>
</div>

### Step 1: Referee Records the Red Card

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Referee Submits Match Result with Disciplinary Actions</h4>
      <p>After the match ends, the referee submits the result via LigiOpen:</p>
      
      <p><strong>Match:</strong> Kakamega Homeboyz 1-2 Bandari FC<br>
      <strong>Disciplinary Actions:</strong></p>
      <ul>
        <li><strong>Red Card:</strong> Brian Omondi (Kakamega Homeboyz) — 67' — Serious foul play</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>LigiOpen Automatically Processes the Red Card</h4>
      <p><strong>What happens immediately:</strong></p>
      <ul>
        <li>A <strong>Discipline Record</strong> is created for Brian:
          <ul>
            <li>Type: RED CARD</li>
            <li>Match: Kakamega Homeboyz vs Bandari FC (Sept 10, 2025)</li>
            <li>Reason: Serious foul play</li>
          </ul>
        </li>
        <li>Brian's season stats are updated:
          <ul>
            <li>Red Cards: 0 → 1</li>
          </ul>
        </li>
        <li>Brian is <strong>automatically suspended</strong> for the next 1 match (standard FKF rule for straight red cards)</li>
        <li>Brian's eligibility status changes to <code>SUSPENDED</code> for the next fixture</li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Brian and His Coach Are Notified</h4>
      <p><strong>Brian receives an email:</strong></p>
      <p><em>"You received a red card in Kakamega Homeboyz vs Bandari FC. You are suspended for the next 1 match (vs Gor Mahia on Sept 17)."</em></p>
      
      <p><strong>Kakamega Homeboyz admin receives a notification:</strong></p>
      <p><em>"Brian Omondi is suspended for your next match due to a red card."</em></p>
    </div>
  </div>
</div>

---

### Step 2: Brian Serves His Suspension

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Next Match: Kakamega Homeboyz vs Gor Mahia</h4>
      <p><strong>Date:</strong> September 17, 2025<br>
      <strong>Brian's Status:</strong> SUSPENDED (cannot play)</p>
      
      <p>When Kakamega Homeboyz's coach tries to select the starting lineup, Brian's name appears <strong>grayed out</strong> with a 🛑 icon:</p>
      
      <p><em>"Brian Omondi (SUSPENDED — red card vs Bandari FC)"</em></p>
      
      <p>The coach cannot select Brian for the match. He must choose another player.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>The Match Is Played Without Brian</h4>
      <p>Kakamega Homeboyz plays against Gor Mahia. Brian watches from the stands (or at home).</p>
      
      <p><strong>Result:</strong> Kakamega Homeboyz 0-3 Gor Mahia</p>
      
      <p>Brian's suspension is served. His eligibility status changes back to <code>ELIGIBLE</code> after the match ends.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Brian Returns for the Next Match</h4>
      <p><strong>Following Week:</strong> Kakamega Homeboyz vs Tusker FC<br>
      <strong>Brian's Status:</strong> ELIGIBLE ✅</p>
      
      <p>Brian is selected for the starting lineup and plays the full 90 minutes. His suspension is over.</p>
    </div>
  </div>
</div>

<div class="info-box">
  <strong>📌 Automatic Suspension Rules (FKF Example)</strong><br><br>
  <strong>Straight Red Card:</strong> 1-match suspension (automatic)<br>
  <strong>Second Yellow Card in Same Match:</strong> 1-match suspension<br>
  <strong>Violent Conduct Red Card:</strong> 3-match suspension (requires manual review by league admin)<br>
  <strong>5 Yellow Cards in a Season:</strong> 1-match suspension (automatic)<br>
  <strong>10 Yellow Cards in a Season:</strong> 2-match suspension (automatic)
</div>

---

### Yellow Card Accumulation

<div class="scenario">
  <h3>🟨 Scenario: Grace Atieno Accumulates 5 Yellow Cards</h3>
  
  <p><strong class="character">Grace Atieno</strong> plays for <strong>Vihiga Queens</strong> (women's football). She's a tough defender known for tactical fouls. Over the course of the season, she picks up yellow cards in 5 different matches.</p>
</div>

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Grace's Yellow Card History</h4>
      <table style="font-size: 0.9rem; margin-top: 1rem;">
        <thead>
          <tr>
            <th>Match</th>
            <th>Date</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vihiga Queens vs Thika Queens</td>
            <td>Aug 20</td>
            <td>Tactical foul</td>
          </tr>
          <tr>
            <td>Gaspo Women vs Vihiga Queens</td>
            <td>Sept 3</td>
            <td>Dissent</td>
          </tr>
          <tr>
            <td>Vihiga Queens vs Ulinzi Starlets</td>
            <td>Sept 17</td>
            <td>Handball</td>
          </tr>
          <tr>
            <td>Trans Nzoia Falcons vs Vihiga Queens</td>
            <td>Oct 1</td>
            <td>Late tackle</td>
          </tr>
          <tr>
            <td>Vihiga Queens vs Kisumu All-Starlets</td>
            <td>Oct 15</td>
            <td>Tactical foul</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>5th Yellow Card Triggers Automatic Suspension</h4>
      <p>When the referee submits the result for the Oct 15 match (Grace's 5th yellow), LigiOpen automatically:</p>
      <ul>
        <li>Detects that Grace now has 5 yellow cards in the season</li>
        <li>Applies a <strong>1-match suspension</strong></li>
        <li>Grace's eligibility status changes to <code>SUSPENDED</code> for the next match</li>
      </ul>
      
      <p><strong>Grace receives a notification:</strong></p>
      <p><em>"You have accumulated 5 yellow cards. You are suspended for the next match."</em></p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Grace Serves Her Suspension</h4>
      <p>Vihiga Queens' next match is against <strong>Nakuru Queens</strong> on Oct 22.</p>
      
      <p>Grace cannot play. She watches from the stands.</p>
      
      <p>After the match ends, her yellow card count is <strong>reset to 0</strong> (league rule: yellow cards are cleared after suspension is served). Grace returns to <code>ELIGIBLE</code> status.</p>
    </div>
  </div>
</div>

<div class="tip-box">
  <strong>💡 Yellow Card Amnesty</strong><br>
  Many leagues (including FKF) have a <strong>yellow card amnesty</strong> at certain points in the season:<br><br>
  <strong>Example:</strong> After matchday 20, all yellow cards are wiped clean. Players start fresh with 0 yellow cards. This prevents key players from missing important end-of-season matches due to accumulated cards from early in the season.
</div>

---

## 📊 Player Statistics Tracking

LigiOpen automatically tracks comprehensive player statistics throughout the season.

### What Stats Are Tracked?

<div class="card-grid">
  <div class="card">
    <span class="icon">⚽</span>
    <h3>Goals & Assists</h3>
    <p><strong>Goals:</strong> Total goals scored<br>
    <strong>Assists:</strong> Total assists provided<br>
    Updated automatically when referees submit match results with goal scorers.</p>
  </div>

  <div class="card">
    <span class="icon">🎽</span>
    <h3>Appearances</h3>
    <p><strong>Matches Played:</strong> Total matches appeared in<br>
    <strong>Minutes Played:</strong> Total time on the pitch<br>
    Recorded via match sheets and substitution data.</p>
  </div>

  <div class="card">
    <span class="icon">🟨</span>
    <h3>Disciplinary Record</h3>
    <p><strong>Yellow Cards:</strong> Total bookings<br>
    <strong>Red Cards:</strong> Total dismissals<br>
    Tracked automatically when referees report cards.</p>
  </div>

  <div class="card">
    <span class="icon">🧤</span>
    <h3>Goalkeeper Stats</h3>
    <p><strong>Clean Sheets:</strong> Matches without conceding a goal<br>
    <strong>Goals Conceded:</strong> Total goals allowed<br>
    Specific to goalkeepers.</p>
  </div>
</div>

### Viewing Player Stats

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Player Dashboard</h4>
      <p>Michael Otieno logs into LigiOpen and views his dashboard:</p>
      
      <table style="font-size: 0.9rem; margin-top: 1rem;">
        <thead>
          <tr>
            <th>Stat</th>
            <th>2025/26 Season</th>
            <th>Career Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Matches Played</strong></td>
            <td>18</td>
            <td>62</td>
          </tr>
          <tr>
            <td><strong>Goals</strong></td>
            <td>12</td>
            <td>35</td>
          </tr>
          <tr>
            <td><strong>Assists</strong></td>
            <td>7</td>
            <td>18</td>
          </tr>
          <tr>
            <td><strong>Yellow Cards</strong></td>
            <td>3</td>
            <td>11</td>
          </tr>
          <tr>
            <td><strong>Red Cards</strong></td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td><strong>Minutes Played</strong></td>
            <td>1,530</td>
            <td>4,890</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>League-Wide Stats Leaderboard</h4>
      <p>Anyone browsing LigiOpen can view league-wide statistics:</p>
      
      <p><strong>FKF Premier League 2025/26 Top Scorers:</strong></p>
      <table style="font-size: 0.9rem; margin-top: 1rem;">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Team</th>
            <th>Goals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><strong>John Makwatta</strong></td>
            <td>Gor Mahia FC</td>
            <td>15</td>
          </tr>
          <tr>
            <td>2</td>
            <td><strong>Michael Otieno</strong></td>
            <td>AFC Leopards</td>
            <td>12</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Henry Meja</td>
            <td>Tusker FC</td>
            <td>11</td>
          </tr>
        </tbody>
      </table>
      
      <p>Michael is 2nd in the league's top scorers list!</p>
    </div>
  </div>
</div>

---

## 📅 Player Match Availability

Players can declare their availability for upcoming matches — especially useful for managing injuries, personal commitments, and travel schedules.

<div class="scenario">
  <h3>📅 Scenario: Michael Declares Availability for Next Match</h3>
  
  <p>AFC Leopards' next match is against Tusker FC on Saturday, November 10. Michael logs into LigiOpen to confirm his availability.</p>
</div>

<div class="workflow">
  <div class="workflow-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Michael Views Upcoming Fixtures</h4>
      <p>Michael navigates to <strong>My Team</strong> → <strong>Upcoming Matches</strong>.</p>
      
      <p>He sees:</p>
      <ul>
        <li><strong>Nov 10:</strong> AFC Leopards vs Tusker FC (Nyayo Stadium, 3:00 PM)<br>
        <em>Availability: Not yet declared</em></li>
      </ul>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Michael Declares His Availability</h4>
      <p>Michael clicks on the match and selects:</p>
      <ul>
        <li><strong>Status:</strong> AVAILABLE ✅</li>
        <li><strong>Notes:</strong> "Fully fit and ready to play"</li>
      </ul>
      
      <p>Michael clicks <strong>"Save Availability"</strong>.</p>
    </div>
  </div>

  <div class="workflow-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Coach Sees Michael's Availability</h4>
      <p>David Omondi (AFC Leopards' head coach) logs into LigiOpen and views the squad availability for the Nov 10 match:</p>
      
      <table style="font-size: 0.9rem; margin-top: 1rem;">
        <thead>
          <tr>
            <th>Player</th>
            <th>Position</th>
            <th>Availability</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: #d4edda;">
            <td><strong>Michael Otieno</strong></td>
            <td>ST</td>
            <td>✅ AVAILABLE</td>
            <td>"Fully fit and ready to play"</td>
          </tr>
          <tr style="background: #f8d7da;">
            <td>James Wanjala</td>
            <td>MF</td>
            <td>❌ UNAVAILABLE</td>
            <td>"Ankle injury — out for 2 weeks"</td>
          </tr>
          <tr style="background: #fff3cd;">
            <td>Brian Ochieng</td>
            <td>DF</td>
            <td>⚠️ MAYBE</td>
            <td>"Recovering from flu — will decide Friday"</td>
          </tr>
          <tr>
            <td>Peter Thiong'o</td>
            <td>GK</td>
            <td>— Not declared</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      
      <p>David can plan his starting lineup based on confirmed availability.</p>
    </div>
  </div>
</div>

<div class="info-box">
  <strong>📌 Availability Statuses</strong><br><br>
  <strong>AVAILABLE:</strong> Player is fit and ready to play ✅<br>
  <strong>UNAVAILABLE:</strong> Player cannot play (injury, personal reasons, suspension) ❌<br>
  <strong>MAYBE:</strong> Player's status is uncertain (will be decided closer to match day) ⚠️<br>
  <strong>Not declared:</strong> Player hasn't updated their availability yet
</div>

---

## 🏉 Multi-Sport: Player Management Across Different Sports

Player management works consistently across all sports, with sport-specific adaptations.

### Rugby Players

<div class="scenario">
  <h3>🏉 Example: Registering Rugby Players</h3>
  
  <p><strong>Kenya Harlequins RFC</strong> registers their rugby squad for the Kenya Cup.</p>
  
  <p><strong>Key Differences from Football:</strong></p>
  <ul>
    <li><strong>Squad Size:</strong> Rugby allows up to 35 players per team (vs 30 for football)</li>
    <li><strong>Positions:</strong> Rugby-specific positions (Prop, Hooker, Lock, Fly-half, etc.)</li>
    <li><strong>Jersey Numbers:</strong> Rugby traditionally uses #1-15 for starters, #16-23 for substitutes</li>
    <li><strong>Substitutions:</strong> Rugby allows 8 substitutions per match (vs 5 for football)</li>
  </ul>
  
  <p><strong>Registration Process:</strong> Identical to football — coaches register players (shadow or linked), assign positions and jersey numbers, and players claim their profiles.</p>
</div>

### Basketball Players

<div class="scenario">
  <h3>🏀 Example: Registering Basketball Players</h3>
  
  <p><strong>Nairobi City Thunder</strong> registers their basketball squad for the KBF Premier League.</p>
  
  <p><strong>Key Differences from Football:</strong></p>
  <ul>
    <li><strong>Squad Size:</strong> Basketball allows 12-15 players per team (smaller roster)</li>
    <li><strong>Positions:</strong> Basketball-specific positions (Point Guard, Shooting Guard, Small Forward, Power Forward, Center)</li>
    <li><strong>Jersey Numbers:</strong> Basketball traditionally uses #4-15 (avoiding #1, #2, #3 for historical reasons)</li>
    <li><strong>Height/Weight:</strong> More critical in basketball (typically required fields)</li>
  </ul>
  
  <p><strong>Registration Process:</strong> Identical structure — coaches register players, assign numbers, players claim profiles.</p>
</div>

---

## ✅ Player Management Best Practices

<div class="tip-box">
  <strong>💡 Register Your Squad Early</strong><br>
  Complete player registration as soon as your team is confirmed for the season. This gives players time to claim their profiles and familiarize themselves with LigiOpen before the first match.
</div>

<div class="tip-box">
  <strong>💡 Send Invitations Immediately</strong><br>
  As soon as you register a shadow player, send them an invitation. The sooner they claim their profile, the sooner they can confirm match availability and view their stats.
</div>

<div class="tip-box">
  <strong>💡 Keep Player Information Updated</strong><br>
  Regularly update player details (phone numbers, emergency contacts, injury status). Accurate information is critical for match-day coordination and player safety.
</div>

<div class="tip-box">
  <strong>💡 Track Player Availability</strong><br>
  Encourage your players to declare their availability for each match. This helps coaches plan lineups and avoid last-minute surprises on match day.
</div>

<div class="tip-box">
  <strong>💡 Monitor Disciplinary Records</strong><br>
  Keep an eye on yellow card accumulation and suspensions. Plan ahead so you have backup players ready when key players are suspended.
</div>

---

## 🔗 Related Documentation

<div class="card-grid">
  <div class="card">
    <h3><a href="clubs-teams.html">⚽ Clubs & Teams</a></h3>
    <p>Learn how clubs register and create teams before you can add players to those teams.</p>
    <a href="clubs-teams.html" class="btn">Read More →</a>
  </div>

  <div class="card">
    <h3><a href="fixtures-matches.html">📅 Fixtures & Matches</a></h3>
    <p>Understand how matches are scheduled and how player stats are recorded during matches.</p>
    <a href="fixtures-matches.html" class="btn">Read More →</a>
  </div>

  <div class="card">
    <h3><a href="standings.html">📊 Standings & Rankings</a></h3>
    <p>See how individual player performance (goals, assists) contributes to team standings.</p>
    <a href="standings.html" class="btn">Read More →</a>
  </div>

  <div class="card">
    <h3><a href="officials.html">👨‍⚖️ Officials & Referees</a></h3>
    <p>Learn how referees record player events (goals, cards) during matches.</p>
    <a href="officials.html" class="btn">Read More →</a>
  </div>

  <div class="card">
    <h3><a href="user-roles.html">👥 User Roles</a></h3>
    <p>Understand what permissions players have versus club admins and league admins.</p>
    <a href="user-roles.html" class="btn">Read More →</a>
  </div>

  <div class="card">
    <h3><a href="leagues-competitions.html">🏆 Leagues & Competitions</a></h3>
    <p>See the bigger picture of how players fit into divisions, competitions, and seasons.</p>
    <a href="leagues-competitions.html" class="btn">Read More →</a>
  </div>
</div>

---

<div style="text-align: center; margin-top: 3rem; padding: 2rem; background: #f8f9fa; border-radius: 8px;">
  <h2 style="color: var(--primary-color); margin-bottom: 1rem;">🌟 Every Player Matters</h2>
  <p style="font-size: 1.1rem; color: #555;">
    From seasoned professionals at Kasarani Stadium to aspiring youth players on community pitches,<br>
    LigiOpen tracks every goal, every assist, every card, and every appearance with equal precision and care.
  </p>
  <p style="margin-top: 1rem;">
    <strong>Register your players today and let their journey begin!</strong>
  </p>
</div>
