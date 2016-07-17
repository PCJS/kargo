Feature: Searching Google
  As a software engineer in test
  I want to automate searching for a keyword
  So I don't have to type each word manually

  Background:
  Given I have visited "http://www.google.com"
  Then I see the title of "Google"

  Scenario: Get Kargo
    When I search for "Kargo"
    Then I see the results page about "Kargo"
    And I visit kargo website
    Then I go to its About page

  Scenario Outline:
    When I search for "<keyword>"
    Then I see the results page about "<keyword>"

    Examples:
      | keyword |
      | Mobile advertising |
      | Mobile Marketing |
      | Mobile Internet |

  Scenario: Reading above keywords from a text file
    When I search for a keyword from "keywords.txt"
