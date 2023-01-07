// Class: SE2840 - allergenPills
// Name: Denise Malisa
// Class Section: 031

/**
 * this class creates the allergen pills
 */
class AllergenPills extends React.Component {
  constructor(props) {
    super(props); // Set state as needed

    this.state = {
      props
    };
  }

  render() {
    const item = this.props.item;
    return /*#__PURE__*/React.createElement("div", null, Object.entries(item).map((entry, ignore) => {
      if (entry[0] !== 'name') {
        if (entry[0] !== 'type') {
          if (entry[1]) {
            return /*#__PURE__*/React.createElement("span", {
              className: "badge rounded-pill bg-primary"
            }, entry[0]);
          }
        }
      }
    }));
  }

}
// Class: SE2840 - Menu Filter
// Name: Denise Malisa
// Class Section: 031

/**
 * this is the main class that initializes the props and renders the changes
 * once a toggle in the filter bar has been clicked
 * the class also returns both the menuGrid and the filterBar
 */
class App extends React.Component {
  constructor(props) {
    super(props); // Set state as needed

    this.state = {
      menuItems: this.props.menuItems
    };
  }

  render() {
    let filteredItems = []; // TODO filter menuItems
    //    Menu items are passed in through props as this.props.menuItems
    // Render the application

    const filterSelected = event => {
      const eventTarget = event.currentTarget;
      console.log(eventTarget.id);
      this.state.menuItems.map(item => {
        switch (eventTarget.id) {
          case "soyFree":
            soyFree(item);
            break;

          case "eggFree":
            eggFree(item);
            break;

          case "milkFree":
            milkFree(item);
            break;

          case "fishFree":
            fishFree(item);
            break;

          case "peanutFree":
            peanutFree(item);
            break;

          case "shellfishFree":
            shellFishFree(item);
            break;

          case "treeNutFree":
            treeNutFree(item);
            break;

          case "glutenFree":
            glutenFree(item);
            break;

          default:
            filterItems(item);
            break;
        }
      });
      this.setState({
        menuItems: filteredItems
      });
    };

    const soyFree = item => {
      if (!item.soy) {
        filterItems(item);
      }
    };

    const eggFree = item => {
      if (!item.egg) {
        filterItems(item);
      }
    };

    const milkFree = item => {
      if (!item.milk) {
        filterItems(item);
      }
    };

    const fishFree = item => {
      if (!item.fish) {
        filterItems(item);
      }
    };

    const peanutFree = item => {
      if (!item.peanut) {
        filterItems(item);
      }
    };

    const shellFishFree = item => {
      if (!item.shellfish) {
        filterItems(item);
      }
    };

    const treeNutFree = item => {
      if (!item.treeNut) {
        filterItems(item);
      }
    };

    const glutenFree = item => {
      if (!item.gluten) {
        filterItems(item);
      }
    }; // method will populate filterItems


    const filterItems = item => {
      filteredItems.push({
        name: item.name,
        soy: item.soy,
        egg: item.egg,
        milk: item.milk,
        fish: item.fish,
        peanut: item.peanut,
        shellfish: item.shellfish,
        treeNut: item.treeNut,
        gluten: item.gluten,
        type: item.type
      });
    };

    return /*#__PURE__*/React.createElement("div", {
      className: "HolyGrail"
    }, /*#__PURE__*/React.createElement("div", {
      className: "Header"
    }, /*#__PURE__*/React.createElement("h1", null, "Culver's Menu")), /*#__PURE__*/React.createElement("div", {
      className: "HolyGrail-body"
    }, /*#__PURE__*/React.createElement(FilterBar, {
      filter: filterSelected
    }), /*#__PURE__*/React.createElement(MenuGrid, {
      showMenuItems: this.state.menuItems
    })), /*#__PURE__*/React.createElement("div", {
      className: "footer"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-center"
    }, " \xA9 2022 Culver Franchising System, LLC.All Rights Reserved.")));
  }

}
// Class: SE2840 - FilterBar
// Name: Denise Malisa
// Class Section: 031

/**
 * this class is for the creation and population of the filterBar
 * it adds all the filter toggles and invokes the onclick function
 */
