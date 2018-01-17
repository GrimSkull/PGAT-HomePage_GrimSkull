describe('Search Field Tests', ()=> {

    let searchField = $('[placeholder="Enter search keywords"]')
    let playerName = 'tiger'
    let searchResults = ''
    
    it('First Result by Player Name', ()=> {
        browser.get('')
        
        $('.icon-search').click()
        browser.sleep(3000)

        browser.wait(EC.visibilityOf($('.search-dropdown')), 2000, "Dropdown search should be present after clicking on search button")
        // browser.sleep(3000)
        
        searchField.sendKeys(playerName)
        browser.wait(EC.visibilityOf($('.shows_item')), 2000, "Search results should be displayed after search query inputted")
        // searchResults = $$('.ez-ac-inner-text').first().$('div a').getText().then(text => text.toLowerCase())
       
        expect($$('.ez-ac-inner-text').first().$('div a').getText().then(text => text.toLowerCase())).toContain(playerName, 'First search result should contain search string')
    })

    xit('Displaing Player Photo', ()=> {
        browser.get('')
        
        $('.icon-search').click()
        browser.sleep(2500)

        browser.wait(EC.visibilityOf($('.search-dropdown')), 4000, "Dropdown search should be present after clicking on search button")
        
        searchField.sendKeys(playerName)
        
        browser.wait(EC.visibilityOf($('.shows_item')), 2000, "Search results should be displayed after search query inputted")
        searchResults = $('.ez-ac-image[src*="08793.png"]')        

        expect(searchResults.isDisplayed(), 'Player Photo is not displayed')
    })
})