// Importez les bibliothèques de test et d'assertion
import { expect } from 'chai';
import TeamGenerator from '../src/teamGenerator.js';

describe('TeamGenerator', () => {
  it('should generate teams with the correct structure', () => {
    // setup
    const players = ['Player1', 'Player2', 'Player3', 'Player4', 'Player5', 'Player6', 'Player7', 'Player8'];
    const teamGenerator = new TeamGenerator(players);

    // calls
    teamGenerator.generateTeams();
    const teams = teamGenerator.getTeams();

    // expect
    expect(teams).to.be.an('array');
    expect(teams).to.have.lengthOf.at.least(1);

    teams.forEach((team) => {
      expect(team).to.have.property('name').that.is.a('string');
      expect(team).to.have.property('players').that.is.an('array');
      expect(team.players).to.have.lengthOf.at.most(teamGenerator.playersPerTeam);
    });
  });
});
