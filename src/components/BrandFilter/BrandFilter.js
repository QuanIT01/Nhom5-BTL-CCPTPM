import React from "react";
import { connect } from "react-redux";
import "./BrandFilter.scss";
import { categorys } from "../../data/brands";

import { addBrandToFilter, removeBrandFromFilter } from "../../actions";

const BrandFilter = (props) => {
  const { dispatch, brandItemsCount } = props;

  const handleSelectBox = (e) => {
    const name = e.target.name;
    //  const value = e.target.checked;

    if (e.target.checked) {
      dispatch(addBrandToFilter(name));
    } else {
      dispatch(removeBrandFromFilter(name));
    }
  };
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  // eslint-disable-next-line no-unused-vars
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className="card mb-3">
      <div className="card-header">
        <h3>Danh mục</h3>
      </div>
      <ul className="list-group flex-row flex-wrap">
        {categorys.map((category) => (
          <li className="list-group-item flex-50">
            <label className="custom-checkbox text-capitalize">
              {" "}
              {category} ({brandItemsCount[category]})
              <input
                type="checkbox"
                name={category}
                className="custom-checkbox__input "
                onInput={handleSelectBox}
              />
              <span className="custom-checkbox__span"></span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  const brandItemsCount = {};

  state.shop.products.forEach((p) => {
    brandItemsCount[p.category] = brandItemsCount[p.category] + 1 || 1;
  });

  return {
    brandItemsCount,
  };
};

export default connect(mapStateToProps)(BrandFilter);
