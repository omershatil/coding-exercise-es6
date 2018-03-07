const Team = require('../../Components/Team').Team;

test('should set up a Team object with default values', () => {
  const teamName = 'Warriors';
  const team = new Team(teamName);
  expect(team.getName()).toBe('Warriors');
  expect(team.getPoints()).toBe(0);
});
test('should be able to add points', () => {
  const teamName = 'Warriors';
  const team = new Team(teamName);
  team.addPoints(1);
  team.addPoints(2);
  expect(team.getPoints()).toBe(3);
});
test('should be able sort correctly, according to points and name', () => {
  const teams = [];

  const team1Name = 'Mediocres';
  const team1 = new Team(team1Name);
  team1.addPoints(2);
  teams.push(team1);

  const team2Name = 'The Winners';
  const team2 = new Team(team2Name);
  team2.addPoints(3);
  teams.push(team2);

  const team3Name = 'Losers';
  const team3 = new Team(team3Name);
  teams.push(team3);

  const team4Name = 'Also Mediocres';
  const team4 = new Team(team4Name);
  team4.addPoints(2);
  teams.push(team4);

  // sort and then validate one by one the expected order
  teams.sort(Team.sort);
  let team = teams.shift();
  expect(team.getName()).toBe(team2Name);
  team = teams.shift();
  expect(team.getName()).toBe(team4Name);
  team = teams.shift();
  expect(team.getName()).toBe(team1Name);
  team = teams.shift();
  expect(team.getName()).toBe(team3Name);
});
