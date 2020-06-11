Feature: To validate facebook login page

  Background: Given user is on facebook login or signup page

  @Smoke
  Scenario Outline: To verify login with invalid credentials
    Given User enter invalid "<username>" and "<password>"
    And User click login button
    Then User must navigate to invalid credentials page

    Examples: 
      | username | password |
      | java     | selenium |
      | charles  | testdata |
