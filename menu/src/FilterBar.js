// Class: SE2840 - FilterBar
// Name: Denise Malisa
// Class Section: 031

/**
 * this class is for the creation and population of the filterBar
 * it adds all the filter toggles and invokes the onclick function
 */
class FilterBar extends React.Component{
    render() {
        return (
            <div className="HolyGrail-nav">
                <div className="m-3">
                    <h6>Filter by Allergen:</h6>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="soyFree" onClick={this.props.filter}/>
                            <label className="form-check-label" htmlFor="soyFree">Soy Free</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="eggFree" onClick={this.props.filter}/>
                            <label className="form-check-label" htmlFor="eggFree">Egg Free</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="milkFree" onClick={this.props.filter}/>
                            <label className="form-check-label" htmlFor="milkFree">Milk Free</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="fishFree" onClick={this.props.filter}/>
                            <label className="form-check-label" htmlFor="fishFree">Fish Free</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="peanutFree" onClick={this.props.filter}/>
                            <label className="form-check-label" htmlFor="peanutFree">Peanut Free</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="shellfishFree" onClick={this.props.filter}/>
                            <label className="form-check-label" htmlFor="shellfishFree">Shellfish Free</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="treeNutFree" onClick={this.props.filter}/>
                            <label className="form-check-label" htmlFor="treeNutFree">Tree Nut Free</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="glutenFree" onClick={this.props.filter}/>
                            <label className="form-check-label" htmlFor="glutenFree">Gluten Free</label>
                    </div>
                </div>
            </div>
        );
    }
}