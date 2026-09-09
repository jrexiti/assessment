Feature: Cucumber Mathematics

    Scenario Outline: Let's eat cucumbers
        Given I have <starting> cucumbers
        When I eat <eaten> cucumbers
        Then I should have <remaining> cucumbers

        Examples:
            | starting | eaten | remaining |
            | 5        | 3     | 2         |
            | 10       | 4     | 6         |
            | 7        | 2     | 5         |

    Scenario Outline: Let's eat carrots
        Given I have <starting> carrots
        When I eat <eaten> carrots
        Then I should have <remaining> carrots

        Examples:
            | starting | eaten | remaining |
            | 10       | 12    | -2        |
            | 10       | 3     | 7         |
            | 5        | 2     | 3         |

    Scenario Outline: Let's make a salad
        Given I have <cucumbers> cucumbers
        And I have <carrots> carrots
        When I eat <cucumbersEaten> cucumbers
        And I eat <carrotsEaten> carrots
        Then I should have <cucumbersRemaining> cucumbers
        And I should have <carrotsRemaining> carrots
        And I should have <totalRemaining> vegetables

        Examples:
            | cucumbers | carrots | cucumbersEaten | carrotsEaten | cucumbersRemaining | carrotsRemaining | totalRemaining |
            | 8         | 5       | 3              | 2            | 5                  | 3                | 8              |
            | 10        | 6       | 4              | 2            | 6                  | 4                | 10             |
            | 5         | 3       | 2              | 1            | 3                  | 2                | 5              |
