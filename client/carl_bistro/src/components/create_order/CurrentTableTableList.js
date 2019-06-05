import React, {
  Component
} from "react";
import ImageMapper from 'react-image-mapper';

import TableCard from "./TableCard";

class CurrentTableTableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: [],
      selectedTable: null
    }
  }

    render() {
       return (
        <div className="page-container">
          <div className="table-display-div">
           <div className="tables-container">
            <h1> Tables </h1>
              <ImageMapper
                src={require("../../images/map.png")}
                map={{
                  name: "my-map",
                  areas: this.props.availableAreas
                }}
                width={400}
                imgWidth={750}
                onMouseEnter={area => this.enterArea(area)}
                onMouseLeave={area => this.leaveArea(area)}
                onClick={area => this.clicked(area)}
                strokeColor= "white"
                lineWidth= {5}
              />
                {
                  this.state.hoveredArea &&
                  <span className="tooltip"
                      style={{ ...this.getTipPosition(this.state.hoveredArea)}}>
                    { <TableCard table={this.state.selectedTable} />}
                  </span>
                }
              </div>
            </div>
         </div>
       );
     }

     clicked(area) {
       this.setState( {clickedTable: area});
       this.props.availableTables.forEach((table) => {
         if (table.tableNumber == area.name) {
           this.props.onSelectedTable(area.name);
           this.setState({ selectedTable: table }, () => {
            console.log(this.state.selectedTable);
           });
         }
       })
     }

     onClick(area) {
       this.clicked(area);
     }

     enterArea(area) {
         this.setState({ hoveredArea: area });
       this.clicked(area);
     }

     leaveArea(area) {
         this.setState({ hoveredArea: null });
     }

     getTipPosition(area) {
         return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
     }


    }


  export default CurrentTableTableList;