Feature: Ecommerce page error validations
  @validations
  Scenario Outline: Validate error message for wrong credentials
    Given Go to Login page
    When Type incorrect email or password "<username>" and "<password>"
    Then  Error Message is displayed

    Examples:
      | username           | password    |
      | sabir000@gmail.com | AbrarSabi1  |
      | sabir@gmail.com    | AbrarSabir1 |

  @validations
  Scenario Outline: Validate error message for not registered user at recovery page
    Given Navigate to Forgot password page
    When Type not registered email "<username>" and valid "<password>"
    Then  Verify error message

    Examples:
      | username      | password   |
      | asdf@test.com | AbrarSabir1 |

# @validations
# Scenario Outline: Validate error message for invalid email at recovery page
#   Given Go to Login page
#   And Navigate to Forgot password page
#   When Type invalid email "<username>"
#   And Type a valid "<password>" at password and Confirm field
#   Then  Verify error message

#   Examples:
#     | username           | password    |
#     | sabir000gmail.com | AbrarSabir1  |
#     | sabirgmail.com    | AbrarSabir1 |

# @validations
# Scenario Outline: Validate error message for mismatched password at recovery page
#   Given Go to Login page
#   And Navigate to Forgot password page
#   When Type valid email "<username>"
#   And Type a valid "<password>" at password field
#   And Type "<mismatchedPassword>" at Confirm field
#   Then  Verify error message

#   Examples:
#     | username           | password    | mismatchedPassword |
#     | sabir000@gmail.com | AbrarSabi1  | AbrarSabir1  |
#     | sabir@gmail.com    | AbrarSabir1 | AbrarSabir1  |
