describe('Search Field Tests', () => {

    let searchField = $('[placeholder="Enter search keywords"]');
    let playerName = 'tiger';
    
    beforeEach(() => {
        // Here will be preconditions, they are same for all tests in this spec / suite
        let iconSearch = $('.icon-search');
        browser.get('');
        
        browser.wait(EC.visibilityOf(iconSearch), 5000, "Search icon is not visible");
        iconSearch.click();

        browser.wait(EC.visibilityOf($('.search-dropdown')), 4000, "Dropdown search should be present after clicking on search button");
        searchField.sendKeys(playerName);
    
        browser.wait(EC.visibilityOf($('.shows_item .ez-ac-image')), 2000, "Search results should be displayed after search query inputted");
    });
    
    xit('First Result by Player Name', ()=> {               
        expect($('.ez-ac-inner-text > [title="tiger woods"]').getText().then(text => text.toLowerCase())).toContain(playerName, 'First search result should contain search string');
    })

    it('Displaing Player Photo', ()=> {        
        let searchResults = $('.ez-ac-image[src*="08793.png"]');

        expect(searchResults.isDisplayed(), 'Player Photo is not displayed');
    })
})