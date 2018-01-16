describe('Player Page Tests', () => {

    // let searchField = $('[placeholder="Enter search keywords"]')
    let playerFullName = global.importedPlayerTag.playerFullName;
    let playerCountry = global.importedPlayerTag.playerCountryName;
    
    it('Displayed Player Name matches feed', () => {
        
        browser.get('players/player.08793.tiger-woods.html');

        let displayName = $('#playersListContainer').$('option[value*="08793"]').getAttribute('data-display-value');
        
       
        expect(displayName).toContain(playerFullName, 'Displayed Player Name does not match to feed');
    })

    it('Displayed Country matches feed', () => {

        browser.get('players/player.08793.tiger-woods.html');

        let displayCountry = $('.country').getText();

        expect(displayCountry).toContain(playerCountry, 'Displayed Country does not match to feed');
    })
    
})
