Feature: Ecommerce validations

  @Regression
  Scenario Outline: Placing the Order
    Given a login to Ecommerce application with "<username>" and "<password>"
    When Add "<productName>" to Cart
    Then Verify "<productName>" is displayed in the Cart
    When Enter valid details and Place the Order
    Then Verify order is present in the OrderHistory

    Examples:
      | username           | password    | productName     |
      | sabir000@gmail.com | AbrarSabir1 | ADIDAS ORIGINAL |
      | sabir001@gmail.com | AbrarSabir1 | ZARA COAT 3     |
      | sabir002@gmail.com | AbrarSabir1 | IPHONE 13 PRO   |