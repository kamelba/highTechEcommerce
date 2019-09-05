import React, { Component } from "react";
import CardModel from "./CardModel";
import { getAnnonce } from "./redux/action/actionAnnonce";
import { connect } from "react-redux";

class Data extends Component {
     

  render() {
    // const {filterCategory}=this.props.filterCategory
    console.log(this.props.filterCategory)

        return (
      <div className="dataAnnonce">
        {this.props.annonce.filter(
                (e, i) =>this.props.filterCategory? e.category.toLowerCase() === this.props.filterCategory : e
              ).filter(
                (e, i) =>e.title.toLowerCase().includes(this.props.filterSearch)
              ).map((e,i) => (  
          <CardModel
            key={i}
            imga={e.imga}
            imgb={e.imgb}
            title={e.title}
            description={e.description}
            price={e.price}
            brand={e.brand}
          />
        ))}
      </div>
    );
  }
}




const mapStateToProps = (state) => {
  return { annonce: state.annonce,
  filterCategory:state.filterCategory, 
  filterSearch:state.filterSearch };
};


export default connect(mapStateToProps, { getAnnonce }
)(Data);

