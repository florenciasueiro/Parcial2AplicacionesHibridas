import axios from 'axios';

export async function suscrbirUsuario(props) {
try {
    const response = await axios.post('https://restapinode-production.up.railway.app/funnelSub', props);

    
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Error en la respuesta del servidor');
    }
    } catch (error) {
    
    console.error('Error en la solicitud:', error);
    throw error;
    }
}