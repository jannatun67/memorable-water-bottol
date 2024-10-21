import PropTypes from 'prop-types';
import './bottle.css'

const Bottle = ({bottle,handelAddToCArd}) => {
  const {name,material,volume}=bottle
    return (
        <div className="bottle">
            <h3>Bottle:{name}</h3>
            <h4>Material;{material}</h4>
            <p>Volume:{volume}</p>
            <button onClick={()=>handelAddToCArd(bottle)}>Purchase</button>
        </div>
    );
};
Bottle.propTypes ={
    bottle:PropTypes.object.isRequired,
    handelAddToCArd:PropTypes.func.isRequired
}
export default Bottle;