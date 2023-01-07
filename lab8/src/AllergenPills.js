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
    render () {
        const item = this.props.item;
        return (
        <div>
            {
                Object.entries(item).map((entry, ignore) => {
                    if (entry[0] !== 'name') {
                        if (entry[0] !== 'type') {
                            if (entry[1]) {
                                return <span className="badge rounded-pill bg-primary">{entry[0]}</span>
                            }
                        }
                    }
                })
            }
        </div>
        )

    }
}