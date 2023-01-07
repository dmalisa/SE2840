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
        super(props);

        // Set state as needed
        this.state = {menuItems: this.props.menuItems};
    }

    render() {
        let filteredItems =[];
        // TODO filter menuItems
        //    Menu items are passed in through props as this.props.menuItems

        // Render the application
        const filterSelected = (event) => {
            const eventTarget = event.currentTarget;
            console.log(eventTarget.id);
            this.state.menuItems.map((item) => {
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
            })
            this.setState({
                menuItems: filteredItems,
            });
        }

        const soyFree = (item) => {
            if (!item.soy) {
                filterItems(item);
            }
        }
        const eggFree = (item) => {
            if (!item.egg) {
                filterItems(item);
            }
        }
        const milkFree = (item) => {
            if (!item.milk) {
                filterItems(item);
            }
        }
        const fishFree = (item) => {
            if (!item.fish) {
                filterItems(item);
            }
        }
        const peanutFree = (item) => {
            if (!item.peanut) {
                filterItems(item);
            }
        }
        const shellFishFree = (item) => {
            if (!item.shellfish) {
                filterItems(item);
            }
        }
        const treeNutFree = (item) => {
            if (!item.treeNut) {
                filterItems(item);
            }
        }
        const glutenFree = (item) => {
            if (!item.gluten) {
                filterItems(item);
            }
        }

        // method will populate filterItems
        const filterItems = (item) => {
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
            })
        }

        return (
            <div className="HolyGrail">
                <div className="Header">
                    <h1>Culver's Menu</h1>
                </div>
                <div className="HolyGrail-body">
                    {/*Add in the filter bar and the menu grid*/}
                    {/*pass a function as a prop filter the items in the function*/}
                    <FilterBar filter={filterSelected}/>
                    {/*then in menu grid you'd pass these filtered items*/}
                    <MenuGrid showMenuItems={this.state.menuItems}/>
                </div>
                <div className="footer">
                    <p className="text-center"> © 2022 Culver Franchising System, LLC.All Rights Reserved.</p>
                </div>
            </div>

        );
    }
}
