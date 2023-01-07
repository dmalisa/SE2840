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
            return (
                <div className="HolyGrail-content">
                    <div className="container-md">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                menu.map((item) => {
                                    return <div className="col">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <h6 className="card-text">{item.type}</h6>
                                                <text>Allergens:</text>
                                                <AllergenPills item={item}/>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            );
        }
    }
}