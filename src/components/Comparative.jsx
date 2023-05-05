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
          <option value="">Selecciona una opcion</option>
          <option value="product1-option1">F1</option>
          <option value="product1-option2">F2</option>
          <option value="product1-option3">F3</option>
          <option value="product1-option4">F4</option>
          <option value="product1-option5">F5</option>
          <option value="product1-option6">F6</option>
          <option value="product1-option7">F7</option>
          <option value="product1-option8">F8</option>
          <option value="product1-option9">F9</option>
          <option value="product1-option10">F10</option>
          <option value="product1-option11">F11</option>
          <option value="product1-option12">F12</option>
          <option value="product1-option13">F13</option>
        </select>
        {product1 === 'product1-option1' && (
          <div>
          <p>F1</p>
          </div>
        )}
        {product1 === 'product1-option2' && (
        <div>
          <p>F2</p>
        </div>
        )}
        {product1 === 'product1-option3' && (
        <div>
          <p>F3</p>
        </div>
        )}
        {product1 === 'product1-option4' && (
        <div>
          <p>F4</p>
        </div>
        )}
        {product1 === 'product1-option5' && (
        <div>
          <p>F5</p>
        </div>
        )}
        {product1 === 'product1-option6' && (
        <div>
          <p>F6</p>
        </div>
        )}
        {product1 === 'product1-option7' && (
        <div>
          <p>F7</p>
        </div>
        )}
        {product1 === 'product1-option8' && (
        <div>
          <p>F8</p>
        </div>
        )}
        {product1 === 'product1-option9' && (
        <div>
          <p>F9</p>
        </div>
        )}
        {product1 === 'product1-option10' && (
        <div>
          <p>F10</p>
        </div>
        )}
        {product1 === 'product1-option11' && (
        <div>
          <p>F11</p>
        </div>
        )}
        {product1 === 'product1-option12' && (
        <div>
          <p>F12</p>
        </div>
        )}
        {product1 === 'product1-option13' && (
        <div>
          <p>F13</p>
        </div>
        )}
      </div>
      <div>
        <label htmlFor="product2">Product 2</label>
        <select id="product2" value={product2} onChange={handleProduct2Change}>
          <option value="">Selecciona una opcion</option>
          <option value="product2-option1">F1</option>
          <option value="product2-option2">F2</option>
          <option value="product2-option3">F3</option>
          <option value="product2-option4">F4</option>
          <option value="product2-option5">F5</option>
          <option value="product2-option6">F6</option>
          <option value="product2-option7">F7</option>
          <option value="product2-option8">F8</option>
          <option value="product2-option9">F9</option>
          <option value="product2-option10">F10</option>
          <option value="product2-option11">F11</option>
          <option value="product2-option12">F12</option>
          <option value="product2-option13">F13</option>
        </select>
        {product2 === 'product2-option1' && (
        <div>
          <p>F1</p>
        </div>
        )}
        {product2 === 'product2-option2' && (
        <div>
          <p>F2</p>
        </div>
        )}
        {product2 === 'product2-option3' && (
        <div>
          <p>F3</p>
        </div>
        )}
        {product2 === 'product2-option4' && (
        <div>
          <p>F4</p>
        </div>
        )}
        {product2 === 'product2-option5' && (
        <div>
          <p>F5</p>
        </div>
        )}
        {product2 === 'product2-option6' && (
        <div>
          <p>F6</p>
        </div>
        )}
        {product2 === 'product2-option7' && (
        <div>
          <p>F7</p>
        </div>
        )}
        {product2 === 'product2-option8' && (
        <div>
          <p>F8</p>
        </div>
        )}
        {product2 === 'product2-option9' && (
        <div>
          <p>F9</p>
        </div>
        )}
        {product2 === 'product2-option10' && (
        <div>
          <p>F10</p>
        </div>
        )}
        {product2 === 'product2-option11' && (
        <div>
          <p>F11</p>
        </div>
        )}
        {product2 === 'product2-option12' && (
        <div>
          <p>F12</p>
        </div>
        )}
        {product2 === 'product2-option13' && (
        <div>
          <p>F13</p>
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