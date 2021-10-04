/**
 *  header-menu and sidebar menu data
 */

/* eslint-disable */
export default [
   {
      "menu_title": "menu.Home",
      "type": "subMenu",
      "path": "/",
      "icon": "home"
   },
   {
      "menu_title": "menu.shop",
      "type": "subMenu",
      "path": "#",
      "icon": "pages",
      "child_routes": [
         {
            "path": "/products/women/10",
            "menu_title": "menu.productDetail",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/cart",
            "menu_title": "menu.cart",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/check-out",
            "menu_title": "menu.checkout",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/payment",
            "menu_title": "menu.payment",
            "icon": "arrow_right_alt",
            "child_routes": null
         }
      ]
   },
   {
      "menu_title": "menu.accessories",
      "type": "null",
      "path": "/accessories",
      "icon": "party_mode",
      "child_routes": null
   },
   {
      "menu_title": "menu.categories",
      "path": "#",
      "mega": true,
      "icon": "party_mode",
      "type": "mega",
      "child_routes": {
         'menu.men': [
            {
               "path": "/shop",
               "menu_title": "menu.t-shirts",
               "icon": "arrow_right_alt"
            },
            {
               "path": "/shop",
               "menu_title": "menu.jeans",
               "icon": "arrow_right_alt"
            },
            {
               "path": "/shop",
               "menu_title": "menu.shoes",
               "icon": "arrow_right_alt"
            },
            {
               "path": "/shop",
               "menu_title": "menu.wallet",
               "icon": "arrow_right_alt"
            }
         ],
         'menu.women': [
            {
               "path": "/shop",
               "menu_title": "menu.westernWear",
               "icon": "arrow_right_alt"
            },
            {
               "path": "/shop",
               "menu_title": "menu.ethnicWear",
               "icon": "arrow_right_alt"
            },

            {
               "path": "/shop",
               "menu_title": "menu.sportsWear",
               "icon": "arrow_right_alt"
            }
         ],
         'menu.gadgets': [
            {
               "path": "/shop",
               "menu_title": "menu.headPhones",
               "icon": "arrow_right_alt"
            },
            {
               "path": "/shop",
               "menu_title": "menu.laptop",
               "icon": "arrow_right_alt"
            },
            {
               "path": "/shop",
               "menu_title": "menu.speaker",
               "icon": "arrow_right_alt"
            },
            {
               "path": "/shop",
               "menu_title": "menu.watch",
               "icon": "arrow_right_alt"
            },
         ],
         'menu.accessories': [
            {
               "path": "/shop",
               "menu_title": "menu.jewellery",
               "icon": "arrow_right_alt"
            },
            {
               "path": "/shop",
               "menu_title": "menu.belts",
               "icon": "arrow_right_alt"
            },
            {
               "path": "/shop",
               "menu_title": "menu.handBag",
               "icon": "arrow_right_alt"
            }
         ]
      }
   },
   {
      "menu_title": "menu.aboutUs",
      "path": "#",
      "type": "subMenu",
      "icon": "pages",
      "child_routes": [
         {
            "path": "/about-us",
            "menu_title": "menu.aboutUs",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/term-and-condition",
            "menu_title": "menu.termsAndConditions",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/privacy-policy",
            "menu_title": "menu.privacyPolicy",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/faq",
            "menu_title": "menu.faq",
            "icon": "arrow_right_alt",
            "child_routes": null
         }
      ]
   },
   {
      "menu_title": "menu.contact us",
      "path": "/contact-us",
      "icon": "perm_contact_calendar",
      "child_routes": null
   },
   // {
   //    "menu_title": "menu.adminPanel",
   //    "path": "/admin-panel/admin",
   //    "icon": "perm_identity",
   //    "child_routes": null
   // }
]
