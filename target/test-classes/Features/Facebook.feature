Feature: To validate facebook login page

  Background: Given user is on facebook login or signup page

  @Smoke
  Scenario Outline: To verify login with invaid credentials
    Given User enter invalid "<username>" and "<password>"
    And User click login button
    Then User must navigate to invalid credentials page

    Examples: 
      | username | password |
      | java     | selenium |

  @Regression
  Scenario Outline: To verify signup with invalid credentials
    When User enter "<firstname>" and "<lastname>" for signup
    And User enter mobilenumber "<MobileNumber>"
    And User enter password "<newPassword>"
    And User select birthday
    And User click signup button
    Then User should not able to create a new account

    Examples: 
      | firstname | lastname | MobileNumber | newPassword |
      | python    | hadoop   |   9884290055 | abc@123     |
