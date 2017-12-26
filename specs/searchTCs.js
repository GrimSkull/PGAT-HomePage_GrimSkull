describe('Search Field Tests', ()=> {

    let searchField = $('[placeholder="Enter search keywords"]')
    let playerName = 'tiger'
    let searchResults = ''
    
    xit('First Result by Player Name', ()=> {
        browser.get('')
        
        $('.icon-search').click()
        browser.wait(EC.visibilityOf($('.search-dropdown')), 3000, "Dropdown search should be present after clicking on search button")
        // browser.sleep(3000)
        
        searchField.sendKeys(playerName)
        browser.wait(EC.visibilityOf($('.shows_item')), 3000, "Dropdown search should be present after clicking on search button")
        // searchResults = $$('.ez-ac-inner-text').first().$('div a').getText().then(text => text.toLowerCase())
       
        expect($$('.ez-ac-inner-text').first().$('div a').getText().then(text => text.toLowerCase())).toContain(playerName, 'First search result should contain search string')
    })

    xit('Displaing Player Photo', ()=> {
        browser.get('')

        $('.icon-search').click()
        browser.wait(EC.visibilityOf($('.search-dropdown')), 3000, "Dropdown search should be present after clicking on search button")
        
        searchField.sendKeys(playerName)
        
        browser.wait(EC.visibilityOf($('.shows_item')), 3000, "Dropdown search should be present after clicking on search button")
        searchResults = $('.ez-ac-image[src*="08793.png"]')        

        expect(searchResults.isDisplayed(), 'Player Photo is not displayed')
    })
})