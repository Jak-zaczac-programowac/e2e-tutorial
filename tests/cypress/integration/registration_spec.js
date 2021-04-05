describe("Registraion", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8888");
  });

  it("User is able to register properly", () => {
    cy.get("#email").type("fake@email.com");

    const password = "Abc12345";

    cy.get("#password").type(password);
    cy.get("#repeat-password").type(password);

    cy.get('input[type="submit"]').click();

    cy.get("#welcome-screen").should("be.visible");
  });
});
