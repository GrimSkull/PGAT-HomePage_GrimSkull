describe('Search Field Tests', ()=> {

    let searchField = $('[placeholder="Enter search keywords"]')
    let playerName = 'tiger'
    let searchResults = ''
    
    xit('First Result by Player Name', ()=> {
        
        element(by.css('.icon-search')).click()
        browser.wait(EC.visibilityOf($('.search-dropdown')), 3000, "Dropdown search should be present after clicking on search button")
        // browser.sleep(3000)
        
        searchField.sendKeys(playerName)
        
        // searchResults = $$('.ez-ac-inner-text').first().$('div a').getText().then(text => text.toLowerCase())
       
        expect($$('.ez-ac-inner-text').first().$('div a').getText().then(text => text.toLowerCase())).toContain(playerName, 'First search result should contain search string')
    })

    it('Displaing Player Photo', ()=> {
        
        element(by.css('.icon-search')).click()
        browser.wait(EC.visibilityOf($('.search-dropdown')), 3000, "Dropdown search should be present after clicking on search button")
        
        searchField.sendKeys(playerName)
        
        searchResults = element($$('.ez-ac-image-crop').first().$('div img')).getAttribute('src').then(photh => photo.toMatch('$08793.png')).isDisplayed()
       
        expect(searchResults.toBe(), 'Player Photo does not displayed')
    })
})