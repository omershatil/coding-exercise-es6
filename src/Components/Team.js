/**
 * Team class.
 * Contains the name of the team and accumulated points.
 * @type {exports.Team}
 */
exports.Team = class {
  constructor(name) {
    this.name = name;
    this.points = 0;
  }

  addPoints(points) {
    this.points += points;
  }
  getName() {
    return this.name;
  }
  getPoints() {
    return this.points;
  }
  /**
   * Sort two teams according to the following criteria:
   *  1) Team with more points show first.
   *  2) If teams have the same number of points, the (case-insensitive) alphabet determines the order.
   * @param team1
   * @param team2
   * @returns {number}
   */
  static sort(team1, team2) {
    if (team1.getPoints() === team2.getPoints()) {
      if (team2.getName().toLowerCase() > team1.getName().toLowerCase()) {
        return -1;
      } else {
        return 1;
      }
    }
    return team2.getPoints() - team1.getPoints();
  }
};