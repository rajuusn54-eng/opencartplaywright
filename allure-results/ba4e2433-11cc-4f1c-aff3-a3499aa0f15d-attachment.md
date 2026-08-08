# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEnd.spec.ts >> execute end-to-end test flow @end-to-end
- Location: tests\EndToEnd.spec.ts:30:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#input-email')

```

# Page snapshot

```yaml
- generic [ref=f5e1]:
  - navigation [ref=f5e2]:
    - generic [ref=f5e3]:
      - button "$ Currency " [ref=f5e7] [cursor=pointer]:
        - strong [ref=f5e8]: $
        - text: Currency
        - generic [ref=f5e9]: 
      - list [ref=f5e11]:
        - listitem [ref=f5e12]:
          - link "" [ref=f5e13] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=f5e15]:
          - link " My Account" [expanded] [active] [ref=f5e16] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - generic [ref=f5e17]: 
            - text: My Account
          - list [ref=f5e19]:
            - listitem [ref=f5e20]:
              - link "Register" [ref=f5e21] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/register
            - listitem [ref=f5e22]:
              - link "Login" [ref=f5e23] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/login
        - listitem [ref=f5e24]:
          - link " Wish List (0)" [ref=f5e25] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - generic [ref=f5e26]: 
            - text: Wish List (0)
        - listitem [ref=f5e27]:
          - link " Shopping Cart" [ref=f5e28] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/cart
            - generic [ref=f5e29]: 
            - text: Shopping Cart
        - listitem [ref=f5e30]:
          - link " Checkout" [ref=f5e31] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/checkout
            - generic [ref=f5e32]: 
            - text: Checkout
  - banner [ref=f5e33]:
    - generic [ref=f5e35]:
      - heading [level=1] [ref=f5e38]:
        - link "Qafox.com" [ref=f5e39] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
      - generic [ref=f5e41]:
        - textbox "Search" [ref=f5e42]
        - button "" [ref=f5e44] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=f5e48] [cursor=pointer]:
        - generic [ref=f5e49]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=f5e51]:
    - generic: 
    - list [ref=f5e53]:
      - listitem [ref=f5e54]:
        - link "Desktops" [ref=f5e55] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=20
      - listitem [ref=f5e56]:
        - link "Laptops & Notebooks" [ref=f5e57] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=18
      - listitem [ref=f5e58]:
        - link "Components" [ref=f5e59] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=25
      - listitem [ref=f5e60]:
        - link "Tablets" [ref=f5e61] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=57
      - listitem [ref=f5e62]:
        - link "Software" [ref=f5e63] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=17
      - listitem [ref=f5e64]:
        - link "Phones & PDAs" [ref=f5e65] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=24
      - listitem [ref=f5e66]:
        - link "Cameras" [ref=f5e67] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=33
      - listitem [ref=f5e68]:
        - link "MP3 Players" [ref=f5e69] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=34
  - generic [ref=f5e72]:
    - generic [ref=f5e73]:
      - generic [ref=f5e75]:
        - img "MacBookAir" [ref=f5e77]
        - link [ref=f5e79] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=f5e80]
        - img "MacBookAir" [ref=f5e82]
        - link [ref=f5e84] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=f5e85]
      - generic [ref=f5e86]:
        - generic [ref=f5e87] [cursor=pointer]
        - generic [ref=f5e88] [cursor=pointer]
      - generic:
        - generic [ref=f5e89] [cursor=pointer]: 
        - generic [ref=f5e90] [cursor=pointer]: 
    - heading "Featured" [level=3] [ref=f5e91]
    - generic [ref=f5e92]:
      - generic [ref=f5e94]:
        - link [ref=f5e96] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=43
          - img "MacBook" [ref=f5e97]
        - generic [ref=f5e98]:
          - heading [level=4] [ref=f5e99]:
            - link "MacBook" [ref=f5e100] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=43
          - paragraph [ref=f5e101]: Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..
          - paragraph [ref=f5e102]:
            - text: $602.00
            - generic [ref=f5e103]: Ex Tax:$500.00
        - generic [ref=f5e104]:
          - button " Add to Cart" [ref=f5e105] [cursor=pointer]:
            - generic [ref=f5e106]: 
            - text: Add to Cart
          - button "" [ref=f5e107] [cursor=pointer]
          - button "" [ref=f5e109] [cursor=pointer]
      - generic [ref=f5e112]:
        - link [ref=f5e114] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=40
          - img "iPhone" [ref=f5e115]
        - generic [ref=f5e116]:
          - heading [level=4] [ref=f5e117]:
            - link "iPhone" [ref=f5e118] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=40
          - paragraph [ref=f5e119]: iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..
          - paragraph [ref=f5e120]:
            - text: $123.20
            - generic [ref=f5e121]: Ex Tax:$101.00
        - generic [ref=f5e122]:
          - button " Add to Cart" [ref=f5e123] [cursor=pointer]:
            - generic [ref=f5e124]: 
            - text: Add to Cart
          - button "" [ref=f5e125] [cursor=pointer]
          - button "" [ref=f5e127] [cursor=pointer]
      - generic [ref=f5e130]:
        - link [ref=f5e132] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=42
          - img "Apple Cinema 30\"" [ref=f5e133]
        - generic [ref=f5e134]:
          - heading [level=4] [ref=f5e135]:
            - link "Apple Cinema 30\"" [ref=f5e136] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=42
          - paragraph [ref=f5e137]: The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
          - paragraph [ref=f5e138]:
            - text: $110.00 $122.00
            - generic [ref=f5e139]: Ex Tax:$90.00
        - generic [ref=f5e140]:
          - button " Add to Cart" [ref=f5e141] [cursor=pointer]:
            - generic [ref=f5e142]: 
            - text: Add to Cart
          - button "" [ref=f5e143] [cursor=pointer]
          - button "" [ref=f5e145] [cursor=pointer]
      - generic [ref=f5e148]:
        - link [ref=f5e150] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=30
          - img "Canon EOS 5D" [ref=f5e151]
        - generic [ref=f5e152]:
          - heading [level=4] [ref=f5e153]:
            - link "Canon EOS 5D" [ref=f5e154] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=30
          - paragraph [ref=f5e155]: Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..
          - paragraph [ref=f5e156]:
            - text: $98.00 $122.00
            - generic [ref=f5e157]: Ex Tax:$80.00
        - generic [ref=f5e158]:
          - button " Add to Cart" [ref=f5e159] [cursor=pointer]:
            - generic [ref=f5e160]: 
            - text: Add to Cart
          - button "" [ref=f5e161] [cursor=pointer]
          - button "" [ref=f5e163] [cursor=pointer]
    - generic [ref=f5e165]:
      - generic [ref=f5e167]:
        - img "Harley Davidson" [ref=f5e169]
        - img "Dell" [ref=f5e171]
        - img "Disney" [ref=f5e173]
        - img "Starbucks" [ref=f5e175]
        - img "Nintendo" [ref=f5e177]
        - img "NFL" [ref=f5e179]
        - img "RedBull" [ref=f5e181]
        - img "Sony" [ref=f5e183]
        - img "Coca Cola" [ref=f5e185]
        - img "Burger King" [ref=f5e187]
        - img "Canon" [ref=f5e189]
        - img "Harley Davidson" [ref=f5e191]
        - img "Dell" [ref=f5e193]
        - img "Disney" [ref=f5e195]
        - img "Starbucks" [ref=f5e197]
        - img "Nintendo" [ref=f5e199]
        - img "NFL" [ref=f5e201]
        - img "RedBull" [ref=f5e203]
        - img "Sony" [ref=f5e205]
        - img "Coca Cola" [ref=f5e207]
        - img "Burger King" [ref=f5e209]
      - generic [ref=f5e210]:
        - generic [ref=f5e211] [cursor=pointer]
        - generic [ref=f5e212] [cursor=pointer]
        - generic [ref=f5e213] [cursor=pointer]
        - generic [ref=f5e214] [cursor=pointer]
        - generic [ref=f5e215] [cursor=pointer]
        - generic [ref=f5e216] [cursor=pointer]
        - generic [ref=f5e217] [cursor=pointer]
        - generic [ref=f5e218] [cursor=pointer]
        - generic [ref=f5e219] [cursor=pointer]
        - generic [ref=f5e220] [cursor=pointer]
        - generic [ref=f5e221] [cursor=pointer]
      - generic:
        - generic [ref=f5e222] [cursor=pointer]: 
        - generic [ref=f5e223] [cursor=pointer]: 
  - contentinfo [ref=f5e224]:
    - generic [ref=f5e225]:
      - generic [ref=f5e226]:
        - generic [ref=f5e227]:
          - heading "Information" [level=5] [ref=f5e228]
          - list [ref=f5e229]:
            - listitem [ref=f5e230]:
              - link "About Us" [ref=f5e231] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=f5e232]:
              - link "Delivery Information" [ref=f5e233] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=f5e234]:
              - link "Privacy Policy" [ref=f5e235] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=f5e236]:
              - link "Terms & Conditions" [ref=f5e237] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=f5e238]:
          - heading "Customer Service" [level=5] [ref=f5e239]
          - list [ref=f5e240]:
            - listitem [ref=f5e241]:
              - link "Contact Us" [ref=f5e242] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=f5e243]:
              - link "Returns" [ref=f5e244] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=f5e245]:
              - link "Site Map" [ref=f5e246] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=f5e247]:
          - heading "Extras" [level=5] [ref=f5e248]
          - list [ref=f5e249]:
            - listitem [ref=f5e250]:
              - link "Brands" [ref=f5e251] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=f5e252]:
              - link "Gift Certificates" [ref=f5e253] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=f5e254]:
              - link "Affiliate" [ref=f5e255] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=f5e256]:
              - link "Specials" [ref=f5e257] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=f5e258]:
          - heading "My Account" [level=5] [ref=f5e259]
          - list [ref=f5e260]:
            - listitem [ref=f5e261]:
              - link "My Account" [ref=f5e262] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=f5e263]:
              - link "Order History" [ref=f5e264] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=f5e265]:
              - link "Wish List" [ref=f5e266] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=f5e267]:
              - link "Newsletter" [ref=f5e268] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=f5e269]
      - paragraph [ref=f5e270]:
        - text: Powered By
        - link "OpenCart" [ref=f5e271] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Qafox.com © 2026
