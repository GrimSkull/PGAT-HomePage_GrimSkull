describe('Player Page Tests', ()=> {

    // let searchField = $('[placeholder="Enter search keywords"]')
    let playerFullName = global.importedJSON.playerFullName()
    let playercountry = global.importedJSON.playerCountryName()
    
    it('Player Name matches feed', ()=> {
        browser.get('players/player.08793.tiger-woods.html')

        let displayName = $('#playersListContainer').$('option[value*="08793.png"]').getText()
        
       
        expect(displayName).toContain(playerFullName, 'Displayed Player Name does not match to feed')
    })
})