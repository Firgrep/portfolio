describe("visit blog post by theme", () => {
  it("user can visit blog post about Python with filter working", () => {

    // Visit site and blog
    cy.visit('/');
    cy.findByRole('link', {  name: /blog/i}).click();

    // Check for filter buttons and all posts
    cy.findByRole('button', {  name: /javascript/i}).should('be.visible');
    cy.findByRole('button', {  name: /react/i}).should('be.visible');
    cy.findByRole('button', {  name: /redux/i}).should('be.visible');
    cy.findByRole('button', {  name: /python/i}).should('be.visible');

    cy.findByRole('link', {  name: /retrieving data from the url with useparams/i}).should('be.visible');
    cy.findByRole('link', {  name: /debugging and retrieving environmental variables with python/i}).should('be.visible');
    cy.findByRole('link', {  name: /spread \.\.\. unexpected additional array out!/i}).should('be.visible');
    cy.findByRole('link', {  name: /finding element in a redux slice/i}).should('be.visible');
    
    // Selecting "Python" button and seeing if filter works
    cy.findByRole('button', {  name: /python/i}).click({force: true}).should('have.attr', 'aria-pressed', 'true');

    cy.findByRole('link', {  name: /retrieving data from the url with useparams/i}).should('not.exist');
    cy.findByRole('link', {  name: /debugging and retrieving environmental variables with python/i}).should('be.visible');
    cy.findByRole('link', {  name: /spread \.\.\. unexpected additional array out!/i}).should('not.exist');
    cy.findByRole('link', {  name: /finding element in a redux slice/i}).should('not.exist');

    // Deselecting "Python", selecting "Javascript" and checking filter
    cy.findByRole('button', {  name: /python/i}).click({force: true}).should('have.attr', 'aria-pressed', 'false');
    cy.findByRole('button', {  name: /javascript/i}).click({force: true}).should('have.attr', 'aria-pressed', 'true');

    cy.findByRole('link', {  name: /retrieving data from the url with useparams/i}).should('not.exist');
    cy.findByRole('link', {  name: /debugging and retrieving environmental variables with python/i}).should('not.exist');
    cy.findByRole('link', {  name: /spread \.\.\. unexpected additional array out!/i}).should('be.visible');
    cy.findByRole('link', {  name: /finding element in a redux slice/i}).should('be.visible');

    // Deselecting "Javascript", selecting "React" and checking filter
    cy.findByRole('button', {  name: /javascript/i}).click({force: true}).should('have.attr', 'aria-pressed', 'false');
    cy.findByRole('button', {  name: /react/i}).click({force: true}).should('have.attr', 'aria-pressed', 'true');

    cy.findByRole('link', {  name: /retrieving data from the url with useparams/i}).should('be.visible');
    cy.findByRole('link', {  name: /debugging and retrieving environmental variables with python/i}).should('not.exist');
    cy.findByRole('link', {  name: /spread \.\.\. unexpected additional array out!/i}).should('not.exist');
    cy.findByRole('link', {  name: /finding element in a redux slice/i}).should('be.visible');

    // Clicking "Read More" on React article, view article, hit back
    cy.findByRole('link', {  name: /retrieving data from the url with useparams/i}).click({force: true});
    
    cy.findByRole('article').within(() => 
      {cy.findByRole('heading', {  name: /retrieving data from the url with useparams/i}).should('be.visible')})

    cy.findByText(  /is a helpful hook in react, specifically react\-router, get information from the current url, which can then be used for a component\. however, useparams only retrieves data that has been specified at the level of the router through the exact variable name\./i  ).should('be.visible');

    cy.findByRole('button', {  name: /back/i}).click({force: true});

    // Check user is back in blog page
    cy.findByRole('heading', {  name: /blog/i}).should('be.visible');

  })
})