```

# Test source

```ts
  1  | import {Page, Locator} from "@playwright/test";
  2  | 
  3  | export class LoginPage {
  4  | 
  5  | //locators
  6  | private readonly page:Page;
  7  | private readonly txtEmail:Locator;
  8  | private readonly txtPassword:Locator;
  9  | private readonly btnLogin:Locator
  10 | private readonly lnkForgotPassword:Locator;
  11 | private readonly errorMessage:Locator;
  12 | 
  13 | 
  14 | //constructor
  15 | constructor(page:Page){
  16 |     this.page=page;
  17 |     this.txtEmail=page.locator("#input-email");
  18 |     this.txtPassword=page.locator("#input-password");
  19 |     this.btnLogin=page.locator("input[value='Login']");
  20 |     this.lnkForgotPassword=page.locator("a:has-text('Forgotten Password')");
  21 |     this.errorMessage=page.locator("div.alert.alert-danger.alert-dismissible");
  22 | }
  23 | 
  24 | //action methods
  25 | 
  26 | async setEmail(email:string):Promise<void>{
> 27 |     await this.txtEmail.fill(email);    
     |                         ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  28 | }
  29 | 
  30 | async setPassword(password:string):Promise<void>{
  31 |     await this.txtPassword.fill(password);
  32 | }
  33 | 
  34 | async clickForgotPasswordLink():Promise<void>{
  35 |     await this.lnkForgotPassword.click();
  36 | }   
  37 | 
  38 | 
  39 | async clickLoginButton():Promise<void>{
  40 |     await this.btnLogin.click();
  41 | }
  42 | 
  43 | 
  44 | async login(email:string,password:string):Promise<void>{
  45 |     await this.setEmail(email);
  46 |     await this.setPassword(password);
  47 |     await this.clickLoginButton();
  48 | }
  49 | 
  50 | async getErrorMessage():Promise<null | string>{    
  51 | return (this.errorMessage.textContent());
  52 | 
  53 | }
  54 | 
  55 | }
```