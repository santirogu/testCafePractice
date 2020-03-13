Feature: Edit Evidence Metadata

   As a user
   I want to fill out the metadata pop-up
   So then the information should be saved

   Scenario: Edit Basic Information on metadata pop-up
        Given I navigate to the evidence review page
        When I fill out the basic information on metadata pop-up and click on save button
        Then the information should be saved