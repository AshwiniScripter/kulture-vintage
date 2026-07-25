import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://your-domain.com/api/method/custom_ecommerse.api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || error.message || 'An unexpected error occurred';
    return Promise.reject(new Error(message));
  }
);

export const resolveImageUrl = (path) => {
  if (!path) return null;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const origin = new URL(API_BASE_URL).origin;
  return `${origin}${path.startsWith('/') ? '' : '/'}${path}`;
};

export const mapApiProduct = (item) => ({
  id: item.name,
  title: item.product_name || item.name,
  category: item.category,
  description: item.description || '',
  price: Number(item.final_price) || Number(item.price) || 0,
  originalPrice: Number(item.price) || 0,
  discount: item.discount || '',
  finalPrice: Number(item.final_price) || Number(item.price) || 0,
  store: item.store || '',
  image: resolveImageUrl(item.image),
  images: (item.images || []).map(resolveImageUrl),
  sizes: item.sizes || [],
  priceDisplay: `₹${(Number(item.final_price) || Number(item.price) || 0).toLocaleString('en-IN')}`,
  priceNum: Number(item.final_price) || Number(item.price) || 0,
});

export const getProducts = async (category) => {
  const params = {};
  if (category) params.category = category;
  const data = await api.get('/get_products', { params });
  const items = Array.isArray(data) ? data : data?.message || data?.data || [];
  return (Array.isArray(items) ? items : []).map(mapApiProduct);
};

export const createOrder = async (orderData) => {
  return api.post('/create_order', orderData);
};

export default api;
