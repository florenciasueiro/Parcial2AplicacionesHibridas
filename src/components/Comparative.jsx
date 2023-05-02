import { useState } from 'react';

function ProductSelection() {
  const [product1, setProduct1] = useState('');
  const [product2, setProduct2] = useState('');

  const handleProduct1Change = (event) => {
    setProduct1(event.target.value);
  };

  const handleProduct2Change = (event) => {
    setProduct2(event.target.value);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <label htmlFor="product1">Product 1</label>
        <select id="product1" value={product1} onChange={handleProduct1Change}>
          <option value="">Select an option</option>
          <option value="product1-option1">Product 1 Option 1</option>
          <option value="product1-option2">Product 1 Option 2</option>
          <option value="product1-option3">Product 1 Option 3</option>
        </select>
        {product1 === 'product1-option1' && (
          <div>
            <p>Option 1 content for Product 1</p>
          </div>
        )}
        {product1 === 'product1-option2' && (
          <div>
            <p>Option 2 content for Product 1</p>
          </div>
        )}
        {product1 === 'product1-option3' && (
          <div>
            <p>Option 3 content for Product 1</p>
          </div>
        )}
      </div>
      <div>
        <label htmlFor="product2">Product 2</label>
        <select id="product2" value={product2} onChange={handleProduct2Change}>
          <option value="">Select an option</option>
          <option value="product2-option1">Product 2 Option 1</option>
          <option value="product2-option2">Product 2 Option 2</option>
          <option value="product2-option3">Product 2 Option 3</option>
        </select>
        {product2 === 'product2-option1' && (
          <div>
            <p>Option 1 content for Product 2</p>
          </div>
        )}
        {product2 === 'product2-option2' && (
          <div>
            <p>Option 2 content for Product 2</p>
          </div>
        )}
        {product2 === 'product2-option3' && (
          <div>
            <p>Option 3 content for Product 2</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductSelection;








// import React, { useState } from 'react';
// import ProfileInfo from '../components/Perfil';
// import { Product1, Product2, Product3, Product4, Product5, Product6, Product7, Product8, Product9, Product10, Product11, Product12, Product13 } from '../components/GridApp';
// import CompCSS from '../css/Comparative.module.css';

// function ProfilePage() {
//   const [activeSection, setActiveSection] = useState('Producto1');
//   const usuarioJson = sessionStorage.getItem('user');
//   const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;

//   if(usuario===null){
//     return <h1>Debes crearte una cuenta para acceder a esta pagina</h1>
//   }
//   else{
//   return (
//     <div className={PerfilCSS.profilePage}>
//       <div className={PerfilCSS.leftSection}>
//         <ProfileInfo onSectionClick={setActiveSection} />
//       </div>
//       <div className={PerfilCSS.rightSection}>
//         <div className={PerfilCSS.text}>
//           <h1>{activeSection}</h1>
//           <p>Hola, esto es un texto nformativo de ejemplo</p>
//         </div>
//         {activeSection === 'Producto1' && <CardGrid />}
//         {activeSection === 'Producto2' && <CardGrid2 />}
//         {activeSection === 'Producto3' && <CardGrid3 />}
//         {activeSection === 'Producto4' && <CardGrid4 />}
//         {activeSection === 'Producto5' && <CardGrid5 />}
//         {activeSection === 'Producto6' && <CardGrid6 />}
//         {activeSection === 'Producto7' && <CardGrid7 />}
//         {/* {activeSection === 'Privacidad' && <CardGrid8 />} */}

//       </div>
//     </div>
//   );
//   }
// }

// export default ProfilePage;