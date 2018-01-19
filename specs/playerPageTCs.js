describe('Player Page Tests', () => {

    let playerFullName = global.importedPlayerTag.playerFullName;
    let playerCountry = global.importedPlayerTag.playerCountryName;

    beforeEach(() => {
        // Here will be preconditions, they are same for all tests in this spec / suite
        browser.get('players/player.08793.tiger-woods.html');
    });
    
    xit('Displayed Player Name matches feed', () => {

        let displayName = $('#playersListContainer').$('option[value*="08793"]').getAttribute('data-display-value');
        
       
        expect(displayName).toContain(playerFullName, 'Displayed Player Name does not match to feed');
    })

    xit('Displayed Country matches feed', () => {

        let displayCountry = $('.country').getText();

        expect(displayCountry).toContain(playerCountry, 'Displayed Country does not match to feed');
    })
    
})