class FilterBar extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "HolyGrail-nav"
    }, /*#__PURE__*/React.createElement("div", {
      className: "m-3"
    }, /*#__PURE__*/React.createElement("h6", null, "Filter by Allergen:"), /*#__PURE__*/React.createElement("div", {
      className: "form-check form-switch"
    }, /*#__PURE__*/React.createElement("input", {
      className: "form-check-input",
      type: "checkbox",
      role: "switch",
      id: "soyFree",
      onClick: this.props.filter
    }), /*#__PURE__*/React.createElement("label", {
      className: "form-check-label",
      htmlFor: "soyFree"
    }, "Soy Free")), /*#__PURE__*/React.createElement("div", {
      className: "form-check form-switch"
    }, /*#__PURE__*/React.createElement("input", {
      className: "form-check-input",
      type: "checkbox",
      role: "switch",
      id: "eggFree",
      onClick: this.props.filter
    }), /*#__PURE__*/React.createElement("label", {
      className: "form-check-label",
      htmlFor: "eggFree"
    }, "Egg Free")), /*#__PURE__*/React.createElement("div", {
      className: "form-check form-switch"
    }, /*#__PURE__*/React.createElement("input", {
      className: "form-check-input",
      type: "checkbox",
      role: "switch",
      id: "milkFree",
      onClick: this.props.filter
    }), /*#__PURE__*/React.createElement("label", {
      className: "form-check-label",
      htmlFor: "milkFree"
    }, "Milk Free")), /*#__PURE__*/React.createElement("div", {
      className: "form-check form-switch"
    }, /*#__PURE__*/React.createElement("input", {
      className: "form-check-input",
      type: "checkbox",
      role: "switch",
      id: "fishFree",
      onClick: this.props.filter
    }), /*#__PURE__*/React.createElement("label", {
      className: "form-check-label",
      htmlFor: "fishFree"
    }, "Fish Free")), /*#__PURE__*/React.createElement("div", {
      className: "form-check form-switch"
    }, /*#__PURE__*/React.createElement("input", {
      className: "form-check-input",
      type: "checkbox",
      role: "switch",
      id: "peanutFree",
      onClick: this.props.filter
    }), /*#__PURE__*/React.createElement("label", {
      className: "form-check-label",
      htmlFor: "peanutFree"
    }, "Peanut Free")), /*#__PURE__*/React.createElement("div", {
      className: "form-check form-switch"
    }, /*#__PURE__*/React.createElement("input", {
      className: "form-check-input",
      type: "checkbox",
      role: "switch",
      id: "shellfishFree",
      onClick: this.props.filter
    }), /*#__PURE__*/React.createElement("label", {
      className: "form-check-label",
      htmlFor: "shellfishFree"
    }, "Shellfish Free")), /*#__PURE__*/React.createElement("div", {
      className: "form-check form-switch"
    }, /*#__PURE__*/React.createElement("input", {
      className: "form-check-input",
      type: "checkbox",
      role: "switch",
      id: "treeNutFree",
      onClick: this.props.filter
    }), /*#__PURE__*/React.createElement("label", {
      className: "form-check-label",
      htmlFor: "treeNutFree"
    }, "Tree Nut Free")), /*#__PURE__*/React.createElement("div", {
      className: "form-check form-switch"
    }, /*#__PURE__*/React.createElement("input", {
      className: "form-check-input",
      type: "checkbox",
      role: "switch",
      id: "glutenFree",
      onClick: this.props.filter
    }), /*#__PURE__*/React.createElement("label", {
      className: "form-check-label",
      htmlFor: "glutenFree"
    }, "Gluten Free"))));
  }

}
// Class: SE2840 - Menu Filter
// Web Application entry point - window.onload

/**
 * Window onload function - Creates the menuItem (unfiltered) array
 *     and renders the application
 */
