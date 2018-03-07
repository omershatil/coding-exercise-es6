const Team = require('./Team').Team;
/**
 * Ranker class.
 * Collects team data, ranks team and operates on it (prints it), when asked.
 * @type {exports.Ranker}
 */
exports.Ranker = class {
  constructor() {
    // The teams are added to this object so they can be
    // easily found later when sorting/printing
    this.teams = {};
  }

  getTeams() {
    return this.teams;
  }
  /**
   * Gets a line of text and converts it to a Team entry and adds it to 'teams'.
   * @param textEntry -- a single line of text containing team's name and points.
   */
  addGameScore(textEntry) {
    // extract each team's name and score
    const teamAndGoalsArray = textEntry.trim().split(',');
    const team1NameAndGoals = teamAndGoalsArray[0].split(' ');
    const team2NameAndGoals = teamAndGoalsArray[1].split(' ');
    const team1Score = team1NameAndGoals.pop();
    const team1Name = team1NameAndGoals.join(' ').trim();
    const team2Score = team2NameAndGoals.pop();
    const team2Name = team2NameAndGoals.join(' ').trim();
    let team1Points = 0;
    let team2Points = 0;

    // calculate how many points each team got
    if (team1Score > team2Score) {
      team1Points = 3;
    } else if (team1Score < team2Score) {
      team2Points = 3;
    } else {
      team1Points = team2Points = 1;
    }

    // now, update the points table in 'teams'. if not entry for the team, create a new one.
    if (team1Name in this.teams) {
      this.teams[team1Name].addPoints(team1Points);
    } else {
      const newTeam = new Team(team1Name);
      newTeam.addPoints(team1Points);
      this.teams[team1Name] = newTeam;
    }
    if (team2Name in this.teams) {
      this.teams[team2Name].addPoints(team2Points);
    } else {
      const newTeam = new Team(team2Name);
      newTeam.addPoints(team2Points);
      this.teams[team2Name] = newTeam;
    }
  }

  /**
   * Prints ranking to the console.
   * The format is hard-coded. Could improve on it, if needed, to enable different formats.
   */
  printRanking() {
    // turn the object into an array, so it's easy to sort and then sort.
    const teamsArray = Object.values(this.teams);
    teamsArray.sort(Team.sort);

    // Use the index for ranking. As we print, we keep track of the current rank for the case
    // we find more than one team with the same score. If that happens, we use the previous rank.
    let prevNumPoints = 0;
    let currRank = 0;
    teamsArray.forEach((team, i) => {
      let rank;
      if (team.getPoints() === prevNumPoints) {
        // same score => don't increment the rank
        rank = currRank;
      } else {
        // not the same score => go back to the index-base ranking
        rank = i + 1;
        currRank = rank;
      }
      console.log(`${rank}. ${team.getName()}, ${team.getPoints()} pts`);
      // remember this team's points to be used for comparison for the next team.
      prevNumPoints = team.getPoints();
    });
  }
};