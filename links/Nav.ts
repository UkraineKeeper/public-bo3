import { Header } from "../page-objects/base-pages/Header";

enum test {

}

export const navHeader = [
    { name: 'CS2', action: (header: Header) => header.openCs2() },
    { name: 'Valorant', action: (header: Header) => header.openValorant() },
    { name: 'Lol', action: (header: Header) => header.openLol() },
    { name: 'Dota', action: (header: Header) => header.openDota() },
    { name: 'Games', action: (header: Header) => header.openGames() },
    { name: 'Rainbow6', action: (header: Header) => header.openR6() },
    { name: 'Random discipline', action: (header: Header) => header.openRandomGameDiscipline() },
    { name: 'Random discipline with forum', action: (header: Header) => header.openRandomGameDisciplineWithForum() },
];

const baseNavMenu = [
    { name: 'Matches Upcoming', action: (header: Header) => header.openMatchesUpcoming() },
    { name: 'Matches Finished', action: (header: Header) => header.openMatchesFinished() },
    { name: 'Tournaments Upcoming', action: (header: Header) => header.openTournamentsUpcoming() },
    { name: 'Tournaments Finished', action: (header: Header) => header.openTournamentsFinished() },
    { name: 'Players', action: (header: Header) => header.openPlayers() },
    { name: 'Teams Earnings', action: (header: Header) => header.openTeamsEarnings() },
    { name: 'Teams Valve Ranking', action: (header: Header) => header.openTeamsValveRanking() },
    { name: 'News', action: (header: Header) => header.openNews() },
    { name: 'Forum', action: (header: Header) => header.openForum() },
    { name: 'Articles', action: (header: Header) => header.openArticles() },
    { name: 'Predictions', action: (header: Header) => header.openPredictions() },
    { name: 'Records', action: (header: Header) => header.openRecords() },
    { name: 'Teams Compare', action: (header: Header) => header.openTeamsCompare() },
    { name: 'Players Compare', action: (header: Header) => header.openPlayersCompare() },
    { name: 'Pickems', action: (header: Header) => header.openPickems() },
    { name: 'Crosshairs', action: (header: Header) => header.openCrosshairs() },
    { name: 'Heroes', action: (header: Header) => header.openHeroes() },
    { name: 'Champions', action: (header: Header) => header.openChampions() },
];

const disciplineConfig = {
    CS: ['Crosshairs', 'Heroes', 'Champions'],
    Valorant: ['Teams Valve Ranking', 'Records', 'Teams Compare', 'Players Compare', 'Heroes', 'Champions'],
    Rainbow6: ['Players', 'Teams Earnings', 'Teams Valve Ranking', 'Records', 'Teams Compare', 'Players Compare', 'Pickems', 'Crosshairs', 'Heroes', 'Champions'],
    Dota: ['Teams Valve Ranking', 'Records', 'Teams Compare', 'Players Compare', 'Pickems', 'Crosshairs', 'Forum', 'Champions'],
    LoL: ['Teams Valve Ranking', 'Records', 'Teams Compare', 'Players Compare', 'Pickems', 'Crosshairs', 'Heroes'],
    Games: ['Matches Upcoming', 'Matches Finished', 'Tournaments Upcoming', 'Tournaments Finished', 'Players', 'Teams Earnings', 'Teams Valve Ranking', 'Records', 'Teams Compare', 'Players Compare', 'Pickems', 'Crosshairs', 'Predictions', 'Heroes', 'Champions'],
};

function createNavMenuForDiscipline(discipline: string) {
    const excludedItems = disciplineConfig[discipline] || [];

    const navMenu = baseNavMenu.filter(item => !excludedItems.includes(item.name));

    return navMenu;
}

export const csNavMenu = createNavMenuForDiscipline('CS');
export const valorantNavMenu = createNavMenuForDiscipline('Valorant');
export const dotaNavMenu = createNavMenuForDiscipline('Dota');
export const lolNavMenu = createNavMenuForDiscipline('LoL');
export const rainbow6NavMenu = createNavMenuForDiscipline('Rainbow6');
export const gamesNavMenu = createNavMenuForDiscipline('Games');