window.onload = () => {
  const menuItems = [{
    name: "ButterBurger",
    soy: true,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Burger"
  }, {
    name: "ButterBurger Cheese",
    soy: true,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Burger"
  }, {
    name: "Mushroom & Swiss ButterBurger",
    soy: true,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Burger"
  }, {
    name: "Sourdough Melt",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Burger"
  }, {
    name: "The Culver's Bacon Deluxe",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Burger"
  }, {
    name: "The Culver's Deluxe",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Burger"
  }, {
    name: "Wisconsin Swiss Melt",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Burger"
  }, {
    name: "Crispy Chicken Sandwich",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Chicken"
  }, {
    name: "Grilled Chicken Sandwich",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Chicken"
  }, {
    name: "Original Chicken Tenders",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Chicken"
  }, {
    name: "Spicy Crispy Chicken Sandwich",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Chicken"
  }, {
    name: "Coleslaw",
    soy: false,
    egg: true,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Side"
  }, {
    name: "Crinkle Cut Fries",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Side"
  }, {
    name: "Mashed Potatoes & Gravy",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Side"
  }, {
    name: "Steamed Broccoli",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Side"
  }, {
    name: "Wisconsin Cheddar Cheese Sauce",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Side"
  }, {
    name: "Cherry Chip Butter Cake Concrete Mixer made with Chocolate Custard",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Cherry Chip Butter Cake Concrete Mixer made with Vanilla Custard",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Chocolate Concrete Mixer made with OREO",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Chocolate Concrete Mixer made with Reese's",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: true,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dessert"
  }, {
    name: "Cookie Dough Concrete Mixer",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Mint Concrete Mixer made with OREO",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Salted Caramel Concrete Mixer made with Brownie",
    soy: false,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Salted Caramel Concrete Mixer made with Cookie Dough",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Salted Caramel Concrete Mixer made with Reese's Peanut Butter Cups",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: true,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dessert"
  }, {
    name: "Vanilla Concrete Mixer made with Butterfinger",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: true,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dessert"
  }, {
    name: "Vanilla Concrete Mixer made with Heath English Toffee Bars",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: true,
    gluten: false,
    type: "Dessert"
  }, {
    name: "Vanilla Concrete Mixer made with OREO",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Vanilla Concrete Mixer made with Reese's",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: true,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dessert"
  }, {
    name: "Chocolate Cake Cone",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Chocolate Dish",
    soy: false,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dessert"
  }, {
    name: "Chocolate Waffle Cone",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Vanilla Cake Cone",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Vanilla Dish",
    soy: false,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dessert"
  }, {
    name: "Vanilla Waffle Cone",
    soy: true,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Dessert"
  }, {
    name: "Butterfly Jumbo Shrimp Basket",
    soy: false,
    egg: false,
    milk: false,
    fish: true,
    peanut: false,
    shellfish: true,
    treeNut: false,
    gluten: true,
    type: "Seafood"
  }, {
    name: "Butterfly Jumbo Shrimp Dinner",
    soy: false,
    egg: false,
    milk: true,
    fish: true,
    peanut: false,
    shellfish: true,
    treeNut: false,
    gluten: true,
    type: "Seafood"
  }, {
    name: "North Atlantic Cod Dinner",
    soy: true,
    egg: true,
    milk: true,
    fish: true,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Seafood"
  }, {
    name: "North Atlantic Cod Filet Sandwich",
    soy: true,
    egg: true,
    milk: true,
    fish: true,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Seafood"
  }, {
    name: "Chicken Cashew Salad with Grilled Chicken",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: true,
    gluten: false,
    type: "Salad"
  }, {
    name: "Cranberry Bacon Bleu Salad with Grilled Chicken",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Salad"
  }, {
    name: "Culver's® Vinaigrette",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dressing"
  }, {
    name: "Garden Fresco Salad",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Salad"
  }, {
    name: "Garden Fresco Salad with Grilled Chicken",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: true,
    type: "Salad"
  }, {
    name: "Honey Mustard Dressing",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dressing"
  }, {
    name: "Ken's® Blue Cheese Dressing",
    soy: false,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dressing"
  }, {
    name: "Ken's® Country French",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dressing"
  }, {
    name: "Ken's® Raspberry Vinaigrette",
    soy: false,
    egg: false,
    milk: false,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dressing"
  }, {
    name: "Ranch Dressing",
    soy: false,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dressing"
  }, {
    name: "Southwest Avocado Salad",
    soy: false,
    egg: false,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Salad"
  }, {
    name: "Zesty Avocado Dressing",
    soy: false,
    egg: true,
    milk: true,
    fish: false,
    peanut: false,
    shellfish: false,
    treeNut: false,
    gluten: false,
    type: "Dressing"
  }];
  ReactDOM.render( /*#__PURE__*/React.createElement(App, {
    menuItems: menuItems
  }), document.getElementById('root'));
};
// Class: SE2840 - menuGrid
// Name: Denise Malisa
// Class Section: 031

/**
 * the menuGrid class creates the menuGrid and all the menu cards
 * it also passes the item and calls the allergen pills based on each individual
 * items allergens that are present
 */
class MenuGrid extends React.Component {
  render() {
    // const menuItems = this.props.showMenuItems;
    const menu = this.props.showMenuItems;
    {
      return /*#__PURE__*/React.createElement("div", {
        className: "HolyGrail-content"
      }, /*#__PURE__*/React.createElement("div", {
        className: "container-md"
      }, /*#__PURE__*/React.createElement("div", {
        className: "row row-cols-1 row-cols-md-3 g-4"
      }, menu.map(item => {
        return /*#__PURE__*/React.createElement("div", {
          className: "col"
        }, /*#__PURE__*/React.createElement("div", {
          className: "card h-100"
        }, /*#__PURE__*/React.createElement("div", {
          className: "card-body"
        }, /*#__PURE__*/React.createElement("h5", {
          className: "card-title"
        }, item.name), /*#__PURE__*/React.createElement("h6", {
          className: "card-text"
        }, item.type), /*#__PURE__*/React.createElement("text", null, "Allergens:"), /*#__PURE__*/React.createElement(AllergenPills, {
          item: item
        }))));
      }))));
    }
  }

}
