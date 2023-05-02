import React from 'react';

// class Categories extends React.Component {
//   state = {
//     activeItem: 3,
//   };

//   onClickCategories = (index) => {
//     this.setState({
//       activeItem: index,
//     });
//   };

//   render() {
//     const { items, onClickItem } = this.props;

//     return (
//       <div className='categories'>
//         <ul>
//           <li className='active'>Все</li>
//           {items.map((item, index) => {
//             return (
//               <li
//                 className={this.state.activeItem === index ? 'active' : ''}
//                 onClick={() => this.onClickCategories(index)}
//                 key={index}>
//                 {item}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onClickCategories = (index) => {
    setActiveItem(index);
  };

  return (
    <div className='categories'>
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>
          Все
        </li>
        {items && items.map((item, index) => {
          return (
            <li
              className={activeItem === index ? 'active' : ''}
              key={`${index}__${item}`}
              onClick={() => onClickCategories(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
